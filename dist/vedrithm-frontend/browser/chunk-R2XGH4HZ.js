import {
  QuizService
} from "./chunk-2CS2HA7M.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-D3KKIXUS.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W6VLEW7M.js";

// src/app/pages/quiz/quiz.component.ts
function QuizComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", ctx_r1.currentStep > i_r1)("active", ctx_r1.currentStep === i_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1 + 1);
  }
}
function QuizComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275template(4, QuizComponent_div_14_div_4_Template, 3, 5, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progressPct + "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.allStepIds);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Step ", ctx_r1.currentStep + 1, " of ", ctx_r1.allStepIds.length, "");
  }
}
function QuizComponent_div_15_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mobileError);
  }
}
function QuizComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 23);
    \u0275\u0275text(5, "Welcome to your hair journey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7, "Let's start with a few quick details so we can personalise your recommendation.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "div", 26)(10, "label");
    \u0275\u0275text(11, "Your Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function QuizComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.answers["name"], $event) || (ctx_r1.answers["name"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function QuizComponent_div_15_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26)(14, "label");
    \u0275\u0275text(15, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28)(17, "span", 29);
    \u0275\u0275text(18, "+91");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function QuizComponent_div_15_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.answers["mobileNumber"], $event) || (ctx_r1.answers["mobileNumber"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function QuizComponent_div_15_Template_input_keyup_enter_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, QuizComponent_div_15_span_20_Template, 2, 1, "span", 31);
    \u0275\u0275elementStart(21, "span", 32);
    \u0275\u0275text(22, "We'll only use your number to assist with your order \u2014 no spam, ever.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 33);
    \u0275\u0275listener("click", function QuizComponent_div_15_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275text(24, " Begin the Quiz ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.answers["name"]);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.answers["mobileNumber"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mobileError);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.answers["name"].trim() || ctx_r1.answers["mobileNumber"].length !== 10);
  }
}
function QuizComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Hi ", ctx_r1.answers["name"], " \u{1F44B}");
  }
}
function QuizComponent_div_16_button_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_16_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function QuizComponent_div_16_button_8_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.setAnswer(ctx_r1.currentSingleStep.id, opt_r6.value);
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_div_16_button_8_span_5_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.answers[ctx_r1.currentSingleStep.id] === opt_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.answers[ctx_r1.currentSingleStep.id] === opt_r6.value);
  }
}
function QuizComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 35);
    \u0275\u0275template(2, QuizComponent_div_16_div_2_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(3, "h2", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275template(8, QuizComponent_div_16_button_8_Template, 6, 5, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39)(10, "button", 40);
    \u0275\u0275listener("click", function QuizComponent_div_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(11, "\u2190 Back");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentSingleStep == null ? null : ctx_r1.currentSingleStep.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentSingleStep == null ? null : ctx_r1.currentSingleStep.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentSingleStep == null ? null : ctx_r1.currentSingleStep.options);
  }
}
function QuizComponent_div_17_button_10_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_17_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function QuizComponent_div_17_button_10_Template_button_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleConcern(opt_r9.value));
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_div_17_button_10_span_5_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isConcernSelected(opt_r9.value))("none-btn", opt_r9.value === "healthy_hair");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r9.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r9.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isConcernSelected(opt_r9.value));
  }
}
function QuizComponent_div_17_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275listener("click", function QuizComponent_div_17_div_11_span_1_Template_span_click_2_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeConcern(c_r11));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getConcernLabel(c_r11), " ");
  }
}
function QuizComponent_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, QuizComponent_div_17_div_11_span_1_Template, 4, 1, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedConcerns);
  }
}
function QuizComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 35)(2, "h2", 23);
    \u0275\u0275text(3, "What are your hair concerns?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, "Select ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "all that apply");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \u2014 we'll blend your oil to address every concern.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275template(10, QuizComponent_div_17_button_10_Template, 6, 7, "button", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, QuizComponent_div_17_div_11_Template, 2, 1, "div", 49);
    \u0275\u0275elementStart(12, "div", 39)(13, "button", 40);
    \u0275\u0275listener("click", function QuizComponent_div_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(14, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "div", 50);
    \u0275\u0275elementStart(16, "button", 33);
    \u0275\u0275listener("click", function QuizComponent_div_17_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275text(17, " Get My Blend ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 51);
    \u0275\u0275element(19, "path", 52);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.concernOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedConcerns.length > 0 && !ctx_r1.hasNoConcern);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.selectedConcerns.length === 0);
  }
}
function QuizComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 61);
    \u0275\u0275text(6, "\u{1F343}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 61);
    \u0275\u0275text(8, "\u{1F33F}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 62);
    \u0275\u0275text(10, "Crafting your personalised blend...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 63);
    \u0275\u0275element(12, "span")(13, "span")(14, "span");
    \u0275\u0275elementEnd()()();
  }
}
function QuizComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 22);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 23);
    \u0275\u0275text(5, "Something went wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function QuizComponent_div_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(9, "Try Again");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function QuizComponent_div_20_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getConcernEmoji(c_r14), " ", ctx_r1.getConcernLabel(c_r14), " ");
  }
}
function QuizComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, QuizComponent_div_20_div_8_span_1_Template, 2, 2, "span", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedConcerns);
  }
}
function QuizComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 69);
    \u0275\u0275text(3, "Your Personalised Blend \u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, QuizComponent_div_20_div_8_Template, 2, 1, "div", 72);
    \u0275\u0275elementStart(9, "div", 73)(10, "div", 74)(11, "h3");
    \u0275\u0275text(12, "Why This Blend?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 75)(16, "div", 76);
    \u0275\u0275text(17, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Usage Tip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 75)(24, "div", 76);
    \u0275\u0275text(25, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Please Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, " This blend is designed to support healthier hair and scalp over time \u2014 but consistency is key. Natural care works gradually, so visible improvements typically take 2\u20133 months of regular use. Pairing it with a balanced diet and healthy lifestyle will give you the best results. ");
    \u0275\u0275element(31, "br")(32, "br");
    \u0275\u0275text(33, " If your concerns are severe or persistent, it\u2019s always a good idea to consult a professional. If you have known sensitivities, are pregnant, or undergoing medical treatment, we recommend checking with your doctor before use. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 77)(35, "p", 78);
    \u0275\u0275text(36, "Interested in ordering? Tap below \u2014 we'll send you all the details on WhatsApp.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 80);
    \u0275\u0275element(39, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Order on WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "button", 82);
    \u0275\u0275listener("click", function QuizComponent_div_20_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(42, "Retake Quiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.result.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.result.tagline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedConcerns.length > 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.result.recommendation);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.result.usageTip);
    \u0275\u0275advance(15);
    \u0275\u0275property("href", ctx_r1.buildWhatsappLink(), \u0275\u0275sanitizeUrl);
  }
}
var WHATSAPP_NUMBER = "919867368847";
var QuizComponent = class _QuizComponent {
  // The concerns step appears after all single steps
  get concernStepIndex() {
    return this.singleSteps.length + 1;
  }
  get allStepIds() {
    return ["intro", ...this.singleSteps.map((s) => s.id), "concerns"];
  }
  get progressPct() {
    return (this.currentStep + 1) / this.allStepIds.length * 100;
  }
  get currentSingleStep() {
    return this.currentStep > 0 && this.currentStep <= this.singleSteps.length ? this.singleSteps[this.currentStep - 1] : null;
  }
  get hasNoConcern() {
    return this.selectedConcerns.includes("healthy_hair");
  }
  constructor(quizService) {
    this.quizService = quizService;
    this.currentStep = 0;
    this.submitted = false;
    this.result = null;
    this.error = null;
    this.mobileError = null;
    this.selectedConcerns = [];
    this.answers = {
      name: "",
      mobileNumber: "",
      hairType: "",
      scalpType: "",
      lifestyle: ""
    };
    this.singleSteps = [
      {
        id: "hairType",
        question: "What is your hair type?",
        subtitle: "Choose the option that best describes your natural hair texture.",
        options: [
          { label: "Straight & Fine", value: "straight_fine", emoji: "\u27B0" },
          { label: "Straight & Thick", value: "straight_thick", emoji: "\u3030\uFE0F" },
          { label: "Wavy", value: "wavy", emoji: "\u3030" },
          { label: "Curly", value: "curly", emoji: "\u{1F300}" }
        ]
      },
      {
        id: "scalpType",
        question: "How would you describe your scalp?",
        subtitle: "Your scalp condition is key to finding the right formula.",
        options: [
          { label: "Oily Scalp", value: "oily", emoji: "\u{1F4A7}" },
          { label: "Dry & Itchy", value: "dry", emoji: "\u{1F335}" },
          { label: "Balanced / Normal", value: "normal", emoji: "\u2705" },
          { label: "Dandruff-prone", value: "dandruff", emoji: "\u2744\uFE0F" }
        ]
      },
      {
        id: "lifestyle",
        question: "How often do you currently oil your hair?",
        subtitle: "This helps us recommend the right usage frequency.",
        options: [
          { label: "Rarely / Never", value: "rarely", emoji: "\u{1F62C}" },
          { label: "Once a week", value: "weekly", emoji: "\u{1F4C5}" },
          { label: "Twice a week", value: "twice_weekly", emoji: "\u270C\uFE0F" },
          { label: "Daily", value: "daily", emoji: "\u{1F31F}" }
        ]
      }
    ];
    this.concernOptions = [
      { label: "Hair Fall", value: "hair_fall", emoji: "\u{1F342}" },
      { label: "Slow Growth", value: "slow_growth", emoji: "\u{1F331}" },
      { label: "Frizz & Dryness", value: "frizz", emoji: "\u26A1" },
      { label: "Premature Greying", value: "greying", emoji: "\u2B1C" },
      { label: "Dandruff", value: "dandruff", emoji: "\u2744\uFE0F" },
      { label: "Dull & Lifeless Hair", value: "dull", emoji: "\u{1F32B}\uFE0F" },
      { label: "Damaged / Brittle Hair", value: "damaged", emoji: "\u{1F494}" },
      { label: "No Concern \u2014 Just Nourishment", value: "healthy_hair", emoji: "\u{1F60C}" }
    ];
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  setAnswer(key, value) {
    this.answers[key] = value;
  }
  toggleConcern(value) {
    if (value === "healthy_hair") {
      this.selectedConcerns = this.selectedConcerns.includes("healthy_hair") ? [] : ["healthy_hair"];
      return;
    }
    this.selectedConcerns = this.selectedConcerns.filter((c) => c !== "healthy_hair");
    const idx = this.selectedConcerns.indexOf(value);
    if (idx > -1) {
      this.selectedConcerns.splice(idx, 1);
    } else {
      this.selectedConcerns.push(value);
    }
  }
  isConcernSelected(value) {
    return this.selectedConcerns.includes(value);
  }
  removeConcern(value) {
    this.selectedConcerns = this.selectedConcerns.filter((c) => c !== value);
  }
  getConcernLabel(value) {
    return this.concernOptions.find((o) => o.value === value)?.label || value;
  }
  getConcernEmoji(value) {
    return this.concernOptions.find((o) => o.value === value)?.emoji || "";
  }
  tryNext() {
    if (this.currentStep === 0) {
      this.mobileError = null;
      if (!this.answers["name"].trim())
        return;
      if (!/^[6-9]\d{9}$/.test(this.answers["mobileNumber"])) {
        this.mobileError = "Please enter a valid 10-digit Indian mobile number.";
        return;
      }
      this.currentStep++;
      return;
    }
    if (this.currentStep <= this.singleSteps.length) {
      const key = this.currentSingleStep.id;
      if (!this.answers[key])
        return;
      this.currentStep++;
      return;
    }
    if (this.currentStep === this.concernStepIndex) {
      if (this.selectedConcerns.length === 0)
        return;
      this.submitQuiz();
    }
  }
  goBack() {
    if (this.currentStep > 0)
      this.currentStep--;
  }
  submitQuiz() {
    this.submitted = true;
    this.error = null;
    const payload = {
      name: this.answers["name"],
      mobileNumber: this.answers["mobileNumber"],
      hairType: this.answers["hairType"],
      scalpType: this.answers["scalpType"],
      concerns: [...this.selectedConcerns],
      lifestyle: this.answers["lifestyle"]
    };
    setTimeout(() => {
      this.quizService.getRecommendation(payload).subscribe({
        next: (res) => {
          this.result = res;
          this.submitted = false;
        },
        error: () => {
          this.error = "Something went wrong. Please try again.";
          this.submitted = false;
        }
      });
    }, 1500);
  }
  buildWhatsappLink() {
    const name = this.answers["name"] || "Customer";
    const mobile = this.answers["mobileNumber"];
    const product = this.result?.productName || "Vedhrithm Herbal Hair Oil";
    const concerns = this.selectedConcerns.map((c) => this.getConcernLabel(c)).join(", ");
    const msg = `Hi! I'm ${name} (\u{1F4DE} +91 ${mobile}). I completed the Vedhrithm hair quiz.

\u2728 *My recommended blend:* ${product}
\u{1F486} *My concerns:* ${concerns}

I'm interested in ordering \u2014 please share the details!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
  reset() {
    this.currentStep = 0;
    this.submitted = false;
    this.result = null;
    this.error = null;
    this.mobileError = null;
    this.selectedConcerns = [];
    this.answers = { name: "", mobileNumber: "", hairType: "", scalpType: "", lifestyle: "" };
  }
  static {
    this.\u0275fac = function QuizComponent_Factory(t) {
      return new (t || _QuizComponent)(\u0275\u0275directiveInject(QuizService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 7, consts: [[1, "quiz-hero"], [1, "quiz-hero-bg"], [1, "container"], [1, "section-tag"], [1, "page-title"], [1, "page-subtitle"], [1, "quiz-section"], [1, "quiz-wrapper"], ["class", "step-indicators", 4, "ngIf"], ["class", "quiz-step", 4, "ngIf"], ["class", "quiz-step loading-step", 4, "ngIf"], ["class", "quiz-step error-step", 4, "ngIf"], ["class", "quiz-result", 4, "ngIf"], [1, "step-indicators"], [1, "step-track"], [1, "step-fill"], [1, "step-dots"], ["class", "step-dot", 3, "done", "active", 4, "ngFor", "ngForOf"], [1, "step-label"], [1, "step-dot"], [1, "quiz-step"], [1, "step-content", "name-step"], [1, "step-icon"], [1, "step-question"], [1, "step-subtitle"], [1, "name-fields"], [1, "field-group"], ["type", "text", "placeholder", "e.g. Priya Sharma", 1, "name-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "phone-input-wrap"], [1, "phone-prefix"], ["type", "tel", "placeholder", "10-digit mobile number", "maxlength", "10", 1, "name-input", "phone-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "field-hint", 4, "ngIf"], [1, "field-note"], [1, "btn-primary", 3, "click", "disabled"], [1, "field-hint"], [1, "step-content"], ["class", "step-greeting", 4, "ngIf"], [1, "options-grid"], ["class", "option-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "step-nav"], [1, "btn-outline", 3, "click"], [1, "step-greeting"], [1, "option-btn", 3, "click"], [1, "opt-emoji"], [1, "opt-label"], ["class", "opt-check", 4, "ngIf"], [1, "opt-check"], [1, "options-grid", "concerns-grid"], ["class", "option-btn multi-btn", 3, "selected", "none-btn", "click", 4, "ngFor", "ngForOf"], ["class", "selected-concerns", 4, "ngIf"], [2, "flex", "1"], ["width", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "option-btn", "multi-btn", 3, "click"], [1, "selected-concerns"], ["class", "concerns-tag", 4, "ngFor", "ngForOf"], [1, "concerns-tag"], [1, "tag-remove", 3, "click"], [1, "quiz-step", "loading-step"], [1, "loading-inner"], [1, "loading-leaves"], [1, "ll"], [1, "loading-text"], [1, "loading-dots"], [1, "quiz-step", "error-step"], [1, "step-content", 2, "text-align", "center"], [1, "btn-primary", 3, "click"], [1, "quiz-result"], [1, "result-header"], [1, "result-eyebrow"], [1, "result-title"], [1, "result-tagline"], ["class", "result-concerns", 4, "ngIf"], [1, "result-body"], [1, "result-rec"], [1, "result-usage"], [1, "usage-icon"], [1, "result-cta"], [1, "cta-intro"], ["target", "_blank", 1, "whatsapp-order-btn", 3, "href"], ["viewBox", "0 0 24 24", "fill", "white", "width", "22"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "btn-outline", "reset-btn", 3, "click"], [1, "result-concerns"], ["class", "concern-badge", 4, "ngFor", "ngForOf"], [1, "concern-badge"]], template: function QuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Personalised for You");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Your ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Hair Quiz");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "Answer a few simple questions and we'll blend the perfect Vedhrithm formulation for your unique hair needs.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 6)(12, "div", 2)(13, "div", 7);
        \u0275\u0275template(14, QuizComponent_div_14_Template, 7, 5, "div", 8)(15, QuizComponent_div_15_Template, 25, 4, "div", 9)(16, QuizComponent_div_16_Template, 12, 4, "div", 9)(17, QuizComponent_div_17_Template, 20, 3, "div", 9)(18, QuizComponent_div_18_Template, 15, 0, "div", 10)(19, QuizComponent_div_19_Template, 10, 1, "div", 11)(20, QuizComponent_div_20_Template, 43, 6, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 0 && !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep > 0 && ctx.currentStep <= ctx.singleSteps.length && !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === ctx.concernStepIndex && !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && !ctx.result && !ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.result && !ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.field-note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: rgba(250, 244, 230, 0.45);\n  line-height: 1.4;\n}\n.quiz-hero[_ngcontent-%COMP%] {\n  min-height: 38vh;\n  display: flex;\n  align-items: center;\n  padding: 8rem 0 4rem;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n.quiz-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 60% 60% at 50% 50%,\n      rgba(26, 74, 46, 0.25) 0%,\n      transparent 70%);\n}\n.quiz-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 1.25rem;\n}\n.page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.8;\n}\n.quiz-section[_ngcontent-%COMP%] {\n  padding: 4rem 0 8rem;\n}\n.quiz-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.step-indicators[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.step-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: var(--forest-accent);\n  border-radius: 1px;\n  margin-bottom: 1.25rem;\n  overflow: hidden;\n}\n.step-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--gold-dark),\n      var(--gold));\n  border-radius: 1px;\n  transition: width 0.5s ease;\n}\n.step-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid var(--border-gold);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.3);\n  transition: all 0.4s ease;\n}\n.step-dot.done[_ngcontent-%COMP%] {\n  background: var(--forest-accent);\n  border-color: var(--gold);\n  color: var(--gold);\n}\n.step-dot.active[_ngcontent-%COMP%] {\n  background: var(--gold);\n  border-color: var(--gold);\n  color: var(--deep-forest);\n  font-weight: 700;\n  box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);\n}\n.step-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.quiz-step[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 3rem;\n  animation: fadeInUp 0.5s ease;\n}\n.step-greeting[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.step-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1.25rem;\n  text-align: center;\n}\n.step-question[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 3vw, 2.2rem);\n  font-weight: 400;\n  color: var(--cream);\n  margin-bottom: 0.6rem;\n  line-height: 1.3;\n}\n.step-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.6);\n  margin-bottom: 2rem;\n  line-height: 1.7;\n}\n.step-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n.name-step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.name-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n  text-align: left;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.name-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold-strong);\n  border-radius: 4px;\n  padding: 0.9rem 1.25rem;\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: var(--cream);\n  outline: none;\n  transition: border-color 0.3s ease;\n  box-sizing: border-box;\n}\n.name-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(250, 244, 230, 0.3);\n}\n.name-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--gold);\n}\n.phone-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold-strong);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.phone-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--gold);\n}\n.phone-prefix[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  font-size: 1rem;\n  color: var(--gold);\n  background: rgba(212, 175, 55, 0.08);\n  border-right: 1px solid var(--border-gold);\n  white-space: nowrap;\n}\n.phone-input[_ngcontent-%COMP%] {\n  border: none !important;\n  border-radius: 0 !important;\n  flex: 1;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #e05c5c;\n  margin-top: 0.4rem;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.9rem;\n  margin-bottom: 2.5rem;\n}\n.concerns-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.option-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  color: rgba(250, 244, 230, 0.8);\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: left;\n  position: relative;\n}\n.option-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.5);\n  background: var(--forest-accent);\n  color: var(--cream);\n}\n.option-btn.selected[_ngcontent-%COMP%] {\n  border-color: var(--gold);\n  background: rgba(212, 175, 55, 0.12);\n  color: var(--cream);\n  box-shadow: 0 0 15px rgba(212, 175, 55, 0.15);\n}\n.multi-btn[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.none-btn.selected[_ngcontent-%COMP%] {\n  border-color: rgba(250, 244, 230, 0.3);\n  background: rgba(250, 244, 230, 0.05);\n}\n.opt-emoji[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.opt-label[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.opt-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.75rem;\n  color: var(--gold);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n.selected-concerns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.concerns-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.75rem;\n  background: rgba(212, 175, 55, 0.12);\n  border: 1px solid var(--gold);\n  border-radius: 20px;\n  font-size: 0.75rem;\n  color: var(--gold);\n}\n.tag-remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.7;\n  font-size: 0.9rem;\n  line-height: 1;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.step-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.loading-step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loading-inner[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.loading-leaves[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n.ll[_ngcontent-%COMP%] {\n  animation: float 1.2s ease-in-out infinite;\n}\n.ll[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.ll[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  font-style: italic;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n}\n.loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--gold);\n  animation: _ngcontent-%COMP%_dotBounce 1.2s ease-in-out infinite;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_dotBounce {\n  0%, 80%, 100% {\n    transform: scale(0.6);\n    opacity: 0.4;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.quiz-result[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  overflow: hidden;\n  animation: fadeInUp 0.6s ease;\n}\n.result-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--forest-accent),\n      var(--forest-light));\n  border-bottom: 1px solid var(--border-gold);\n  padding: 2.5rem;\n  text-align: center;\n}\n.result-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n  opacity: 0.8;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.4rem, 3vw, 2rem);\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n  line-height: 1.35;\n}\n.result-tagline[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-style: italic;\n  font-size: 1.1rem;\n  color: rgba(250, 244, 230, 0.7);\n}\n.result-concerns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 1.25rem 2.5rem 0;\n  justify-content: center;\n}\n.concern-badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px solid var(--border-gold);\n  border-radius: 20px;\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.7);\n}\n.result-body[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n.result-rec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.result-rec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  margin-bottom: 2rem;\n}\n.result-usage[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: rgba(212, 175, 55, 0.05);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n}\n.usage-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.result-usage[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--gold);\n  margin-bottom: 0.3rem;\n}\n.result-usage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.7;\n  margin: 0;\n}\n.result-cta[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem;\n  border-top: 1px solid var(--border-gold);\n  text-align: center;\n  background: var(--forest-light);\n}\n.cta-intro[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.6);\n  margin-bottom: 1.25rem;\n}\n.whatsapp-order-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 2.25rem;\n  background: #25d366;\n  color: white;\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  font-weight: 700;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  margin-bottom: 1rem;\n  text-decoration: none;\n}\n.whatsapp-order-btn[_ngcontent-%COMP%]:hover {\n  background: #1da851;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);\n}\n.reset-btn[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n@media (max-width:600px) {\n  .quiz-step[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n  .options-grid[_ngcontent-%COMP%], .concerns-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reset-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.75rem;\n  }\n}\n/*# sourceMappingURL=quiz.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src\\app\\pages\\quiz\\quiz.component.ts", lineNumber: 292 });
})();
export {
  QuizComponent
};
//# sourceMappingURL=chunk-R2XGH4HZ.js.map
