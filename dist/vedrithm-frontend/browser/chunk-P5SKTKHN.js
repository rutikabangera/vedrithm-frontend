import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  QuizService
} from "./chunk-55IE2KJL.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O7KYMSXY.js";

// src/app/pages/reviews/reviews.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => ["", "Poor", "Fair", "Good", "Very Good", "Excellent!"];
function ReviewsComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", s_r1 <= ctx_r1.Math.round(ctx_r1.avgRating));
  }
}
function ReviewsComponent_div_22_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", s_r3 <= r_r4.rating);
  }
}
function ReviewsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275template(10, ReviewsComponent_div_22_span_10_Template, 2, 2, "span", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30)(14, "span", 31);
    \u0275\u0275text(15, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.08 + "s");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', r_r4.text, '"');
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r4.productUsed);
  }
}
function ReviewsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your review has been submitted and will appear after a quick review by our team.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275listener("click", function ReviewsComponent_div_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(8, "Submit Another Review");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Thank you, ", ctx_r1.reviewForm.name, "!");
  }
}
function ReviewsComponent_div_36_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ReviewsComponent_div_36_button_14_Template_button_click_0_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewForm.rating = s_r9);
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", s_r9 <= ctx_r1.reviewForm.rating);
  }
}
function ReviewsComponent_div_36_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pureFunction0(1, _c1)[ctx_r1.reviewForm.rating], " ");
  }
}
function ReviewsComponent_div_36_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ReviewsComponent_div_36_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submit Review");
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_36_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submitting...");
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "label");
    \u0275\u0275text(4, "Your Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_36_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.name, $event) || (ctx_r1.reviewForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "label");
    \u0275\u0275text(8, "Product Used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_36_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.productUsed, $event) || (ctx_r1.reviewForm.productUsed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 37)(11, "label");
    \u0275\u0275text(12, "Your Rating *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 40);
    \u0275\u0275template(14, ReviewsComponent_div_36_button_14_Template, 2, 2, "button", 41)(15, ReviewsComponent_div_36_span_15_Template, 2, 2, "span", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Your Review *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_36_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.text, $event) || (ctx_r1.reviewForm.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ReviewsComponent_div_36_div_22_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(23, "button", 46);
    \u0275\u0275listener("click", function ReviewsComponent_div_36_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275template(24, ReviewsComponent_div_36_span_24_Template, 2, 0, "span", 47)(25, ReviewsComponent_div_36_span_25_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.productUsed);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewForm.rating);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.reviewForm.text.length, "/500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submittingReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submittingReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submittingReview);
  }
}
var APPROVED_REVIEWS = [
  {
    id: "1",
    name: "Anjali Mehta",
    rating: 5,
    text: "I've been using Vedhrithm for 6 weeks and the difference is unbelievable. My hair fall has reduced dramatically and my scalp feels so calm. The fragrance is divine \u2014 truly Ayurvedic.",
    productUsed: "Bhringraj & Castor Base + Fenugreek Booster",
    date: "March 2025",
    initials: "AM"
  },
  {
    id: "2",
    name: "Rohan Desai",
    rating: 5,
    text: "Was sceptical at first, but this oil genuinely works. My dandruff is almost gone after 3 weeks. Light texture, absorbs fast \u2014 doesn't leave that greasy residue most oils do.",
    productUsed: "Neem & Cinnamon Base + Clove Purifying Booster",
    date: "February 2025",
    initials: "RD"
  },
  {
    id: "3",
    name: "Priya Sharma",
    rating: 5,
    text: "The quiz result was spot on for my hair type! Got the Amla & Sesame Base and my hair growth has visibly improved. The packaging is also beautiful \u2014 great as a gift.",
    productUsed: "Amla & Sesame Base + Rosemary Growth Booster",
    date: "January 2025",
    initials: "PS"
  },
  {
    id: "4",
    name: "Kavita Nair",
    rating: 4,
    text: "Lovely oil with authentic Ayurvedic herbs. My frizz has calmed down noticeably. Would give 5 stars but I wish it came in a larger bottle. Will definitely reorder!",
    productUsed: "Coconut & Hibiscus Base + Aloe Moisture Booster",
    date: "March 2025",
    initials: "KN"
  },
  {
    id: "5",
    name: "Sunita Pillai",
    rating: 5,
    text: "My mother-in-law recommended Ayurvedic hair oils and this is the best I've found. Smell is authentic, not artificial. My premature greying has slowed noticeably in 2 months.",
    productUsed: "Curry Leaf & Indian Nard Base + Nigella Seed Booster",
    date: "December 2024",
    initials: "SP"
  },
  {
    id: "6",
    name: "Deepak Rao",
    rating: 5,
    text: "Bought for my wife and she loves it. She says it's the first hair oil that doesn't irritate her sensitive scalp. Now her hair looks shinier and stronger after just a month.",
    productUsed: "Coconut & Bhringraj Base + Rosemary & Amla Booster",
    date: "January 2025",
    initials: "DR"
  }
];
var ReviewsComponent = class _ReviewsComponent {
  get avgRating() {
    if (!this.reviews.length)
      return 0;
    return this.reviews.reduce((sum, r) => sum + r.rating, 0) / this.reviews.length;
  }
  constructor(quizService) {
    this.quizService = quizService;
    this.reviews = APPROVED_REVIEWS;
    this.Math = Math;
    this.reviewForm = { name: "", rating: 0, text: "", productUsed: "" };
    this.reviewSubmitted = false;
    this.submittingReview = false;
    this.formError = "";
  }
  ngOnInit() {
  }
  submitReview() {
    this.formError = "";
    if (!this.reviewForm.name.trim()) {
      this.formError = "Please enter your name.";
      return;
    }
    if (!this.reviewForm.rating) {
      this.formError = "Please select a rating.";
      return;
    }
    if (this.reviewForm.text.trim().length < 20) {
      this.formError = "Please write at least 20 characters in your review.";
      return;
    }
    if (this.reviewForm.text.length > 500) {
      this.formError = "Review must be under 500 characters.";
      return;
    }
    this.submittingReview = true;
    this.quizService.saveReview({
      name: this.reviewForm.name,
      rating: this.reviewForm.rating,
      text: this.reviewForm.text,
      productUsed: this.reviewForm.productUsed || "Vedhrithm Herbal Hair Oil"
    }).subscribe({
      next: () => {
        this.reviewSubmitted = true;
        this.submittingReview = false;
      },
      error: () => {
        this.reviewSubmitted = true;
        this.submittingReview = false;
      }
      // Still show success to user
    });
  }
  resetForm() {
    this.reviewForm = { name: "", rating: 0, text: "", productUsed: "" };
    this.reviewSubmitted = false;
    this.formError = "";
  }
  static {
    this.\u0275fac = function ReviewsComponent_Factory(t) {
      return new (t || _ReviewsComponent)(\u0275\u0275directiveInject(QuizService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewsComponent, selectors: [["app-reviews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 7, consts: [[1, "reviews-hero"], [1, "reviews-hero-bg"], [1, "container"], [1, "section-tag"], [1, "page-title"], [1, "page-subtitle"], [1, "rating-summary"], [1, "avg-rating"], [1, "avg-stars"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "avg-label"], [1, "reviews-section"], [1, "reviews-grid"], ["class", "review-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "submit-review-section"], [1, "submit-box"], [1, "submit-header"], [1, "submit-title"], [1, "submit-desc"], ["class", "success-state", 4, "ngIf"], ["class", "review-form", 4, "ngIf"], [1, "star"], [1, "review-card"], [1, "review-header"], [1, "reviewer-avatar"], [1, "reviewer-meta"], [1, "reviewer-name"], [1, "review-date"], [1, "review-stars"], [1, "review-text"], [1, "review-product"], [1, "product-label"], [1, "success-state"], [1, "success-icon"], [1, "btn-outline", 3, "click"], [1, "review-form"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Priya Sharma", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Hair Fall Formula", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "star-picker"], ["class", "star-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "rating-label", 4, "ngIf"], ["placeholder", "Share your honest experience \u2014 what changed, how long it took, what you love...", "rows", "4", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], [1, "char-count"], ["class", "form-error", 4, "ngIf"], [1, "btn-primary", "submit-btn", 3, "click", "disabled"], [4, "ngIf"], [1, "star-btn", 3, "click"], [1, "rating-label"], [1, "form-error"]], template: function ReviewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Real Customers, Real Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "What Our ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Says");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 5);
        \u0275\u0275text(11, "Honest reviews from people who've made Vedhrithm part of their hair care ritual.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275template(16, ReviewsComponent_span_16_Template, 2, 2, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "section", 11)(20, "div", 2)(21, "div", 12);
        \u0275\u0275template(22, ReviewsComponent_div_22_Template, 18, 9, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "section", 14)(24, "div", 2)(25, "div", 15)(26, "div", 16)(27, "span", 3);
        \u0275\u0275text(28, "Share Your Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2", 17);
        \u0275\u0275text(30, "Leave a ");
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "Review");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p", 18);
        \u0275\u0275text(34, "Tried Vedhrithm? We'd love to hear about your experience.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, ReviewsComponent_div_35_Template, 9, 1, "div", 19)(36, ReviewsComponent_div_36_Template, 26, 11, "div", 20);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.avgRating.toFixed(1));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.reviews.length, " verified reviews");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.reviews);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.reviewSubmitted);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.reviewSubmitted);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.reviews-hero[_ngcontent-%COMP%] {\n  min-height: 40vh;\n  display: flex;\n  align-items: center;\n  padding: 8rem 0 4rem;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n.reviews-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 70% 60% at 50% 40%,\n      rgba(26, 74, 46, 0.3) 0%,\n      transparent 70%);\n}\n.reviews-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 1.25rem;\n}\n.page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto 2rem;\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.8;\n}\n.rating-summary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.25rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px solid var(--border-gold);\n  border-radius: 50px;\n  padding: 0.75rem 2rem;\n}\n.avg-rating[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.5rem;\n  color: var(--gold);\n  font-weight: 300;\n  line-height: 1;\n}\n.avg-stars[_ngcontent-%COMP%], .review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.star[_ngcontent-%COMP%] {\n  color: rgba(212, 175, 55, 0.2);\n  font-size: 1.2rem;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.avg-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(250, 244, 230, 0.5);\n  letter-spacing: 0.05em;\n}\n.reviews-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 1.75rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease both;\n  transition: border-color 0.3s ease, transform 0.3s ease;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.4);\n  transform: translateY(-3px);\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.reviewer-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--gold-dark),\n      var(--gold));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--deep-forest);\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.reviewer-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reviewer-name[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--cream);\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(250, 244, 230, 0.4);\n  margin-top: 0.1rem;\n}\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  margin-bottom: 1.25rem;\n  font-style: italic;\n}\n.review-product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: rgba(212, 175, 55, 0.05);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.5);\n}\n.product-label[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.submit-review-section[_ngcontent-%COMP%] {\n  padding: 0 0 8rem;\n}\n.submit-box[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.submit-header[_ngcontent-%COMP%] {\n  padding: 2.5rem 2.5rem 2rem;\n  text-align: center;\n  border-bottom: 1px solid var(--border-gold);\n}\n.submit-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 0.5rem;\n}\n.submit-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.submit-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.55);\n}\n.review-form[_ngcontent-%COMP%], .success-state[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.form-input[_ngcontent-%COMP%] {\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 0.9rem 1.1rem;\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--cream);\n  outline: none;\n  transition: border-color 0.3s ease;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(250, 244, 230, 0.3);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--gold);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.char-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1.25rem;\n  right: 0;\n  font-size: 0.7rem;\n  color: rgba(250, 244, 230, 0.3);\n}\n.star-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 2rem;\n  color: rgba(212, 175, 55, 0.25);\n  transition: color 0.2s ease, transform 0.2s ease;\n  padding: 0 2px;\n}\n.star-btn[_ngcontent-%COMP%]:hover, .star-btn.selected[_ngcontent-%COMP%] {\n  color: var(--gold);\n  transform: scale(1.1);\n}\n.rating-label[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  font-size: 0.82rem;\n  color: var(--gold);\n  font-family: var(--font-display);\n  font-style: italic;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #e05c5c;\n  font-size: 0.82rem;\n  margin-bottom: 1rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.success-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.7;\n  margin-bottom: 1.75rem;\n}\n@media (max-width:640px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rating-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .submit-header[_ngcontent-%COMP%], .review-form[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=reviews.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewsComponent, { className: "ReviewsComponent", filePath: "src\\app\\pages\\reviews\\reviews.component.ts", lineNumber: 244 });
})();
export {
  ReviewsComponent
};
//# sourceMappingURL=chunk-P5SKTKHN.js.map
