import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { SiteConfigService } from '../../services/site-config.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"><div class="hero-glow"></div></div>
      <div class="container">
        <span class="section-tag">Nature's Pharmacy</span>
        <h1 class="page-title">Our <span>Sacred</span> Ingredients</h1>
        <p class="page-subtitle">
          {{ ingredients.length || 8 }} time-honoured Ayurvedic herbs, each chosen for their unique ability to restore, protect and nourish your hair from root to tip.
        </p>
      </div>
      <div class="leaf-deco ld1">🌿</div>
      <div class="leaf-deco ld2">🍃</div>
    </section>

    <section class="ingredients-section">
      <div class="container">

        <!-- Loading skeleton -->
        <div class="ingredients-grid" *ngIf="loading">
          <div class="skeleton-card" *ngFor="let i of [1,2,3,4,5,6,7,8]"></div>
        </div>

        <!-- Error state -->
        <div class="error-state" *ngIf="error && !loading">
          <span>🌿</span>
          <p>Could not load ingredients. Please try again.</p>
          <button class="btn-outline" (click)="load()">Retry</button>
        </div>

        <!-- Ingredients grid -->
        <div class="ingredients-grid" *ngIf="!loading && !error">
          <div class="ingredient-card"
               *ngFor="let ing of ingredients; let i = index"
               [class.active]="activeCard === i"
               (click)="toggleCard(i)">
            <div class="card-front">
              <div class="card-num">{{ (i + 1).toString().padStart(2,'0') }}</div>
              <div class="card-emoji">{{ ing.emoji }}</div>
              <h3 class="card-name">{{ ing.name }}</h3>
              <p class="card-sanskrit">{{ ing.sanskritName }}</p>
              <div class="card-tag">{{ ing.tag }}</div>
              <div class="expand-hint">
                <span>{{ activeCard === i ? 'Less' : 'Learn more' }}</span>
                <svg width="14" viewBox="0 0 14 14" fill="none">
                  <path [attr.d]="activeCard === i ? 'M2 9l5-5 5 5' : 'M2 5l5 5 5-5'"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="card-detail" [class.open]="activeCard === i">
              <p class="detail-desc">{{ ing.description }}</p>
              <div class="detail-benefits">
                <div class="detail-benefit" *ngFor="let b of ing.benefits">
                  <span class="check">✦</span>
                  <span>{{ b }}</span>
                </div>
              </div>
              <div class="detail-origin" *ngIf="ing.originPlace">
                <span class="origin-label">Origin</span>
                <span class="origin-val">{{ ing.originPlace }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bottom-cta">
      <div class="container">
        <div class="bottom-cta-inner">
          <span class="section-tag">Ready to begin?</span>
          <h2 class="section-title">Find Your <span>Perfect Blend</span></h2>
          <p>Not sure which formulation suits your hair best? Take our personalised hair quiz.</p>
          <div class="cta-actions">
            <a routerLink="/quiz" class="btn-primary">
              Take the Hair Quiz
              <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            <a [href]="whatsappUrl" target="_blank" class="btn-outline">Order on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { min-height: 42vh; display: flex; align-items: center; padding: 8rem 0 5rem; position: relative; overflow: hidden; text-align: center; }
    .page-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(26,74,46,0.3) 0%, transparent 70%); }
    .hero-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 500px; height: 500px; background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%); }
    .page-hero .container { position: relative; z-index: 1; }
    .page-title { font-family: var(--font-display); font-size: clamp(2.5rem,5vw,4.5rem); font-weight: 300; color: var(--cream); margin: 0.5rem 0 1.25rem; line-height: 1.1; }
    .page-title span { color: var(--gold); font-style: italic; }
    .page-subtitle { max-width: 600px; margin: 0 auto; font-size: 1rem; color: rgba(250,244,230,0.65); line-height: 1.8; }
    .leaf-deco { position: absolute; font-size: 5rem; opacity: 0.08; animation: leafSway 5s ease-in-out infinite; }
    .ld1 { top: 10%; left: 3%; } .ld2 { bottom: 5%; right: 3%; animation-delay: 1.5s; }
    .ingredients-section { padding: 6rem 0 8rem; }
    .ingredients-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 1.5rem; }
    .skeleton-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 6px; height: 220px; animation: pulse 1.5s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
    .error-state { text-align: center; padding: 4rem; }
    .error-state span { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .error-state p { color: rgba(250,244,230,0.6); margin-bottom: 1.5rem; }
    .ingredient-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 6px; cursor: pointer; transition: all 0.4s ease; overflow: hidden; position: relative; }
    .ingredient-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0; transition: opacity 0.3s ease; }
    .ingredient-card:hover, .ingredient-card.active { border-color: rgba(212,175,55,0.5); box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(212,175,55,0.1); transform: translateY(-3px); }
    .ingredient-card:hover::before, .ingredient-card.active::before { opacity: 1; }
    .card-front { padding: 2rem; position: relative; }
    .card-num { position: absolute; top: 1.25rem; right: 1.5rem; font-family: var(--font-display); font-size: 2.5rem; font-weight: 700; color: rgba(212,175,55,0.08); line-height: 1; }
    .card-emoji { font-size: 2.8rem; margin-bottom: 1rem; }
    .card-name { font-family: var(--font-display); font-size: 1.5rem; color: var(--gold); margin-bottom: 0.25rem; }
    .card-sanskrit { font-family: var(--font-display); font-style: italic; font-size: 0.85rem; color: rgba(212,175,55,0.5); margin-bottom: 1rem; }
    .card-tag { display: inline-block; padding: 0.25rem 0.75rem; background: rgba(212,175,55,0.08); border: 1px solid var(--border-gold); border-radius: 50px; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
    .expand-hint { display: flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; color: rgba(212,175,55,0.6); letter-spacing: 0.08em; }
    .card-detail { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; padding: 0 2rem; }
    .card-detail.open { max-height: 450px; padding: 0 2rem 2rem; border-top: 1px solid var(--border-gold); }
    .detail-desc { font-size: 0.85rem; color: rgba(250,244,230,0.65); line-height: 1.8; margin: 1.25rem 0 1rem; }
    .detail-benefits { margin-bottom: 1.25rem; }
    .detail-benefit { display: flex; gap: 0.6rem; font-size: 0.82rem; color: rgba(250,244,230,0.7); margin-bottom: 0.4rem; }
    .check { color: var(--gold); flex-shrink: 0; }
    .detail-origin { display: flex; gap: 0.6rem; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-gold); }
    .origin-label { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-muted); }
    .origin-val { font-family: var(--font-display); font-size: 0.95rem; color: var(--gold); }
    .bottom-cta { padding: 6rem 0; background: var(--forest-mid); border-top: 1px solid var(--border-gold); }
    .bottom-cta-inner { text-align: center; max-width: 620px; margin: 0 auto; }
    .bottom-cta-inner p { font-size: 0.95rem; color: rgba(250,244,230,0.6); line-height: 1.8; margin: 1.25rem 0 2.5rem; }
    .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    @media (max-width: 600px) { .ingredients-grid { grid-template-columns: 1fr; } }
  `]
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];
  activeCard: number | null = null;
  loading = true;
  error = false;
  whatsappUrl = '';

  constructor(
    private ingredientService: IngredientService,
    private configService: SiteConfigService
  ) {}

  ngOnInit() {
    const num = this.configService.snapshot.whatsappNumber;
    this.whatsappUrl = `https://wa.me/${num}?text=Hi%2C%20I%20want%20to%20order%20Vedrithm%20Herbal%20Hair%20Oil`;
    this.load();
  }

  load() {
    this.loading = true;
    this.error = false;
    this.ingredientService.getAll().subscribe({
      next: data => { this.ingredients = data; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  toggleCard(i: number) {
    this.activeCard = this.activeCard === i ? null : i;
  }
}
