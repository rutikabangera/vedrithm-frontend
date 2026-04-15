import {
  IngredientService
} from "./chunk-QMFA6Q37.js";
import {
  RouterLink
} from "./chunk-F3IBTWQF.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SiteConfigService,
  __objRest,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QU5HRPSL.js";

// src/app/pages/ingredients/ingredients.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function IngredientsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function IngredientsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.num);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function IngredientsComponent_div_25_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function IngredientsComponent_div_25_button_4_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeFilter = t_r5);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeFilter === t_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5);
  }
}
function IngredientsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "button", 38);
    \u0275\u0275listener("click", function IngredientsComponent_div_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeFilter = "");
    });
    \u0275\u0275text(3, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, IngredientsComponent_div_25_button_4_Template, 2, 3, "button", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeFilter === "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.allTags);
  }
}
function IngredientsComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "div", 44);
    \u0275\u0275element(3, "div", 45)(4, "div", 46)(5, "div", 47);
    \u0275\u0275elementEnd()();
  }
}
function IngredientsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, IngredientsComponent_div_28_div_1_Template, 6, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function IngredientsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275element(2, "img", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Could not load ingredients. Please try again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function IngredientsComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
}
function IngredientsComponent_div_30_article_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r9);
  }
}
function IngredientsComponent_div_30_article_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "img", 77);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ing_r10.originPlace);
  }
}
function IngredientsComponent_div_30_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 53);
    \u0275\u0275listener("click", function IngredientsComponent_div_30_article_1_Template_article_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCard(i_r8));
    });
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "div", 55)(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57)(6, "img", 58);
    \u0275\u0275listener("error", function IngredientsComponent_div_30_article_1_Template_img_error_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImgError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60)(9, "div", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "span", 65);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 67);
    \u0275\u0275element(20, "path", 68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 69)(22, "p", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 71);
    \u0275\u0275template(25, IngredientsComponent_div_30_article_1_div_25_Template, 5, 1, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, IngredientsComponent_div_30_article_1_div_26_Template, 4, 1, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r10 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-open", ctx_r2.activeCard === i_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((i_r8 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getImage(ing_r10.imageSlug), \u0275\u0275sanitizeUrl)("alt", ing_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ing_r10.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.sanskritName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.activeCard === i_r8 ? "Close" : "Discover");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r2.activeCard === i_r8);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("open", ctx_r2.activeCard === i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r10.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ing_r10.benefits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ing_r10.originPlace);
  }
}
function IngredientsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, IngredientsComponent_div_30_article_1_Template, 27, 16, "article", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredIngredients);
  }
}
function IngredientsComponent_section_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275element(2, "img", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r11.imgSrc, \u0275\u0275sanitizeUrl)("alt", p_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.label);
  }
}
function IngredientsComponent_section_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 78)(1, "div", 79)(2, "div", 80)(3, "p", 81);
    \u0275\u0275text(4, "Our Promise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 82);
    \u0275\u0275text(6, "From Sacred Soil");
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "em");
    \u0275\u0275text(9, "to Your Hands");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 83);
    \u0275\u0275text(11, "Every ingredient is sourced directly from its native region of India \u2014 where the soil, climate and centuries of cultivation combine to produce the highest possible potency. Cold-pressed within 48 hours of harvest. Nothing more, nothing less.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 84);
    \u0275\u0275template(13, IngredientsComponent_section_31_div_13_Template, 5, 3, "div", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.provPillars);
  }
}
var INGREDIENT_IMAGES = {
  // 'sesame': 'assets/ingredients/sesame.png',
  "coconut-oil": "assets/ingredients/coconut-oil.png",
  "hibiscus": "assets/ingredients/hibiscus.png",
  "aloe-vera": "assets/ingredients/aloe-vera.png",
  "fenugreek": "assets/ingredients/fenugreek.png",
  "amla": "assets/ingredients/amla.png",
  "rosemary": "assets/ingredients/rosemary.png",
  "castor-oil": "assets/ingredients/castor-oil.png",
  "indian-nard": "assets/ingredients/indian-nard.png",
  "cinnamon": "assets/ingredients/cinnamon.png",
  "cloves": "assets/ingredients/cloves.png",
  "nigella-seeds": "assets/ingredients/nigella-seeds.png",
  "neem": "assets/ingredients/neem.png",
  "curry-leaves": "assets/ingredients/curry-leaves.png",
  "bhringraj": "assets/ingredients/bhringraj.png",
  "sesame": "assets/ingredients/sesame.png"
};
var FALLBACK_IMAGE = "assets/ingredients/locks-moisture.png";
function getIngredientImage(slug) {
  return INGREDIENT_IMAGES[slug] || FALLBACK_IMAGE;
}
var IngredientsComponent = class _IngredientsComponent {
  constructor(ingredientService, configService) {
    this.ingredientService = ingredientService;
    this.configService = configService;
    this.ingredients = [];
    this.activeCard = null;
    this.activeFilter = "";
    this.loading = true;
    this.error = false;
    this.whatsappUrl = "";
    this.heroStats = [
      { num: "15", label: "Sacred Herbs" },
      { num: "100%", label: "Cold-Pressed" },
      { num: "0", label: "Chemicals" }
    ];
    this.provPillars = [
      {
        label: "Single-Origin Sourced",
        imgSrc: "assets/ingredients/SourcedLocally.png"
      },
      {
        label: "Cold-Pressed Within 48 hrs",
        imgSrc: "assets/ingredients/Infused.png"
      },
      {
        label: "No Synthetic Additives",
        imgSrc: "assets/ingredients/noChemicals.png"
      },
      {
        label: "Vedic Formulation",
        imgSrc: "assets/ingredients/VedicFormula.png"
      }
    ];
    this.allTags = [];
  }
  ngOnInit() {
    const num = this.configService.snapshot.whatsappNumber;
    this.whatsappUrl = `https://wa.me/${num}?text=Hi%2C%20I%20want%20to%20order%20Vedrithm%20Herbal%20Hair%20Oil`;
    this.load();
  }
  load() {
    this.loading = true;
    this.error = false;
    this.ingredientService.getAll().subscribe({
      next: (data) => {
        this.ingredients = data.map((_a) => {
          var _b = _a, { emoji } = _b, rest = __objRest(_b, ["emoji"]);
          return rest;
        });
        this.allTags = [...new Set(this.ingredients.map((i) => i.tag))].filter(Boolean);
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
  get filteredIngredients() {
    if (!this.activeFilter)
      return this.ingredients;
    return this.ingredients.filter((i) => i.tag === this.activeFilter);
  }
  toggleCard(i) {
    this.activeCard = this.activeCard === i ? null : i;
  }
  /** Returns a real asset path for the ingredient image slug */
  getImage(slug) {
    return getIngredientImage(slug);
  }
  /** Fallback to generic gold drop if image fails */
  onImgError(event) {
    const img = event.target;
    img.src = FALLBACK_IMAGE;
  }
  static {
    this.\u0275fac = function IngredientsComponent_Factory(t) {
      return new (t || _IngredientsComponent)(\u0275\u0275directiveInject(IngredientService), \u0275\u0275directiveInject(SiteConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IngredientsComponent, selectors: [["app-ingredients"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 10, consts: [[1, "page-hero"], [1, "hero-noise"], [1, "hero-radial"], [1, "hero-lines"], ["class", "h-line", 4, "ngFor", "ngForOf"], [1, "container", "hero-content"], [1, "hero-eyebrow"], [1, "eyebrow-gem"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-count-row"], ["class", "hero-stat", 4, "ngFor", "ngForOf"], [1, "deco-plant", "dp1"], ["src", "assets/ingredients/promotes-growth.png", "alt", "", "aria-hidden", "true"], [1, "deco-plant", "dp2"], ["src", "assets/ingredients/strengthens-roots.png", "alt", "", "aria-hidden", "true"], ["class", "filter-strip", 4, "ngIf"], [1, "ingredients-section"], [1, "container"], ["class", "ingredients-grid", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "provenance-band", 4, "ngIf"], [1, "bottom-cta"], [1, "cta-noise"], [1, "container", "cta-inner"], [1, "cta-eyebrow"], [1, "cta-title"], [1, "cta-actions"], ["routerLink", "/quiz", 1, "btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["target", "_blank", 1, "btn-outline", 3, "href"], [1, "h-line"], [1, "hero-stat"], [1, "stat-num"], [1, "stat-label"], [1, "filter-strip"], [1, "container", "filter-inner"], [1, "filter-pill", 3, "click"], ["class", "filter-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ingredients-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skel-img"], [1, "skel-lines"], [1, "skel-line", "w70"], [1, "skel-line", "w50"], [1, "skel-line", "w90"], [1, "error-state"], [1, "error-icon"], ["src", "assets/ingredients/promotes-growth.png", "alt", "", 2, "width", "80px", "height", "80px", "opacity", "0.3"], [1, "btn-outline", 3, "click"], ["class", "ingredient-card", 3, "is-open", "click", 4, "ngFor", "ngForOf"], [1, "ingredient-card", 3, "click"], [1, "card-accent"], [1, "card-front"], [1, "card-num"], [1, "card-illus"], ["loading", "lazy", 1, "card-illus-img", 3, "error", "src", "alt"], [1, "illus-glow"], [1, "card-meta"], [1, "card-tag"], [1, "card-name"], [1, "card-sanskrit"], [1, "expand-row"], [1, "expand-label"], [1, "expand-icon"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none"], ["d", "M2 4l4 4 4-4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "card-drawer"], [1, "drawer-desc"], [1, "drawer-benefits"], ["class", "benefit-row", 4, "ngFor", "ngForOf"], ["class", "drawer-origin", 4, "ngIf"], [1, "benefit-row"], [1, "benefit-gem"], [1, "drawer-origin"], ["src", "assets/ingredients/SourcedLocally.png", "alt", "origin", 1, "origin-pin-img"], [1, "provenance-band"], [1, "container", "prov-inner"], [1, "prov-text"], [1, "prov-label"], [1, "prov-title"], [1, "prov-body"], [1, "prov-pillars"], ["class", "prov-pillar", 4, "ngFor", "ngForOf"], [1, "prov-pillar"], [1, "pillar-img-wrap"], ["loading", "lazy", 1, "pillar-img", 3, "src", "alt"]], template: function IngredientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, IngredientsComponent_div_4_Template, 1, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "span", 7);
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "Nature's Pharmacy");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h1", 8);
        \u0275\u0275text(12, "Our ");
        \u0275\u0275elementStart(13, "em");
        \u0275\u0275text(14, "Sacred");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "br");
        \u0275\u0275text(16, "Ingredients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 10);
        \u0275\u0275template(20, IngredientsComponent_div_20_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12);
        \u0275\u0275element(22, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14);
        \u0275\u0275element(24, "img", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, IngredientsComponent_div_25_Template, 5, 3, "div", 16);
        \u0275\u0275elementStart(26, "section", 17)(27, "div", 18);
        \u0275\u0275template(28, IngredientsComponent_div_28_Template, 2, 2, "div", 19)(29, IngredientsComponent_div_29_Template, 7, 0, "div", 20)(30, IngredientsComponent_div_30_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, IngredientsComponent_section_31_Template, 14, 1, "section", 21);
        \u0275\u0275elementStart(32, "section", 22);
        \u0275\u0275element(33, "div", 23);
        \u0275\u0275elementStart(34, "div", 24)(35, "span", 25);
        \u0275\u0275text(36, "Ready to begin?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2", 26);
        \u0275\u0275text(38, "Find Your ");
        \u0275\u0275elementStart(39, "em");
        \u0275\u0275text(40, "Perfect Blend");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, "Not sure which formulation suits your hair best? Take our personalised hair quiz.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 27)(44, "a", 28);
        \u0275\u0275text(45, " Take the Hair Quiz ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 29);
        \u0275\u0275element(47, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "a", 31);
        \u0275\u0275text(49, "Order on WhatsApp");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.ingredients.length || 8, " time-honoured Ayurvedic herbs, each chosen for their unique ability to restore, protect and nourish your hair from root to tip. ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.heroStats);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allTags.length > 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
        \u0275\u0275advance(17);
        \u0275\u0275property("href", ctx.whatsappUrl, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: [`

.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.page-hero[_ngcontent-%COMP%] {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 10rem 0 6rem;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.hero-noise[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}
.hero-radial[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 80% 80% at 50% 40%,
      rgba(26, 74, 46, 0.45) 0%,
      transparent 70%);
}
.hero-lines[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}
.h-line[_ngcontent-%COMP%] {
  width: 1px;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      transparent 0%,
      rgba(212, 175, 55, 0.06) 40%,
      transparent 100%);
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
}
.hero-eyebrow[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.7);
  margin-bottom: 1.5rem;
}
.eyebrow-gem[_ngcontent-%COMP%] {
  width: 4px;
  height: 4px;
  background: var(--gold);
  border-radius: 50%;
  display: block;
}
.hero-title[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.05;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}
.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {
  color: var(--gold);
  font-style: italic;
}
.hero-sub[_ngcontent-%COMP%] {
  max-width: 560px;
  margin: 0 auto 3rem;
  font-size: 1rem;
  color: rgba(250, 244, 230, 0.55);
  line-height: 1.85;
}
.hero-count-row[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 3rem;
  padding: 1.25rem 2.5rem;
  border: 1px solid var(--border-gold);
  background: rgba(10, 35, 24, 0.6);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-radius: 4px;
}
.hero-stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat-num[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--gold);
  line-height: 1;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.5);
}
.deco-plant[_ngcontent-%COMP%] {
  position: absolute;
  pointer-events: none;
}
.deco-plant[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 160px;
  height: 160px;
  object-fit: contain;
  opacity: 0.12;
}
.dp1[_ngcontent-%COMP%] {
  top: 5%;
  left: -1%;
  transform: rotate(-15deg) scale(1.4);
}
.dp2[_ngcontent-%COMP%] {
  bottom: 2%;
  right: -1%;
  transform: rotate(165deg) scale(1.4);
}
.filter-strip[_ngcontent-%COMP%] {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-gold);
  background: rgba(10, 35, 24, 0.8);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.filter-inner[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.filter-pill[_ngcontent-%COMP%] {
  padding: 0.35rem 1rem;
  border: 1px solid var(--border-gold);
  background: transparent;
  color: rgba(212, 175, 55, 0.6);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.filter-pill[_ngcontent-%COMP%]:hover, .filter-pill.active[_ngcontent-%COMP%] {
  background: rgba(212, 175, 55, 0.12);
  color: var(--gold);
  border-color: rgba(212, 175, 55, 0.5);
}
.ingredients-section[_ngcontent-%COMP%] {
  padding: 5rem 0 8rem;
}
.ingredients-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.skeleton-card[_ngcontent-%COMP%] {
  background: var(--forest-mid);
  border: 1px solid var(--border-gold);
  border-radius: 8px;
  padding: 2rem;
  animation: _ngcontent-%COMP%_skelPulse 1.8s ease-in-out infinite;
}
.skel-img[_ngcontent-%COMP%] {
  height: 140px;
  background: rgba(212, 175, 55, 0.06);
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
.skel-lines[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.skel-line[_ngcontent-%COMP%] {
  height: 10px;
  background: rgba(212, 175, 55, 0.06);
  border-radius: 4px;
}
.w70[_ngcontent-%COMP%] {
  width: 70%;
}
.w50[_ngcontent-%COMP%] {
  width: 50%;
}
.w90[_ngcontent-%COMP%] {
  width: 90%;
}
@keyframes _ngcontent-%COMP%_skelPulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.9;
  }
}
.error-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 5rem 2rem;
}
.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: rgba(250, 244, 230, 0.5);
  margin-bottom: 1.5rem;
}
.ingredient-card[_ngcontent-%COMP%] {
  position: relative;
  background:
    linear-gradient(
      160deg,
      rgba(15, 48, 32, 0.95) 0%,
      rgba(10, 35, 24, 0.98) 100%);
  border: 1px solid var(--border-gold);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.ingredient-card[_ngcontent-%COMP%]:hover, .ingredient-card.is-open[_ngcontent-%COMP%] {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.55);
  box-shadow:
    0 12px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(212, 175, 55, 0.1),
    0 0 40px rgba(212, 175, 55, 0.08);
}
.card-accent[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      var(--gold) 50%,
      transparent 100%);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.ingredient-card[_ngcontent-%COMP%]:hover   .card-accent[_ngcontent-%COMP%], .ingredient-card.is-open[_ngcontent-%COMP%]   .card-accent[_ngcontent-%COMP%] {
  opacity: 1;
}
.card-front[_ngcontent-%COMP%] {
  padding: 2rem 2rem 1.5rem;
}
.card-num[_ngcontent-%COMP%] {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(212, 175, 55, 0.05);
  -webkit-user-select: none;
  user-select: none;
}
.card-illus[_ngcontent-%COMP%] {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
}
.card-illus-img[_ngcontent-%COMP%] {
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.55));
  transition: transform 0.4s ease, filter 0.4s ease;
}
.ingredient-card[_ngcontent-%COMP%]:hover   .card-illus-img[_ngcontent-%COMP%] {
  transform: scale(1.08) translateY(-4px);
  filter: drop-shadow(0 12px 32px rgba(212, 175, 55, 0.25));
}
.illus-glow[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 30px;
  background:
    radial-gradient(
      ellipse,
      rgba(212, 175, 55, 0.18) 0%,
      transparent 70%);
  pointer-events: none;
}
.card-meta[_ngcontent-%COMP%] {
  margin-bottom: 1.25rem;
}
.card-tag[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid var(--border-gold);
  border-radius: 50px;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.65);
  margin-bottom: 0.5rem;
}
.card-name[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 400;
  color: var(--gold);
  margin-bottom: 0.15rem;
  letter-spacing: 0.01em;
}
.card-sanskrit[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.82rem;
  color: rgba(212, 175, 55, 0.4);
}
.expand-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.5);
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding-top: 1rem;
  transition: color 0.25s;
}
.ingredient-card[_ngcontent-%COMP%]:hover   .expand-row[_ngcontent-%COMP%] {
  color: rgba(212, 175, 55, 0.8);
}
.expand-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 50%;
  transition: transform 0.35s ease, border-color 0.25s;
}
.expand-icon.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
  border-color: rgba(212, 175, 55, 0.6);
}
.card-drawer[_ngcontent-%COMP%] {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 0px solid transparent;
}
.card-drawer.open[_ngcontent-%COMP%] {
  max-height: 500px;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
}
.drawer-desc[_ngcontent-%COMP%] {
  font-size: 0.84rem;
  color: rgba(250, 244, 230, 0.6);
  line-height: 1.85;
  padding: 1.25rem 2rem 0.75rem;
}
.drawer-benefits[_ngcontent-%COMP%] {
  padding: 0 2rem 1rem;
}
.benefit-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.81rem;
  color: rgba(250, 244, 230, 0.65);
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.06);
}
.benefit-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.benefit-gem[_ngcontent-%COMP%] {
  color: var(--gold);
  flex-shrink: 0;
  font-size: 0.65rem;
  margin-top: 0.2rem;
}
.drawer-origin[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 2rem 1.25rem;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  font-size: 0.8rem;
  color: rgba(212, 175, 55, 0.6);
  font-family: var(--font-display);
  font-style: italic;
}
.origin-pin-img[_ngcontent-%COMP%] {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(212, 175, 55, 0.3));
}
.provenance-band[_ngcontent-%COMP%] {
  padding: 7rem 0;
  background: var(--forest-mid);
  border-top: 1px solid var(--border-gold);
  border-bottom: 1px solid var(--border-gold);
}
.prov-inner[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}
.prov-label[_ngcontent-%COMP%] {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.5);
  margin-bottom: 1rem;
}
.prov-title[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.prov-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {
  color: var(--gold);
  font-style: italic;
}
.prov-body[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: rgba(250, 244, 230, 0.55);
  line-height: 1.9;
}
.prov-pillars[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.prov-pillar[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem 1rem;
  border: 1px solid var(--border-gold);
  border-radius: 6px;
  background: rgba(10, 35, 24, 0.6);
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.6);
  transition: all 0.3s ease;
}
.prov-pillar[_ngcontent-%COMP%]:hover {
  background: rgba(212, 175, 55, 0.05);
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-3px);
}
.pillar-img-wrap[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pillar-img[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.25));
  transition: transform 0.3s ease, filter 0.3s ease;
}
.prov-pillar[_ngcontent-%COMP%]:hover   .pillar-img[_ngcontent-%COMP%] {
  transform: scale(1.1);
  filter: drop-shadow(0 6px 18px rgba(212, 175, 55, 0.45));
}
.bottom-cta[_ngcontent-%COMP%] {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse 80% 80% at 50% 50%,
      rgba(26, 74, 46, 0.2) 0%,
      transparent 70%);
}
.cta-noise[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
}
.cta-inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}
.cta-eyebrow[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(212, 175, 55, 0.55);
  margin-bottom: 1rem;
}
.cta-title[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.15;
  margin-bottom: 1.25rem;
}
.cta-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {
  color: var(--gold);
  font-style: italic;
}
.cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: rgba(250, 244, 230, 0.5);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}
.cta-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 900px) {
  .prov-inner[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
@media (max-width: 640px) {
  .ingredients-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .hero-count-row[_ngcontent-%COMP%] {
    gap: 1.5rem;
    padding: 1rem 1.5rem;
  }
  .prov-pillars[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
}
/*# sourceMappingURL=ingredients.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IngredientsComponent, { className: "IngredientsComponent", filePath: "src\\app\\pages\\ingredients\\ingredients.component.ts", lineNumber: 559 });
})();
export {
  IngredientsComponent
};
//# sourceMappingURL=chunk-W3ULV2JU.js.map
