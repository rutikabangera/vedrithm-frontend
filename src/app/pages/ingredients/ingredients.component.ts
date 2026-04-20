import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { SiteConfigService } from '../../services/site-config.service';

const FALLBACK_IMAGE = 'assets/ingredients/locks-moisture.png';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- ░░ HERO ░░ -->
    <section class="page-hero">
      <div class="hero-noise"></div>
      <div class="hero-radial"></div>
      <div class="hero-lines">
        <div class="h-line" *ngFor="let n of [1,2,3,4,5]"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-eyebrow">
          <span class="eyebrow-gem"></span>
          <span>Nature's Pharmacy</span>
          <span class="eyebrow-gem"></span>
        </div>
        <h1 class="hero-title">Our <em>Sacred</em><br>Ingredients</h1>
        <p class="hero-sub">
          {{ ingredients.length }} time-honoured Ayurvedic herbs, each chosen for their unique ability
          to restore, protect and nourish your hair from root to tip.
        </p>
        <div class="hero-count-row">
          <div class="hero-stat" *ngFor="let s of heroStats">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ FILTER STRIP ░░ -->
    <div class="filter-strip" *ngIf="allTags.length > 1">
      <div class="container filter-inner">
        <button class="filter-pill" [class.active]="activeFilter === ''" (click)="activeFilter = ''">All</button>
        <button class="filter-pill"
                *ngFor="let t of allTags"
                [class.active]="activeFilter === t"
                (click)="activeFilter = t">{{ t }}</button>
      </div>
    </div>

    <!-- ░░ MAIN GRID ░░ -->
    <section class="ingredients-section">
      <div class="container">
        <div class="ingredients-grid">
          <article class="ingredient-card"
               *ngFor="let ing of filteredIngredients; let i = index"
               [class.is-open]="activeCard === i"
               (click)="toggleCard(i)">

            <div class="card-accent"></div>

            <div class="card-front">
              <span class="card-num">{{ (i+1).toString().padStart(2,'0') }}</span>

              <div class="card-illus">
                <img [src]="'assets/ingredients/' + ing.imageSlug + '.png'"
                     [alt]="ing.name" class="card-illus-img" loading="lazy"
                     (error)="onImgError($event)" />
                <div class="illus-glow"></div>
              </div>

              <div class="card-meta">
                <div class="card-tag">{{ ing.tag }}</div>
                <h3 class="card-name">{{ ing.name }}</h3>
                <p class="card-sanskrit">{{ ing.sanskritName }}</p>
              </div>

              <div class="expand-row">
                <span class="expand-label">{{ activeCard === i ? 'Close' : 'Discover' }}</span>
                <div class="expand-icon" [class.rotated]="activeCard === i">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="card-drawer" [class.open]="activeCard === i">
              <p class="drawer-desc">{{ ing.description }}</p>
              <div class="drawer-benefits">
                <div class="benefit-row" *ngFor="let b of ing.benefits">
                  <span class="benefit-gem">✦</span>
                  <span>{{ b }}</span>
                </div>
              </div>
              <div class="drawer-origin" *ngIf="ing.originPlace">
                <img src="assets/ingredients/SourcedLocally.png" alt="origin" class="origin-pin-img" />
                <span>{{ ing.originPlace }}</span>
              </div>
            </div>

          </article>
        </div>
      </div>
    </section>

    <!-- ░░ PROVENANCE BAND ░░ -->
    <section class="provenance-band">
      <div class="container prov-inner">
        <div class="prov-text">
          <p class="prov-label">Our Promise</p>
          <h2 class="prov-title">From Sacred Soil<br><em>to Your Hands</em></h2>
          <p class="prov-body">Every ingredient is sourced directly from its native region of India — where the soil, climate and centuries of cultivation combine to produce the highest possible potency. Cold-pressed within 48 hours of harvest. Nothing more, nothing less.</p>
        </div>
        <div class="prov-pillars">
          <div class="prov-pillar" *ngFor="let p of provPillars">
            <div class="pillar-img-wrap">
              <img [src]="p.imgSrc" [alt]="p.label" class="pillar-img" loading="lazy" />
            </div>
            <span>{{ p.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ BOTTOM CTA ░░ -->
    <section class="bottom-cta">
      <div class="cta-noise"></div>
      <div class="container cta-inner">
        <span class="cta-eyebrow">Ready to begin?</span>
        <h2 class="cta-title">Find Your <em>Perfect Blend</em></h2>
        <p>Not sure which formulation suits your hair best? Take our personalised hair quiz.</p>
        <div class="cta-actions">
          <a routerLink="/quiz" class="btn-primary">
            Take the Hair Quiz
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>
          <a [href]="whatsappUrl" target="_blank" class="btn-outline">Order on WhatsApp</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    .page-hero { min-height: 80vh; display: flex; align-items: center; padding: 10rem 0 6rem; position: relative; overflow: hidden; text-align: center; }
    .hero-noise { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events: none; }
    .hero-radial { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 80% at 50% 40%, rgba(26,74,46,0.45) 0%, transparent 70%); }
    .hero-lines { position: absolute; inset: 0; display: flex; justify-content: space-around; pointer-events: none; }
    .h-line { width: 1px; height: 100%; background: linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.06) 40%, transparent 100%); }
    .hero-content { position: relative; z-index: 2; }
    .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(212,175,55,0.7); margin-bottom: 1.5rem; }
    .eyebrow-gem { width: 4px; height: 4px; background: var(--gold); border-radius: 50%; display: block; }
    .hero-title { font-family: var(--font-display); font-size: clamp(3rem,7vw,6rem); font-weight: 300; color: var(--cream); line-height: 1.05; margin-bottom: 1.5rem; }
    .hero-title em { color: var(--gold); font-style: italic; }
    .hero-sub { max-width: 560px; margin: 0 auto 3rem; font-size: 1rem; color: rgba(250,244,230,0.55); line-height: 1.85; }
    .hero-count-row { display: inline-flex; gap: 3rem; padding: 1.25rem 2.5rem; border: 1px solid var(--border-gold); background: rgba(10,35,24,0.6); backdrop-filter: blur(12px); border-radius: 4px; }
    .hero-stat { display: flex; flex-direction: column; gap: 0.2rem; }
    .stat-num { font-family: var(--font-display); font-size: 1.8rem; color: var(--gold); line-height: 1; }
    .stat-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(212,175,55,0.5); }
    .filter-strip { padding: 1.5rem 0; border-bottom: 1px solid var(--border-gold); background: rgba(10,35,24,0.8); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 10; }
    .filter-inner { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
    .filter-pill { padding: 0.35rem 1rem; border: 1px solid var(--border-gold); background: transparent; color: rgba(212,175,55,0.6); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 50px; cursor: pointer; transition: all 0.25s ease; }
    .filter-pill:hover, .filter-pill.active { background: rgba(212,175,55,0.12); color: var(--gold); border-color: rgba(212,175,55,0.5); }
    .ingredients-section { padding: 5rem 0 8rem; }
    .ingredients-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 1.5rem; }
    .ingredient-card { position: relative; background: linear-gradient(160deg, rgba(15,48,32,0.95) 0%, rgba(10,35,24,0.98) 100%); border: 1px solid var(--border-gold); border-radius: 8px; overflow: hidden; cursor: pointer; transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; }
    .ingredient-card:hover, .ingredient-card.is-open { transform: translateY(-4px); border-color: rgba(212,175,55,0.55); box-shadow: 0 12px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.1), 0 0 40px rgba(212,175,55,0.08); }
    .card-accent { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%); opacity: 0; transition: opacity 0.35s ease; }
    .ingredient-card:hover .card-accent, .ingredient-card.is-open .card-accent { opacity: 1; }
    .card-front { padding: 2rem 2rem 1.5rem; }
    .card-num { position: absolute; top: 1.25rem; right: 1.5rem; font-family: var(--font-display); font-size: 3.5rem; font-weight: 700; line-height: 1; color: rgba(212,175,55,0.05); user-select: none; }
    .card-illus { width: 100%; height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; position: relative; }
    .card-illus-img { width: 140px; height: 140px; object-fit: contain; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.55)); transition: transform 0.4s ease, filter 0.4s ease; }
    .ingredient-card:hover .card-illus-img { transform: scale(1.08) translateY(-4px); filter: drop-shadow(0 12px 32px rgba(212,175,55,0.25)); }
    .illus-glow { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100px; height: 30px; background: radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, transparent 70%); pointer-events: none; }
    .card-meta { margin-bottom: 1.25rem; }
    .card-tag { display: inline-block; padding: 0.2rem 0.65rem; background: rgba(212,175,55,0.08); border: 1px solid var(--border-gold); border-radius: 50px; font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(212,175,55,0.65); margin-bottom: 0.5rem; }
    .card-name { font-family: var(--font-display); font-size: 1.55rem; font-weight: 400; color: var(--gold); margin-bottom: 0.15rem; }
    .card-sanskrit { font-family: var(--font-display); font-style: italic; font-size: 0.82rem; color: rgba(212,175,55,0.4); }
    .expand-row { display: flex; align-items: center; gap: 0.45rem; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(212,175,55,0.5); border-top: 1px solid rgba(212,175,55,0.1); padding-top: 1rem; transition: color 0.25s; }
    .ingredient-card:hover .expand-row { color: rgba(212,175,55,0.8); }
    .expand-icon { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border: 1px solid rgba(212,175,55,0.3); border-radius: 50%; transition: transform 0.35s ease, border-color 0.25s; }
    .expand-icon.rotated { transform: rotate(180deg); border-color: rgba(212,175,55,0.6); }
    .card-drawer { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1); border-top: 0px solid transparent; }
    .card-drawer.open { max-height: 500px; border-top: 1px solid rgba(212,175,55,0.12); }
    .drawer-desc { font-size: 0.84rem; color: rgba(250,244,230,0.6); line-height: 1.85; padding: 1.25rem 2rem 0.75rem; }
    .drawer-benefits { padding: 0 2rem 1rem; }
    .benefit-row { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.81rem; color: rgba(250,244,230,0.65); padding: 0.3rem 0; border-bottom: 1px solid rgba(212,175,55,0.06); }
    .benefit-row:last-child { border-bottom: none; }
    .benefit-gem { color: var(--gold); flex-shrink: 0; font-size: 0.65rem; margin-top: 0.2rem; }
    .drawer-origin { display: flex; align-items: center; gap: 0.6rem; padding: 0.75rem 2rem 1.25rem; border-top: 1px solid rgba(212,175,55,0.1); font-size: 0.8rem; color: rgba(212,175,55,0.6); font-family: var(--font-display); font-style: italic; }
    .origin-pin-img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; filter: drop-shadow(0 2px 6px rgba(212,175,55,0.3)); }
    .provenance-band { padding: 7rem 0; background: var(--forest-mid); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); }
    .prov-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .prov-label { font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(212,175,55,0.5); margin-bottom: 1rem; }
    .prov-title { font-family: var(--font-display); font-size: clamp(2rem,4vw,3.2rem); font-weight: 300; color: var(--cream); line-height: 1.2; margin-bottom: 1.5rem; }
    .prov-title em { color: var(--gold); font-style: italic; }
    .prov-body { font-size: 0.9rem; color: rgba(250,244,230,0.55); line-height: 1.9; }
    .prov-pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .prov-pillar { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 2rem 1rem; border: 1px solid var(--border-gold); border-radius: 6px; background: rgba(10,35,24,0.6); text-align: center; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(212,175,55,0.6); transition: all 0.3s ease; }
    .prov-pillar:hover { background: rgba(212,175,55,0.05); border-color: rgba(212,175,55,0.4); transform: translateY(-3px); }
    .pillar-img-wrap { width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; }
    .pillar-img { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(212,175,55,0.25)); transition: transform 0.3s ease, filter 0.3s ease; }
    .prov-pillar:hover .pillar-img { transform: scale(1.1); filter: drop-shadow(0 6px 18px rgba(212,175,55,0.45)); }
    .bottom-cta { padding: 8rem 0; position: relative; overflow: hidden; background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,74,46,0.2) 0%, transparent 70%); }
    .cta-noise { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E"); }
    .cta-inner { position: relative; z-index: 1; text-align: center; max-width: 620px; margin: 0 auto; }
    .cta-eyebrow { display: inline-block; font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(212,175,55,0.55); margin-bottom: 1rem; }
    .cta-title { font-family: var(--font-display); font-size: clamp(2.2rem,5vw,3.8rem); font-weight: 300; color: var(--cream); line-height: 1.15; margin-bottom: 1.25rem; }
    .cta-title em { color: var(--gold); font-style: italic; }
    .cta-inner p { font-size: 0.95rem; color: rgba(250,244,230,0.5); line-height: 1.8; margin-bottom: 2.5rem; }
    .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    @media (max-width: 900px) { .prov-inner { grid-template-columns: 1fr; gap: 3rem; } }
    @media (max-width: 640px) { .ingredients-grid { grid-template-columns: 1fr; } .hero-count-row { gap: 1.5rem; padding: 1rem 1.5rem; } .prov-pillars { grid-template-columns: 1fr 1fr; } }
  `]
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];
  activeCard: number | null = null;
  activeFilter = '';
  allTags: string[] = [];
  whatsappUrl = '';

  heroStats = [
    { num: '12',   label: 'Sacred Herbs' },
    { num: '100%', label: 'Cold-Pressed' },
    { num: '0',    label: 'Chemicals' },
  ];

  provPillars = [
    { label: 'Single-Origin Sourced', imgSrc: 'assets/ingredients/SourcedLocally.png' },
    { label: 'Cold-Pressed Within 48 hrs', imgSrc: 'assets/ingredients/Infused.png' },
    { label: 'No Synthetic Additives', imgSrc: 'assets/ingredients/noChemicals.png' },
    { label: 'Vedic Formulation', imgSrc: 'assets/ingredients/VedicFormula.png' },
  ];

  constructor(
    private ingredientService: IngredientService,
    private configService: SiteConfigService,
  ) {}

  ngOnInit() {
    const num = this.configService.snapshot.whatsappNumber;
    this.whatsappUrl = `https://wa.me/${num}?text=Hi%2C%20I%20want%20to%20order%20Vedrithm%20Herbal%20Hair%20Oil`;

    // Returns instantly — static Observable
    this.ingredientService.getAll().subscribe(data => {
      this.ingredients = data;
      this.allTags = [...new Set(data.map(i => i.tag))].filter(Boolean);
    });
  }

  get filteredIngredients(): Ingredient[] {
    if (!this.activeFilter) return this.ingredients;
    return this.ingredients.filter(i => i.tag === this.activeFilter);
  }

  toggleCard(i: number) { this.activeCard = this.activeCard === i ? null : i; }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img.src !== FALLBACK_IMAGE) img.src = FALLBACK_IMAGE;
  }
}
