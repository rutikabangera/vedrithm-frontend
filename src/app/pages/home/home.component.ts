import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteConfigService, SiteConfig } from '../../services/site-config.service';
import { HomeBenefitService, HomeBenefit } from '../../services/home-benefit.service';
import { IngredientService, Ingredient } from '../../services/ingredient.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- ─── HERO ─── -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-leaves">
          <div class="leaf l1">🌿</div>
          <div class="leaf l2">🌿</div>
          <div class="leaf l3">🍃</div>
          <div class="leaf l4">🌿</div>
          <div class="leaf l5">🍃</div>
        </div>
        <div class="hero-glow"></div>
      </div>
      <div class="hero-content container">
        <div class="hero-text">
          <span class="hero-eyebrow">✦ Ayurvedic Tradition Since Ancient Times ✦</span>
          <h1 class="hero-title" [innerHTML]="formatHeroTitle(config.heroTitle)"></h1>
          <p class="hero-subtitle">{{ config.heroSubtitle }}</p>
          <div class="hero-ctas">
            <a routerLink="/ingredients" class="btn-primary">
              <span>Explore Ingredients</span>
              <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            <a routerLink="/quiz" class="btn-outline">Find Your Hair Oil</a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">{{ ingredientCount }}</span>
              <span class="stat-label">Ayurvedic Herbs</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">100%</span>
              <span class="stat-label">Natural</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">0</span>
              <span class="stat-label">Chemicals</span>
            </div>
          </div>
        </div>
        <div class="hero-product">
          <div class="product-glow-ring"></div>
          <div class="product-frame">
            <img src="assets/images/product.jpg" alt="Vedrithm Herbal Hair Oil" class="product-img" />
          </div>
          <div class="product-badge">
            <span class="badge-inner">
              <span class="badge-top">100 ml</span>
              <span class="badge-bot">Pure Oil</span>
            </span>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ─── MARQUEE ─── -->
    <div class="marquee-strip">
      <div class="marquee-track">
        <span *ngFor="let item of marqueeItems">{{ item }} &nbsp;✦&nbsp;&nbsp;</span>
        <span *ngFor="let item of marqueeItems">{{ item }} &nbsp;✦&nbsp;&nbsp;</span>
      </div>
    </div>

    <!-- ─── BENEFITS ─── -->
    <section class="benefits">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Vedrithm</span>
          <h2 class="section-title">Transformative <span>Benefits</span></h2>
          <p class="section-desc">Every drop carries centuries of Ayurvedic knowledge, balanced for your modern lifestyle.</p>
        </div>

        <!-- Loading state -->
        <div class="loading-grid" *ngIf="benefitsLoading">
          <div class="skeleton-card" *ngFor="let i of [1,2,3,4,5,6]"></div>
        </div>

        <div class="benefits-grid" *ngIf="!benefitsLoading">
          <div class="benefit-card" *ngFor="let b of benefits; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="benefit-icon">{{ b.icon }}</div>
            <h3>{{ b.title }}</h3>
            <p>{{ b.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── BRAND STORY ─── -->
    <section class="story">
      <div class="story-bg-pattern"></div>
      <div class="container">
        <div class="story-inner">
          <div class="story-image-side">
            <div class="story-img-frame">
              <img src="assets/images/logo.jpg" alt="Vedrithm Brand" class="story-logo-img" />
            </div>
            <div class="story-ornament">
              <div class="ornament-circle">
                <span class="ornament-text">Since<br/>Ancient<br/>Times</span>
              </div>
            </div>
          </div>
          <div class="story-text-side">
            <span class="section-tag">Our Story</span>
            <h2 class="section-title">Where <span>Vedas</span> Meet<br>Modern Wellness</h2>
            <div class="story-body">
              <p>{{ config.brandStory }}</p>
            </div>
            <div class="story-pillars">
              <div class="pillar" *ngFor="let p of pillars">
                <div class="pillar-icon">{{ p.icon }}</div>
                <div>
                  <strong>{{ p.title }}</strong>
                  <span>{{ p.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── INGREDIENTS PREVIEW ─── -->
    <section class="ingredients-preview">
      <div class="container">
        <div class="section-header center">
          <span class="section-tag">Key Ingredients</span>
          <h2 class="section-title">Sourced from <span>Nature's Pharmacy</span></h2>
        </div>
        <div class="ingr-preview-grid" *ngIf="!ingredientsLoading">
          <div class="ingr-preview-card" *ngFor="let ing of featuredIngredients">
            <div class="ingr-emoji">{{ ing.emoji }}</div>
            <div class="ingr-name">{{ ing.name }}</div>
            <div class="ingr-benefit">{{ ing.tag }}</div>
          </div>
        </div>
        <div class="loading-grid four-col" *ngIf="ingredientsLoading">
          <div class="skeleton-card" *ngFor="let i of [1,2,3,4]"></div>
        </div>
        <div class="ingr-cta">
          <a routerLink="/ingredients" class="btn-outline">
            View All {{ ingredientCount }} Ingredients
            <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── QUIZ CTA ─── -->
    <section class="quiz-cta-section">
      <div class="quiz-cta-bg">
        <div class="cta-leaf cl1">🌿</div>
        <div class="cta-leaf cl2">🍃</div>
        <div class="cta-leaf cl3">🌿</div>
      </div>
      <div class="container">
        <div class="quiz-cta-inner">
          <span class="section-tag">Personalised For You</span>
          <h2 class="section-title">Not Sure <span>Which Oil?</span></h2>
          <p>Answer 4 quick questions about your hair. We'll recommend the perfect Vedrithm formulation for your unique needs.</p>
          <a routerLink="/quiz" class="btn-primary">
            Take the Hair Quiz
            <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { min-height: 100vh; position: relative; display: flex; align-items: center; overflow: hidden; padding-top: 80px; }
    .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(26,74,46,0.35) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,175,55,0.05) 0%, transparent 60%); }
    .hero-glow { position: absolute; top: 50%; left: 60%; transform: translate(-50%,-50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(26,74,46,0.4) 0%, transparent 70%); pointer-events: none; }
    .hero-leaves { position: absolute; inset: 0; pointer-events: none; }
    .leaf { position: absolute; font-size: 3rem; opacity: 0.12; animation: leafSway 4s ease-in-out infinite; }
    .l1 { top: 10%; left: 5%; font-size: 4rem; animation-delay: 0s; }
    .l2 { top: 15%; right: 8%; font-size: 3.5rem; animation-delay: 1s; }
    .l3 { bottom: 20%; left: 3%; font-size: 2.5rem; animation-delay: 2s; }
    .l4 { bottom: 15%; right: 5%; font-size: 5rem; animation-delay: 0.5s; }
    .l5 { top: 50%; left: 45%; font-size: 2rem; animation-delay: 1.5s; }
    .hero-content { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; position: relative; z-index: 1; padding-top: 4rem; padding-bottom: 6rem; }
    .hero-eyebrow { font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.3em; color: var(--gold); opacity: 0.8; display: block; margin-bottom: 1.25rem; animation: fadeInUp 0.8s ease forwards; }
    .hero-title { font-size: clamp(2.8rem,5vw,5rem); font-weight: 300; color: var(--cream); margin-bottom: 1.5rem; line-height: 1.1; animation: fadeInUp 0.8s 0.15s ease both; }
    .hero-title em { color: var(--gold); font-style: italic; font-weight: 400; }
    .hero-subtitle { font-size: 1rem; color: rgba(250,244,230,0.7); line-height: 1.8; max-width: 480px; margin-bottom: 2.5rem; animation: fadeInUp 0.8s 0.3s ease both; }
    .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; animation: fadeInUp 0.8s 0.45s ease both; }
    .hero-stats { display: flex; align-items: center; gap: 1.5rem; animation: fadeInUp 0.8s 0.6s ease both; }
    .stat { text-align: center; }
    .stat-num { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 600; color: var(--gold); line-height: 1; }
    .stat-label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(250,244,230,0.5); }
    .stat-divider { width: 1px; height: 40px; background: var(--border-gold); }
    .hero-product { position: relative; display: flex; justify-content: center; animation: fadeIn 1s 0.4s ease both; }
    .product-glow-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 380px; height: 380px; border-radius: 50%; border: 1px solid rgba(212,175,55,0.15); box-shadow: 0 0 80px rgba(212,175,55,0.1), inset 0 0 80px rgba(212,175,55,0.05); }
    .product-frame { position: relative; z-index: 1; animation: float 5s ease-in-out infinite; }
    .product-img { max-width: 320px; width: 100%; filter: drop-shadow(0 20px 60px rgba(0,0,0,0.6)); }
    .product-badge { position: absolute; bottom: 10%; right: 5%; width: 80px; height: 80px; border-radius: 50%; border: 1px solid var(--gold); background: rgba(5,22,16,0.9); display: flex; align-items: center; justify-content: center; animation: float 5s 1s ease-in-out infinite; }
    .badge-inner { text-align: center; }
    .badge-top { display: block; font-family: var(--font-display); font-size: 1rem; color: var(--gold); line-height: 1.2; }
    .badge-bot { display: block; font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(250,244,230,0.5); }
    .scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.4; }
    .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, var(--gold)); }
    .scroll-hint span { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); }
    .marquee-strip { background: var(--forest-accent); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); padding: 0.85rem 0; overflow: hidden; }
    .marquee-track { display: flex; white-space: nowrap; animation: marqueeScroll 25s linear infinite; }
    .marquee-track span { font-family: var(--font-body); font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); padding: 0 0.5rem; }
    @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .benefits { padding: 8rem 0; }
    .section-header { margin-bottom: 4rem; }
    .section-header.center { text-align: center; }
    .section-desc { margin-top: 1rem; font-size: 0.95rem; color: rgba(250,244,230,0.6); max-width: 500px; line-height: 1.8; }
    .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
    .benefit-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 4px; padding: 2rem; transition: all 0.4s ease; animation: fadeInUp 0.6s ease both; }
    .benefit-card:hover { background: var(--forest-light); border-color: rgba(212,175,55,0.5); transform: translateY(-4px); box-shadow: var(--shadow-gold); }
    .benefit-icon { font-size: 2.2rem; margin-bottom: 1rem; }
    .benefit-card h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--gold); margin-bottom: 0.6rem; }
    .benefit-card p { font-size: 0.85rem; color: rgba(250,244,230,0.65); line-height: 1.75; }
    .story { padding: 8rem 0; position: relative; background: var(--forest-mid); }
    .story-bg-pattern { position: absolute; inset: 0; background-image: radial-gradient(rgba(212,175,55,0.04) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
    .story-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6rem; align-items: center; position: relative; }
    .story-image-side { position: relative; }
    .story-img-frame { width: 100%; max-width: 340px; aspect-ratio: 1; border-radius: 50%; overflow: hidden; border: 2px solid var(--border-gold); box-shadow: var(--shadow-gold); }
    .story-logo-img { width: 100%; height: 100%; object-fit: cover; }
    .story-ornament { position: absolute; bottom: -20px; right: 20px; }
    .ornament-circle { width: 100px; height: 100px; border-radius: 50%; border: 1px solid var(--gold); background: rgba(5,22,16,0.95); display: flex; align-items: center; justify-content: center; text-align: center; }
    .ornament-text { font-family: var(--font-display); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); line-height: 1.6; }
    .story-body p { font-size: 0.92rem; color: rgba(250,244,230,0.7); line-height: 1.9; margin-bottom: 1.25rem; }
    .story-pillars { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
    .pillar { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(212,175,55,0.04); border: 1px solid var(--border-gold); border-radius: 4px; }
    .pillar-icon { font-size: 1.5rem; }
    .pillar strong { display: block; font-family: var(--font-display); font-size: 1.1rem; color: var(--gold); }
    .pillar span { font-size: 0.82rem; color: rgba(250,244,230,0.6); }
    .ingredients-preview { padding: 8rem 0; }
    .ingr-preview-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; margin-top: 3rem; }
    .ingr-preview-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 4px; padding: 1.75rem 1.25rem; text-align: center; transition: all 0.35s ease; }
    .ingr-preview-card:hover { transform: translateY(-6px); background: var(--forest-light); border-color: rgba(212,175,55,0.5); box-shadow: var(--shadow-gold); }
    .ingr-emoji { font-size: 2.5rem; margin-bottom: 0.75rem; }
    .ingr-name { font-family: var(--font-display); font-size: 1.05rem; color: var(--gold); margin-bottom: 0.4rem; }
    .ingr-benefit { font-size: 0.75rem; color: rgba(250,244,230,0.55); line-height: 1.6; }
    .ingr-cta { text-align: center; margin-top: 3rem; }
    .quiz-cta-section { padding: 8rem 0; background: var(--forest-mid); position: relative; overflow: hidden; }
    .quiz-cta-bg { position: absolute; inset: 0; pointer-events: none; }
    .cta-leaf { position: absolute; font-size: 6rem; opacity: 0.07; }
    .cl1 { top: -10%; left: -2%; } .cl2 { bottom: -10%; right: -2%; } .cl3 { top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 12rem; }
    .quiz-cta-inner { position: relative; text-align: center; max-width: 600px; margin: 0 auto; }
    .quiz-cta-inner p { font-size: 0.95rem; color: rgba(250,244,230,0.65); margin: 1.25rem 0 2.5rem; line-height: 1.8; }
    .loading-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 1.5rem; }
    .loading-grid.four-col { grid-template-columns: repeat(4,1fr); margin-top: 3rem; }
    .skeleton-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 4px; height: 160px; animation: pulse 1.5s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
    @media (max-width: 960px) { .hero-content { grid-template-columns: 1fr; gap: 3rem; } .hero-product { order: -1; } .story-inner { grid-template-columns: 1fr; } .story-image-side { display: flex; justify-content: center; } .ingr-preview-grid { grid-template-columns: repeat(2,1fr); } .loading-grid.four-col { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 600px) { .hero-stats { gap: 1rem; } }
  `]
})
export class HomeComponent implements OnInit {
  config!: SiteConfig;
  benefits: HomeBenefit[] = [];
  allIngredients: Ingredient[] = [];
  benefitsLoading = true;
  ingredientsLoading = true;

  marqueeItems = ['Coconut Oil','Hibiscus','Fenugreek','Amla','Bhringraj','Curry Leaves','Neem','Sesame','Pure Ayurveda','No Chemicals','Cold Pressed'];

  pillars = [
    { icon: '🌿', title: 'Cold-Pressed Extraction', desc: 'Preserving full potency of every herb' },
    { icon: '📜', title: 'Vedic Formulation', desc: 'Based on ancient Ayurvedic texts' },
    { icon: '🚫', title: 'Zero Chemicals', desc: 'No parabens, sulphates, or synthetics' }
  ];

  constructor(
    private configService: SiteConfigService,
    private benefitService: HomeBenefitService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit() {
    this.config = this.configService.snapshot;
    this.configService.stream.subscribe(c => this.config = c);

    this.benefitService.getAll().subscribe({
      next: b => { this.benefits = b; this.benefitsLoading = false; },
      error: () => { this.benefits = []; this.benefitsLoading = false; }
    });

    this.ingredientService.getAll().subscribe({
      next: i => { this.allIngredients = i; this.ingredientsLoading = false; },
      error: () => { this.allIngredients = []; this.ingredientsLoading = false; }
    });
  }

  get ingredientCount(): number {
    return this.allIngredients.length || 8;
  }

  get featuredIngredients(): Ingredient[] {
    return this.allIngredients.slice(0, 4);
  }

  formatHeroTitle(title: string): string {
    if (!title) return '';
    // Split on period and make second part italic gold
    const parts = title.split('. ');
    if (parts.length === 2) {
      return `${parts[0]}.<br><em>${parts[1]}</em>`;
    }
    return title;
  }
}
