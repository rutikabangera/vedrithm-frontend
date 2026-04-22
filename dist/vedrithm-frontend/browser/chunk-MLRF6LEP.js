import {
  IngredientService
} from "./chunk-FVJBLSTL.js";
import {
  RouterLink,
  SiteConfigService
} from "./chunk-XNDDVEJV.js";
import {
  QuizService
} from "./chunk-VIDW53GT.js";
import {
  ChangeDetectorRef,
  CommonModule,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BVF5ZBVN.js";

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
var _c0 = () => [1, 2, 3, 4, 5];
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
function HomeComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "img", 90);
    \u0275\u0275listener("error", function HomeComponent_div_65_Template_img_error_2_listener($event) {
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
    \u0275\u0275classProp("active-card", i_r6 >= ctx_r3.benefitIndex && i_r6 < ctx_r3.benefitIndex + ctx_r3.visibleBenefits);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getBenefitImage(b_r5.icon), \u0275\u0275sanitizeUrl)("alt", b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.description);
  }
}
function HomeComponent_button_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function HomeComponent_button_70_Template_button_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.benefitIndex = i_r8);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r8 === ctx_r3.benefitIndex);
    \u0275\u0275attribute("aria-label", "Go to benefit " + (i_r8 + 1));
  }
}
function HomeComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93);
    \u0275\u0275element(2, "img", 94)(3, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kb_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", kb_r9.imgSrc, \u0275\u0275sanitizeUrl)("alt", kb_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kb_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kb_r9.desc);
  }
}
function HomeComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275element(2, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r10.imgSrc, \u0275\u0275sanitizeUrl)("alt", p_r10.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.desc);
  }
}
function HomeComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("mouseenter", function HomeComponent_div_114_Template_div_mouseenter_0_listener() {
      const ing_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hoveredIngr = ing_r12.id);
    })("mouseleave", function HomeComponent_div_114_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hoveredIngr = 0);
    });
    \u0275\u0275elementStart(1, "div", 102)(2, "img", 103);
    \u0275\u0275listener("error", function HomeComponent_div_114_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 106);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "assets/ingredients/" + ing_r12.imageSlug + ".png", \u0275\u0275sanitizeUrl)("alt", ing_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r12.tag);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r3.hoveredIngr === ing_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ing_r12.emoji, " ", ing_r12.originPlace, "");
  }
}
function HomeComponent_p_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Rated ");
    \u0275\u0275elementStart(2, "strong", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.liveAvgRating.toFixed(1), "/5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" across ", ctx_r3.reviews.length, " verified reviews ");
  }
}
function HomeComponent_div_161_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const r_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("lit", s_r13 <= r_r14.rating);
  }
}
function HomeComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 113);
    \u0275\u0275template(10, HomeComponent_div_161_span_10_Template, 2, 2, "span", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 115);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 116);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r14.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r14.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', r_r14.text, '"');
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2726 ", r_r14.productUsed, "");
  }
}
function HomeComponent_button_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function HomeComponent_button_166_Template_button_click_0_listener() {
      const i_r16 = \u0275\u0275restoreView(_r15).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reviewCarouselIndex = i_r16);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r16 === ctx_r3.reviewCarouselIndex);
  }
}
var FALLBACK_REVIEWS = [
  {
    id: "1",
    name: "Anjali M.",
    rating: 5,
    initials: "AM",
    text: "My hair fall reduced dramatically in just 6 weeks. The fragrance is divine \u2014 truly Ayurvedic.",
    productUsed: "Bhringraj & Castor Base",
    date: "March 2025"
  },
  {
    id: "2",
    name: "Priya S.",
    rating: 5,
    initials: "PS",
    text: "The quiz result was spot on! My hair growth has visibly improved and the packaging is beautiful.",
    productUsed: "Amla & Sesame Base",
    date: "Feb 2025"
  },
  {
    id: "3",
    name: "Rohan D.",
    rating: 5,
    initials: "RD",
    text: "My dandruff is almost gone after 3 weeks. Light texture, absorbs fast \u2014 no greasy residue!",
    productUsed: "Neem & Cinnamon Base",
    date: "Jan 2025"
  },
  {
    id: "4",
    name: "Kavita N.",
    rating: 4,
    initials: "KN",
    text: "Lovely oil with authentic Ayurvedic herbs. My frizz has calmed down noticeably.",
    productUsed: "Coconut & Hibiscus Base",
    date: "March 2025"
  },
  {
    id: "5",
    name: "Sunita P.",
    rating: 5,
    initials: "SP",
    text: "Best Ayurvedic oil I've found. Authentic scent, not artificial. My greying has slowed in 2 months.",
    productUsed: "Curry Leaf & Nard Base",
    date: "Dec 2024"
  },
  {
    id: "6",
    name: "Deepak R.",
    rating: 5,
    initials: "DR",
    text: "Bought for my wife. She says it's the first oil that doesn't irritate her sensitive scalp.",
    productUsed: "Coconut & Bhringraj Base",
    date: "Jan 2025"
  }
];
var HomeComponent = class _HomeComponent {
  constructor(configService, benefitService, ingredientService, quizService, cdr) {
    this.configService = configService;
    this.benefitService = benefitService;
    this.ingredientService = ingredientService;
    this.quizService = quizService;
    this.cdr = cdr;
    this.benefits = [];
    this.allIngredients = [];
    this.reviews = [];
    this.hoveredIngr = 0;
    this.benefitIndex = 0;
    this.reviewCarouselIndex = 0;
    this.visibleBenefits = 3;
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
    this.quizService.getReviews().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.reviews = data.map((r) => __spreadProps(__spreadValues({}, r), {
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
    if (this.reviewTimer)
      clearInterval(this.reviewTimer);
  }
  startAutoCarousel() {
    this.reviewTimer = setInterval(() => {
      this.reviewCarouselIndex = (this.reviewCarouselIndex + 1) % this.displayReviews.length;
      this.cdr.markForCheck();
    }, 5e3);
  }
  get liveAvgRating() {
    if (!this.reviews.length)
      return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }
  get displayReviews() {
    return this.reviews.length > 0 ? this.reviews.slice(0, 6) : FALLBACK_REVIEWS;
  }
  get ingredientCount() {
    return this.allIngredients.length || 15;
  }
  get featuredIngredients() {
    return this.allIngredients.slice(0, 4);
  }
  get benefitSlideWidth() {
    return this.visibleBenefits === 3 ? 33.333 : this.visibleBenefits === 2 ? 50 : 100;
  }
  get benefitDots() {
    return Array.from({ length: Math.max(0, this.benefits.length - this.visibleBenefits + 1) }, (_, i) => i);
  }
  prevBenefit() {
    if (this.benefitIndex > 0)
      this.benefitIndex--;
  }
  nextBenefit() {
    if (this.benefitIndex < this.benefits.length - this.visibleBenefits)
      this.benefitIndex++;
  }
  prevReview() {
    this.reviewCarouselIndex = (this.reviewCarouselIndex - 1 + this.displayReviews.length) % this.displayReviews.length;
  }
  nextReview() {
    this.reviewCarouselIndex = (this.reviewCarouselIndex + 1) % this.displayReviews.length;
  }
  getInitials(name) {
    return name?.split(" ").map((n) => n[0]).join("").toUpperCase() || "";
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
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(SiteConfigService), \u0275\u0275directiveInject(HomeBenefitService), \u0275\u0275directiveInject(IngredientService), \u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 190, vars: 23, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-deco-images"], [1, "hero-glow"], [1, "hero-content", "container"], [1, "hero-text"], [1, "hero-eyebrow"], [1, "hero-title", 3, "innerHTML"], [1, "hero-subtitle"], [1, "hero-ctas"], ["routerLink", "/ingredients", 1, "btn-primary"], ["width", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["routerLink", "/quiz", 1, "btn-outline"], [1, "hero-stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-product"], [1, "product-glow-ring"], [1, "product-frame"], ["src", "assets/images/product.jpg", "alt", "Vedhrithm Herbal Hair Oil", 1, "product-img"], [1, "scroll-hint"], [1, "scroll-line"], [1, "marquee-strip"], [1, "marquee-track"], [4, "ngFor", "ngForOf"], [1, "benefits"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "section-desc"], [1, "benefits-slider-wrap"], ["aria-label", "Previous", 1, "slider-nav", "prev", 3, "click", "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M10 3L5 8l5 5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "benefits-slider-viewport"], [1, "benefits-slider-track"], ["class", "benefit-card", 3, "active-card", 4, "ngFor", "ngForOf"], ["aria-label", "Next", 1, "slider-nav", "next", 3, "click", "disabled"], ["d", "M6 3l5 5-5 5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "slider-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "key-benefits-row"], [1, "section-header", "center"], [1, "kb-grid"], ["class", "kb-item", 4, "ngFor", "ngForOf"], [1, "story"], [1, "story-bg-pattern"], [1, "story-inner"], [1, "story-image-side"], [1, "story-img-frame"], ["src", "assets/images/logo.jpg", "alt", "Vedhrithm Brand", 1, "story-logo-img"], [1, "story-text-side"], [1, "story-body"], [1, "story-pillars"], ["class", "pillar", 4, "ngFor", "ngForOf"], [1, "ingredients-preview"], [1, "ingr-preview-grid"], ["class", "ingr-preview-card", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "ingr-cta"], ["routerLink", "/ingredients", 1, "btn-outline"], [1, "social-proof"], [1, "proof-inner"], [1, "proof-stat"], [1, "proof-num"], [1, "proof-label"], [1, "proof-divider"], ["routerLink", "/reviews", 1, "proof-cta"], ["width", "14", "viewBox", "0 0 16 16", "fill", "none"], [1, "review-teaser"], ["class", "section-desc", 4, "ngIf"], [1, "review-carousel"], ["aria-label", "Previous review", 1, "slider-nav", "prev", 3, "click"], [1, "review-carousel-viewport"], [1, "review-carousel-track"], ["class", "teaser-card", 4, "ngFor", "ngForOf"], ["aria-label", "Next review", 1, "slider-nav", "next", 3, "click"], [1, "ingr-cta", 2, "margin-top", "2.5rem"], ["routerLink", "/reviews", 1, "btn-outline"], [1, "quiz-cta-section"], [1, "quiz-cta-bg"], ["src", "assets/ingredients/VedicFormula.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd1"], ["src", "assets/ingredients/noChemicals.png", "aria-hidden", "true", "alt", "", 1, "cta-deco-img", "cd2"], [1, "quiz-cta-inner"], ["routerLink", "/quiz", 1, "btn-primary"], [1, "benefit-card"], [1, "benefit-icon-wrap"], ["loading", "lazy", 1, "benefit-icon-img", 3, "error", "src", "alt"], [1, "dot", 3, "click"], [1, "kb-item"], [1, "kb-img-wrap"], ["loading", "lazy", 1, "kb-img", 3, "src", "alt"], [1, "kb-halo"], [1, "kb-title"], [1, "kb-desc"], [1, "pillar"], [1, "pillar-img-wrap"], ["loading", "lazy", 1, "pillar-img", 3, "src", "alt"], [1, "ingr-preview-card", 3, "mouseenter", "mouseleave"], [1, "ingr-visual"], ["loading", "lazy", 1, "ingr-preview-img", 3, "error", "src", "alt"], [1, "ingr-name"], [1, "ingr-benefit"], [1, "ingr-hover-pill"], [2, "color", "var(--gold)"], [1, "teaser-card"], [1, "teaser-top"], [1, "teaser-avatar"], [1, "teaser-author-name"], [1, "teaser-date"], [1, "teaser-stars-row"], [3, "lit", 4, "ngFor", "ngForOf"], [1, "teaser-text"], [1, "teaser-product"]], template: function HomeComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(59, "div", 34)(60, "button", 35);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_60_listener() {
          return ctx.prevBenefit();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(61, "svg", 36);
        \u0275\u0275element(62, "path", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "div", 38)(64, "div", 39);
        \u0275\u0275template(65, HomeComponent_div_65_Template, 7, 6, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "button", 41);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_66_listener() {
          return ctx.nextBenefit();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(67, "svg", 36);
        \u0275\u0275element(68, "path", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(69, "div", 43);
        \u0275\u0275template(70, HomeComponent_button_70_Template, 1, 3, "button", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "section", 45)(72, "div", 29)(73, "div", 46)(74, "span", 31);
        \u0275\u0275text(75, "What It Does");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "h2", 32);
        \u0275\u0275text(77, "Four Pillars of ");
        \u0275\u0275elementStart(78, "span");
        \u0275\u0275text(79, "Hair Health");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 47);
        \u0275\u0275template(81, HomeComponent_div_81_Template, 8, 4, "div", 48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "section", 49);
        \u0275\u0275element(83, "div", 50);
        \u0275\u0275elementStart(84, "div", 29)(85, "div", 51)(86, "div", 52)(87, "div", 53);
        \u0275\u0275element(88, "img", 54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 55)(90, "span", 31);
        \u0275\u0275text(91, "Our Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h2", 32);
        \u0275\u0275text(93, "Where ");
        \u0275\u0275elementStart(94, "span");
        \u0275\u0275text(95, "Vedas");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " Meet");
        \u0275\u0275element(97, "br");
        \u0275\u0275text(98, "Modern Wellness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 56)(100, "p");
        \u0275\u0275text(101);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 57);
        \u0275\u0275template(103, HomeComponent_div_103_Template, 8, 4, "div", 58);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(104, "section", 59)(105, "div", 29)(106, "div", 46)(107, "span", 31);
        \u0275\u0275text(108, "Key Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h2", 32);
        \u0275\u0275text(110, "Sourced from ");
        \u0275\u0275elementStart(111, "span");
        \u0275\u0275text(112, "Nature's Pharmacy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "div", 60);
        \u0275\u0275template(114, HomeComponent_div_114_Template, 9, 8, "div", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 62)(116, "a", 63);
        \u0275\u0275text(117);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(118, "svg", 11);
        \u0275\u0275element(119, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(120, "section", 64)(121, "div", 29)(122, "div", 65)(123, "div", 66)(124, "span", 67);
        \u0275\u0275text(125);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "span", 68);
        \u0275\u0275text(127, "Average Rating");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(128, "div", 69);
        \u0275\u0275elementStart(129, "div", 66)(130, "span", 67);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "span", 68);
        \u0275\u0275text(133, "Happy Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(134, "div", 69);
        \u0275\u0275elementStart(135, "div", 66)(136, "span", 67);
        \u0275\u0275text(137, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "span", 68);
        \u0275\u0275text(139, "Natural Ingredients");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(140, "div", 69);
        \u0275\u0275elementStart(141, "a", 70);
        \u0275\u0275text(142, " Read Reviews ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(143, "svg", 71);
        \u0275\u0275element(144, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(145, "section", 72)(146, "div", 29)(147, "div", 46)(148, "span", 31);
        \u0275\u0275text(149, "Real Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "h2", 32);
        \u0275\u0275text(151, "Loved by Our ");
        \u0275\u0275elementStart(152, "span");
        \u0275\u0275text(153, "Community");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(154, HomeComponent_p_154_Template, 5, 2, "p", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 74)(156, "button", 75);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_156_listener() {
          return ctx.prevReview();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(157, "svg", 36);
        \u0275\u0275element(158, "path", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(159, "div", 76)(160, "div", 77);
        \u0275\u0275template(161, HomeComponent_div_161_Template, 15, 7, "div", 78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(162, "button", 79);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_162_listener() {
          return ctx.nextReview();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(163, "svg", 36);
        \u0275\u0275element(164, "path", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(165, "div", 43);
        \u0275\u0275template(166, HomeComponent_button_166_Template, 1, 2, "button", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 80)(168, "a", 81);
        \u0275\u0275text(169, " See All Reviews ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(170, "svg", 11);
        \u0275\u0275element(171, "path", 12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(172, "section", 82)(173, "div", 83);
        \u0275\u0275element(174, "img", 84)(175, "img", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 29)(177, "div", 86)(178, "span", 31);
        \u0275\u0275text(179, "Personalised For You");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "h2", 32);
        \u0275\u0275text(181, "Not Sure ");
        \u0275\u0275elementStart(182, "span");
        \u0275\u0275text(183, "Which Oil?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "p");
        \u0275\u0275text(185, "Answer 4 quick questions about your hair. We'll recommend the perfect Vedhrithm formulation for your unique needs.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "a", 87);
        \u0275\u0275text(187, " Take the Hair Quiz ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(188, "svg", 11);
        \u0275\u0275element(189, "path", 12);
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
        \u0275\u0275property("disabled", ctx.benefitIndex === 0);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("transform", "translateX(-" + ctx.benefitIndex * ctx.benefitSlideWidth + "%)");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.benefits);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.benefitIndex >= ctx.benefits.length - ctx.visibleBenefits);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.benefitDots);
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
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.liveAvgRating > 0 ? ctx.liveAvgRating.toFixed(1) : "5.0", "\u2605");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.reviews.length > 0 ? ctx.reviews.length + "+" : "500+");
        \u0275\u0275advance(23);
        \u0275\u0275property("ngIf", ctx.liveAvgRating > 0);
        \u0275\u0275advance(6);
        \u0275\u0275styleProp("transform", "translateX(-" + ctx.reviewCarouselIndex * 100 + "%)");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.displayReviews);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.displayReviews);
      }
    }, dependencies: [RouterLink, CommonModule, NgForOf, NgIf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 80% 60% at 60% 50%,\n      rgba(26, 74, 46, 0.35) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 40% 40% at 20% 80%,\n      rgba(212, 175, 55, 0.05) 0%,\n      transparent 60%);\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 74, 46, 0.4) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  padding-top: 4rem;\n  padding-bottom: 6rem;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  color: var(--gold);\n  opacity: 0.8;\n  display: block;\n  margin-bottom: 1.25rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease forwards;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.8rem, 5vw, 5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s 0.15s ease both;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n  font-weight: 400;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.8;\n  max-width: 480px;\n  margin-bottom: 2.5rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s 0.3s ease both;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s 0.45s ease both;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s 0.6s ease both;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--gold);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border-gold);\n}\n.hero-product[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 1s 0.4s ease both;\n}\n.product-glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  height: 380px;\n  border-radius: 50%;\n  border: 1px solid rgba(212, 175, 55, 0.15);\n  box-shadow: 0 0 80px rgba(212, 175, 55, 0.1), inset 0 0 80px rgba(212, 175, 55, 0.05);\n}\n.product-frame[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_float 5s ease-in-out infinite;\n}\n.product-img[_ngcontent-%COMP%] {\n  max-width: 320px;\n  width: 100%;\n  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6));\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  opacity: 0.4;\n}\n.scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--gold));\n}\n.scroll-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.marquee-strip[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--forest-accent);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n  padding: 0.85rem 0;\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n}\n.marquee-track[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  gap: 2rem;\n  animation: _ngcontent-%COMP%_marqueeScroll 28s linear infinite;\n  will-change: transform;\n}\n.marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--gold);\n  white-space: nowrap;\n  opacity: 0.85;\n}\n.marquee-strip[_ngcontent-%COMP%]:hover   .marquee-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n@keyframes _ngcontent-%COMP%_marqueeScroll {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n.benefits[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.section-header.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-desc[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.6);\n  max-width: 500px;\n  line-height: 1.8;\n}\n.section-header.center[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%] {\n  margin: 1rem auto 0;\n}\n.benefits-slider-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n}\n.benefits-slider-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.benefits-slider-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  flex: 0 0 calc(33.333% - 1rem);\n  min-width: 0;\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 2rem;\n  transition: all 0.4s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-gold);\n}\n.benefit-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 1.25rem;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.07);\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.35s ease, background 0.35s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover   .benefit-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.14);\n  transform: scale(1.1) translateY(-3px);\n}\n.benefit-icon-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  filter: drop-shadow(0 3px 10px rgba(212, 175, 55, 0.35));\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  color: var(--gold);\n  margin-bottom: 0.6rem;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.75;\n}\n.slider-nav[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px solid var(--border-gold);\n  color: var(--gold);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.slider-nav[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(212, 175, 55, 0.18);\n  border-color: var(--gold);\n}\n.slider-nav[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.slider-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 2rem;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.2);\n  border: none;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  padding: 0;\n}\n.dot.active[_ngcontent-%COMP%] {\n  background: var(--gold);\n  transform: scale(1.3);\n}\n.key-benefits-row[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--forest-deep, #051610);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n}\n.kb-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  margin-top: 3.5rem;\n}\n.kb-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.kb-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin-bottom: 1.5rem;\n}\n.kb-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n  filter: drop-shadow(0 6px 18px rgba(212, 175, 55, 0.3));\n  transition: transform 0.4s ease, filter 0.4s ease;\n}\n.kb-item[_ngcontent-%COMP%]:hover   .kb-img[_ngcontent-%COMP%] {\n  transform: scale(1.1) translateY(-6px);\n  filter: drop-shadow(0 12px 28px rgba(212, 175, 55, 0.5));\n}\n.kb-halo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 20px;\n  background:\n    radial-gradient(\n      ellipse,\n      rgba(212, 175, 55, 0.2) 0%,\n      transparent 70%);\n}\n.kb-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.kb-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.7;\n  max-width: 180px;\n}\n.story[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  position: relative;\n  background: var(--forest-mid);\n}\n.story-bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.story-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 6rem;\n  align-items: center;\n  position: relative;\n}\n.story-image-side[_ngcontent-%COMP%] {\n  position: relative;\n}\n.story-img-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid var(--border-gold);\n  box-shadow: var(--shadow-gold);\n}\n.story-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.story-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.9;\n  margin-bottom: 1.25rem;\n}\n.story-pillars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.pillar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  background: rgba(212, 175, 55, 0.04);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.pillar[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.08);\n  transform: translateX(4px);\n}\n.pillar-img-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n}\n.pillar-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));\n}\n.pillar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--gold);\n}\n.pillar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(250, 244, 230, 0.6);\n}\n.ingredients-preview[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.ingr-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n  margin-top: 3rem;\n}\n.ingr-preview-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 1.75rem 1.25rem;\n  text-align: center;\n  transition: all 0.35s ease;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  background: var(--forest-light);\n  border-color: rgba(212, 175, 55, 0.5);\n  box-shadow: var(--shadow-gold);\n}\n.ingr-visual[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n}\n.ingr-preview-img[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 14px rgba(212, 175, 55, 0.35));\n  transition: transform 0.3s ease, filter 0.3s ease;\n  border-radius: 50%;\n  background: rgba(212, 175, 55, 0.06);\n  padding: 6px;\n}\n.ingr-preview-card[_ngcontent-%COMP%]:hover   .ingr-preview-img[_ngcontent-%COMP%] {\n  transform: scale(1.12) translateY(-4px);\n  filter: drop-shadow(0 10px 24px rgba(212, 175, 55, 0.55));\n}\n.ingr-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  color: var(--gold);\n  margin-bottom: 0.4rem;\n}\n.ingr-benefit[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.55);\n  line-height: 1.6;\n}\n.ingr-hover-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(212, 175, 55, 0.12);\n  border-top: 1px solid var(--border-gold);\n  padding: 0.5rem;\n  font-size: 0.72rem;\n  color: var(--gold);\n  transform: translateY(100%);\n  transition: transform 0.3s ease;\n  text-align: center;\n}\n.ingr-hover-pill.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.ingr-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 3rem;\n}\n.social-proof[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  background: var(--forest-accent);\n  border-top: 1px solid var(--border-gold);\n  border-bottom: 1px solid var(--border-gold);\n}\n.proof-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.proof-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.proof-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--gold);\n  font-weight: 300;\n}\n.proof-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, 0.5);\n}\n.proof-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border-gold);\n}\n.proof-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.5rem;\n  border: 1px solid var(--border-gold);\n  border-radius: 50px;\n  font-size: 0.78rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.proof-cta[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.1);\n  border-color: var(--gold);\n}\n.review-teaser[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n}\n.review-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 1rem;\n  margin-top: 3rem;\n}\n.review-carousel-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.review-carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.teaser-card[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  min-width: 0;\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 2rem;\n  transition: border-color 0.3s ease;\n}\n.teaser-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.4);\n}\n.teaser-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.teaser-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--gold-dark,#b8932a),\n      var(--gold));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--deep-forest,#051a0f);\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.teaser-author-name[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--cream);\n}\n.teaser-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(250, 244, 230, 0.4);\n  margin-top: 0.1rem;\n}\n.teaser-stars-row[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  gap: 2px;\n  font-size: 1.1rem;\n  color: rgba(212, 175, 55, 0.2);\n}\n.teaser-stars-row[_ngcontent-%COMP%]   .lit[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.teaser-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  font-style: italic;\n  margin-bottom: 1.25rem;\n}\n.teaser-product[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: rgba(250, 244, 230, 0.45);\n  padding: 0.5rem 0.75rem;\n  background: rgba(212, 175, 55, 0.05);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n}\n.quiz-cta-section[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  background: var(--forest-mid);\n  position: relative;\n  overflow: hidden;\n}\n.quiz-cta-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.cta-deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: contain;\n  opacity: 0.08;\n}\n.cd1[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: -8%;\n  left: -3%;\n  transform: rotate(-20deg);\n}\n.cd2[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  bottom: -8%;\n  right: -2%;\n  transform: rotate(20deg);\n}\n.quiz-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.quiz-cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(250, 244, 230, 0.65);\n  margin: 1.25rem 0 2.5rem;\n  line-height: 1.8;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-14px);\n  }\n}\n@media (max-width: 960px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .hero-product[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .story-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .story-image-side[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .ingr-preview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .benefit-card[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 0.75rem);\n  }\n}\n@media (max-width: 600px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .kb-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n  .proof-inner[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .proof-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .benefit-card[_ngcontent-%COMP%] {\n    flex: 0 0 calc(100% - 0rem);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 468 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-MLRF6LEP.js.map
