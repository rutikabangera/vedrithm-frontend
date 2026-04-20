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

// ─── Recommendation Rules (previously in MySQL DB) ────────────────────────
const RULES: Record<string, {
  baseOil: string; booster: string; tagline: string;
  template: string; usageTip: string;
}> = {
  hair_fall: {
    baseOil: 'Bhringraj & Castor Base',
    booster: 'Fenugreek Booster',
    tagline: 'Rooted deeply, falling less.',
    template: `{name}, your {hairType} hair on a {scalpType} scalp with {concern} calls for a strengthening ritual. The Bhringraj & Castor Base deeply nourishes follicles and reduces breakage, while our Fenugreek Booster stimulates growth and anchors each strand from root to tip.`,
    usageTip: 'Warm a few drops between palms and massage into roots for 5 minutes, 2–3 times per week. Leave on for at least 1 hour before washing.'
  },
  slow_growth: {
    baseOil: 'Amla & Sesame Base',
    booster: 'Rosemary Growth Booster',
    tagline: 'Unlock your hair\'s true potential.',
    template: `{name}, your {hairType} hair with {concern} needs a growth-activating formula. Our Amla & Sesame Base is rich in Vitamin C to rebuild structure, paired with the Rosemary Booster proven to stimulate circulation and awaken dormant follicles.`,
    usageTip: 'Apply to scalp and strand lengths every 2 days. Gently comb through and wrap hair for 30 minutes before rinsing for maximum absorption.'
  },
  frizz: {
    baseOil: 'Coconut & Hibiscus Base',
    booster: 'Aloe Moisture Booster',
    tagline: 'Sealed in softness, free of frizz.',
    template: `{name}, your {hairType} hair with {concern} craves deep hydration and cuticle sealing. The Coconut & Hibiscus Base melts into each strand, while our Aloe Moisture Booster locks in smoothness and eliminates static frizz throughout the day.`,
    usageTip: 'Apply generously through mid-lengths and ends on slightly damp hair. Can be used daily as a light serum or weekly as an overnight mask.'
  },
  greying: {
    baseOil: 'Curry Leaf & Indian Nard Base',
    booster: 'Nigella Seed Booster',
    tagline: 'Preserve your colour, naturally.',
    template: `{name}, your {hairType} hair experiencing {concern} benefits from melanin-supporting herbs. Curry Leaf & Indian Nard preserve pigmentation naturally, while Nigella Seeds — celebrated in ancient texts — help slow premature greying from the inside out.`,
    usageTip: 'Massage into scalp root by root, 3 times a week. For best results, leave on overnight wrapped in a warm towel.'
  },
  dandruff: {
    baseOil: 'Neem & Cinnamon Base',
    booster: 'Clove Purifying Booster',
    tagline: 'Calm the scalp. Clear the flake.',
    template: `{name}, your {scalpType} scalp with {concern} needs antibacterial, antifungal support. Our Neem & Cinnamon Base deeply cleanses the scalp environment, while Cloves — a potent antimicrobial — restore scalp balance and eliminate the root cause of flaking.`,
    usageTip: 'Apply directly to scalp, section by section. Leave for 45 minutes minimum. Use twice a week consistently for visible results in 3–4 weeks.'
  },
  dull: {
    baseOil: 'Sesame & Hibiscus Base',
    booster: 'Amla Shine Booster',
    tagline: 'Dull hair is a thing of the past.',
    template: `{name}, your {hairType} hair suffering from {concern} needs a radiance revival. Our Sesame & Hibiscus Base deeply conditions and adds a natural lustre, while Amla — the queen of Ayurvedic hair herbs — rebuilds protein bonds for mirror-like shine.`,
    usageTip: 'Warm the oil slightly and apply from roots to tips. Leave for 1 hour or overnight. Follow with a mild shampoo for glossy, bouncy results.'
  },
  healthy_hair: {
    baseOil: 'Coconut & Bhringraj Base',
    booster: 'Rosemary & Amla Booster',
    tagline: 'Healthy today. Thriving tomorrow.',
    template: `{name}, you\'re already on the right path! Your {hairType} hair on a {scalpType} scalp simply needs a balanced maintenance ritual. Our Coconut & Bhringraj Base nourishes and protects, while the Rosemary & Amla Booster fortifies for long-term vitality.`,
    usageTip: 'Use once or twice a week as a pre-wash treatment. Apply from root to tip, leave for 1 hour, then shampoo gently.'
  },
  default: {
    baseOil: 'Coconut & Bhringraj Base',
    booster: 'Amla Booster',
    tagline: 'Your personalised Ayurvedic formula.',
    template: `{name}, based on your {hairType} hair and {scalpType} scalp, we\'ve curated a balancing blend. Our Coconut & Bhringraj Base provides foundational nourishment, and the Amla Booster adds strength and vitality to every strand.`,
    usageTip: 'Apply 2–3 times per week, leaving on for at least 1 hour before washing. Consistency is key for lasting results.'
  }
};

function formatLabel(val: string): string {
  if (!val) return '';
  return val.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function formatConcern(concern: string): string {
  const map: Record<string, string> = {
    hair_fall: 'excessive hair fall',
    dandruff: 'scalp flaking and dandruff',
    frizz: 'dryness and frizz',
    greying: 'premature greying',
    dull: 'dull and lifeless hair',
    slow_growth: 'slower-than-normal hair growth',
    healthy_hair: 'overall hair nourishment'
  };
  return map[concern] || formatLabel(concern);
}

@Injectable({ providedIn: 'root' })
export class QuizService {

  // ─── Replace this with YOUR Google Apps Script Web App URL ─────────────
  // See SETUP.md for instructions on how to create this
  private readonly APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzgaMrD2mCvKxk7dvQf1BA3PXnXK1msCD2WdqBhWAz8Z0a6nc9Luxh7ghsRIgIOSWBJSw/exec';

  constructor(private http: HttpClient) {}

  getRecommendation(request: QuizRequest): Observable<QuizResponse> {
    const concern = request.concerns?.[0] || 'default';
    const rule = RULES[concern] || RULES['default'];

    const rec = rule.template
      .replace('{name}', request.name)
      .replace('{hairType}', formatLabel(request.hairType))
      .replace('{scalpType}', formatLabel(request.scalpType))
      .replace('{lifestyle}', formatLabel(request.lifestyle))
      .replace('{concern}', formatConcern(concern));

    const response: QuizResponse = {
      productName: rule.baseOil + ' + ' + rule.booster,
      tagline: rule.tagline,
      recommendation: rec,
      keyIngredients: [],
      usageTip: rule.usageTip
    };

    // Save to Google Sheets asynchronously (fire-and-forget)
    this.saveToSheets(request, response.productName).subscribe();

    return of(response);
  }

  private saveToSheets(request: QuizRequest, recommendedProduct: string): Observable<any> {
  if (!this.APPS_SCRIPT_URL || this.APPS_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbzgaMrD2mCvKxk7dvQf1BA3PXnXK1msCD2WdqBhWAz8Z0a6nc9Luxh7ghsRIgIOSWBJSw/exec') {
    console.warn('⚠️ Google Apps Script URL not set. Quiz submissions will not be saved.');
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
    if (this.APPS_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbzgaMrD2mCvKxk7dvQf1BA3PXnXK1msCD2WdqBhWAz8Z0a6nc9Luxh7ghsRIgIOSWBJSw/exec') {
     // console.warn('⚠️ Google Apps Script URL not set. Reviews will not be saved.');
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
      return of({ success: true }); // Don't block UX on review save failure
    }));
  }
}
