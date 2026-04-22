import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-D3KKIXUS.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  NgClass,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W6VLEW7M.js";

// src/app/pages/admin/admin.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AdminComponent_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Incorrect password. Try again.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "Vedrithm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8, "Admin Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordInput, $event) || (ctx_r1.passwordInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminComponent_div_1_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryLogin());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_div_1_p_10_Template, 2, 0, "p", 10);
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function AdminComponent_div_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tryLogin());
    });
    \u0275\u0275text(12, "Enter Dashboard");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("shake", ctx_r1.loginError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginError);
  }
}
function AdminComponent_div_2_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingCount);
  }
}
function AdminComponent_div_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading from Google Sheets\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.apiError, " ");
  }
}
function AdminComponent_div_2_div_52_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No reviews in this category. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_div_52_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("lit", s_r6 <= r_r7.rating);
  }
}
function AdminComponent_div_2_div_52_div_12_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Saving\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_div_52_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52)(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275template(10, AdminComponent_div_2_div_52_div_12_span_10_Template, 2, 2, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60)(18, "button", 61);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_div_12_Template_button_click_18_listener() {
      const r_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus(r_r7, "Approved"));
    });
    \u0275\u0275text(19, " \u2713 Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 62);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_div_12_Template_button_click_20_listener() {
      const r_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus(r_r7, "Rejected"));
    });
    \u0275\u0275text(21, " \u2715 Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminComponent_div_2_div_52_div_12_span_22_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initials(r_r7.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(r_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', r_r7.text, '"');
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2726 ", r_r7.productUsed, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", r_r7.status === "Approved" || ctx_r1.updatingId === r_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", r_r7.status === "Rejected" || ctx_r1.updatingId === r_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.updatingId === r_r7.id);
  }
}
function AdminComponent_div_2_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFilter = "all");
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFilter = "Pending");
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFilter = "Approved");
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_div_2_div_52_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFilter = "Rejected");
    });
    \u0275\u0275text(9, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminComponent_div_2_div_52_div_10_Template, 4, 0, "div", 44);
    \u0275\u0275elementStart(11, "div", 45);
    \u0275\u0275template(12, AdminComponent_div_2_div_52_div_12_Template, 23, 12, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.reviewFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All (", ctx_r1.reviews.length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.reviewFilter === "Pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pending (", ctx_r1.pendingCount, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.reviewFilter === "Approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Approved (", ctx_r1.approvedCount, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.reviewFilter === "Rejected");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredReviews.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredReviews);
  }
}
function AdminComponent_div_2_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No quiz submissions yet. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_div_53_div_2_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85)(1, "label");
    \u0275\u0275text(2, "Hair");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r8.hairType);
  }
}
function AdminComponent_div_2_div_53_div_2_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85)(1, "label");
    \u0275\u0275text(2, "Scalp");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r8.scalpType);
  }
}
function AdminComponent_div_2_div_53_div_2_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85)(1, "label");
    \u0275\u0275text(2, "Lifestyle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r8.lifestyle);
  }
}
function AdminComponent_div_2_div_53_div_2_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86)(1, "label");
    \u0275\u0275text(2, "Concerns");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r8.concerns);
  }
}
function AdminComponent_div_2_div_53_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70)(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 75);
    \u0275\u0275template(14, AdminComponent_div_2_div_53_div_2_div_1_span_14_Template, 4, 1, "span", 76)(15, AdminComponent_div_2_div_53_div_2_div_1_span_15_Template, 4, 1, "span", 76)(16, AdminComponent_div_2_div_53_div_2_div_1_span_16_Template, 4, 1, "span", 76)(17, AdminComponent_div_2_div_53_div_2_div_1_span_17_Template, 4, 1, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 78)(19, "span", 79);
    \u0275\u0275text(20, "Recommended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 80)(24, "a", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 82);
    \u0275\u0275element(26, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "a", 84);
    \u0275\u0275text(29, "\u{1F4DE} Call");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initials(q_r8.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+91 ", q_r8.mobileNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r8.date);
    \u0275\u0275advance();
    \u0275\u0275classProp("sent", q_r8.waSent === "Yes \u2705");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r8.waSent === "Yes \u2705" ? "\u2705 Notified" : "\u23F3 Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", q_r8.hairType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r8.scalpType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r8.lifestyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r8.concerns);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r8.recommendedProduct);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.waLink(q_r8.name, q_r8.mobileNumber, q_r8.recommendedProduct), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "tel:+91" + q_r8.mobileNumber, \u0275\u0275sanitizeUrl);
  }
}
function AdminComponent_div_2_div_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, AdminComponent_div_2_div_53_div_2_div_1_Template, 30, 14, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.quizLeads);
  }
}
function AdminComponent_div_2_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminComponent_div_2_div_53_div_1_Template, 4, 0, "div", 44)(2, AdminComponent_div_2_div_53_div_2_Template, 2, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizLeads.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizLeads.length > 0);
  }
}
function AdminComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6, "Vedrithm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAll());
    });
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u21BB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Refresh ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(15, "Logout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 22)(17, "div", 23)(18, "div", 24);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21, "Total Reviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23)(23, "div", 26);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275text(26, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 27);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 25);
    \u0275\u0275text(31, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "div", 28);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 25);
    \u0275\u0275text(36, "Quiz Leads");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 23)(38, "div", 24);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25);
    \u0275\u0275text(41, "Avg Rating");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 29)(43, "button", 30);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "reviews");
    });
    \u0275\u0275text(44, " Reviews ");
    \u0275\u0275template(45, AdminComponent_div_2_span_45_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 30);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "quiz");
    });
    \u0275\u0275text(47, " Quiz Leads ");
    \u0275\u0275elementStart(48, "span", 32);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, AdminComponent_div_2_div_50_Template, 4, 0, "div", 33)(51, AdminComponent_div_2_div_51_Template, 2, 1, "div", 34)(52, AdminComponent_div_2_div_52_Template, 13, 13, "div", 35)(53, AdminComponent_div_2_div_53_Template, 3, 2, "div", 35);
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r1.loading);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.reviews.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.approvedCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pendingCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quizLeads.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.avgRating > 0 ? ctx_r1.avgRating.toFixed(1) + " \u2605" : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "reviews");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pendingCount);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "quiz");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.quizLeads.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.apiError && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "reviews" && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "quiz" && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r1.toastMsg)("toast-err", ctx_r1.toastType === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.toastMsg, " ");
  }
}
var GAS_URL = "https://script.google.com/macros/s/AKfycbyBD4qAumQOYFqQnfh2wgxh2AK24I4law4MFo1GlHj2rirPvlZu1Ia68kFU1Lrx3uE79w/exec";
var ADMIN_PASSWORD = "vedrithm2025";
var AdminComponent = class _AdminComponent {
  get filteredReviews() {
    return this.reviewFilter === "all" ? this.reviews : this.reviews.filter((r) => r.status === this.reviewFilter);
  }
  get pendingCount() {
    return this.reviews.filter((r) => r.status === "Pending").length;
  }
  get approvedCount() {
    return this.reviews.filter((r) => r.status === "Approved").length;
  }
  get avgRating() {
    if (!this.reviews.length)
      return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }
  constructor(http) {
    this.http = http;
    this.authenticated = false;
    this.passwordInput = "";
    this.loginError = false;
    this.activeTab = "reviews";
    this.loading = false;
    this.apiError = "";
    this.reviews = [];
    this.quizLeads = [];
    this.reviewFilter = "all";
    this.updatingId = "";
    this.toastMsg = "";
    this.toastType = "success";
  }
  ngOnInit() {
    if (sessionStorage.getItem("vedrithm_admin") === "true") {
      this.authenticated = true;
      this.loadAll();
    }
  }
  tryLogin() {
    if (this.passwordInput === ADMIN_PASSWORD) {
      this.authenticated = true;
      sessionStorage.setItem("vedrithm_admin", "true");
      this.loginError = false;
      this.loadAll();
    } else {
      this.loginError = true;
      setTimeout(() => this.loginError = false, 900);
    }
  }
  logout() {
    sessionStorage.removeItem("vedrithm_admin");
    this.authenticated = false;
    this.passwordInput = "";
    this.reviews = [];
    this.quizLeads = [];
  }
  loadAll() {
    this.loading = true;
    this.apiError = "";
    let done = 0;
    const finish = () => {
      if (++done === 2)
        this.loading = false;
    };
    this.http.get(`${GAS_URL}?action=getAllReviews&t=${Date.now()}`).subscribe({
      next: (data) => {
        this.reviews = (data || []).map((r) => ({
          id: String(r.id || ""),
          date: String(r.date || ""),
          name: String(r.name || ""),
          rating: Number(r.rating) || 0,
          text: String(r.text || ""),
          productUsed: String(r.productUsed || ""),
          status: String(r.status || r.approved || "Pending"),
          clientId: String(r.clientId || "")
        }));
        finish();
      },
      error: () => {
        this.apiError = "Could not load reviews. Check your GAS deployment URL.";
        finish();
      }
    });
    this.http.get(`${GAS_URL}?action=getQuizLeads&t=${Date.now()}`).subscribe({
      next: (data) => {
        this.quizLeads = (data || []).map((q) => ({
          id: String(q.id || ""),
          date: String(q.date || ""),
          name: String(q.name || ""),
          mobileNumber: String(q.mobileNumber || q.mobile || ""),
          hairType: String(q.hairType || ""),
          scalpType: String(q.scalpType || ""),
          concerns: String(q.concerns || ""),
          lifestyle: String(q.lifestyle || ""),
          recommendedProduct: String(q.recommendedProduct || ""),
          waSent: String(q.waSent || "")
        }));
        finish();
      },
      error: () => {
        finish();
      }
    });
  }
  setStatus(review, status) {
    if (this.updatingId)
      return;
    this.updatingId = review.id;
    this.http.post(GAS_URL, JSON.stringify({
      action: "updateReviewStatus",
      id: review.id,
      status
    }), { headers: { "Content-Type": "text/plain" } }).subscribe({
      next: (res) => {
        this.updatingId = "";
        if (res?.success) {
          review.status = status;
          this.showToast(`Review ${status.toLowerCase()} \u2713`, "success");
        } else {
          this.showToast(res?.error || "Update failed", "error");
        }
      },
      error: () => {
        this.updatingId = "";
        this.showToast("Network error \u2014 check GAS URL", "error");
      }
    });
  }
  waLink(name, mobile, product) {
    const msg = `Hi ${name}! \u{1F33F} Your recommended Vedrithm blend is *${product}*. Would you like to place an order?`;
    return `https://wa.me/91${mobile}?text=${encodeURIComponent(msg)}`;
  }
  initials(name) {
    return (name || "?").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  statusClass(status) {
    if (status === "Approved")
      return "status-pill sp-approved";
    if (status === "Rejected")
      return "status-pill sp-rejected";
    return "status-pill sp-pending";
  }
  showToast(msg, type) {
    this.toastMsg = msg;
    this.toastType = type;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastMsg = "", 3e3);
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(t) {
      return new (t || _AdminComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "admin-root"], ["class", "login-screen", 4, "ngIf"], ["class", "dash", 4, "ngIf"], [1, "login-screen"], [1, "login-box"], [1, "login-brand"], [1, "brand-leaf"], [1, "brand-name"], [1, "login-sub"], ["type", "password", "placeholder", "Enter admin password", "autofocus", "", 1, "login-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "login-err", 4, "ngIf"], [1, "login-btn", 3, "click"], [1, "login-err"], [1, "dash"], [1, "topbar"], [1, "topbar-left"], [1, "tb-leaf"], [1, "tb-name"], [1, "tb-badge"], [1, "topbar-right"], [1, "btn-sm", "btn-ref", 3, "click", "disabled"], [1, "btn-sm", "btn-out", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-val", "sv-gold"], [1, "stat-lbl"], [1, "stat-val", "sv-green"], [1, "stat-val", "sv-amber"], [1, "stat-val", "sv-cream"], [1, "tabs-row"], [1, "tab", 3, "click"], ["class", "tab-pill", 4, "ngIf"], [1, "tab-pill", "tp-green"], ["class", "loader-wrap", 4, "ngIf"], ["class", "err-banner", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [1, "toast"], [1, "tab-pill"], [1, "loader-wrap"], [1, "spinner"], [1, "err-banner"], [1, "panel"], [1, "filter-bar"], [1, "filt", 3, "click"], ["class", "empty", 4, "ngIf"], [1, "cards-list"], ["class", "r-card", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "empty-ico"], [1, "r-card"], [1, "r-card-top"], [1, "avatar"], [1, "r-meta"], [1, "r-name"], [1, "r-date"], [1, "r-stars"], [3, "lit", 4, "ngFor", "ngForOf"], [1, "status-pill", 3, "ngClass"], [1, "r-text"], [1, "r-product"], [1, "r-actions"], [1, "act-approve", 3, "click", "disabled"], [1, "act-reject", 3, "click", "disabled"], ["class", "updating-hint", 4, "ngIf"], [1, "updating-hint"], ["class", "cards-list", 4, "ngIf"], ["class", "q-card", 4, "ngFor", "ngForOf"], [1, "q-card"], [1, "q-card-top"], [1, "avatar", "av-teal"], [1, "q-meta"], [1, "q-name"], [1, "q-phone"], [1, "q-date"], [1, "notif-pill"], [1, "q-chips"], ["class", "chip", 4, "ngIf"], ["class", "chip chip-wide", 4, "ngIf"], [1, "q-product"], [1, "q-prod-lbl"], [1, "q-actions"], ["target", "_blank", 1, "act-wa", 3, "href"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "act-call", 3, "href"], [1, "chip"], [1, "chip", "chip-wide"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AdminComponent_div_1_Template, 13, 4, "div", 1)(2, AdminComponent_div_2_Template, 56, 23, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.authenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authenticated);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  overflow-y: auto;\n}\n.admin-root[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #040f09;\n  font-family: "Manrope", sans-serif;\n  color: #faf4e6;\n}\n.login-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background:\n    radial-gradient(\n      ellipse 70% 60% at 50% 40%,\n      rgba(26, 74, 46, .22) 0%,\n      transparent 70%);\n}\n.login-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  background: #0a2318;\n  border: 1px solid rgba(212, 175, 55, .35);\n  border-radius: 16px;\n  padding: 3rem 2.5rem;\n  text-align: center;\n  box-shadow: 0 40px 80px rgba(0, 0, 0, .6);\n}\n.login-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .6rem;\n  margin-bottom: .3rem;\n}\n.brand-leaf[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family:\n    "Cormorant Garamond",\n    Georgia,\n    serif;\n  font-size: 2rem;\n  color: #d4af37;\n  letter-spacing: .06em;\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  letter-spacing: .2em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, .4);\n  margin-bottom: 2.5rem;\n}\n.login-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: .85rem 1.1rem;\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(212, 175, 55, .22);\n  border-radius: 8px;\n  color: #faf4e6;\n  font-size: .9rem;\n  font-family: inherit;\n  outline: none;\n  text-align: center;\n  margin-bottom: .75rem;\n  transition: border-color .25s;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(212, 175, 55, .55);\n}\n.login-input.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake .4s ease;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-8px);\n  }\n  75% {\n    transform: translateX(8px);\n  }\n}\n.login-err[_ngcontent-%COMP%] {\n  color: #e05c5c;\n  font-size: .78rem;\n  margin-bottom: .75rem;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: .85rem;\n  background:\n    linear-gradient(\n      135deg,\n      #b8941f,\n      #d4af37);\n  border: none;\n  border-radius: 8px;\n  color: #040f09;\n  font-size: .8rem;\n  font-weight: 700;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: opacity .2s, transform .2s;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  opacity: .9;\n  transform: translateY(-1px);\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(4, 15, 9, .95);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(212, 175, 55, .15);\n  padding: .9rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .6rem;\n}\n.tb-leaf[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.tb-name[_ngcontent-%COMP%] {\n  font-family:\n    "Cormorant Garamond",\n    Georgia,\n    serif;\n  font-size: 1.3rem;\n  color: #d4af37;\n  letter-spacing: .05em;\n}\n.tb-badge[_ngcontent-%COMP%] {\n  font-size: .6rem;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, .4);\n  border: 1px solid rgba(212, 175, 55, .18);\n  border-radius: 50px;\n  padding: .15rem .5rem;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .75rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: .42rem .9rem;\n  border-radius: 6px;\n  font-size: .68rem;\n  font-weight: 600;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all .2s;\n}\n.btn-ref[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, .1);\n  border: 1px solid rgba(212, 175, 55, .22);\n  color: #d4af37;\n}\n.btn-ref[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, .18);\n}\n.btn-ref[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: default;\n}\n.btn-out[_ngcontent-%COMP%] {\n  background: rgba(224, 92, 92, .1);\n  border: 1px solid rgba(224, 92, 92, .25);\n  color: #e05c5c;\n}\n.btn-out[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 92, 92, .2);\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_sp .8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_sp {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1rem;\n  max-width: 1140px;\n  margin: 1.75rem auto 0;\n  padding: 0 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #0a2318;\n  border: 1px solid rgba(212, 175, 55, .16);\n  border-radius: 12px;\n  padding: 1.35rem 1rem;\n  text-align: center;\n  transition: border-color .25s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, .35);\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-family: "Cormorant Garamond", serif;\n  font-size: 2.4rem;\n  font-weight: 300;\n  line-height: 1;\n  margin-bottom: .35rem;\n}\n.sv-gold[_ngcontent-%COMP%] {\n  color: #d4af37;\n}\n.sv-green[_ngcontent-%COMP%] {\n  color: #34c27a;\n}\n.sv-amber[_ngcontent-%COMP%] {\n  color: #e8a83a;\n}\n.sv-cream[_ngcontent-%COMP%] {\n  color: #faf4e6;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: .61rem;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, .38);\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid rgba(212, 175, 55, .15);\n  max-width: 1140px;\n  margin: 1.75rem auto 0;\n  padding: 0 1.5rem;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: .75rem 1.6rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  font-size: .7rem;\n  letter-spacing: .15em;\n  text-transform: uppercase;\n  color: rgba(250, 244, 230, .45);\n  cursor: pointer;\n  transition: all .2s;\n  display: flex;\n  align-items: center;\n  gap: .45rem;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #d4af37;\n  border-bottom-color: #d4af37;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #faf4e6;\n}\n.tab-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 50px;\n  padding: 0 4px;\n  background: rgba(232, 168, 58, .15);\n  color: #e8a83a;\n  font-size: .62rem;\n  font-weight: 700;\n}\n.tp-green[_ngcontent-%COMP%] {\n  background: rgba(52, 194, 122, .15);\n  color: #34c27a;\n}\n.panel[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin: 1.5rem auto 3rem;\n  padding: 0 1.5rem;\n}\n.loader-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: rgba(250, 244, 230, .4);\n  font-size: .82rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 2px solid rgba(212, 175, 55, .2);\n  border-top-color: #d4af37;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sp .85s linear infinite;\n  margin: 0 auto 1rem;\n}\n.err-banner[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin: 1.25rem auto;\n  padding: 1rem 1.5rem;\n  background: rgba(224, 92, 92, .07);\n  border: 1px solid rgba(224, 92, 92, .28);\n  border-radius: 8px;\n  color: #e05c5c;\n  font-size: .82rem;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.filt[_ngcontent-%COMP%] {\n  padding: .35rem .85rem;\n  border-radius: 50px;\n  font-size: .67rem;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  background: none;\n  border: 1px solid rgba(212, 175, 55, .18);\n  color: rgba(250, 244, 230, .45);\n  cursor: pointer;\n  transition: all .2s;\n}\n.filt.active[_ngcontent-%COMP%], .filt[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, .45);\n  color: #d4af37;\n  background: rgba(212, 175, 55, .07);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: rgba(250, 244, 230, .35);\n  font-size: .85rem;\n}\n.empty-ico[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: .75rem;\n  opacity: .5;\n}\n.cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .85rem;\n}\n.r-card[_ngcontent-%COMP%] {\n  background: #0a2318;\n  border: 1px solid rgba(212, 175, 55, .15);\n  border-radius: 12px;\n  padding: 1.4rem 1.5rem;\n  animation: _ngcontent-%COMP%_fadeUp .3s ease both;\n  transition: border-color .25s;\n}\n.r-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, .32);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.r-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: .9rem;\n  margin-bottom: .85rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0f3020,\n      #1a4a2e);\n  border: 1px solid rgba(212, 175, 55, .22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Cormorant Garamond", serif;\n  font-size: 1.1rem;\n  color: #d4af37;\n}\n.av-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f3020,\n      #0f4a40);\n}\n.r-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.r-name[_ngcontent-%COMP%] {\n  font-size: .9rem;\n  font-weight: 600;\n  color: #faf4e6;\n}\n.r-date[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  color: rgba(250, 244, 230, .38);\n  margin-top: .1rem;\n}\n.r-stars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(212, 175, 55, .2);\n  font-size: .85rem;\n}\n.r-stars[_ngcontent-%COMP%]   span.lit[_ngcontent-%COMP%] {\n  color: #d4af37;\n}\n.r-text[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  color: rgba(250, 244, 230, .7);\n  font-style: italic;\n  line-height: 1.75;\n  margin-bottom: .6rem;\n}\n.r-product[_ngcontent-%COMP%] {\n  font-size: .7rem;\n  color: rgba(212, 175, 55, .55);\n  margin-bottom: 1rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: .28rem .75rem;\n  border-radius: 50px;\n  font-size: .62rem;\n  font-weight: 700;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.sp-pending[_ngcontent-%COMP%] {\n  background: rgba(232, 168, 58, .1);\n  color: #e8a83a;\n  border: 1px solid rgba(232, 168, 58, .28);\n}\n.sp-approved[_ngcontent-%COMP%] {\n  background: rgba(52, 194, 122, .1);\n  color: #34c27a;\n  border: 1px solid rgba(52, 194, 122, .28);\n}\n.sp-rejected[_ngcontent-%COMP%] {\n  background: rgba(224, 92, 92, .1);\n  color: #e05c5c;\n  border: 1px solid rgba(224, 92, 92, .28);\n}\n.r-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.act-approve[_ngcontent-%COMP%], .act-reject[_ngcontent-%COMP%], .act-wa[_ngcontent-%COMP%], .act-call[_ngcontent-%COMP%] {\n  padding: .38rem .9rem;\n  border-radius: 6px;\n  font-size: .65rem;\n  font-weight: 600;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all .2s;\n  border: none;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: .3rem;\n}\n.act-approve[_ngcontent-%COMP%] {\n  background: rgba(52, 194, 122, .12);\n  color: #34c27a;\n  border: 1px solid rgba(52, 194, 122, .28);\n}\n.act-approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(52, 194, 122, .25);\n}\n.act-approve[_ngcontent-%COMP%]:disabled {\n  opacity: .35;\n  cursor: default;\n}\n.act-reject[_ngcontent-%COMP%] {\n  background: rgba(224, 92, 92, .1);\n  color: #e05c5c;\n  border: 1px solid rgba(224, 92, 92, .25);\n}\n.act-reject[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(224, 92, 92, .22);\n}\n.act-reject[_ngcontent-%COMP%]:disabled {\n  opacity: .35;\n  cursor: default;\n}\n.act-wa[_ngcontent-%COMP%] {\n  background: rgba(37, 211, 102, .1);\n  color: #25d366;\n  border: 1px solid rgba(37, 211, 102, .25);\n}\n.act-wa[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 211, 102, .2);\n}\n.act-call[_ngcontent-%COMP%] {\n  background: rgba(94, 234, 212, .1);\n  color: #5eead4;\n  border: 1px solid rgba(94, 234, 212, .25);\n}\n.act-call[_ngcontent-%COMP%]:hover {\n  background: rgba(94, 234, 212, .2);\n}\n.updating-hint[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  color: rgba(250, 244, 230, .4);\n  font-style: italic;\n}\n.q-card[_ngcontent-%COMP%] {\n  background: #0a2318;\n  border: 1px solid rgba(212, 175, 55, .15);\n  border-radius: 12px;\n  padding: 1.4rem 1.5rem;\n  animation: _ngcontent-%COMP%_fadeUp .3s ease both;\n  transition: border-color .25s;\n}\n.q-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 175, 55, .32);\n}\n.q-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: .9rem;\n  margin-bottom: 1rem;\n}\n.q-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.q-name[_ngcontent-%COMP%] {\n  font-size: .92rem;\n  font-weight: 600;\n  color: #faf4e6;\n}\n.q-phone[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: #d4af37;\n  font-family: monospace;\n  margin-top: .1rem;\n}\n.q-date[_ngcontent-%COMP%] {\n  font-size: .67rem;\n  color: rgba(250, 244, 230, .35);\n}\n.notif-pill[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: .28rem .75rem;\n  border-radius: 50px;\n  font-size: .62rem;\n  font-weight: 700;\n  letter-spacing: .08em;\n  background: rgba(232, 168, 58, .1);\n  color: #e8a83a;\n  border: 1px solid rgba(232, 168, 58, .25);\n}\n.notif-pill.sent[_ngcontent-%COMP%] {\n  background: rgba(52, 194, 122, .1);\n  color: #34c27a;\n  border-color: rgba(52, 194, 122, .28);\n}\n.q-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .45rem;\n  margin-bottom: 1rem;\n}\n.chip[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, .05);\n  border: 1px solid rgba(212, 175, 55, .14);\n  border-radius: 6px;\n  padding: .4rem .7rem;\n  font-size: .76rem;\n  color: rgba(250, 244, 230, .7);\n  display: flex;\n  flex-direction: column;\n  gap: .1rem;\n}\n.chip-wide[_ngcontent-%COMP%] {\n  flex: 1 0 100%;\n}\n.chip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .58rem;\n  color: #d4af37;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.q-product[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, .05);\n  border: 1px solid rgba(212, 175, 55, .14);\n  border-radius: 8px;\n  padding: .75rem 1rem;\n  font-size: .83rem;\n  color: rgba(250, 244, 230, .8);\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: .2rem;\n}\n.q-prod-lbl[_ngcontent-%COMP%] {\n  font-size: .6rem;\n  color: #d4af37;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.q-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 9999;\n  padding: .8rem 1.3rem;\n  border-radius: 10px;\n  background: #0a2318;\n  border: 1px solid rgba(52, 194, 122, .4);\n  color: #34c27a;\n  font-size: .78rem;\n  font-weight: 500;\n  transform: translateY(70px);\n  opacity: 0;\n  transition: all .3s cubic-bezier(.34, 1.56, .64, 1);\n  pointer-events: none;\n}\n.toast.show[_ngcontent-%COMP%] {\n  transform: none;\n  opacity: 1;\n}\n.toast.toast-err[_ngcontent-%COMP%] {\n  border-color: rgba(224, 92, 92, .45);\n  color: #e05c5c;\n}\n@media (max-width: 860px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: .75rem 1rem;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 491 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-EGE7RCCN.js.map
