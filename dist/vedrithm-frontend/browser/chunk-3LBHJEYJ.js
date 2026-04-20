import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
} from "./chunk-O7KYMSXY.js";

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
    \u0275\u0275elementStart(0, "div", 44);
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
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_16_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function QuizComponent_div_16_button_8_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAnswer(ctx_r1.currentStepData.id, opt_r6.value));
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_div_16_button_8_span_5_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.answers[ctx_r1.currentStepData.id] === opt_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.answers[ctx_r1.currentStepData.id] === opt_r6.value);
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
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 41);
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275listener("click", function QuizComponent_div_16_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryNext());
    });
    \u0275\u0275text(14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 42);
    \u0275\u0275element(16, "path", 43);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentStepData == null ? null : ctx_r1.currentStepData.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentStepData == null ? null : ctx_r1.currentStepData.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentStepData == null ? null : ctx_r1.currentStepData.options);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.answers[ctx_r1.currentStepData.id]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentStep === ctx_r1.steps.length ? "Get My Recommendation" : "Next", " ");
  }
}
function QuizComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6, "\u{1F343}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8, "\u{1F33F}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 54);
    \u0275\u0275text(10, "Crafting your personalised recommendation...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55);
    \u0275\u0275element(12, "span")(13, "span")(14, "span");
    \u0275\u0275elementEnd()()();
  }
}
function QuizComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 22);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 23);
    \u0275\u0275text(5, "Something went wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 58);
    \u0275\u0275listener("click", function QuizComponent_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
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
function QuizComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3, "Your Personalised Recommendation \u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 64)(9, "div", 65)(10, "h3");
    \u0275\u0275text(11, "Why This Formula?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 66)(15, "div", 67);
    \u0275\u0275text(16, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "strong");
    \u0275\u0275text(19, "Usage Tip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 68)(23, "p", 69);
    \u0275\u0275text(24, "Interested in ordering? Tap below \u2014 we'll send you all the details on WhatsApp.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 71);
    \u0275\u0275element(27, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Order Vedrithm on WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 73);
    \u0275\u0275listener("click", function QuizComponent_div_19_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(30, "Retake Quiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.result.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.result.tagline);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.result.recommendation);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.result.usageTip);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r1.buildWhatsappLink(), \u0275\u0275sanitizeUrl);
  }
}
var WHATSAPP_NUMBER = "919867368847";
var QuizComponent = class _QuizComponent {
  get allStepIds() {
    return ["intro", ...this.steps.map((s) => s.id)];
  }
  get progressPct() {
    return (this.currentStep + 1) / this.allStepIds.length * 100;
  }
  get currentStepData() {
    return this.currentStep === 0 ? null : this.steps[this.currentStep - 1];
  }
  constructor(quizService) {
    this.quizService = quizService;
    this.currentStep = 0;
    this.submitted = false;
    this.result = null;
    this.error = null;
    this.mobileError = null;
    this.answers = {
      name: "",
      mobileNumber: "",
      hairType: "",
      scalpType: "",
      primaryConcern: "",
      lifestyle: ""
    };
    this.steps = [
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
        id: "primaryConcern",
        question: "What is your biggest hair concern?",
        subtitle: "Pick the one that bothers you most right now.",
        options: [
          { label: "Hair Fall", value: "hair_fall", emoji: "\u{1F342}" },
          { label: "Slow Growth", value: "slow_growth", emoji: "\u{1F331}" },
          { label: "Frizz & Dryness", value: "frizz", emoji: "\u26A1" },
          { label: "Premature Greying", value: "greying", emoji: "\u2B1C" },
          { label: "Dandruff", value: "dandruff", emoji: "\u2744\uFE0F" },
          { label: "Dull & Lifeless Hair", value: "dull", emoji: "\u{1F32B}\uFE0F" },
          { label: "No Concern", value: "healthy_hair", emoji: "\u{1F60C}" }
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
  }
  setAnswer(key, value) {
    this.answers[key] = value;
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
    const key = this.currentStepData.id;
    if (!this.answers[key])
      return;
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    } else {
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
      concerns: [this.answers["primaryConcern"]],
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
    const product = this.result?.productName || "Vedrithm Herbal Hair Oil";
    const concern = (this.answers["primaryConcern"] || "").replace(/_/g, " ");
    const msg = `Hi! I'm ${name} (\u{1F4DE} +91 ${mobile}). I completed the Vedrithm hair quiz and my recommended product is *${product}*. My primary concern is ${concern}. I'm interested in ordering \u2014 please share the details!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
  reset() {
    this.currentStep = 0;
    this.submitted = false;
    this.result = null;
    this.error = null;
    this.mobileError = null;
    this.answers = { name: "", mobileNumber: "", hairType: "", scalpType: "", primaryConcern: "", lifestyle: "" };
  }
  static {
    this.\u0275fac = function QuizComponent_Factory(t) {
      return new (t || _QuizComponent)(\u0275\u0275directiveInject(QuizService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 6, consts: [[1, "quiz-hero"], [1, "quiz-hero-bg"], [1, "container"], [1, "section-tag"], [1, "page-title"], [1, "page-subtitle"], [1, "quiz-section"], [1, "quiz-wrapper"], ["class", "step-indicators", 4, "ngIf"], ["class", "quiz-step", 4, "ngIf"], ["class", "quiz-step loading-step", 4, "ngIf"], ["class", "quiz-step error-step", 4, "ngIf"], ["class", "quiz-result", 4, "ngIf"], [1, "step-indicators"], [1, "step-track"], [1, "step-fill"], [1, "step-dots"], ["class", "step-dot", 3, "done", "active", 4, "ngFor", "ngForOf"], [1, "step-label"], [1, "step-dot"], [1, "quiz-step"], [1, "step-content", "name-step"], [1, "step-icon"], [1, "step-question"], [1, "step-subtitle"], [1, "name-fields"], [1, "field-group"], ["type", "text", "placeholder", "e.g. Priya Sharma", 1, "name-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "phone-input-wrap"], [1, "phone-prefix"], ["type", "tel", "placeholder", "10-digit mobile number", "maxlength", "10", 1, "name-input", "phone-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "field-hint", 4, "ngIf"], [1, "field-note"], [1, "btn-primary", 3, "click", "disabled"], [1, "field-hint"], [1, "step-content"], ["class", "step-greeting", 4, "ngIf"], [1, "options-grid"], ["class", "option-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "step-nav"], [1, "btn-outline", 3, "click"], [2, "flex", "1"], ["width", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "step-greeting"], [1, "option-btn", 3, "click"], [1, "opt-emoji"], [1, "opt-label"], ["class", "opt-check", 4, "ngIf"], [1, "opt-check"], [1, "quiz-step", "loading-step"], [1, "loading-inner"], [1, "loading-leaves"], [1, "ll"], [1, "loading-text"], [1, "loading-dots"], [1, "quiz-step", "error-step"], [1, "step-content", 2, "text-align", "center"], [1, "btn-primary", 3, "click"], [1, "quiz-result"], [1, "result-header"], [1, "result-eyebrow"], [1, "result-title"], [1, "result-tagline"], [1, "result-body"], [1, "result-rec"], [1, "result-usage"], [1, "usage-icon"], [1, "result-cta"], [1, "cta-intro"], ["target", "_blank", 1, "whatsapp-order-btn", 3, "href"], ["viewBox", "0 0 24 24", "fill", "white", "width", "22"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "btn-outline", "reset-btn", 3, "click"]], template: function QuizComponent_Template(rf, ctx) {
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
        \u0275\u0275text(10, "Answer a few simple questions and we'll recommend the perfect Vedrithm formulation for your unique hair needs.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 6)(12, "div", 2)(13, "div", 7);
        \u0275\u0275template(14, QuizComponent_div_14_Template, 7, 5, "div", 8)(15, QuizComponent_div_15_Template, 25, 4, "div", 9)(16, QuizComponent_div_16_Template, 17, 6, "div", 9)(17, QuizComponent_div_17_Template, 15, 0, "div", 10)(18, QuizComponent_div_18_Template, 10, 1, "div", 11)(19, QuizComponent_div_19_Template, 31, 5, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 0 && !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep > 0 && ctx.currentStep <= ctx.steps.length && !ctx.submitted && !ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && !ctx.result && !ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.result && !ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.field-note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: rgba(250, 244, 230, 0.45);\n  line-height: 1.4;\n}\n.quiz-hero[_ngcontent-%COMP%] {\n  min-height: 38vh;\n  display: flex;\n  align-items: center;\n  padding: 8rem 0 4rem;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n.quiz-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 60% 60% at 50% 50%,\n      rgba(26, 74, 46, 0.25) 0%,\n      transparent 70%);\n}\n.quiz-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-weight: 300;\n  color: var(--cream);\n  margin: 0.5rem 0 1.25rem;\n}\n.page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n  font-size: 1rem;\n  color: rgba(250, 244, 230, 0.65);\n  line-height: 1.8;\n}\n.quiz-section[_ngcontent-%COMP%] {\n  padding: 4rem 0 8rem;\n}\n.quiz-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.step-indicators[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.step-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: var(--forest-accent);\n  border-radius: 1px;\n  margin-bottom: 1.25rem;\n  overflow: hidden;\n}\n.step-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--gold-dark),\n      var(--gold));\n  border-radius: 1px;\n  transition: width 0.5s ease;\n}\n.step-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid var(--border-gold);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: rgba(250, 244, 230, 0.3);\n  transition: all 0.4s ease;\n}\n.step-dot.done[_ngcontent-%COMP%] {\n  background: var(--forest-accent);\n  border-color: var(--gold);\n  color: var(--gold);\n}\n.step-dot.active[_ngcontent-%COMP%] {\n  background: var(--gold);\n  border-color: var(--gold);\n  color: var(--deep-forest);\n  font-weight: 700;\n  box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);\n}\n.step-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.quiz-step[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  padding: 3rem;\n  animation: fadeInUp 0.5s ease;\n}\n.step-greeting[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.step-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1.25rem;\n  text-align: center;\n}\n.step-question[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 3vw, 2.2rem);\n  font-weight: 400;\n  color: var(--cream);\n  margin-bottom: 0.6rem;\n  line-height: 1.3;\n}\n.step-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.6);\n  margin-bottom: 2rem;\n  line-height: 1.7;\n}\n.name-step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.name-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n  text-align: left;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.name-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold-strong);\n  border-radius: 4px;\n  padding: 0.9rem 1.25rem;\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: var(--cream);\n  outline: none;\n  transition: border-color 0.3s ease;\n  box-sizing: border-box;\n}\n.name-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(250, 244, 230, 0.3);\n}\n.name-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--gold);\n}\n.phone-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold-strong);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.phone-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--gold);\n}\n.phone-prefix[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  font-size: 1rem;\n  color: var(--gold);\n  background: rgba(212, 175, 55, 0.08);\n  border-right: 1px solid var(--border-gold);\n  white-space: nowrap;\n}\n.phone-input[_ngcontent-%COMP%] {\n  border: none !important;\n  border-radius: 0 !important;\n  flex: 1;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #e05c5c;\n  margin-top: 0.4rem;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.9rem;\n  margin-bottom: 2.5rem;\n}\n.option-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background: var(--forest-light);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n  color: rgba(250, 244, 230, 0.8);\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: left;\n  position: relative;\n}\n.option-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, 0.5);\n  background: var(--forest-accent);\n  color: var(--cream);\n}\n.option-btn.selected[_ngcontent-%COMP%] {\n  border-color: var(--gold);\n  background: rgba(212, 175, 55, 0.1);\n  color: var(--cream);\n  box-shadow: 0 0 15px rgba(212, 175, 55, 0.15);\n}\n.opt-emoji[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.opt-label[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.opt-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.75rem;\n  color: var(--gold);\n  font-size: 0.9rem;\n}\n.step-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.loading-step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loading-inner[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.loading-leaves[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n.ll[_ngcontent-%COMP%] {\n  animation: float 1.2s ease-in-out infinite;\n}\n.ll[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.ll[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  font-style: italic;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n}\n.loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--gold);\n  animation: _ngcontent-%COMP%_dotBounce 1.2s ease-in-out infinite;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_dotBounce {\n  0%, 80%, 100% {\n    transform: scale(0.6);\n    opacity: 0.4;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.quiz-result[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n  border: 1px solid var(--border-gold);\n  border-radius: 8px;\n  overflow: hidden;\n  animation: fadeInUp 0.6s ease;\n}\n.result-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--forest-accent),\n      var(--forest-light));\n  border-bottom: 1px solid var(--border-gold);\n  padding: 2.5rem;\n  text-align: center;\n}\n.result-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n  opacity: 0.8;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 3vw, 2.2rem);\n  color: var(--gold);\n  margin-bottom: 0.5rem;\n}\n.result-tagline[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-style: italic;\n  font-size: 1.1rem;\n  color: rgba(250, 244, 230, 0.7);\n}\n.result-body[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n.result-rec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 0.75rem;\n}\n.result-rec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(250, 244, 230, 0.75);\n  line-height: 1.85;\n  margin-bottom: 2rem;\n}\n.result-usage[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: rgba(212, 175, 55, 0.05);\n  border: 1px solid var(--border-gold);\n  border-radius: 4px;\n}\n.usage-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.result-usage[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--gold);\n  margin-bottom: 0.3rem;\n}\n.result-usage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(250, 244, 230, 0.7);\n  line-height: 1.7;\n  margin: 0;\n}\n.result-cta[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem;\n  border-top: 1px solid var(--border-gold);\n  text-align: center;\n  background: var(--forest-light);\n}\n.cta-intro[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(250, 244, 230, 0.6);\n  margin-bottom: 1.25rem;\n}\n.whatsapp-order-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 2.25rem;\n  background: #25d366;\n  color: white;\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  font-weight: 700;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  margin-bottom: 1rem;\n  text-decoration: none;\n}\n.whatsapp-order-btn[_ngcontent-%COMP%]:hover {\n  background: #1da851;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);\n}\n.reset-btn[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n@media (max-width:600px) {\n  .quiz-step[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reset-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.75rem;\n  }\n}\n/*# sourceMappingURL=quiz.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src\\app\\pages\\quiz\\quiz.component.ts", lineNumber: 234 });
})();
export {
  QuizComponent
};
//# sourceMappingURL=chunk-3LBHJEYJ.js.map
