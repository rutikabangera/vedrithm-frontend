import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface QuizRequest {
  name: string;
  mobileNumber: string;
  hairType: string;
  scalpType: string;
  concerns: string[];
  lifestyle: string;
}

export interface QuizResponse {
  productName: string;
  tagline: string;
  recommendation: string;
  keyIngredients: string[];
  usageTip: string;
}

// ─── Concern Priority Order ──────────────────────────────────────────────────
// When multiple concerns are selected, the first match in this list wins
// for determining the primary booster. The base oil is always "Vedrithm Base Oil".
const CONCERN_PRIORITY = [
  'dandruff', 'hair_fall', 'slow_growth', 'greying', 'damaged', 'frizz', 'dull', 'healthy_hair'
];

// ─── Booster definitions per concern ────────────────────────────────────────
const BOOSTERS: Record<string, {
  name: string;       // Booster name shown in product title
  tagline: string;
  template: string;
  usageTip: string;
}> = {
  dandruff: {
    name: 'Dandruff Control Booster',
    tagline: 'Calm the scalp. Clear the flake.',
    template: `{name}, your {scalpType} scalp with dandruff needs antibacterial, antifungal support. The Vedrithm Base Oil — infused with Neem and Cinnamon — deeply cleanses the scalp environment, while our Dandruff Control Booster (Clove & Neem) restores scalp balance and eliminates the root cause of flaking.{multiLine}`,
    usageTip: 'Apply directly to scalp section by section. Leave for 45 minutes minimum. Use twice a week consistently for visible results in 3–4 weeks.'
  },
  hair_fall: {
    name: 'Hair Growth Booster',
    tagline: 'Rooted deeply, falling less.',
    template: `{name}, your {hairType} hair with excessive fall needs a strengthening ritual. The Vedrithm Base Oil nourishes follicles from root to tip, while the Hair Growth Booster — rich in Bhringraj and Fenugreek — anchors each strand and significantly reduces breakage.{multiLine}`,
    usageTip: 'Warm a few drops between palms and massage into roots for 5 minutes, 2–3 times per week. Leave on for at least 1 hour before washing.'
  },
  slow_growth: {
    name: 'Hair Growth Booster',
    tagline: 'Unlock your hair\'s true potential.',
    template: `{name}, your {hairType} hair needs a growth-activating formula. The Vedrithm Base Oil provides deep foundational nourishment, and the Hair Growth Booster — powered by Rosemary and Amla — stimulates circulation and awakens dormant follicles for fuller, longer hair.{multiLine}`,
    usageTip: 'Apply to scalp and strand lengths every 2 days. Gently comb through and wrap hair for 30 minutes before rinsing for maximum absorption.'
  },
  greying: {
    name: 'Anti-Greying Booster',
    tagline: 'Preserve your colour, naturally.',
    template: `{name}, your {hairType} hair experiencing premature greying benefits from melanin-supporting herbs. The Vedrithm Base Oil combined with our Anti-Greying Booster — featuring Curry Leaf, Indian Nard and Nigella Seeds — helps slow greying and protect natural pigmentation.{multiLine}`,
    usageTip: 'Massage into scalp root by root, 3 times a week. For best results, leave on overnight wrapped in a warm towel.'
  },
  damaged: {
    name: 'Repair & Restore Booster',
    tagline: 'Rebuild from within, strand by strand.',
    template: `{name}, your {hairType} hair needs a deep repair ritual. The Vedrithm Base Oil deeply penetrates the hair shaft, while the Repair & Restore Booster — enriched with Amla, Hibiscus and Castor Oil — rebuilds protein bonds and restores elasticity to brittle, damaged strands.{multiLine}`,
    usageTip: 'Apply generously from roots to tips and leave on for a minimum of 2 hours, or overnight for intensive repair. Follow with a gentle shampoo.'
  },
  frizz: {
    name: 'Moisture Seal Booster',
    tagline: 'Sealed in softness, free of frizz.',
    template: `{name}, your {hairType} hair craves deep hydration and cuticle sealing. The Vedrithm Base Oil melts into each strand, while the Moisture Seal Booster — containing Aloe, Coconut and Hibiscus — locks in smoothness and eliminates static frizz throughout the day.{multiLine}`,
    usageTip: 'Apply generously through mid-lengths and ends on slightly damp hair. Can be used daily as a light serum or weekly as an overnight mask.'
  },
  dull: {
    name: 'Shine Revival Booster',
    tagline: 'Dull hair is a thing of the past.',
    template: `{name}, your {hairType} hair needs a radiance revival. The Vedrithm Base Oil deeply conditions every strand, while the Shine Revival Booster — powered by Amla, Sesame and Hibiscus — rebuilds protein bonds for mirror-like shine and bounce.{multiLine}`,
    usageTip: 'Warm the oil slightly and apply from roots to tips. Leave for 1 hour or overnight. Follow with a mild shampoo for glossy, bouncy results.'
  },
  healthy_hair: {
    name: 'Nourishment Booster',
    tagline: 'Healthy today. Thriving tomorrow.',
    template: `{name}, you're already on the right path! The Vedrithm Base Oil provides foundational daily nourishment, and our Nourishment Booster — with Bhringraj, Rosemary and Amla — fortifies your {hairType} hair for long-term vitality and resilience.`,
    usageTip: 'Use once or twice a week as a pre-wash treatment. Apply from root to tip, leave for 1 hour, then shampoo gently.'
  },
  default: {
    name: 'Nourishment Booster',
    tagline: 'Your personalised Ayurvedic blend.',
    template: `{name}, based on your {hairType} hair and {scalpType} scalp, we've crafted a balancing blend. The Vedrithm Base Oil provides foundational nourishment, and the Nourishment Booster adds strength and vitality to every strand.`,
    usageTip: 'Apply 2–3 times per week, leaving on for at least 1 hour before washing. Consistency is key for lasting results.'
  }
};

// ─── Multi-concern blend text ────────────────────────────────────────────────
function buildMultiConcernLine(concerns: string[]): string {
  if (concerns.length <= 1) return '';
  const others = concerns.slice(1).map(c => CONCERN_LABELS[c] || c).join(', ');
  return ` The formula is further enhanced to also address your ${others}.`;
}

const CONCERN_LABELS: Record<string, string> = {
  hair_fall: 'hair fall',
  slow_growth: 'slow growth',
  frizz: 'frizz & dryness',
  greying: 'premature greying',
  dandruff: 'dandruff',
  dull: 'dull hair',
  damaged: 'damaged & brittle hair',
  healthy_hair: 'overall nourishment'
};

function formatLabel(val: string): string {
  if (!val) return '';
  return val.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

@Injectable({ providedIn: 'root' })
export class QuizService {

  // ─── Replace this with YOUR Google Apps Script Web App URL ─────────────
  private readonly APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBD4qAumQOYFqQnfh2wgxh2AK24I4law4MFo1GlHj2rirPvlZu1Ia68kFU1Lrx3uE79w/exec';

  constructor(private http: HttpClient) {}

  getRecommendation(request: QuizRequest): Observable<QuizResponse> {
    const concerns = request.concerns || [];

    // Pick primary concern by priority order
    let primaryConcern = 'default';
    for (const c of CONCERN_PRIORITY) {
      if (concerns.includes(c)) { primaryConcern = c; break; }
    }

    const booster = BOOSTERS[primaryConcern] || BOOSTERS['default'];

    // Sorted concerns for consistent blend description
    const sortedConcerns = CONCERN_PRIORITY.filter(c => concerns.includes(c));

    const multiLine = buildMultiConcernLine(sortedConcerns);

    const rec = booster.template
      .replace('{name}', request.name)
      .replace('{hairType}', formatLabel(request.hairType))
      .replace('{scalpType}', formatLabel(request.scalpType))
      .replace('{multiLine}', multiLine);

    // Product name format: "Vedrithm Base Oil + [Booster Name]"
    const productName = `Vedrithm Base Oil + ${booster.name}`;

    const response: QuizResponse = {
      productName,
      tagline: booster.tagline,
      recommendation: rec,
      keyIngredients: [],
      usageTip: booster.usageTip
    };

    // Save to Google Sheets asynchronously (fire-and-forget)
    this.saveToSheets(request, productName).subscribe();

    return of(response);
  }

  private saveToSheets(request: QuizRequest, recommendedProduct: string): Observable<any> {
    if (!this.APPS_SCRIPT_URL) {
      return of(null);
    }

    const payload = {
      action: 'saveQuiz',
      name: request.name,
      mobileNumber: request.mobileNumber,
      hairType: request.hairType,
      scalpType: request.scalpType,
      concerns: request.concerns.join(', '),
      lifestyle: request.lifestyle,
      recommendedProduct,
      submittedAt: new Date().toISOString()
    };

    return this.http.post(this.APPS_SCRIPT_URL, payload, {
      headers: { 'Content-Type': 'text/plain' }
    }).pipe(
      catchError(err => {
        console.error('Sheet save failed:', err);
        return of(null);
      })
    );
  }

  saveReview(review: { name: string; rating: number; text: string; productUsed?: string }): Observable<any> {
    if (!this.APPS_SCRIPT_URL) {
      return of({ success: true });
    }

    const payload = {
      action: 'saveReview',
      ...review,
      submittedAt: new Date().toISOString()
    };

    return this.http.post(this.APPS_SCRIPT_URL, payload, {
      headers: { 'Content-Type': 'text/plain' }
    }).pipe(catchError(err => {
      console.error('Review save failed:', err);
      return of({ success: true });
    }));
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(
      this.APPS_SCRIPT_URL + '?action=getReviews'
    ).pipe(
      catchError(err => {
        console.error('Fetch reviews failed:', err);
        return of([]);
      })
    );
  }
}