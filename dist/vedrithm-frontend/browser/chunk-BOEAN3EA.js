import {
  IngredientService
} from "./chunk-NLWRHQNA.js";
import {
  RouterLink,
  SiteConfigService
} from "./chunk-SYUN4H56.js";
import {
  CommonModule,
  NgForOf,
  of,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O7KYMSXY.js";

// src/app/services/home-benefit.service.ts
var BENEFITS = [
  { id: 1, icon: "adds-shine", title: "Adds Shine", description: "Restores your hair's natural lustre with nourishing oils and herbs that seal the cuticle and reflect light beautifully.", displayOrder: 1 },
  { id: 2, icon: "promotes-growth", title: "Promotes Growth", description: "Stimulates dormant follicles and improves scalp circulation, creating the ideal environment for faster, stronger hair growth.", displayOrder: 2 },
  { id: 3, icon: "strengthens-roots", title: "Strengthens Roots", description: "Deeply penetrates the scalp to nourish hair bulbs, reducing breakage and anchoring each strand from the very foundation.", displayOrder: 3 },
  { id: 4, icon: "locks-moisture", title: "Locks Moisture", description: "Creates a protective barrier around each strand, preventing moisture loss and keeping hair hydrated all day long.", displayOrder: 4 },
  { id: 5, icon: "calms-scalp", title: "Calms Scalp", description: "Antibacterial and antifungal herbs soothe inflammation, eliminate dandruff, and restore a healthy, balanced scalp.", displayOrder: 5 },
  { id: 6, icon: "delays-greying", title: "Delays Greying", description: "Melanin-preserving herbs protect pigmentation cells, helping maintain your natural hair colour for longer.", displayOrder: 6 }
];
var HomeBenefitService = class _HomeBenefitService {
  getAll() {
    return of(BENEFITS);
  }
  static {
    this.\u0275fac = function HomeBenefitService_Factory(t) {
      return new (t || _HomeBenefitService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeBenefitService, factory: _HomeBenefitService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/home/home.component.ts
function HomeComponent_span_46_Template(rf, ctx) {
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
function HomeComponent_span_47_Template(rf, ctx) {
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
function HomeComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "img", 76);
    \u0275\u0275listener("error", function HomeComponent_div_60_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
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
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r6 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getBenefitImage(b_r5.icon), \u0275\u0275sanitizeUrl)("alt", b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.description);
  }
}
function HomeComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "img", 79)(3, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 82);
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
function HomeComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275element(2, "img", 85);
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
function HomeComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "img", 88);
    \u0275\u0275listener("error", function HomeComponent_div_104_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "assets/ingredients/" + ing_r10.imageSlug + ".png", \u0275\u0275sanitizeUrl)("alt", ing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.tag);
  }
}
function HomeComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275text(2, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', r_r11.text, '"');
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2014 ", r_r11.name, ", ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.product);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(configService, benefitService, ingredientService) {
    this.configService = configService;
    this.benefitService = benefitService;
    this.ingredientService = ingredientService;
    this.benefits = [];
    this.allIngredients = [];
    this.marqueeItems = ["Coconut Oil", "Hibiscus", "Fenugreek", "Amla", "Bhringraj", "Curry Leaves", "Neem", "Sesame", "Pure Ayurveda", "No Chemicals", "Cold Pressed"];
    this.pillars = [
      { imgSrc: "assets/ingredients/Infused.png", title: "Slow Infused", desc: "Preserving full potency of every herb" },
      { imgSrc: "assets/ingredients/VedicFormula.png", title: "Vedic Formulation", desc: "Based on ancient Ayurvedic texts" },
      { imgSrc: "assets/ingredients/noChemicals.png", title: "Zero Chemicals", desc: "No parabens, sulphates, or synthetics" }
    ];
    this.keyBenefits = [
      { imgSrc: "assets/ingredients/locks-moisture.png", title: "Locks Moisture", desc: "Seals hydration deep into every strand for lasting softness" },
      { imgSrc: "assets/ingredients/promotes-growth.png", title: "Promotes Growth", desc: "Stimulates follicles and accelerates healthy hair growth" },
      { imgSrc: "assets/ingredients/strengthens-roots.png", title: "Strengthens Roots", desc: "Fortifies the hair root to prevent breakage and thinning" },
      { imgSrc: "assets/ingredients/SourcedLocally.png", title: "Locally Sourced", desc: "Ingredients harvested fresh from their native Indian regions" }
    ];
    this.featuredReviews = [
      { name: "Anjali M.", text: "My hair fall reduced dramatically in just 6 weeks. The fragrance is divine \u2014 truly Ayurvedic.", product: "Bhringraj & Castor Base" },
      { name: "Priya S.", text: "The quiz result was spot on! My hair growth has visibly improved and the packaging is beautiful.", product: "Amla & Sesame Base" },
      { name: "Rohan D.", text: "My dandruff is almost gone after 3 weeks. Light texture, absorbs fast \u2014 no greasy residue!", product: "Neem & Cinnamon Base" }
    ];
    this.FALLBACK_IMG = "assets/ingredients/promotes-growth.png";
    this.benefitImageMap = [
      { key: "shine", src: "assets/ingredients/adds-shine.png" },
      { key: "growth", src: "assets/ingredients/promotes-growth.png" },
      { key: "moisture", src: "assets/ingredients/locks-moisture.png" },
      { key: "strength", src: "assets/ingredients/strengthens-roots.png" },
      { key: "root", src: "assets/ingredients/strengthens-roots.png" },
      { key: "calm", src: "assets/ingredients/calms-scalp.png" },
      { key: "scalp", src: "assets/ingredients/calms-scalp.png" },
      { key: "grey", src: "assets/ingredients/delays-greying.png" }
    ];
  }
  ngOnInit() {
    this.config = this.configService.snapshot;
    this.benefitService.getAll().subscribe((b) => this.benefits = b);
    this.ingredientService.getAll().subscribe((i) => this.allIngredients = i);
  }
  get ingredientCount() {
    return this.allIngredients.length || 12;
  }
  get featuredIngredients() {
    return this.allIngredients.slice(0, 4);
  }
  getBenefitImage(iconSlug) {
    if (iconSlug)
      return `assets/ingredients/${iconSlug}.png`;
    return this.FALLBACK_IMG;
  }
  onBenefitImgError(event) {
    const img = event.target;
    if (img.src !== this.FALLBACK_IMG)
      img.src = this.FALLBACK_IMG;
  }
  onImgError(event) {
    const img = event.target;
    if (img.src !== this.FALLBACK_IMG)
      img.src = this.FALLBACK_IMG;
  }
  formatHeroTitle(title) {
    if (!title)
      return "";
    const parts = title.split(". ");
    if (parts.length === 2)
      return `${parts[0]}.<br><em>${parts[1]}</em>`;
    return title;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(SiteConfigService), \u0275\u0275directiveInject(HomeBenefitService), \u0275\u0275directiveInject(IngredientService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 169, vars: 12, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-deco-images"], [1, "hero-glow"], [1, "hero-content", "container"], [1, "hero-text"], [1, "hero-eyebrow"], [1, "hero-title", 3, "innerHTML"], [1, "hero-subtitle"], [1, "hero-ctas"], ["routerLink", "/ingredients", 1, "btn-primary"], ["width", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["routerLink", "/quiz", 1, "btn-outline"], [1, "hero-stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-product"], [1, "product-glow-ring"], [1, "product-frame"], ["src", "assets/images/product.jpg", "alt", "Vedhrithm Herbal Hair Oil", 1, "product-img"], [1, "scroll-hint"], [1, "scroll-line"], [1, "marquee-strip"], [1, "marquee-track"], [4, "ngFor", "ngForOf"], [1, "benefits"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "section-desc"], [1, "benefits-grid"], ["class", "benefit-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "key-benefits-row"], [1, "section-header", "center"], [1, "kb-grid"], ["class", "kb-item", 4, "ngFor", "ngForOf"], [1, "story"], [1, "story-bg-pattern"], [1, "story-inner"], [1, "story-image-side"], [1, "story-img-frame"], ["src", "assets/images/logo.jpg", "alt", "Vedhrithm Brand", 1, "story-logo-img"], [1, "story-text-side"], [1, "story-body"], [1, "story-pillars"], ["class", "pillar", 4, "ngFor", "ngForOf"], [1, "ingredients-preview"], [1, "ingr-preview-grid"], ["class", "ingr-preview-card", 4, "ngFor", "ngForOf"], [1, "ingr-cta"], ["routerLink", "/ingredients", 1, "btn-outline"], [1, "social-proof"], [1, "proof-inner"], [1, "proof-stat"], [1, "proof-num"], [1, "proof-label"], [1, "proof-divider"], ["routerLink", "/reviews", 1, "proof-cta"], ["width", "14", "viewBox", "0 0 16 16", "fill", "none"], [1, "review-teaser"], [1, "teaser-reviews"], ["class", "teaser-card", 4, "ngFor", "ngForOf"], [1, "ingr-cta", 2, "margin-top", "2.5rem"], ["routerLink", "/reviews", 1, "btn-outline"], [1, "quiz-cta-section"], [1, "quiz-cta-bg"], ["src", "assets/ingredients/VedicFormula.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd1"], ["src", "assets/ingredients/noChemicals.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd2"], [1, "quiz-cta-inner"], ["routerLink", "/quiz", 1, "btn-primary"], [1, "benefit-card"], [1, "benefit-icon-wrap"], ["loading", "lazy", 1, "benefit-icon-img", 3, "error", "src", "alt"], [1, "kb-item"], [1, "kb-img-wrap"], ["loading", "lazy", 1, "kb-img", 3, "src", "alt"], [1, "kb-halo"], [1, "kb-title"], [1, "kb-desc"], [1, "pillar"], [1, "pillar-img-wrap"], ["loading", "lazy", 1, "pillar-img", 3, "src", "alt"], [1, "ingr-preview-card"], [1, "ingr-visual"], ["loading", "lazy", 1, "ingr-preview-img", 3, "error", "src", "alt"], [1, "ingr-name"], [1, "ingr-benefit"], [1, "teaser-card"], [1, "teaser-stars"], [1, "teaser-text"], [1, "teaser-author"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "\u2726 Ayurvedic Tradition Since Ancient Times \u2726");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "h1", 7);
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "a", 10)(13, "span");
        \u0275\u0275text(14, "Explore Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 11);
        \u0275\u0275element(16, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 13);
        \u0275\u0275text(18, "Find Your Hair Oil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 17);
        \u0275\u0275text(24, "Ayurvedic Herbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 18);
        \u0275\u0275elementStart(26, "div", 15)(27, "span", 16);
        \u0275\u0275text(28, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "Natural");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "div", 18);
        \u0275\u0275elementStart(32, "div", 15)(33, "span", 16);
        \u0275\u0275text(34, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 17);
        \u0275\u0275text(36, "Chemicals");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 19);
        \u0275\u0275element(38, "div", 20);
        \u0275\u0275elementStart(39, "div", 21);
        \u0275\u0275element(40, "img", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 23);
        \u0275\u0275element(42, "div", 24)(43, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 25)(45, "div", 26);
        \u0275\u0275template(46, HomeComponent_span_46_Template, 2, 1, "span", 27)(47, HomeComponent_span_47_Template, 2, 1, "span", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "section", 28)(49, "div", 29)(50, "div", 30)(51, "span", 31);
        \u0275\u0275text(52, "Why Vedhrithm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h2", 32);
        \u0275\u0275text(54, "Transformative ");
        \u0275\u0275elementStart(55, "span");
        \u0275\u0275text(56, "Benefits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "p", 33);
        \u0275\u0275text(58, "Every drop carries centuries of Ayurvedic knowledge, balanced for your modern lifestyle.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 34);
        \u0275\u0275template(60, HomeComponent_div_60_Template, 7, 6, "div", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "section", 36)(62, "div", 29)(63, "div", 37)(64, "span", 31);
        \u0275\u0275text(65, "What It Does");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "h2", 32);
        \u0275\u0275text(67, "Four Pillars of ");
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69, "Hair Health");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 38);
        \u0275\u0275template(71, HomeComponent_div_71_Template, 8, 4, "div", 39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "section", 40);
        \u0275\u0275element(73, "div", 41);
        \u0275\u0275elementStart(74, "div", 29)(75, "div", 42)(76, "div", 43)(77, "div", 44);
        \u0275\u0275element(78, "img", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 46)(80, "span", 31);
        \u0275\u0275text(81, "Our Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "h2", 32);
        \u0275\u0275text(83, "Where ");
        \u0275\u0275elementStart(84, "span");
        \u0275\u0275text(85, "Vedas");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, " Meet");
        \u0275\u0275element(87, "br");
        \u0275\u0275text(88, "Modern Wellness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 47)(90, "p");
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 48);
        \u0275\u0275template(93, HomeComponent_div_93_Template, 8, 4, "div", 49);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(94, "section", 50)(95, "div", 29)(96, "div", 37)(97, "span", 31);
        \u0275\u0275text(98, "Key Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h2", 32);
        \u0275\u0275text(100, "Sourced from ");
        \u0275\u0275elementStart(101, "span");
        \u0275\u0275text(102, "Nature's Pharmacy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(103, "div", 51);
        \u0275\u0275template(104, HomeComponent_div_104_Template, 7, 4, "div", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 53)(106, "a", 54);
        \u0275\u0275text(107);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(108, "svg", 11);
        \u0275\u0275element(109, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(110, "section", 55)(111, "div", 29)(112, "div", 56)(113, "div", 57)(114, "span", 58);
        \u0275\u0275text(115, "4.9\u2605");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 59);
        \u0275\u0275text(117, "Average Rating");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(118, "div", 60);
        \u0275\u0275elementStart(119, "div", 57)(120, "span", 58);
        \u0275\u0275text(121, "500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "span", 59);
        \u0275\u0275text(123, "Happy Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(124, "div", 60);
        \u0275\u0275elementStart(125, "div", 57)(126, "span", 58);
        \u0275\u0275text(127, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "span", 59);
        \u0275\u0275text(129, "Natural Ingredients");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(130, "div", 60);
        \u0275\u0275elementStart(131, "a", 61);
        \u0275\u0275text(132, " Read Reviews ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(133, "svg", 62);
        \u0275\u0275element(134, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(135, "section", 63)(136, "div", 29)(137, "div", 37)(138, "span", 31);
        \u0275\u0275text(139, "Real Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h2", 32);
        \u0275\u0275text(141, "Loved by Our ");
        \u0275\u0275elementStart(142, "span");
        \u0275\u0275text(143, "Community");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(144, "div", 64);
        \u0275\u0275template(145, HomeComponent_div_145_Template, 9, 3, "div", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 66)(147, "a", 67);
        \u0275\u0275text(148, " See All Reviews ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(149, "svg", 11);
        \u0275\u0275element(150, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(151, "section", 68)(152, "div", 69);
        \u0275\u0275element(153, "img", 70)(154, "img", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 29)(156, "div", 72)(157, "span", 31);
        \u0275\u0275text(158, "Personalised For You");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "h2", 32);
        \u0275\u0275text(160, "Not Sure ");
        \u0275\u0275elementStart(161, "span");
        \u0275\u0275text(162, "Which Oil?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(163, "p");
        \u0275\u0275text(164, "Answer 4 quick questions about your hair. We'll recommend the perfect Vedhrithm formulation for your unique needs.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "a", 73);
        \u0275\u0275text(166, " Take the Hair Quiz ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(167, "svg", 11);
        \u0275\u0275element(168, "path", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", ctx.formatHeroTitle(ctx.config.heroTitle), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.heroSubtitle);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.ingredientCount);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngForOf", ctx.marqueeItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.marqueeItems);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.benefits);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.keyBenefits);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.config.brandStory);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pillars);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.featuredIngredients);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" View All ", ctx.ingredientCount, " Ingredients ");
        \u0275\u0275advance(38);
        \u0275\u0275property("ngForOf", ctx.featuredReviews);
      }
    }, dependencies: [RouterLink, CommonModule, NgForOf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 80% 60% at 60% 50%,\n      rgba(26, 74, 46, 0.35) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 40% 40% at 20% 80%,\n      rgba(212, 175, 55, 0.05) 0%,\n      transparent 60%);\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 74, 46, 0.4) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  padding-top: 4rem;\n  padding-bottom: 6rem;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  color: var(--gold);\n  opacity: 0.8;\n  display: block;\n  margin-bottom: 1.25rem;\n  animation: fadeInUp 0.8s ease forwards;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.8rem, 5vw, 5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n  animation: fadeInUp 0.8s 0.15s ease both;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n  font-weight: 400;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.8;\n  max-width: 480px;\n  margin-bottom: 2.5rem;\n  animation: fadeInUp 0.8s 0.3s ease both;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n  animation: fadeInUp 0.8s 0.45s ease both;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  animation: fadeInUp 0.8s 0.6s ease both;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--gold);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border-gold);\n}\n.hero-product[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  animation: fadeIn 1s 0.4s ease both;\n}\n.product-glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  height: 380px;\n  border-radius: 50%;\n  border: 1px solid rgba(212, 175, 55, 0.15);\n  box-shadow: 0 0 80px rgba(212, 175, 55, 0.1), inset 0 0 80px rgba(212, 175, 55, 0.05);\n}\n.product-frame[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  animation: float 5s ease-in-out infinite;\n}\n.product-img[_ngcontent-%COMP%] {\n  max-width: 320px;\n  width: 100%;\n  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6));\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  opacity: 0.4;\n}\n.scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--gold));\n}\n.scroll-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.marquee-strip[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--forest-accent);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n  padding: 0.85rem 0;\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n}\n.marquee-track[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  gap: 2rem;\n  animation: _ngcontent-%COMP%_marqueeScroll 28s linear infinite;\n  will-change: transform;\n}\n.marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--gold);\n  white-space: nowrap;\n  opacity: 0.85;\n}\n.marquee-strip[_ngcontent-%COMP%]:hover   .marquee-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n@keyframes _ngcontent-%COMP%_marqueeScroll {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.benefits[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.section-header.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-desc[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.6);\n  max-width: 500px;\n  line-height: 1.8;\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 2rem;\n  transition: all 0.4s ease;\n  animation: fadeInUp 0.6s ease both;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-gold);\n}\n.benefit-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 1.25rem;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.07);\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.35s ease, background 0.35s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover   .benefit-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.14);\n  transform: scale(1.1) translateY(-3px);\n}\n.benefit-icon-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  filter: drop-shadow(0 3px 10px rgba(212, 175, 55, 0.35));\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  color: var(--gold);\n  margin-bottom: 0.6rem;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.75;\n}\n.key-benefits-row[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--forest-deep, #051610);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n}\n.kb-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  margin-top: 3.5rem;\n}\n.kb-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.kb-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin-bottom: 1.5rem;\n}\n.kb-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n  filter: drop-shadow(0 6px 18px rgba(212, 175, 55, 0.3));\n  transition: transform 0.4s ease, filter 0.4s ease;\n}\n.kb-item[_ngcontent-%COMP%]:hover   .kb-img[_ngcontent-%COMP%] {\n  transform: scale(1.1) translateY(-6px);\n  filter: drop-shadow(0 12px 28px rgba(212, 175, 55, 0.5));\n}\n.kb-halo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 20px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(212, 175, 55, 0.2) 0%,\n      transparent 70%);\n}\n.kb-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.kb-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.7;\n  max-width: 180px;\n}\n.story[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  position: relative;\n  background: var(--forest-mid);\n}\n.story-bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.story-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 6rem;\n  align-items: center;\n  position: relative;\n}\n.story-image-side[_ngcontent-%COMP%] {\n  position: relative;\n}\n.story-img-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid var(--border-gold);\n  box-shadow: var(--shadow-gold);\n}\n.story-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.story-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.9;\n  margin-bottom: 1.25rem;\n}\n.story-pillars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.pillar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  background: rgba(212, 175, 55, 0.04);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.pillar[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.08);\n  transform: translateX(4px);\n}\n.pillar-img-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n}\n.pillar-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));\n}\n.pillar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--gold);\n}\n.pillar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.6);\n}\n.ingredients-preview[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.ingr-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n  margin-top: 3rem;\n}\n.ingr-preview-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 1.75rem 1.25rem;\n  text-align: center;\n  transition: all 0.35s ease;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  box-shadow: var(--shadow-gold);\n}\n.ingr-visual[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n}\n.ingr-preview-img[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 14px rgba(212, 175, 55, 0.35));\n  transition: transform 0.3s ease, filter 0.3s ease;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.06);\n  padding: 6px;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover   .ingr-preview-img[_ngcontent-%COMP%] {\n  transform: scale(1.12) translateY(-4px);\n  filter: drop-shadow(0 10px 24px rgba(212, 175, 55, 0.55));\n}\n.ingr-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.ingr-benefit[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.6;\n}\n.ingr-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 3rem;\n}\n.social-proof[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  background: var(--forest-accent);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n}\n.proof-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.proof-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.proof-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--gold);\n  font-weight: 300;\n}\n.proof-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.proof-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border-gold);\n}\n.proof-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.5rem;\n  border: 1px solid var(--border-gold);\n  border-radius: 50px;\n  font-size: 0.78rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.proof-cta[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.1);\n  border-color: var(--gold);\n}\n.review-teaser[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n.teaser-reviews[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 3rem;\n}\n.teaser-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 2rem;\n  transition: all 0.35s ease;\n}\n.teaser-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(212, 175, 55, 0.4);\n  box-shadow: var(--shadow-gold);\n}\n.teaser-stars[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  letter-spacing: 2px;\n}\n.teaser-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  font-style: italic;\n  margin-bottom: 1.25rem;\n}\n.teaser-author[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(250, 244, 230, 0.45);\n  letter-spacing: 0.05em;\n}\n.teaser-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  opacity: 0.7;\n}\n.quiz-cta-section[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  background: var(--forest-mid);\n  position: relative;\n  overflow: hidden;\n}\n.quiz-cta-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.cta-deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: contain;\n  opacity: 0.08;\n}\n.cd1[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: -8%;\n  left: -3%;\n  transform: rotate(-20deg);\n}\n.cd2[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  bottom: -8%;\n  right: -2%;\n  transform: rotate(20deg);\n}\n.quiz-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.quiz-cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.65);\n  margin: 1.25rem 0 2.5rem;\n  line-height: 1.8;\n}\n@media (max-width: 960px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .hero-product[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .story-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .story-image-side[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .ingr-preview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .teaser-reviews[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 520px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media (max-width: 600px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n  .proof-inner[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .proof-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 370 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-BOEAN3EA.js.map
