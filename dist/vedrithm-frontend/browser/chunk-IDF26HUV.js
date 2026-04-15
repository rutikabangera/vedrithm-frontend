import {
  IngredientService
} from "./chunk-QMFA6Q37.js";
import {
  RouterLink
} from "./chunk-F3IBTWQF.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  SiteConfigService,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QU5HRPSL.js";

// src/app/services/home-benefit.service.ts
var HomeBenefitService = class _HomeBenefitService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get("https://vedrithm-backend-1.onrender.com/api/benefits");
  }
  static {
    this.\u0275fac = function HomeBenefitService_Factory(t) {
      return new (t || _HomeBenefitService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeBenefitService, factory: _HomeBenefitService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/home/home.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => [1, 2, 3, 4];
function HomeComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1, " \xA0\u2726\xA0\xA0");
  }
}
function HomeComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r2, " \xA0\u2726\xA0\xA0");
  }
}
function HomeComponent_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function HomeComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, HomeComponent_div_62_div_1_Template, 1, 0, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function HomeComponent_div_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "img", 71);
    \u0275\u0275listener("error", function HomeComponent_div_63_div_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onBenefitImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r6 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getBenefitImage(b_r5.title), \u0275\u0275sanitizeUrl)("alt", b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.description);
  }
}
function HomeComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, HomeComponent_div_63_div_1_Template, 7, 6, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.benefits);
  }
}
function HomeComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "img", 74)(3, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kb_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", kb_r7.imgSrc, \u0275\u0275sanitizeUrl)("alt", kb_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kb_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kb_r7.desc);
  }
}
function HomeComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275element(2, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r8.imgSrc, \u0275\u0275sanitizeUrl)("alt", p_r8.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8.desc);
  }
}
function HomeComponent_div_106_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "img", 85);
    \u0275\u0275listener("error", function HomeComponent_div_106_div_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getIngredientPreviewImage(ing_r10.imageSlug), \u0275\u0275sanitizeUrl)("alt", ing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.tag);
  }
}
function HomeComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, HomeComponent_div_106_div_1_Template, 7, 4, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.featuredIngredients);
  }
}
function HomeComponent_div_107_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function HomeComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, HomeComponent_div_107_div_1_Template, 1, 0, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
var HomeComponent = class _HomeComponent {
  constructor(configService, benefitService, ingredientService) {
    this.configService = configService;
    this.benefitService = benefitService;
    this.ingredientService = ingredientService;
    this.benefits = [];
    this.allIngredients = [];
    this.benefitsLoading = true;
    this.ingredientsLoading = true;
    this.marqueeItems = ["Coconut Oil", "Hibiscus", "Fenugreek", "Amla", "Bhringraj", "Curry Leaves", "Neem", "Sesame", "Pure Ayurveda", "No Chemicals", "Cold Pressed"];
    this.pillars = [
      {
        imgSrc: "assets/ingredients/Infused.png",
        title: "Slow Infused",
        desc: "Preserving full potency of every herb"
      },
      {
        imgSrc: "assets/ingredients/VedicFormula.png",
        title: "Vedic Formulation",
        desc: "Based on ancient Ayurvedic texts"
      },
      {
        imgSrc: "assets/ingredients/noChemicals.png",
        title: "Zero Chemicals",
        desc: "No parabens, sulphates, or synthetics"
      }
    ];
    this.keyBenefits = [
      {
        imgSrc: "assets/ingredients/locks-moisture.png",
        title: "Locks Moisture",
        desc: "Seals hydration deep into every strand for lasting softness"
      },
      {
        imgSrc: "assets/ingredients/promotes-growth.png",
        title: "Promotes Growth",
        desc: "Stimulates follicles and accelerates healthy hair growth"
      },
      {
        imgSrc: "assets/ingredients/strengthens-roots.png",
        title: "Strengthens Roots",
        desc: "Fortifies the hair root to prevent breakage and thinning"
      },
      {
        imgSrc: "assets/ingredients/SourcedLocally.png",
        title: "Locally Sourced",
        desc: "Ingredients harvested fresh from their native Indian regions"
      }
    ];
    this.ingredientPreviewImages = {
      "sesame": "assets/ingredients/sesame.png",
      "coconut-oil": "assets/ingredients/coconut-oil.png",
      "hibiscus": "assets/ingredients/hibiscus.png",
      "fenugreek": "assets/ingredients/fenugreek.png",
      "amla": "assets/ingredients/amla.png",
      "bhringraj": "assets/ingredients/bhringraj.png",
      "curry-leaves": "assets/ingredients/curry-leaves.png",
      "neem": "assets/ingredients/neem.png",
      "brahmi": "assets/ingredients/brahmi.png",
      "onion": "assets/ingredients/onion.png",
      "castor": "assets/ingredients/castor.png",
      "aloe-vera": "assets/ingredients/aloe-vera.png"
    };
    this.FALLBACK_IMG = "assets/ingredients/promotes-growth.png";
    this.benefitImageMap = [
      { key: "growth", src: "assets/ingredients/promotes-growth.png" },
      { key: "moisture", src: "assets/ingredients/locks-moisture.png" },
      { key: "strength", src: "assets/ingredients/strengthens-roots.png" },
      { key: "root", src: "assets/ingredients/strengthens-roots.png" },
      { key: "local", src: "assets/ingredients/SourcedLocally.png" },
      { key: "source", src: "assets/ingredients/SourcedLocally.png" },
      { key: "vedic", src: "assets/ingredients/VedicFormula.png" },
      { key: "formula", src: "assets/ingredients/VedicFormula.png" },
      { key: "chemical", src: "assets/ingredients/noChemicals.png" },
      { key: "natural", src: "assets/ingredients/adds-shine.png" },
      { key: "infus", src: "assets/ingredients/Infused.png" },
      { key: "cold", src: "assets/ingredients/Infused.png" },
      { key: "press", src: "assets/ingredients/Infused.png" },
      { key: "sesame", src: "assets/ingredients/sesame.png" },
      { key: "calm", src: "assets/ingredients/calms-scalp.png" },
      { key: "delays", src: "assets/ingredients/delays-greying.png" }
    ];
  }
  ngOnInit() {
    this.config = this.configService.snapshot;
    this.configService.stream.subscribe((c) => this.config = c);
    this.benefitService.getAll().subscribe({
      next: (b) => {
        this.benefits = b;
        this.benefitsLoading = false;
      },
      error: () => {
        this.benefits = [];
        this.benefitsLoading = false;
      }
    });
    this.ingredientService.getAll().subscribe({
      next: (i) => {
        this.allIngredients = i;
        this.ingredientsLoading = false;
      },
      error: () => {
        this.allIngredients = [];
        this.ingredientsLoading = false;
      }
    });
  }
  get ingredientCount() {
    return this.allIngredients.length || 8;
  }
  get featuredIngredients() {
    return this.allIngredients.slice(0, 4);
  }
  /** Returns the best-matching image for a benefit title, or a fallback */
  getBenefitImage(title) {
    const lower = title.toLowerCase();
    const match = this.benefitImageMap.find((m) => lower.includes(m.key));
    return match ? match.src : "assets/ingredients/promotes-growth.png";
  }
  /** Swap broken benefit image to fallback silently */
  onBenefitImgError(event) {
    const img = event.target;
    const fallback = "assets/ingredients/promotes-growth.png";
    if (img.src !== fallback)
      img.src = fallback;
  }
  getIngredientPreviewImage(slug) {
    return this.ingredientPreviewImages[slug] ?? this.FALLBACK_IMG;
  }
  /** Called by (error) binding — swaps broken src to fallback silently */
  onImgError(event) {
    const img = event.target;
    if (img.src !== this.FALLBACK_IMG) {
      img.src = this.FALLBACK_IMG;
    }
  }
  formatHeroTitle(title) {
    if (!title)
      return "";
    const parts = title.split(". ");
    if (parts.length === 2) {
      return `${parts[0]}.<br><em>${parts[1]}</em>`;
    }
    return title;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(SiteConfigService), \u0275\u0275directiveInject(HomeBenefitService), \u0275\u0275directiveInject(IngredientService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 131, vars: 13, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-deco-images"], ["src", "assets/ingredients/promotes-growth.png", "aria-hidden", "true", "alt", "", 1, "deco-img", "di1"], ["src", "assets/ingredients/strengthens-roots.png", "aria-hidden", "true", "alt", "", 1, "deco-img", "di2"], ["src", "assets/ingredients/locks-moisture.png", "aria-hidden", "true", "alt", "", 1, "deco-img", "di3"], [1, "hero-glow"], [1, "hero-content", "container"], [1, "hero-text"], [1, "hero-eyebrow"], [1, "hero-title", 3, "innerHTML"], [1, "hero-subtitle"], [1, "hero-ctas"], ["routerLink", "/ingredients", 1, "btn-primary"], ["width", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["routerLink", "/quiz", 1, "btn-outline"], [1, "hero-stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-product"], [1, "product-glow-ring"], [1, "product-frame"], ["src", "assets/images/product.jpg", "alt", "Vedrithm Herbal Hair Oil", 1, "product-img"], [1, "scroll-hint"], [1, "scroll-line"], [1, "marquee-strip"], [1, "marquee-track"], [4, "ngFor", "ngForOf"], [1, "benefits"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "section-desc"], ["class", "loading-grid", 4, "ngIf"], ["class", "benefits-grid", 4, "ngIf"], [1, "key-benefits-row"], [1, "section-header", "center"], [1, "kb-grid"], ["class", "kb-item", 4, "ngFor", "ngForOf"], [1, "story"], [1, "story-bg-pattern"], [1, "story-inner"], [1, "story-image-side"], [1, "story-img-frame"], ["src", "assets/images/logo.jpg", "alt", "Vedrithm Brand", 1, "story-logo-img"], [1, "story-text-side"], [1, "story-body"], [1, "story-pillars"], ["class", "pillar", 4, "ngFor", "ngForOf"], [1, "ingredients-preview"], ["class", "ingr-preview-grid", 4, "ngIf"], ["class", "loading-grid four-col", 4, "ngIf"], [1, "ingr-cta"], ["routerLink", "/ingredients", 1, "btn-outline"], [1, "quiz-cta-section"], [1, "quiz-cta-bg"], ["src", "assets/ingredients/VedicFormula.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd1"], ["src", "assets/ingredients/noChemicals.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd2"], [1, "quiz-cta-inner"], ["routerLink", "/quiz", 1, "btn-primary"], [1, "loading-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "benefits-grid"], ["class", "benefit-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "benefit-card"], [1, "benefit-icon-wrap"], ["loading", "lazy", 1, "benefit-icon-img", 3, "error", "src", "alt"], [1, "kb-item"], [1, "kb-img-wrap"], ["loading", "lazy", 1, "kb-img", 3, "src", "alt"], [1, "kb-halo"], [1, "kb-title"], [1, "kb-desc"], [1, "pillar"], [1, "pillar-img-wrap"], ["loading", "lazy", 1, "pillar-img", 3, "src", "alt"], [1, "ingr-preview-grid"], ["class", "ingr-preview-card", 4, "ngFor", "ngForOf"], [1, "ingr-preview-card"], [1, "ingr-visual"], ["loading", "lazy", 1, "ingr-preview-img", 3, "error", "src", "alt"], [1, "ingr-name"], [1, "ingr-benefit"], [1, "loading-grid", "four-col"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3)(4, "img", 4)(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10, "\u2726 Ayurvedic Tradition Since Ancient Times \u2726");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "h1", 10);
        \u0275\u0275elementStart(12, "p", 11);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "a", 13)(16, "span");
        \u0275\u0275text(17, "Explore Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 14);
        \u0275\u0275element(19, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "a", 16);
        \u0275\u0275text(21, "Find Your Hair Oil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "span", 19);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 20);
        \u0275\u0275text(27, "Ayurvedic Herbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "div", 21);
        \u0275\u0275elementStart(29, "div", 18)(30, "span", 19);
        \u0275\u0275text(31, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 20);
        \u0275\u0275text(33, "Natural");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(34, "div", 21);
        \u0275\u0275elementStart(35, "div", 18)(36, "span", 19);
        \u0275\u0275text(37, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 20);
        \u0275\u0275text(39, "Chemicals");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 22);
        \u0275\u0275element(41, "div", 23);
        \u0275\u0275elementStart(42, "div", 24);
        \u0275\u0275element(43, "img", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 26);
        \u0275\u0275element(45, "div", 27)(46, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 28)(48, "div", 29);
        \u0275\u0275template(49, HomeComponent_span_49_Template, 2, 1, "span", 30)(50, HomeComponent_span_50_Template, 2, 1, "span", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "section", 31)(52, "div", 32)(53, "div", 33)(54, "span", 34);
        \u0275\u0275text(55, "Why Vedrithm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h2", 35);
        \u0275\u0275text(57, "Transformative ");
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59, "Benefits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "p", 36);
        \u0275\u0275text(61, "Every drop carries centuries of Ayurvedic knowledge, balanced for your modern lifestyle.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(62, HomeComponent_div_62_Template, 2, 2, "div", 37)(63, HomeComponent_div_63_Template, 2, 1, "div", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "section", 39)(65, "div", 32)(66, "div", 40)(67, "span", 34);
        \u0275\u0275text(68, "What It Does");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "h2", 35);
        \u0275\u0275text(70, "Four Pillars of ");
        \u0275\u0275elementStart(71, "span");
        \u0275\u0275text(72, "Hair Health");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 41);
        \u0275\u0275template(74, HomeComponent_div_74_Template, 8, 4, "div", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "section", 43);
        \u0275\u0275element(76, "div", 44);
        \u0275\u0275elementStart(77, "div", 32)(78, "div", 45)(79, "div", 46)(80, "div", 47);
        \u0275\u0275element(81, "img", 48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 49)(83, "span", 34);
        \u0275\u0275text(84, "Our Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "h2", 35);
        \u0275\u0275text(86, "Where ");
        \u0275\u0275elementStart(87, "span");
        \u0275\u0275text(88, "Vedas");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " Meet");
        \u0275\u0275element(90, "br");
        \u0275\u0275text(91, "Modern Wellness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 50)(93, "p");
        \u0275\u0275text(94);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 51);
        \u0275\u0275template(96, HomeComponent_div_96_Template, 8, 4, "div", 52);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(97, "section", 53)(98, "div", 32)(99, "div", 40)(100, "span", 34);
        \u0275\u0275text(101, "Key Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "h2", 35);
        \u0275\u0275text(103, "Sourced from ");
        \u0275\u0275elementStart(104, "span");
        \u0275\u0275text(105, "Nature's Pharmacy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(106, HomeComponent_div_106_Template, 2, 1, "div", 54)(107, HomeComponent_div_107_Template, 2, 2, "div", 55);
        \u0275\u0275elementStart(108, "div", 56)(109, "a", 57);
        \u0275\u0275text(110);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(111, "svg", 14);
        \u0275\u0275element(112, "path", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(113, "section", 58)(114, "div", 59);
        \u0275\u0275element(115, "img", 60)(116, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 32)(118, "div", 62)(119, "span", 34);
        \u0275\u0275text(120, "Personalised For You");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "h2", 35);
        \u0275\u0275text(122, "Not Sure ");
        \u0275\u0275elementStart(123, "span");
        \u0275\u0275text(124, "Which Oil?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "p");
        \u0275\u0275text(126, "Answer 4 quick questions about your hair. We'll recommend the perfect Vedrithm formulation for your unique needs.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "a", 63);
        \u0275\u0275text(128, " Take the Hair Quiz ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(129, "svg", 14);
        \u0275\u0275element(130, "path", 15);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("innerHTML", ctx.formatHeroTitle(ctx.config.heroTitle), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.heroSubtitle);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.ingredientCount);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngForOf", ctx.marqueeItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.marqueeItems);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.benefitsLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.benefitsLoading);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.keyBenefits);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.config.brandStory);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pillars);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", !ctx.ingredientsLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ingredientsLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" View All ", ctx.ingredientCount, " Ingredients ");
      }
    }, dependencies: [RouterLink, CommonModule, NgForOf, NgIf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 80% 60% at 60% 50%,\n      rgba(26, 74, 46, 0.35) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 40% 40% at 20% 80%,\n      rgba(212, 175, 55, 0.05) 0%,\n      transparent 60%);\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 74, 46, 0.4) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-deco-images[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: contain;\n  opacity: 0.1;\n}\n.di1[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  top: 8%;\n  left: 3%;\n  transform: rotate(-12deg);\n  animation: _ngcontent-%COMP%_decoFloat 5s ease-in-out infinite;\n}\n.di2[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  bottom: 12%;\n  right: 4%;\n  transform: rotate(15deg);\n  animation: _ngcontent-%COMP%_decoFloat 5s 1.5s ease-in-out infinite;\n}\n.di3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  top: 55%;\n  left: 48%;\n  transform: rotate(5deg);\n  animation: _ngcontent-%COMP%_decoFloat 5s 0.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_decoFloat {\n  0%, 100% {\n    transform: translateY(0) rotate(var(--r,0deg));\n  }\n  50% {\n    transform: translateY(-12px) rotate(var(--r,0deg));\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  padding-top: 4rem;\n  padding-bottom: 6rem;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  color: var(--gold);\n  opacity: 0.8;\n  display: block;\n  margin-bottom: 1.25rem;\n  animation: fadeInUp 0.8s ease forwards;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.8rem, 5vw, 5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n  animation: fadeInUp 0.8s 0.15s ease both;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n  font-weight: 400;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.8;\n  max-width: 480px;\n  margin-bottom: 2.5rem;\n  animation: fadeInUp 0.8s 0.3s ease both;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n  animation: fadeInUp 0.8s 0.45s ease both;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  animation: fadeInUp 0.8s 0.6s ease both;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--gold);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border-gold);\n}\n.hero-product[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  animation: fadeIn 1s 0.4s ease both;\n}\n.product-glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  height: 380px;\n  border-radius: 50%;\n  border: 1px solid rgba(212, 175, 55, 0.15);\n  box-shadow: 0 0 80px rgba(212, 175, 55, 0.1), inset 0 0 80px rgba(212, 175, 55, 0.05);\n}\n.product-frame[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  animation: float 5s ease-in-out infinite;\n}\n.product-img[_ngcontent-%COMP%] {\n  max-width: 320px;\n  width: 100%;\n  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6));\n}\n.product-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  right: 5%;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid var(--gold);\n  background: rgba(5, 22, 16, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: float 5s 1s ease-in-out infinite;\n}\n.badge-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.badge-top[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--gold);\n  line-height: 1.2;\n}\n.badge-bot[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.55rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  opacity: 0.4;\n}\n.scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--gold));\n}\n.scroll-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.marquee-strip[_ngcontent-%COMP%] {\n  background: var(--forest-accent);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n  padding: 0.85rem 0;\n  overflow: hidden;\n}\n.marquee-track[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_marqueeScroll 25s linear infinite;\n}\n.marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold);\n  padding: 0 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_marqueeScroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.benefits[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.section-header.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-desc[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.6);\n  max-width: 500px;\n  line-height: 1.8;\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 2rem;\n  transition: all 0.4s ease;\n  animation: fadeInUp 0.6s ease both;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-gold);\n}\n.benefit-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 1.25rem;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.07);\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.35s ease, background 0.35s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover   .benefit-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.14);\n  transform: scale(1.1) translateY(-3px);\n}\n.benefit-icon-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  filter: drop-shadow(0 3px 10px rgba(212, 175, 55, 0.35));\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  color: var(--gold);\n  margin-bottom: 0.6rem;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.75;\n}\n.key-benefits-row[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--forest-deep, #051610);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n}\n.kb-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  margin-top: 3.5rem;\n}\n.kb-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.kb-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin-bottom: 1.5rem;\n}\n.kb-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n  filter: drop-shadow(0 6px 18px rgba(212, 175, 55, 0.3));\n  transition: transform 0.4s ease, filter 0.4s ease;\n}\n.kb-item[_ngcontent-%COMP%]:hover   .kb-img[_ngcontent-%COMP%] {\n  transform: scale(1.1) translateY(-6px);\n  filter: drop-shadow(0 12px 28px rgba(212, 175, 55, 0.5));\n}\n.kb-halo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 20px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(212, 175, 55, 0.2) 0%,\n      transparent 70%);\n}\n.kb-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.kb-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.7;\n  max-width: 180px;\n}\n.story[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  position: relative;\n  background: var(--forest-mid);\n}\n.story-bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.story-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 6rem;\n  align-items: center;\n  position: relative;\n}\n.story-image-side[_ngcontent-%COMP%] {\n  position: relative;\n}\n.story-img-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid var(--border-gold);\n  box-shadow: var(--shadow-gold);\n}\n.story-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.story-ornament[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  right: 20px;\n}\n.ornament-circle[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 1px solid var(--gold);\n  background: rgba(5, 22, 16, 0.95);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ornament-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--gold);\n  line-height: 1.6;\n}\n.story-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.9;\n  margin-bottom: 1.25rem;\n}\n.story-pillars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.pillar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  background: rgba(212, 175, 55, 0.04);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.pillar[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.08);\n  transform: translateX(4px);\n}\n.pillar-img-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n}\n.pillar-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));\n}\n.pillar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--gold);\n}\n.pillar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.6);\n}\n.ingredients-preview[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.ingr-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n  margin-top: 3rem;\n}\n.ingr-preview-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 1.75rem 1.25rem;\n  text-align: center;\n  transition: all 0.35s ease;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  box-shadow: var(--shadow-gold);\n}\n.ingr-visual[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n}\n.ingr-preview-img[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 14px rgba(212, 175, 55, 0.35));\n  transition: transform 0.3s ease, filter 0.3s ease;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.06);\n  padding: 6px;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover   .ingr-preview-img[_ngcontent-%COMP%] {\n  transform: scale(1.12) translateY(-4px);\n  filter: drop-shadow(0 10px 24px rgba(212, 175, 55, 0.55));\n}\n.ingr-emoji[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ingr-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.ingr-benefit[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.6;\n}\n.ingr-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 3rem;\n}\n.quiz-cta-section[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  background: var(--forest-mid);\n  position: relative;\n  overflow: hidden;\n}\n.quiz-cta-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.cta-deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: contain;\n  opacity: 0.08;\n}\n.cd1[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: -8%;\n  left: -3%;\n  transform: rotate(-20deg);\n}\n.cd2[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  bottom: -8%;\n  right: -2%;\n  transform: rotate(20deg);\n}\n.quiz-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.quiz-cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.65);\n  margin: 1.25rem 0 2.5rem;\n  line-height: 1.8;\n}\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.loading-grid.four-col[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 3rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  height: 160px;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@media (max-width: 960px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .hero-product[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .story-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .story-image-side[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .ingr-preview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .loading-grid.four-col[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 354 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-IDF26HUV.js.map
