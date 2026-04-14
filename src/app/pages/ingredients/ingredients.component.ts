import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { SiteConfigService } from '../../services/site-config.service';

// ─── Inline SVG illustrations per ingredient slug ──────────────────────────
const INGREDIENT_ILLUSTRATIONS: Record<string, string> = {

  'coconut-oil': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="coco-body" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="#8B6914"/>
        <stop offset="60%" stop-color="#5C3D0E"/>
        <stop offset="100%" stop-color="#3B240A"/>
      </radialGradient>
      <radialGradient id="coco-sheen" cx="35%" cy="30%" r="40%">
        <stop offset="0%" stop-color="rgba(255,200,100,0.35)"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <!-- coconut shell -->
    <ellipse cx="60" cy="68" rx="38" ry="36" fill="url(#coco-body)"/>
    <ellipse cx="60" cy="68" rx="38" ry="36" fill="url(#coco-sheen)"/>
    <!-- fibrous texture lines -->
    <path d="M30 55 Q60 48 90 55" stroke="rgba(0,0,0,0.2)" stroke-width="1" fill="none"/>
    <path d="M26 65 Q60 57 94 65" stroke="rgba(0,0,0,0.2)" stroke-width="1" fill="none"/>
    <path d="M28 75 Q60 67 92 75" stroke="rgba(0,0,0,0.15)" stroke-width="1" fill="none"/>
    <path d="M32 85 Q60 78 88 85" stroke="rgba(0,0,0,0.1)" stroke-width="1" fill="none"/>
    <!-- three eyes -->
    <circle cx="47" cy="50" r="4.5" fill="#1a0f05"/>
    <circle cx="60" cy="46" r="4.5" fill="#1a0f05"/>
    <circle cx="73" cy="50" r="4.5" fill="#1a0f05"/>
    <circle cx="47" cy="50" r="2" fill="#0d0704"/>
    <circle cx="60" cy="46" r="2" fill="#0d0704"/>
    <circle cx="73" cy="50" r="2" fill="#0d0704"/>
    <!-- oil drop -->
    <path d="M60 18 Q65 10 60 4 Q55 10 60 18Z" fill="#d4af37" opacity="0.9"/>
    <ellipse cx="60" cy="18" rx="5" ry="3" fill="#d4af37" opacity="0.7"/>
    <!-- leaves -->
    <path d="M38 30 Q28 18 18 22 Q22 32 38 30Z" fill="#2d6a3a" opacity="0.85"/>
    <path d="M38 30 Q28 26 20 28" stroke="#1a4422" stroke-width="0.8" fill="none"/>
    <path d="M82 30 Q92 18 102 22 Q98 32 82 30Z" fill="#2d6a3a" opacity="0.85"/>
    <path d="M82 30 Q92 26 100 28" stroke="#1a4422" stroke-width="0.8" fill="none"/>
  </svg>`,

  'hibiscus': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hib-petal" cx="50%" cy="80%" r="70%">
        <stop offset="0%" stop-color="#e8234a"/>
        <stop offset="100%" stop-color="#c0152e"/>
      </radialGradient>
      <radialGradient id="hib-center" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffe066"/>
        <stop offset="100%" stop-color="#d4af37"/>
      </radialGradient>
    </defs>
    <!-- 5 petals -->
    <g transform="translate(60,62)">
      <ellipse cx="0" cy="-32" rx="13" ry="26" fill="url(#hib-petal)" transform="rotate(0)"/>
      <ellipse cx="0" cy="-32" rx="13" ry="26" fill="url(#hib-petal)" transform="rotate(72)"/>
      <ellipse cx="0" cy="-32" rx="13" ry="26" fill="url(#hib-petal)" transform="rotate(144)"/>
      <ellipse cx="0" cy="-32" rx="13" ry="26" fill="url(#hib-petal)" transform="rotate(216)"/>
      <ellipse cx="0" cy="-32" rx="13" ry="26" fill="url(#hib-petal)" transform="rotate(288)"/>
      <!-- petal vein lines -->
      <path d="M0 0 L0 -54" stroke="rgba(180,10,30,0.3)" stroke-width="0.8" fill="none" transform="rotate(0)"/>
      <path d="M0 0 L0 -54" stroke="rgba(180,10,30,0.3)" stroke-width="0.8" fill="none" transform="rotate(72)"/>
      <path d="M0 0 L0 -54" stroke="rgba(180,10,30,0.3)" stroke-width="0.8" fill="none" transform="rotate(144)"/>
      <path d="M0 0 L0 -54" stroke="rgba(180,10,30,0.3)" stroke-width="0.8" fill="none" transform="rotate(216)"/>
      <path d="M0 0 L0 -54" stroke="rgba(180,10,30,0.3)" stroke-width="0.8" fill="none" transform="rotate(288)"/>
      <!-- stamen tube -->
      <rect x="-3" y="-40" width="6" height="40" rx="3" fill="#c8962a"/>
      <!-- stamen head -->
      <circle cx="0" cy="-40" r="5" fill="url(#hib-center)"/>
      <!-- pollen dots -->
      <circle cx="0" cy="-46" r="2" fill="#ffe066"/>
      <circle cx="4" cy="-44" r="1.5" fill="#ffe066"/>
      <circle cx="-4" cy="-44" r="1.5" fill="#ffe066"/>
    </g>
    <!-- stem -->
    <path d="M60 100 Q55 112 50 115" stroke="#2d6a3a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- leaf -->
    <path d="M60 95 Q72 88 78 92 Q72 100 60 95Z" fill="#2d6a3a"/>
  </svg>`,

  'fenugreek': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="fen-seed" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#e8b84a"/>
        <stop offset="60%" stop-color="#c49020"/>
        <stop offset="100%" stop-color="#9a6c10"/>
      </radialGradient>
    </defs>
    <!-- pod -->
    <path d="M30 60 Q35 28 60 24 Q85 28 90 60 Q85 92 60 96 Q35 92 30 60Z" fill="#5a8a3a" opacity="0.9"/>
    <path d="M30 60 Q35 28 60 24 Q85 28 90 60" stroke="#3d6628" stroke-width="1" fill="none"/>
    <!-- seeds inside -->
    <ellipse cx="60" cy="42" rx="9" ry="7" fill="url(#fen-seed)"/>
    <ellipse cx="52" cy="56" rx="9" ry="7" fill="url(#fen-seed)"/>
    <ellipse cx="68" cy="56" rx="9" ry="7" fill="url(#fen-seed)"/>
    <ellipse cx="52" cy="72" rx="9" ry="7" fill="url(#fen-seed)"/>
    <ellipse cx="68" cy="72" rx="9" ry="7" fill="url(#fen-seed)"/>
    <!-- seed groove -->
    <path d="M54 42 Q60 39 66 42" stroke="rgba(150,100,10,0.4)" stroke-width="1" fill="none"/>
    <path d="M46 56 Q52 53 58 56" stroke="rgba(150,100,10,0.4)" stroke-width="1" fill="none"/>
    <!-- scattered seeds outside -->
    <ellipse cx="18" cy="75" rx="7" ry="5" fill="url(#fen-seed)" transform="rotate(-20,18,75)"/>
    <ellipse cx="102" cy="78" rx="7" ry="5" fill="url(#fen-seed)" transform="rotate(15,102,78)"/>
    <ellipse cx="25" cy="95" rx="7" ry="5" fill="url(#fen-seed)" transform="rotate(10,25,95)"/>
    <!-- small leaves -->
    <path d="M60 24 Q52 12 44 14 Q48 22 60 24Z" fill="#5a8a3a"/>
    <path d="M60 24 Q68 12 76 14 Q72 22 60 24Z" fill="#4a7830"/>
  </svg>`,

  'amla': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="amla-fruit" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#c8e86a"/>
        <stop offset="50%" stop-color="#8ab825"/>
        <stop offset="100%" stop-color="#5a7a10"/>
      </radialGradient>
      <radialGradient id="amla-sheen" cx="30%" cy="25%" r="40%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.4)"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <!-- main fruit -->
    <circle cx="60" cy="64" r="38" fill="url(#amla-fruit)"/>
    <circle cx="60" cy="64" r="38" fill="url(#amla-sheen)"/>
    <!-- 6 segments (gooseberry ribs) -->
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)"/>
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)" transform="rotate(60,60,64)"/>
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)" transform="rotate(120,60,64)"/>
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)" transform="rotate(180,60,64)"/>
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)" transform="rotate(240,60,64)"/>
    <path d="M60 26 Q50 45 60 64 Q70 45 60 26Z" fill="rgba(90,122,16,0.3)" transform="rotate(300,60,64)"/>
    <!-- top crown -->
    <path d="M52 28 Q60 18 68 28 Q60 22 52 28Z" fill="#3d5e0a"/>
    <!-- small leaf -->
    <path d="M68 28 Q82 20 88 26 Q80 32 68 28Z" fill="#5a8a3a"/>
    <path d="M68 28 Q80 24 86 28" stroke="#3d6622" stroke-width="0.8" fill="none"/>
    <!-- sparkle - vitamin C -->
    <path d="M95 40 L98 44 L95 48 L92 44Z" fill="#d4af37" opacity="0.8"/>
    <path d="M100 30 L101 34 L100 38 L99 34Z" fill="#d4af37" opacity="0.6"/>
  </svg>`,

  'bhringraj': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bhr-flower" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffff0"/>
        <stop offset="100%" stop-color="#e0ddb0"/>
      </radialGradient>
    </defs>
    <!-- stem -->
    <path d="M60 110 L60 52" stroke="#3d6628" stroke-width="3" stroke-linecap="round"/>
    <!-- leaves on stem -->
    <path d="M60 90 Q42 84 36 88 Q44 96 60 90Z" fill="#4a7830" opacity="0.9"/>
    <path d="M60 90 Q42 86 38 90" stroke="#3a6020" stroke-width="0.8" fill="none"/>
    <path d="M60 90 Q78 84 84 88 Q76 96 60 90Z" fill="#5a8a3a" opacity="0.9"/>
    <path d="M60 75 Q42 69 36 73 Q44 81 60 75Z" fill="#4a7830"/>
    <path d="M60 75 Q78 69 84 73 Q76 81 60 75Z" fill="#5a8a3a"/>
    <!-- flower head - daisy style -->
    <circle cx="60" cy="42" r="22" fill="url(#bhr-flower)"/>
    <!-- ray petals -->
    <g transform="translate(60,42)">
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(0)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(30)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(60)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(90)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(120)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(150)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(180)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(210)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(240)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(270)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.95" transform="rotate(300)"/>
      <ellipse cx="0" cy="-19" rx="5" ry="12" fill="white" opacity="0.9" transform="rotate(330)"/>
    </g>
    <!-- disc center -->
    <circle cx="60" cy="42" r="11" fill="#c8a020"/>
    <circle cx="60" cy="42" r="8" fill="#d4af37"/>
    <!-- disc florets texture -->
    <circle cx="57" cy="40" r="1.2" fill="rgba(0,0,0,0.2)"/>
    <circle cx="63" cy="40" r="1.2" fill="rgba(0,0,0,0.2)"/>
    <circle cx="60" cy="44" r="1.2" fill="rgba(0,0,0,0.2)"/>
    <circle cx="56" cy="44" r="1" fill="rgba(0,0,0,0.15)"/>
    <circle cx="64" cy="44" r="1" fill="rgba(0,0,0,0.15)"/>
  </svg>`,

  'curry-leaves': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="curry-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4caf50"/>
        <stop offset="100%" stop-color="#2e7d32"/>
      </linearGradient>
      <linearGradient id="curry-leaf-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#66bb6a"/>
        <stop offset="100%" stop-color="#388e3c"/>
      </linearGradient>
    </defs>
    <!-- main branch -->
    <path d="M20 100 Q40 80 60 60 Q75 45 90 30" stroke="#5a3e10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- leaves along branch - alternating -->
    <ellipse cx="30" cy="91" rx="14" ry="7" fill="url(#curry-leaf)" transform="rotate(-40,30,91)"/>
    <path d="M28 84 Q30 88 32 98" stroke="#1b5e20" stroke-width="0.8" fill="none"/>

    <ellipse cx="42" cy="80" rx="14" ry="7" fill="url(#curry-leaf-2)" transform="rotate(-50,42,80)"/>
    <path d="M40 73 Q42 77 44 87" stroke="#1b5e20" stroke-width="0.8" fill="none"/>

    <ellipse cx="50" cy="69" rx="14" ry="7" fill="url(#curry-leaf)" transform="rotate(50,50,69)"/>
    <path d="M57 66 Q52 70 44 72" stroke="#1b5e20" stroke-width="0.8" fill="none"/>

    <ellipse cx="60" cy="58" rx="14" ry="7" fill="url(#curry-leaf-2)" transform="rotate(-60,60,58)"/>
    <path d="M58 51 Q60 55 62 65" stroke="#1b5e20" stroke-width="0.8" fill="none"/>

    <ellipse cx="68" cy="47" rx="13" ry="6" fill="url(#curry-leaf)" transform="rotate(55,68,47)"/>
    <path d="M74 43 Q69 48 62 50" stroke="#1b5e20" stroke-width="0.8" fill="none"/>

    <ellipse cx="76" cy="38" rx="13" ry="6" fill="url(#curry-leaf-2)" transform="rotate(-65,76,38)"/>

    <ellipse cx="84" cy="30" rx="12" ry="6" fill="url(#curry-leaf)" transform="rotate(60,84,30)"/>
    <!-- tip leaf -->
    <ellipse cx="90" cy="22" rx="10" ry="5" fill="url(#curry-leaf-2)" transform="rotate(-30,90,22)"/>
    <!-- small berries -->
    <circle cx="22" cy="104" r="3" fill="#1a3e0a" opacity="0.8"/>
    <circle cx="28" cy="106" r="3" fill="#1a3e0a" opacity="0.8"/>
    <circle cx="34" cy="105" r="3" fill="#2a5e14" opacity="0.8"/>
  </svg>`,

  'neem': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="neem-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7cb342"/>
        <stop offset="100%" stop-color="#558b2f"/>
      </linearGradient>
    </defs>
    <!-- tree silhouette trunk -->
    <path d="M52 115 L52 80 Q60 75 68 80 L68 115Z" fill="#5a3e10"/>
    <!-- branch left -->
    <path d="M52 88 Q38 80 28 75" stroke="#5a3e10" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- branch right -->
    <path d="M68 85 Q82 77 92 72" stroke="#5a3e10" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- canopy leaves - compound leaf clusters -->
    <!-- cluster center top -->
    <ellipse cx="60" cy="48" rx="28" ry="24" fill="url(#neem-leaf)" opacity="0.95"/>
    <!-- cluster left -->
    <ellipse cx="32" cy="58" rx="20" ry="16" fill="url(#neem-leaf)" opacity="0.9"/>
    <!-- cluster right -->
    <ellipse cx="88" cy="55" rx="20" ry="16" fill="url(#neem-leaf)" opacity="0.9"/>
    <!-- cluster lower left -->
    <ellipse cx="40" cy="72" rx="16" ry="13" fill="url(#neem-leaf)" opacity="0.85"/>
    <!-- cluster lower right -->
    <ellipse cx="80" cy="70" rx="16" ry="13" fill="url(#neem-leaf)" opacity="0.85"/>
    <!-- highlight -->
    <ellipse cx="52" cy="40" rx="16" ry="10" fill="rgba(120,200,60,0.2)"/>
    <!-- compound leaf detail lines -->
    <path d="M44 40 Q52 36 60 40 Q68 36 76 40" stroke="rgba(0,80,0,0.2)" stroke-width="0.7" fill="none"/>
    <path d="M40 50 Q52 45 60 50 Q72 45 80 50" stroke="rgba(0,80,0,0.15)" stroke-width="0.7" fill="none"/>
    <!-- small berries/fruits -->
    <circle cx="65" cy="58" r="3.5" fill="#c8d44a" opacity="0.9"/>
    <circle cx="72" cy="54" r="3" fill="#b8c438" opacity="0.9"/>
    <circle cx="58" cy="62" r="3" fill="#c8d44a" opacity="0.8"/>
  </svg>`,

  'sesame': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ses-seed" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#f5e6c0"/>
        <stop offset="70%" stop-color="#d4b870"/>
        <stop offset="100%" stop-color="#b8922a"/>
      </radialGradient>
      <linearGradient id="ses-pod" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8ab825"/>
        <stop offset="100%" stop-color="#5a7810"/>
      </linearGradient>
    </defs>
    <!-- stem -->
    <path d="M60 108 L60 22" stroke="#5a7810" stroke-width="2.5" stroke-linecap="round"/>
    <!-- leaves -->
    <path d="M60 90 Q44 82 38 86 Q46 94 60 90Z" fill="#6a9a22"/>
    <path d="M60 72 Q44 64 38 68 Q46 76 60 72Z" fill="#5a8a18"/>
    <path d="M60 90 Q76 82 82 86 Q74 94 60 90Z" fill="#5a8a18"/>
    <path d="M60 72 Q76 64 82 68 Q74 76 60 72Z" fill="#6a9a22"/>
    <!-- seed pods on stem -->
    <rect x="54" y="26" width="12" height="20" rx="6" fill="url(#ses-pod)"/>
    <rect x="54" y="48" width="12" height="20" rx="6" fill="url(#ses-pod)"/>
    <!-- pod seam line -->
    <line x1="60" y1="26" x2="60" y2="46" stroke="rgba(0,0,0,0.2)" stroke-width="0.8"/>
    <line x1="60" y1="48" x2="60" y2="68" stroke="rgba(0,0,0,0.2)" stroke-width="0.8"/>
    <!-- scattered seeds -->
    <ellipse cx="28" cy="55" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(-20,28,55)"/>
    <ellipse cx="90" cy="50" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(15,90,50)"/>
    <ellipse cx="20" cy="75" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(10,20,75)"/>
    <ellipse cx="98" cy="70" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(-10,98,70)"/>
    <ellipse cx="35" cy="95" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(5,35,95)"/>
    <ellipse cx="85" cy="90" rx="6" ry="4" fill="url(#ses-seed)" transform="rotate(-5,85,90)"/>
    <!-- seed ridge -->
    <line x1="26" y1="53" x2="30" y2="57" stroke="rgba(150,100,20,0.5)" stroke-width="0.8"/>
  </svg>`,
};

// ─── Generic botanical fallback ────────────────────────────────────────────
const GENERIC_BOTANICAL = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 105 Q55 85 60 60 Q65 85 60 105Z" fill="#4a7830"/>
  <path d="M60 80 Q40 68 32 72 Q44 84 60 80Z" fill="#5a8a3a"/>
  <path d="M60 80 Q80 68 88 72 Q76 84 60 80Z" fill="#4a7830"/>
  <path d="M60 62 Q42 52 36 56 Q48 66 60 62Z" fill="#5a8a3a"/>
  <path d="M60 62 Q78 52 84 56 Q72 66 60 62Z" fill="#4a7830"/>
  <circle cx="60" cy="42" r="14" fill="#8ab825" opacity="0.9"/>
  <circle cx="60" cy="42" r="8" fill="#d4af37"/>
</svg>`;

// ─── Map ingredient name → illustration key ────────────────────────────────
function getIllustration(name: string): string {
  const key = name.toLowerCase().replace(/\s+/g, '-');
  return INGREDIENT_ILLUSTRATIONS[key] || GENERIC_BOTANICAL;
}

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
          {{ ingredients.length || 8 }} time-honoured Ayurvedic herbs, each chosen for their unique ability
          to restore, protect and nourish your hair from root to tip.
        </p>
        <div class="hero-count-row">
          <div class="hero-stat" *ngFor="let s of heroStats">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- floating botanical decorations -->
      <div class="deco-plant dp1" [innerHTML]="decoLeafSvg"></div>
      <div class="deco-plant dp2" [innerHTML]="decoLeafSvg"></div>
    </section>

    <!-- ░░ FILTER STRIP ░░ -->
    <div class="filter-strip" *ngIf="!loading && !error && allTags.length > 1">
      <div class="container filter-inner">
        <button class="filter-pill"
                [class.active]="activeFilter === ''"
                (click)="activeFilter = ''">All</button>
        <button class="filter-pill"
                *ngFor="let t of allTags"
                [class.active]="activeFilter === t"
                (click)="activeFilter = t">{{ t }}</button>
      </div>
    </div>

    <!-- ░░ MAIN GRID ░░ -->
    <section class="ingredients-section">
      <div class="container">

        <!-- Loading -->
        <div class="ingredients-grid" *ngIf="loading">
          <div class="skeleton-card" *ngFor="let i of [1,2,3,4,5,6,7,8]">
            <div class="skel-img"></div>
            <div class="skel-lines">
              <div class="skel-line w70"></div>
              <div class="skel-line w50"></div>
              <div class="skel-line w90"></div>
            </div>
          </div>
        </div>

        <!-- Error -->
        <div class="error-state" *ngIf="error && !loading">
          <div class="error-icon" [innerHTML]="genericLeaf"></div>
          <p>Could not load ingredients. Please try again.</p>
          <button class="btn-outline" (click)="load()">Retry</button>
        </div>

        <!-- Grid -->
        <div class="ingredients-grid" *ngIf="!loading && !error">
          <article class="ingredient-card"
               *ngFor="let ing of filteredIngredients; let i = index"
               [class.is-open]="activeCard === i"
               (click)="toggleCard(i)">

            <!-- card top accent line -->
            <div class="card-accent"></div>

            <div class="card-front">
              <!-- number badge -->
              <span class="card-num">{{ (i+1).toString().padStart(2,'0') }}</span>

              <!-- illustration -->
              <div class="card-illus" [innerHTML]="getIllus(ing.name)"></div>

              <!-- metadata -->
              <div class="card-meta">
                <div class="card-tag">{{ ing.tag }}</div>
                <h3 class="card-name">{{ ing.name }}</h3>
                <p class="card-sanskrit">{{ ing.sanskritName }}</p>
              </div>

              <!-- expand toggle -->
              <div class="expand-row">
                <span class="expand-label">{{ activeCard === i ? 'Close' : 'Discover' }}</span>
                <div class="expand-icon" [class.rotated]="activeCard === i">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- expanded detail drawer -->
            <div class="card-drawer" [class.open]="activeCard === i">
              <p class="drawer-desc">{{ ing.description }}</p>

              <div class="drawer-benefits">
                <div class="benefit-row" *ngFor="let b of ing.benefits">
                  <span class="benefit-gem">✦</span>
                  <span>{{ b }}</span>
                </div>
              </div>

              <div class="drawer-origin" *ngIf="ing.originPlace">
                <svg class="origin-pin" width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z"
                        fill="currentColor"/>
                  <circle cx="6" cy="5" r="2" fill="var(--forest-mid)"/>
                </svg>
                <span>{{ ing.originPlace }}</span>
              </div>
            </div>

          </article>
        </div>

      </div>
    </section>

    <!-- ░░ PROVENANCE BAND ░░ -->
    <section class="provenance-band" *ngIf="!loading && !error">
      <div class="container prov-inner">
        <div class="prov-text">
          <p class="prov-label">Our Promise</p>
          <h2 class="prov-title">From Sacred Soil<br><em>to Your Hands</em></h2>
          <p class="prov-body">Every ingredient is sourced directly from its native region of India — where the soil, climate and centuries of cultivation combine to produce the highest possible potency. Cold-pressed within 48 hours of harvest. Nothing more, nothing less.</p>
        </div>
        <div class="prov-pillars">
          <div class="prov-pillar" *ngFor="let p of provPillars">
            <div class="pillar-svg" [innerHTML]="p.svg"></div>
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
    /* ── Reset / shared ── */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

    /* ══════════════════════════════════════════
       HERO
    ══════════════════════════════════════════ */
    .page-hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      padding: 10rem 0 6rem;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .hero-noise {
      position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none;
    }
    .hero-radial {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 80% at 50% 40%, rgba(26,74,46,0.45) 0%, transparent 70%);
    }
    .hero-lines {
      position: absolute; inset: 0;
      display: flex; justify-content: space-around;
      pointer-events: none;
    }
    .h-line {
      width: 1px;
      height: 100%;
      background: linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.06) 40%, transparent 100%);
    }
    .hero-content { position: relative; z-index: 2; }

    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 0.75rem;
      font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
      color: rgba(212,175,55,0.7);
      margin-bottom: 1.5rem;
    }
    .eyebrow-gem {
      width: 4px; height: 4px;
      background: var(--gold);
      border-radius: 50%;
      display: block;
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(3rem, 7vw, 6rem);
      font-weight: 300;
      color: var(--cream);
      line-height: 1.05;
      margin-bottom: 1.5rem;
      letter-spacing: -0.01em;
    }
    .hero-title em { color: var(--gold); font-style: italic; }
    .hero-sub {
      max-width: 560px; margin: 0 auto 3rem;
      font-size: 1rem; color: rgba(250,244,230,0.55); line-height: 1.85;
    }
    .hero-count-row {
      display: inline-flex; gap: 3rem;
      padding: 1.25rem 2.5rem;
      border: 1px solid var(--border-gold);
      background: rgba(10,35,24,0.6);
      backdrop-filter: blur(12px);
      border-radius: 4px;
    }
    .hero-stat { display: flex; flex-direction: column; gap: 0.2rem; }
    .stat-num { font-family: var(--font-display); font-size: 1.8rem; color: var(--gold); line-height: 1; }
    .stat-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(212,175,55,0.5); }

    /* floating decorations */
    .deco-plant {
      position: absolute; opacity: 0.06;
      pointer-events: none;
    }
    .deco-plant :global(svg) { width: 180px; height: 180px; }
    .dp1 { top: 5%; left: -2%; transform: rotate(-20deg) scale(1.5); }
    .dp2 { bottom: 0%; right: -2%; transform: rotate(160deg) scale(1.5); }

    /* ══════════════════════════════════════════
       FILTER STRIP
    ══════════════════════════════════════════ */
    .filter-strip {
      padding: 1.5rem 0;
      border-bottom: 1px solid var(--border-gold);
      background: rgba(10,35,24,0.8);
      backdrop-filter: blur(12px);
      position: sticky; top: 0; z-index: 10;
    }
    .filter-inner {
      display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;
    }
    .filter-pill {
      padding: 0.35rem 1rem;
      border: 1px solid var(--border-gold);
      background: transparent;
      color: rgba(212,175,55,0.6);
      font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .filter-pill:hover, .filter-pill.active {
      background: rgba(212,175,55,0.12);
      color: var(--gold);
      border-color: rgba(212,175,55,0.5);
    }

    /* ══════════════════════════════════════════
       GRID
    ══════════════════════════════════════════ */
    .ingredients-section { padding: 5rem 0 8rem; }

    .ingredients-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    /* Skeleton */
    .skeleton-card {
      background: var(--forest-mid);
      border: 1px solid var(--border-gold);
      border-radius: 8px;
      padding: 2rem;
      animation: skelPulse 1.8s ease-in-out infinite;
    }
    .skel-img { height: 120px; background: rgba(212,175,55,0.06); border-radius: 4px; margin-bottom: 1.5rem; }
    .skel-lines { display: flex; flex-direction: column; gap: 0.5rem; }
    .skel-line { height: 10px; background: rgba(212,175,55,0.06); border-radius: 4px; }
    .w70 { width: 70%; } .w50 { width: 50%; } .w90 { width: 90%; }
    @keyframes skelPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.9; } }

    /* Error */
    .error-state { text-align: center; padding: 5rem 2rem; }
    .error-icon { width: 80px; height: 80px; margin: 0 auto 1.5rem; opacity: 0.3; }
    .error-state p { color: rgba(250,244,230,0.5); margin-bottom: 1.5rem; }

    /* ══ CARD ══ */
    .ingredient-card {
      position: relative;
      background: linear-gradient(160deg, rgba(15,48,32,0.95) 0%, rgba(10,35,24,0.98) 100%);
      border: 1px solid var(--border-gold);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
    .ingredient-card:hover, .ingredient-card.is-open {
      transform: translateY(-4px);
      border-color: rgba(212,175,55,0.55);
      box-shadow:
        0 12px 50px rgba(0,0,0,0.5),
        0 0 0 1px rgba(212,175,55,0.1),
        0 0 40px rgba(212,175,55,0.08);
    }
    .card-accent {
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%);
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .ingredient-card:hover .card-accent,
    .ingredient-card.is-open .card-accent { opacity: 1; }

    .card-front { padding: 2rem 2rem 1.5rem; }

    .card-num {
      position: absolute; top: 1.25rem; right: 1.5rem;
      font-family: var(--font-display);
      font-size: 3.5rem; font-weight: 700; line-height: 1;
      color: rgba(212,175,55,0.05);
      user-select: none;
    }

    /* illustration container */
    .card-illus {
      width: 100%; height: 140px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.5rem;
      position: relative;
    }
    .card-illus :global(svg) {
      width: 120px; height: 120px;
      filter: drop-shadow(0 8px 20px rgba(0,0,0,0.5));
      transition: transform 0.4s ease;
    }
    .ingredient-card:hover .card-illus :global(svg) { transform: scale(1.06) translateY(-3px); }

    /* illustration glow halo */
    .card-illus::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 50% at 50% 70%, rgba(212,175,55,0.07), transparent);
      pointer-events: none;
    }

    .card-meta { margin-bottom: 1.25rem; }
    .card-tag {
      display: inline-block;
      padding: 0.2rem 0.65rem;
      background: rgba(212,175,55,0.08);
      border: 1px solid var(--border-gold);
      border-radius: 50px;
      font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase;
      color: rgba(212,175,55,0.65);
      margin-bottom: 0.5rem;
    }
    .card-name {
      font-family: var(--font-display);
      font-size: 1.55rem; font-weight: 400;
      color: var(--gold);
      margin-bottom: 0.15rem;
      letter-spacing: 0.01em;
    }
    .card-sanskrit {
      font-family: var(--font-display); font-style: italic;
      font-size: 0.82rem;
      color: rgba(212,175,55,0.4);
    }
    .expand-row {
      display: flex; align-items: center; gap: 0.45rem;
      font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
      color: rgba(212,175,55,0.5);
      border-top: 1px solid rgba(212,175,55,0.1);
      padding-top: 1rem;
      transition: color 0.25s;
    }
    .ingredient-card:hover .expand-row { color: rgba(212,175,55,0.8); }
    .expand-icon {
      display: flex; align-items: center; justify-content: center;
      width: 20px; height: 20px;
      border: 1px solid rgba(212,175,55,0.3);
      border-radius: 50%;
      transition: transform 0.35s ease, border-color 0.25s;
    }
    .expand-icon.rotated { transform: rotate(180deg); border-color: rgba(212,175,55,0.6); }

    /* drawer */
    .card-drawer {
      max-height: 0; overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1);
      border-top: 0px solid transparent;
    }
    .card-drawer.open {
      max-height: 500px;
      border-top: 1px solid rgba(212,175,55,0.12);
    }
    .drawer-desc {
      font-size: 0.84rem; color: rgba(250,244,230,0.6); line-height: 1.85;
      padding: 1.25rem 2rem 0.75rem;
    }
    .drawer-benefits { padding: 0 2rem 1rem; }
    .benefit-row {
      display: flex; gap: 0.6rem; align-items: flex-start;
      font-size: 0.81rem; color: rgba(250,244,230,0.65);
      padding: 0.3rem 0;
      border-bottom: 1px solid rgba(212,175,55,0.06);
    }
    .benefit-row:last-child { border-bottom: none; }
    .benefit-gem { color: var(--gold); flex-shrink: 0; font-size: 0.65rem; margin-top: 0.2rem; }
    .drawer-origin {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 2rem 1.25rem;
      border-top: 1px solid rgba(212,175,55,0.1);
      font-size: 0.8rem; color: rgba(212,175,55,0.6);
      font-family: var(--font-display); font-style: italic;
    }
    .origin-pin { color: var(--gold); flex-shrink: 0; }

    /* ══════════════════════════════════════════
       PROVENANCE BAND
    ══════════════════════════════════════════ */
    .provenance-band {
      padding: 7rem 0;
      background: var(--forest-mid);
      border-top: 1px solid var(--border-gold);
      border-bottom: 1px solid var(--border-gold);
    }
    .prov-inner {
      display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
    }
    .prov-label {
      font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: rgba(212,175,55,0.5); margin-bottom: 1rem;
    }
    .prov-title {
      font-family: var(--font-display); font-size: clamp(2rem,4vw,3.2rem);
      font-weight: 300; color: var(--cream); line-height: 1.2; margin-bottom: 1.5rem;
    }
    .prov-title em { color: var(--gold); font-style: italic; }
    .prov-body { font-size: 0.9rem; color: rgba(250,244,230,0.55); line-height: 1.9; }
    .prov-pillars {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
    }
    .prov-pillar {
      display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
      padding: 2rem 1rem;
      border: 1px solid var(--border-gold);
      border-radius: 6px;
      background: rgba(10,35,24,0.6);
      text-align: center;
      font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
      color: rgba(212,175,55,0.6);
    }
    .pillar-svg { width: 48px; height: 48px; }
    .pillar-svg :global(svg) { width: 48px; height: 48px; }

    /* ══════════════════════════════════════════
       BOTTOM CTA
    ══════════════════════════════════════════ */
    .bottom-cta {
      padding: 8rem 0;
      position: relative; overflow: hidden;
      background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,74,46,0.2) 0%, transparent 70%);
    }
    .cta-noise {
      position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
    }
    .cta-inner { position: relative; z-index: 1; text-align: center; max-width: 620px; margin: 0 auto; }
    .cta-eyebrow {
      display: inline-block;
      font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: rgba(212,175,55,0.55); margin-bottom: 1rem;
    }
    .cta-title {
      font-family: var(--font-display); font-size: clamp(2.2rem,5vw,3.8rem);
      font-weight: 300; color: var(--cream); line-height: 1.15; margin-bottom: 1.25rem;
    }
    .cta-title em { color: var(--gold); font-style: italic; }
    .cta-inner p { font-size: 0.95rem; color: rgba(250,244,230,0.5); line-height: 1.8; margin-bottom: 2.5rem; }
    .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* ══════════════════════════════════════════
       RESPONSIVE
    ══════════════════════════════════════════ */
    @media (max-width: 900px) {
      .prov-inner { grid-template-columns: 1fr; gap: 3rem; }
    }
    @media (max-width: 640px) {
      .ingredients-grid { grid-template-columns: 1fr; }
      .hero-count-row { gap: 1.5rem; padding: 1rem 1.5rem; }
      .prov-pillars { grid-template-columns: 1fr 1fr; }
    }
  `]
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];
  activeCard: number | null = null;
  activeFilter = '';
  loading = true;
  error = false;
  whatsappUrl = '';

  heroStats = [
    { num: '8', label: 'Sacred Herbs' },
    { num: '100%', label: 'Cold-Pressed' },
    { num: '0', label: 'Chemicals' },
  ];

  provPillars = [
    {
      label: 'Single-Origin Sourced',
      svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C14.6 4 7 11.6 7 21c0 13.5 17 27 17 27s17-13.5 17-27C41 11.6 33.4 4 24 4z"
              fill="none" stroke="#d4af37" stroke-width="1.5"/>
        <circle cx="24" cy="21" r="5" fill="none" stroke="#d4af37" stroke-width="1.5"/>
      </svg>`
    },
    {
      label: 'Cold-Pressed Within 48 hrs',
      svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" fill="none" stroke="#d4af37" stroke-width="1.5"/>
        <path d="M24 10 L24 24 L34 28" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`
    },
    {
      label: 'No Synthetic Additives',
      svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36 L24 12 L36 36Z" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linejoin="round"/>
        <line x1="16" y1="28" x2="32" y2="28" stroke="#d4af37" stroke-width="1.5"/>
      </svg>`
    },
    {
      label: 'Vedic Formulation',
      svg: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38 Q24 8 38 38" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="24" cy="24" r="6" fill="none" stroke="#d4af37" stroke-width="1.5"/>
        <circle cx="24" cy="24" r="2" fill="#d4af37"/>
      </svg>`
    },
  ];

  // Decoration leaf SVG for hero background
  decoLeafSvg = INGREDIENT_ILLUSTRATIONS['curry-leaves'] ?? GENERIC_BOTANICAL;

  // Generic leaf for error state
  genericLeaf = GENERIC_BOTANICAL;

  allTags: string[] = [];

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
      next: data => {
        this.ingredients = data;
        this.allTags = [...new Set(data.map(i => i.tag))].filter(Boolean);
        this.loading = false;
      },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  get filteredIngredients(): Ingredient[] {
    if (!this.activeFilter) return this.ingredients;
    return this.ingredients.filter(i => i.tag === this.activeFilter);
  }

  toggleCard(i: number) {
    this.activeCard = this.activeCard === i ? null : i;
  }

  getIllus(name: string): string {
    return getIllustration(name);
  }
}
