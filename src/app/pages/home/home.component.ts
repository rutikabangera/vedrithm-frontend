import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteConfigService, SiteConfig } from '../../services/site-config.service';
import { HomeBenefitService, HomeBenefit } from '../../services/home-benefit.service';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { QuizService } from '../../services/quiz.service';

interface Review {
  id: string; name: string; rating: number; text: string;
  productUsed: string; date: string; initials: string;
}

const FALLBACK_REVIEWS: Review[] = [
  { id:'1', name:'Anjali M.', rating:5, initials:'AM',
    text:'My hair fall reduced dramatically in just 6 weeks. The fragrance is divine — truly Ayurvedic.',
    productUsed:'Bhringraj & Castor Base', date:'March 2025' },
  { id:'2', name:'Priya S.', rating:5, initials:'PS',
    text:'The quiz result was spot on! My hair growth has visibly improved and the packaging is beautiful.',
    productUsed:'Amla & Sesame Base', date:'Feb 2025' },
  { id:'3', name:'Rohan D.', rating:5, initials:'RD',
    text:'My dandruff is almost gone after 3 weeks. Light texture, absorbs fast — no greasy residue!',
    productUsed:'Neem & Cinnamon Base', date:'Jan 2025' },
  { id:'4', name:'Kavita N.', rating:4, initials:'KN',
    text:'Lovely oil with authentic Ayurvedic herbs. My frizz has calmed down noticeably.',
    productUsed:'Coconut & Hibiscus Base', date:'March 2025' },
  { id:'5', name:'Sunita P.', rating:5, initials:'SP',
    text:'Best Ayurvedic oil I\'ve found. Authentic scent, not artificial. My greying has slowed in 2 months.',
    productUsed:'Curry Leaf & Nard Base', date:'Dec 2024' },
  { id:'6', name:'Deepak R.', rating:5, initials:'DR',
    text:'Bought for my wife. She says it\'s the first oil that doesn\'t irritate her sensitive scalp.',
    productUsed:'Coconut & Bhringraj Base', date:'Jan 2025' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- ─── HERO ─── -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-deco-images"></div>
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
            <img src="assets/images/product.jpg" alt="Vedhrithm Herbal Hair Oil" class="product-img" />
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <div class="scroll-line"></div>
        <span></span>
      </div>
    </section>

    <!-- ─── MARQUEE ─── -->
    <div class="marquee-strip">
      <div class="marquee-track">
        <span *ngFor="let item of marqueeItems">{{ item }} &nbsp;✦&nbsp;&nbsp;</span>
        <span *ngFor="let item of marqueeItems">{{ item }} &nbsp;✦&nbsp;&nbsp;</span>
      </div>
    </div>

    <!-- ─── BENEFITS SLIDER ─── -->
    <section class="benefits">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Vedhrithm</span>
          <h2 class="section-title">Transformative <span>Benefits</span></h2>
          <p class="section-desc">Every drop carries centuries of Ayurvedic knowledge, balanced for your modern lifestyle.</p>
        </div>
        <div class="benefits-slider-wrap">
          <button class="slider-nav prev" (click)="prevBenefit()" [disabled]="benefitIndex === 0" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <div class="benefits-slider-viewport">
            <div class="benefits-slider-track" [style.transform]="'translateX(-' + (benefitIndex * benefitSlideWidth) + '%)'">
              <div class="benefit-card" *ngFor="let b of benefits; let i = index"
                   [class.active-card]="i >= benefitIndex && i < benefitIndex + visibleBenefits">
                <div class="benefit-icon-wrap">
                  <img [src]="getBenefitImage(b.icon)" [alt]="b.title"
                       class="benefit-icon-img" loading="lazy"
                       (error)="onBenefitImgError($event)" />
                </div>
                <h3>{{ b.title }}</h3>
                <p>{{ b.description }}</p>
              </div>
            </div>
          </div>
          <button class="slider-nav next" (click)="nextBenefit()" [disabled]="benefitIndex >= benefits.length - visibleBenefits" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="slider-dots">
          <button class="dot" *ngFor="let d of benefitDots; let i = index"
                  [class.active]="i === benefitIndex"
                  (click)="benefitIndex = i" [attr.aria-label]="'Go to benefit ' + (i+1)"></button>
        </div>
      </div>
    </section>

    <!-- ─── KEY BENEFITS VISUAL ROW ─── -->
    <section class="key-benefits-row">
      <div class="container">
        <div class="section-header center">
          <span class="section-tag">What It Does</span>
          <h2 class="section-title">Four Pillars of <span>Hair Health</span></h2>
        </div>
        <div class="kb-grid">
          <div class="kb-item" *ngFor="let kb of keyBenefits">
            <div class="kb-img-wrap">
              <img [src]="kb.imgSrc" [alt]="kb.title" class="kb-img" loading="lazy" />
              <div class="kb-halo"></div>
            </div>
            <h3 class="kb-title">{{ kb.title }}</h3>
            <p class="kb-desc">{{ kb.desc }}</p>
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
              <img src="assets/images/logo.jpg" alt="Vedhrithm Brand" class="story-logo-img" />
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
                <div class="pillar-img-wrap">
                  <img [src]="p.imgSrc" [alt]="p.title" class="pillar-img" loading="lazy" />
                </div>
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
        <div class="ingr-preview-grid">
          <div class="ingr-preview-card" *ngFor="let ing of featuredIngredients"
               (mouseenter)="hoveredIngr = ing.id" (mouseleave)="hoveredIngr = 0">
            <div class="ingr-visual">
              <img [src]="'assets/ingredients/' + ing.imageSlug + '.png'"
                   [alt]="ing.name" class="ingr-preview-img" loading="lazy"
                   (error)="onImgError($event)" />
            </div>
            <div class="ingr-name">{{ ing.name }}</div>
            <div class="ingr-benefit">{{ ing.tag }}</div>
            <div class="ingr-hover-pill" [class.show]="hoveredIngr === ing.id">{{ ing.emoji }} {{ ing.originPlace }}</div>
          </div>
        </div>
        <div class="ingr-cta">
          <a routerLink="/ingredients" class="btn-outline">
            View All {{ ingredientCount }} Ingredients
            <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── SOCIAL PROOF STRIP ─── -->
    <section class="social-proof">
      <div class="container">
        <div class="proof-inner">
          <div class="proof-stat">
            <span class="proof-num">{{ liveAvgRating > 0 ? liveAvgRating.toFixed(1) : '5.0' }}★</span>
            <span class="proof-label">Average Rating</span>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-stat">
            <span class="proof-num">{{ reviews.length > 0 ? reviews.length + '+' : '500+' }}</span>
            <span class="proof-label">Happy Customers</span>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-stat">
            <span class="proof-num">100%</span>
            <span class="proof-label">Natural Ingredients</span>
          </div>
          <div class="proof-divider"></div>
          <a routerLink="/reviews" class="proof-cta">
            Read Reviews
            <svg width="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── REVIEW CAROUSEL ─── -->
    <section class="review-teaser">
      <div class="container">
        <div class="section-header center">
          <span class="section-tag">Real Results</span>
          <h2 class="section-title">Loved by Our <span>Community</span></h2>
          <p class="section-desc" *ngIf="liveAvgRating > 0">
            Rated <strong style="color:var(--gold)">{{ liveAvgRating.toFixed(1) }}/5</strong>
            across {{ reviews.length }} verified reviews
          </p>
        </div>

        <!-- Carousel -->
        <div class="review-carousel">
          <button class="slider-nav prev" (click)="prevReview()" aria-label="Previous review">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <div class="review-carousel-viewport">
            <div class="review-carousel-track" [style.transform]="'translateX(-' + (reviewCarouselIndex * 100) + '%)'">
              <div class="teaser-card" *ngFor="let r of displayReviews">
                <div class="teaser-top">
                  <div class="teaser-avatar">{{ r.initials }}</div>
                  <div>
                    <div class="teaser-author-name">{{ r.name }}</div>
                    <div class="teaser-date">{{ r.date }}</div>
                  </div>
                  <div class="teaser-stars-row">
                    <span *ngFor="let s of [1,2,3,4,5]" [class.lit]="s <= r.rating">★</span>
                  </div>
                </div>
                <p class="teaser-text">"{{ r.text }}"</p>
                <div class="teaser-product">✦ {{ r.productUsed }}</div>
              </div>
            </div>
          </div>
          <button class="slider-nav next" (click)="nextReview()" aria-label="Next review">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>

        <div class="slider-dots">
          <button class="dot" *ngFor="let d of displayReviews; let i = index"
                  [class.active]="i === reviewCarouselIndex"
                  (click)="reviewCarouselIndex = i"></button>
        </div>

        <div class="ingr-cta" style="margin-top:2.5rem">
          <a routerLink="/reviews" class="btn-outline">
            See All Reviews
            <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── QUIZ CTA ─── -->
    <section class="quiz-cta-section">
      <div class="quiz-cta-bg">
        <img src="assets/ingredients/VedicFormula.png" class="cta-deco-img cd1" aria-hidden="true" alt="" />
        <img src="assets/ingredients/noChemicals.png"  class="cta-deco-img cd2" aria-hidden="true" alt="" />
      </div>
      <div class="container">
        <div class="quiz-cta-inner">
          <span class="section-tag">Personalised For You</span>
          <h2 class="section-title">Not Sure <span>Which Oil?</span></h2>
          <p>Answer 4 quick questions about your hair. We'll recommend the perfect Vedhrithm formulation for your unique needs.</p>
          <a routerLink="/quiz" class="btn-primary">
            Take the Hair Quiz
            <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ── HERO ── */
    .hero { min-height: 100vh; position: relative; display: flex; align-items: center; overflow: hidden; padding-top: 80px; }
    .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(26,74,46,0.35) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,175,55,0.05) 0%, transparent 60%); }
    .hero-glow { position: absolute; top: 50%; left: 60%; transform: translate(-50%,-50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(26,74,46,0.4) 0%, transparent 70%); pointer-events: none; }
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
    .scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.4; }
    .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, var(--gold)); }
    .scroll-hint span { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); }

    /* ── MARQUEE ── */
    .marquee-strip { position: relative; background: var(--forest-accent); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); padding: 0.85rem 0; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
    .marquee-track { display: flex; width: max-content; gap: 2rem; animation: marqueeScroll 28s linear infinite; will-change: transform; }
    .marquee-track span { font-family: var(--font-body); font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); white-space: nowrap; opacity: 0.85; }
    .marquee-strip:hover .marquee-track { animation-play-state: paused; }
    @keyframes marqueeScroll { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(-50%,0,0); } }

    /* ── BENEFITS SLIDER ── */
    .benefits { padding: 8rem 0; }
    .section-header { margin-bottom: 4rem; }
    .section-header.center { text-align: center; }
    .section-desc { margin-top: 1rem; font-size: 0.95rem; color: rgba(250,244,230,0.6); max-width: 500px; line-height: 1.8; }
    .section-header.center .section-desc { margin: 1rem auto 0; }
    .benefits-slider-wrap { display: flex; align-items: center; gap: 1rem; position: relative; }
    .benefits-slider-viewport { flex: 1; overflow: hidden; }
    .benefits-slider-track { display: flex; gap: 1.5rem; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); will-change: transform; }
    .benefit-card { flex: 0 0 calc(33.333% - 1rem); min-width: 0; background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 4px; padding: 2rem; transition: all 0.4s ease; }
    .benefit-card:hover { background: var(--forest-light); border-color: rgba(212,175,55,0.5); transform: translateY(-4px); box-shadow: var(--shadow-gold); }
    .benefit-icon-wrap { width: 64px; height: 64px; margin-bottom: 1.25rem; border-radius: 50%; background: rgba(212,175,55,0.07); padding: 8px; display: flex; align-items: center; justify-content: center; transition: transform 0.35s ease, background 0.35s ease; }
    .benefit-card:hover .benefit-icon-wrap { background: rgba(212,175,55,0.14); transform: scale(1.1) translateY(-3px); }
    .benefit-icon-img { width: 50px; height: 50px; object-fit: contain; filter: drop-shadow(0 3px 10px rgba(212,175,55,0.35)); }
    .benefit-card h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--gold); margin-bottom: 0.6rem; }
    .benefit-card p { font-size: 0.85rem; color: rgba(250,244,230,0.65); line-height: 1.75; }
    .slider-nav { width: 44px; height: 44px; border-radius: 50%; background: rgba(212,175,55,0.08); border: 1px solid var(--border-gold); color: var(--gold); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.25s ease; flex-shrink: 0; }
    .slider-nav:hover:not(:disabled) { background: rgba(212,175,55,0.18); border-color: var(--gold); }
    .slider-nav:disabled { opacity: 0.3; cursor: not-allowed; }
    .slider-dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(212,175,55,0.2); border: none; cursor: pointer; transition: all 0.25s ease; padding: 0; }
    .dot.active { background: var(--gold); transform: scale(1.3); }

    /* ── KEY BENEFITS VISUAL ROW ── */
    .key-benefits-row { padding: 6rem 0; background: var(--forest-deep, #051610); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); }
    .kb-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; margin-top: 3.5rem; }
    .kb-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
    .kb-img-wrap { position: relative; width: 120px; height: 120px; margin-bottom: 1.5rem; }
    .kb-img { width: 120px; height: 120px; object-fit: contain; filter: drop-shadow(0 6px 18px rgba(212,175,55,0.3)); transition: transform 0.4s ease, filter 0.4s ease; }
    .kb-item:hover .kb-img { transform: scale(1.1) translateY(-6px); filter: drop-shadow(0 12px 28px rgba(212,175,55,0.5)); }
    .kb-halo { position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: radial-gradient(ellipse, rgba(212,175,55,0.2) 0%, transparent 70%); }
    .kb-title { font-family: var(--font-display); font-size: 1.15rem; color: var(--gold); margin-bottom: 0.4rem; }
    .kb-desc { font-size: 0.82rem; color: rgba(250,244,230,0.55); line-height: 1.7; max-width: 180px; }

    /* ── STORY ── */
    .story { padding: 8rem 0; position: relative; background: var(--forest-mid); }
    .story-bg-pattern { position: absolute; inset: 0; background-image: radial-gradient(rgba(212,175,55,0.04) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
    .story-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6rem; align-items: center; position: relative; }
    .story-image-side { position: relative; }
    .story-img-frame { width: 100%; max-width: 340px; aspect-ratio: 1; border-radius: 50%; overflow: hidden; border: 2px solid var(--border-gold); box-shadow: var(--shadow-gold); }
    .story-logo-img { width: 100%; height: 100%; object-fit: cover; }
    .story-body p { font-size: 0.92rem; color: rgba(250,244,230,0.7); line-height: 1.9; margin-bottom: 1.25rem; }
    .story-pillars { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
    .pillar { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(212,175,55,0.04); border: 1px solid var(--border-gold); border-radius: 4px; transition: all 0.3s ease; }
    .pillar:hover { background: rgba(212,175,55,0.08); transform: translateX(4px); }
    .pillar-img-wrap { flex-shrink: 0; width: 44px; height: 44px; }
    .pillar-img { width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(212,175,55,0.3)); }
    .pillar strong { display: block; font-family: var(--font-display); font-size: 1.1rem; color: var(--gold); }
    .pillar span { font-size: 0.82rem; color: rgba(250,244,230,0.6); }

    /* ── INGREDIENTS PREVIEW ── */
    .ingredients-preview { padding: 8rem 0; }
    .ingr-preview-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; margin-top: 3rem; }
    .ingr-preview-card { background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 4px; padding: 1.75rem 1.25rem; text-align: center; transition: all 0.35s ease; position: relative; overflow: hidden; cursor: default; }
    .ingr-preview-card:hover { transform: translateY(-6px); background: var(--forest-light); border-color: rgba(212,175,55,0.5); box-shadow: var(--shadow-gold); }
    .ingr-visual { height: 90px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem; }
    .ingr-preview-img { width: 76px; height: 76px; object-fit: contain; filter: drop-shadow(0 4px 14px rgba(212,175,55,0.35)); transition: transform 0.3s ease, filter 0.3s ease; border-radius: 50%; background: rgba(212,175,55,0.06); padding: 6px; }
    .ingr-preview-card:hover .ingr-preview-img { transform: scale(1.12) translateY(-4px); filter: drop-shadow(0 10px 24px rgba(212,175,55,0.55)); }
    .ingr-name { font-family: var(--font-display); font-size: 1.05rem; color: var(--gold); margin-bottom: 0.4rem; }
    .ingr-benefit { font-size: 0.75rem; color: rgba(250,244,230,0.55); line-height: 1.6; }
    .ingr-hover-pill { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(212,175,55,0.12); border-top: 1px solid var(--border-gold); padding: 0.5rem; font-size: 0.72rem; color: var(--gold); transform: translateY(100%); transition: transform 0.3s ease; text-align: center; }
    .ingr-hover-pill.show { transform: translateY(0); }
    .ingr-cta { text-align: center; margin-top: 3rem; }

    /* ── SOCIAL PROOF STRIP ── */
    .social-proof { padding: 3rem 0; background: var(--forest-accent); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); }
    .proof-inner { display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
    .proof-stat { text-align: center; }
    .proof-num { display: block; font-family: var(--font-display); font-size: 2rem; color: var(--gold); font-weight: 300; }
    .proof-label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(250,244,230,0.5); }
    .proof-divider { width: 1px; height: 40px; background: var(--border-gold); }
    .proof-cta { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.5rem; border: 1px solid var(--border-gold); border-radius: 50px; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); text-decoration: none; transition: all 0.3s ease; }
    .proof-cta:hover { background: rgba(212,175,55,0.1); border-color: var(--gold); }

    /* ── REVIEW CAROUSEL ── */
    .review-teaser { padding: 7rem 0; }
    .review-carousel { display: flex; align-items: stretch; gap: 1rem; margin-top: 3rem; }
    .review-carousel-viewport { flex: 1; overflow: hidden; }
    .review-carousel-track { display: flex; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); will-change: transform; }
    .teaser-card { flex: 0 0 100%; min-width: 0; background: var(--forest-mid); border: 1px solid var(--border-gold); border-radius: 8px; padding: 2rem; transition: border-color 0.3s ease; }
    .teaser-card:hover { border-color: rgba(212,175,55,0.4); }
    .teaser-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
    .teaser-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg,var(--gold-dark,#b8932a),var(--gold)); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 1rem; color: var(--deep-forest,#051a0f); font-weight: 700; flex-shrink: 0; }
    .teaser-author-name { font-size: 0.92rem; font-weight: 600; color: var(--cream); }
    .teaser-date { font-size: 0.72rem; color: rgba(250,244,230,0.4); margin-top: 0.1rem; }
    .teaser-stars-row { margin-left: auto; display: flex; gap: 2px; font-size: 1.1rem; color: rgba(212,175,55,0.2); }
    .teaser-stars-row .lit { color: var(--gold); }
    .teaser-text { font-size: 0.9rem; color: rgba(250,244,230,0.75); line-height: 1.85; font-style: italic; margin-bottom: 1.25rem; }
    .teaser-product { font-size: 0.76rem; color: rgba(250,244,230,0.45); padding: 0.5rem 0.75rem; background: rgba(212,175,55,0.05); border: 1px solid var(--border-gold); border-radius: 4px; }

    /* ── QUIZ CTA ── */
    .quiz-cta-section { padding: 8rem 0; background: var(--forest-mid); position: relative; overflow: hidden; }
    .quiz-cta-bg { position: absolute; inset: 0; pointer-events: none; }
    .cta-deco-img { position: absolute; object-fit: contain; opacity: 0.08; }
    .cd1 { width: 220px; height: 220px; top: -8%; left: -3%; transform: rotate(-20deg); }
    .cd2 { width: 180px; height: 180px; bottom: -8%; right: -2%; transform: rotate(20deg); }
    .quiz-cta-inner { position: relative; text-align: center; max-width: 600px; margin: 0 auto; }
    .quiz-cta-inner p { font-size: 0.95rem; color: rgba(250,244,230,0.65); margin: 1.25rem 0 2.5rem; line-height: 1.8; }

    @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }

    @media (max-width: 960px) {
      .hero-content { grid-template-columns: 1fr; gap: 3rem; }
      .hero-product { order: -1; }
      .story-inner { grid-template-columns: 1fr; }
      .story-image-side { display: flex; justify-content: center; }
      .ingr-preview-grid { grid-template-columns: repeat(2,1fr); }
      .kb-grid { grid-template-columns: repeat(2,1fr); }
      .benefit-card { flex: 0 0 calc(50% - 0.75rem); }
    }
    @media (max-width: 600px) {
      .hero-stats { gap: 1rem; }
      .kb-grid { grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
      .proof-inner { gap: 1.5rem; }
      .proof-divider { display: none; }
      .benefit-card { flex: 0 0 calc(100% - 0rem); }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  config!: SiteConfig;
  benefits: HomeBenefit[] = [];
  allIngredients: Ingredient[] = [];
  reviews: Review[] = [];

  hoveredIngr = 0;
  benefitIndex = 0;
  reviewCarouselIndex = 0;
  visibleBenefits = 3;

  private reviewTimer: any;

  marqueeItems = ['Coconut Oil','Hibiscus','Fenugreek','Amla','Bhringraj','Curry Leaves','Neem','Sesame','Pure Ayurveda','No Chemicals','Cold Pressed'];

  pillars = [
    { imgSrc: 'assets/ingredients/Infused.png', title: 'Slow Infused', desc: 'Preserving full potency of every herb' },
    { imgSrc: 'assets/ingredients/VedicFormula.png', title: 'Vedic Formulation', desc: 'Based on ancient Ayurvedic texts' },
    { imgSrc: 'assets/ingredients/noChemicals.png', title: 'Zero Chemicals', desc: 'No parabens, sulphates, or synthetics' }
  ];

  keyBenefits = [
    { imgSrc: 'assets/ingredients/locks-moisture.png', title: 'Locks Moisture', desc: 'Seals hydration deep into every strand for lasting softness' },
    { imgSrc: 'assets/ingredients/promotes-growth.png', title: 'Promotes Growth', desc: 'Stimulates follicles and accelerates healthy hair growth' },
    { imgSrc: 'assets/ingredients/strengthens-roots.png', title: 'Strengthens Roots', desc: 'Fortifies the hair root to prevent breakage and thinning' },
    { imgSrc: 'assets/ingredients/SourcedLocally.png', title: 'Locally Sourced', desc: 'Ingredients harvested fresh from their native Indian regions' },
  ];

  private readonly FALLBACK_IMG = 'assets/ingredients/promotes-growth.png';
  private benefitImageMap: Array<{ key: string; src: string }> = [
    { key: 'shine',     src: 'assets/ingredients/adds-shine.png' },
    { key: 'growth',    src: 'assets/ingredients/promotes-growth.png' },
    { key: 'moisture',  src: 'assets/ingredients/locks-moisture.png' },
    { key: 'strength',  src: 'assets/ingredients/strengthens-roots.png' },
    { key: 'root',      src: 'assets/ingredients/strengthens-roots.png' },
    { key: 'calm',      src: 'assets/ingredients/calms-scalp.png' },
    { key: 'scalp',     src: 'assets/ingredients/calms-scalp.png' },
    { key: 'grey',      src: 'assets/ingredients/delays-greying.png' },
  ];

  constructor(
    private configService: SiteConfigService,
    private benefitService: HomeBenefitService,
    private ingredientService: IngredientService,
    private quizService: QuizService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.config = this.configService.snapshot;
    this.benefitService.getAll().subscribe(b => this.benefits = b);
    this.ingredientService.getAll().subscribe(i => this.allIngredients = i);

    // Load live reviews, fall back to static
    this.quizService.getReviews().subscribe({
      next: (data: any[]) => {
        if (data && data.length > 0) {
          this.reviews = data.map(r => ({
            ...r,
            initials: this.getInitials(r.name)
          }));
        } else {
          this.reviews = FALLBACK_REVIEWS;
        }
        this.startAutoCarousel();
      },
      error: () => {
        this.reviews = FALLBACK_REVIEWS;
        this.startAutoCarousel();
      }
    });
  }

  ngOnDestroy() {
    if (this.reviewTimer) clearInterval(this.reviewTimer);
  }

  private startAutoCarousel() {
    this.reviewTimer = setInterval(() => {
      this.reviewCarouselIndex = (this.reviewCarouselIndex + 1) % this.displayReviews.length;
      this.cdr.markForCheck();
    }, 5000);
  }

  get liveAvgRating(): number {
    if (!this.reviews.length) return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }

  get displayReviews(): Review[] {
    return this.reviews.length > 0 ? this.reviews.slice(0, 6) : FALLBACK_REVIEWS;
  }

  get ingredientCount(): number { return this.allIngredients.length || 15; }
  get featuredIngredients(): Ingredient[] { return this.allIngredients.slice(0, 4); }

  get benefitSlideWidth(): number {
    return this.visibleBenefits === 3 ? 33.333 : this.visibleBenefits === 2 ? 50 : 100;
  }

  get benefitDots(): number[] {
    return Array.from({ length: Math.max(0, this.benefits.length - this.visibleBenefits + 1) }, (_,i) => i);
  }

  prevBenefit() { if (this.benefitIndex > 0) this.benefitIndex--; }
  nextBenefit() { if (this.benefitIndex < this.benefits.length - this.visibleBenefits) this.benefitIndex++; }

  prevReview() {
    this.reviewCarouselIndex = (this.reviewCarouselIndex - 1 + this.displayReviews.length) % this.displayReviews.length;
  }
  nextReview() {
    this.reviewCarouselIndex = (this.reviewCarouselIndex + 1) % this.displayReviews.length;
  }

  getInitials(name: string): string {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || '';
  }

  getBenefitImage(iconSlug: string): string {
    if (iconSlug) return `assets/ingredients/${iconSlug}.png`;
    return this.FALLBACK_IMG;
  }

  onBenefitImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src !== this.FALLBACK_IMG) img.src = this.FALLBACK_IMG;
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src !== this.FALLBACK_IMG) img.src = this.FALLBACK_IMG;
  }

  formatHeroTitle(title: string): string {
    if (!title) return '';
    const parts = title.split('. ');
    if (parts.length === 2) return `${parts[0]}.<br><em>${parts[1]}</em>`;
    return title;
  }
}
