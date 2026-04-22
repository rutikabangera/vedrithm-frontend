import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-GMEDS347.js";
import {
  QuizService
} from "./chunk-VIDW53GT.js";
import {
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BVF5ZBVN.js";

// src/app/components/themed-select/themed-select.component.ts
function ThemedSelectComponent_div_6_button_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2726");
    \u0275\u0275elementEnd();
  }
}
function ThemedSelectComponent_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ThemedSelectComponent_div_6_button_3_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(opt_r4));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThemedSelectComponent_div_6_button_3_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ts-selected", ctx_r1.value === opt_r4.value);
    \u0275\u0275attribute("aria-selected", ctx_r1.value === opt_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.value === opt_r4.value);
  }
}
function ThemedSelectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 6);
    \u0275\u0275listener("click", function ThemedSelectComponent_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select(null));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThemedSelectComponent_div_6_button_3_Template, 4, 5, "button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.placeholder, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.options);
  }
}
var ThemedSelectComponent = class _ThemedSelectComponent {
  constructor() {
    this.options = [];
    this.value = "";
    this.placeholder = "Select an option...";
    this.valueChange = new EventEmitter();
    this.open = false;
  }
  get selectedLabel() {
    const found = this.options.find((o) => o.value === this.value);
    return found ? found.label : "";
  }
  toggle() {
    this.open = !this.open;
  }
  select(opt) {
    this.value = opt ? opt.value : "";
    this.valueChange.emit(this.value);
    this.open = false;
  }
  onDocClick(e) {
    if (!e.target.closest("app-themed-select")) {
      this.open = false;
    }
  }
  static {
    this.\u0275fac = function ThemedSelectComponent_Factory(t) {
      return new (t || _ThemedSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemedSelectComponent, selectors: [["app-themed-select"]], hostBindings: function ThemedSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ThemedSelectComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { options: "options", value: "value", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 9, consts: [[1, "ts-wrap"], ["type", "button", 1, "ts-trigger", 3, "click"], [1, "ts-value"], [1, "ts-chevron"], ["class", "ts-dropdown", "role", "listbox", 4, "ngIf"], ["role", "listbox", 1, "ts-dropdown"], ["type", "button", "role", "option", 1, "ts-option", "ts-option-placeholder", 3, "click"], ["type", "button", "class", "ts-option", "role", "option", 3, "ts-selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", "role", "option", 1, "ts-option", 3, "click"], [1, "ts-opt-label"], ["class", "ts-check", 4, "ngIf"], [1, "ts-check"]], template: function ThemedSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ThemedSelectComponent_Template_button_click_1_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "\u25BE");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, ThemedSelectComponent_div_6_Template, 4, 2, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("ts-open", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275classProp("ts-placeholder", !ctx.selectedLabel);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedLabel || ctx.placeholder, " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("ts-chevron-up", ctx.open);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.open);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.ts-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  font-family: var(--font-body);\n}\n.ts-trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 0.9rem 1.1rem;\n  color: var(--cream);\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  cursor: pointer;\n  text-align: left;\n  transition: border-color 0.3s ease, background 0.3s ease;\n  outline: none;\n}\n.ts-trigger[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.5);\n}\n.ts-open[_ngcontent-%COMP%]   .ts-trigger[_ngcontent-%COMP%] {\n  border-color: var(--gold);\n  background: var(--forest-accent);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ts-placeholder[_ngcontent-%COMP%] {\n  color: rgba(250, 244, 230, 0.35);\n}\n.ts-chevron[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  margin-left: 0.5rem;\n  transition: transform 0.25s ease;\n  display: inline-block;\n}\n.ts-chevron-up[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.ts-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: var(--forest-accent);\n  border: 1px solid var(--gold);\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 500;\n  max-height: 280px;\n  overflow-y: auto;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_tsSlide 0.18s ease both;\n}\n@keyframes _ngcontent-%COMP%_tsSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ts-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.ts-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--forest-mid);\n}\n.ts-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-gold);\n  border-radius: 2px;\n}\n.ts-option[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1.1rem;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(212, 175, 55, 0.1);\n  color: rgba(250, 244, 230, 0.75);\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.ts-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ts-option[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.1);\n  color: var(--cream);\n}\n.ts-option.ts-selected[_ngcontent-%COMP%] {\n  color: var(--gold);\n  background: rgba(212, 175, 55, 0.07);\n}\n.ts-option-placeholder[_ngcontent-%COMP%] {\n  color: rgba(250, 244, 230, 0.35);\n  font-style: italic;\n  font-size: 0.82rem;\n}\n.ts-check[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 0.7rem;\n  flex-shrink: 0;\n}\n.ts-opt-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=themed-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemedSelectComponent, { className: "ThemedSelectComponent", filePath: "src\\app\\components\\themed-select\\themed-select.component.ts", lineNumber: 117 });
})();

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
function ReviewsComponent_div_36_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_36_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.productUsed, $event) || (ctx_r1.reviewForm.productUsed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.productUsed);
  }
}
function ReviewsComponent_div_36_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ReviewsComponent_div_36_button_15_Template_button_click_0_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewForm.rating = s_r10);
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", s_r10 <= ctx_r1.reviewForm.rating);
  }
}
function ReviewsComponent_div_36_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pureFunction0(1, _c1)[ctx_r1.reviewForm.rating], " ");
  }
}
function ReviewsComponent_div_36_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function ReviewsComponent_div_36_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submit Review");
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_36_span_26_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "app-themed-select", 39);
    \u0275\u0275twoWayListener("valueChange", function ReviewsComponent_div_36_Template_app_themed_select_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.productUsedSelect, $event) || (ctx_r1.reviewForm.productUsedSelect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function ReviewsComponent_div_36_Template_app_themed_select_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProductSelectChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReviewsComponent_div_36_input_10_Template, 1, 1, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37)(12, "label");
    \u0275\u0275text(13, "Your Rating *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41);
    \u0275\u0275template(15, ReviewsComponent_div_36_button_15_Template, 2, 2, "button", 42)(16, ReviewsComponent_div_36_span_16_Template, 2, 2, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label");
    \u0275\u0275text(19, "Your Review *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_36_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewForm.text, $event) || (ctx_r1.reviewForm.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 45);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ReviewsComponent_div_36_div_23_Template, 2, 1, "div", 46);
    \u0275\u0275elementStart(24, "button", 47);
    \u0275\u0275listener("click", function ReviewsComponent_div_36_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275template(25, ReviewsComponent_div_36_span_25_Template, 2, 0, "span", 48)(26, ReviewsComponent_div_36_span_26_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.productOptions);
    \u0275\u0275twoWayProperty("value", ctx_r1.reviewForm.productUsedSelect);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCustomProduct);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c0));
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
    this.reviews = [];
    this.Math = Math;
    this.productOptions = [
      { value: "Vedrithm Base Oil + Hair Growth Booster", label: "Base Oil + Hair Growth Booster" },
      { value: "Vedrithm Base Oil + Dandruff Control Booster", label: "Base Oil + Dandruff Control Booster" },
      { value: "Vedrithm Base Oil + Anti-Greying Booster", label: "Base Oil + Anti-Greying Booster" },
      { value: "Vedrithm Base Oil + Moisture Seal Booster", label: "Base Oil + Moisture Seal Booster" },
      { value: "Vedrithm Base Oil + Shine Revival Booster", label: "Base Oil + Shine Revival Booster" },
      { value: "Vedrithm Base Oil + Repair & Restore Booster", label: "Base Oil + Repair & Restore Booster" },
      { value: "Vedrithm Base Oil + Nourishment Booster", label: "Base Oil + Nourishment Booster" },
      { value: "__other__", label: "Other \u2014 I'll type it in" }
    ];
    this.reviewForm = { name: "", rating: 0, text: "", productUsed: "", productUsedSelect: "" };
    this.showCustomProduct = false;
    this.reviewSubmitted = false;
    this.submittingReview = false;
    this.formError = "";
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: "instant" });
    this.quizService.getReviews().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.reviews = data.map((r) => __spreadProps(__spreadValues({}, r), {
            initials: this.getInitials(r.name)
          }));
        } else {
          this.reviews = [...APPROVED_REVIEWS];
        }
      },
      error: () => {
        this.reviews = [...APPROVED_REVIEWS];
      }
    });
  }
  getInitials(name) {
    if (!name)
      return "";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  }
  onProductSelectChange(value) {
    if (value === "__other__") {
      this.showCustomProduct = true;
      this.reviewForm.productUsed = "";
    } else {
      this.showCustomProduct = false;
      this.reviewForm.productUsed = value;
    }
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
    });
  }
  resetForm() {
    this.reviewForm = { name: "", rating: 0, text: "", productUsed: "", productUsedSelect: "" };
    this.showCustomProduct = false;
    this.reviewSubmitted = false;
    this.formError = "";
  }
  static {
    this.\u0275fac = function ReviewsComponent_Factory(t) {
      return new (t || _ReviewsComponent)(\u0275\u0275directiveInject(QuizService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewsComponent, selectors: [["app-reviews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 7, consts: [[1, "reviews-hero"], [1, "reviews-hero-bg"], [1, "container"], [1, "section-tag"], [1, "page-title"], [1, "page-subtitle"], [1, "rating-summary"], [1, "avg-rating"], [1, "avg-stars"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "avg-label"], [1, "reviews-section"], [1, "reviews-grid"], ["class", "review-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "submit-review-section"], [1, "submit-box"], [1, "submit-header"], [1, "submit-title"], [1, "submit-desc"], ["class", "success-state", 4, "ngIf"], ["class", "review-form", 4, "ngIf"], [1, "star"], [1, "review-card"], [1, "review-header"], [1, "reviewer-avatar"], [1, "reviewer-meta"], [1, "reviewer-name"], [1, "review-date"], [1, "review-stars"], [1, "review-text"], [1, "review-product"], [1, "product-label"], [1, "success-state"], [1, "success-icon"], [1, "btn-outline", 3, "click"], [1, "review-form"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Priya Sharma", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Select your blend...", 3, "valueChange", "options", "value"], ["type", "text", "class", "form-input custom-product-input", "placeholder", "e.g. My custom blend...", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "star-picker"], ["class", "star-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "rating-label", 4, "ngIf"], ["placeholder", "Share your honest experience \u2014 what changed, how long it took, what you love...", "rows", "4", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], [1, "char-count"], ["class", "form-error", 4, "ngIf"], [1, "btn-primary", "submit-btn", 3, "click", "disabled"], [4, "ngIf"], ["type", "text", "placeholder", "e.g. My custom blend...", 1, "form-input", "custom-product-input", 3, "ngModelChange", "ngModel"], [1, "star-btn", 3, "click"], [1, "rating-label"], [1, "form-error"]], template: function ReviewsComponent_Template(rf, ctx) {
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
        \u0275\u0275template(35, ReviewsComponent_div_35_Template, 9, 1, "div", 19)(36, ReviewsComponent_div_36_Template, 27, 13, "div", 20);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ThemedSelectComponent], styles: ["\n\n.reviews-hero[_ngcontent-%COMP%] {\n  min-height: 40vh;\n  display: flex;\n  align-items: center;\n  padding: 8rem 0 4rem;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n.reviews-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 70% 60% at 50% 40%,\n      rgba(26, 74, 46, 0.3) 0%,\n      transparent 70%);\n}\n.reviews-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 1.25rem;\n}\n.page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto 2rem;\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.8;\n}\n.rating-summary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.25rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px solid var(--border-gold);\n  border-radius: 50px;\n  padding: 0.75rem 2rem;\n}\n.avg-rating[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.5rem;\n  color: var(--gold);\n  font-weight: 300;\n  line-height: 1;\n}\n.avg-stars[_ngcontent-%COMP%], .review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.star[_ngcontent-%COMP%] {\n  color: rgba(212, 175, 55, 0.2);\n  font-size: 1.2rem;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.avg-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(250, 244, 230, 0.5);\n  letter-spacing: 0.05em;\n}\n.reviews-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 1.75rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease both;\n  transition: border-color 0.3s ease, transform 0.3s ease;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.4);\n  transform: translateY(-3px);\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.reviewer-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--gold-dark),\n      var(--gold));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--deep-forest);\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.reviewer-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reviewer-name[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--cream);\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(250, 244, 230, 0.4);\n  margin-top: 0.1rem;\n}\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  margin-bottom: 1.25rem;\n  font-style: italic;\n}\n.review-product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: rgba(212, 175, 55, 0.05);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.5);\n}\n.product-label[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.submit-review-section[_ngcontent-%COMP%] {\n  padding: 0 0 8rem;\n}\n.submit-box[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.submit-header[_ngcontent-%COMP%] {\n  padding: 2.5rem 2.5rem 2rem;\n  text-align: center;\n  border-bottom: 1px solid var(--border-gold);\n}\n.submit-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 0.5rem;\n}\n.submit-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.submit-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.55);\n}\n.review-form[_ngcontent-%COMP%], .success-state[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.form-input[_ngcontent-%COMP%] {\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  padding: 0.9rem 1.1rem;\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--cream);\n  outline: none;\n  transition: border-color 0.3s ease;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(250, 244, 230, 0.3);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--gold);\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  padding-right: 2.5rem;\n}\n.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--forest-mid,#1a3a28);\n  color: var(--cream,#faf4e6);\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gold);\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n.custom-product-input[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.char-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1.25rem;\n  right: 0;\n  font-size: 0.7rem;\n  color: rgba(250, 244, 230, 0.3);\n}\n.star-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 2rem;\n  color: rgba(212, 175, 55, 0.25);\n  transition: color 0.2s ease, transform 0.2s ease;\n  padding: 0 2px;\n}\n.star-btn[_ngcontent-%COMP%]:hover, .star-btn.selected[_ngcontent-%COMP%] {\n  color: var(--gold);\n  transform: scale(1.1);\n}\n.rating-label[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  font-size: 0.82rem;\n  color: var(--gold);\n  font-family: var(--font-display);\n  font-style: italic;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #e05c5c;\n  font-size: 0.82rem;\n  margin-bottom: 1rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.success-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.7;\n  margin-bottom: 1.75rem;\n}\n@media (max-width:640px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rating-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .submit-header[_ngcontent-%COMP%], .review-form[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=reviews.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewsComponent, { className: "ReviewsComponent", filePath: "src\\app\\pages\\reviews\\reviews.component.ts", lineNumber: 257 });
})();
export {
  ReviewsComponent
};
//# sourceMappingURL=chunk-CDDXXXHA.js.map
