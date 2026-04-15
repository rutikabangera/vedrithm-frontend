import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QU5HRPSL.js";

// src/app/services/ingredient.service.ts
var IngredientService = class _IngredientService {
  //private readonly apiUrl = 'http://localhost:8080/api/ingredients';
  constructor(http) {
    this.http = http;
    this.apiUrl = "https://vedrithm-backend-1.onrender.com/api/ingredients";
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  static {
    this.\u0275fac = function IngredientService_Factory(t) {
      return new (t || _IngredientService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IngredientService, factory: _IngredientService.\u0275fac, providedIn: "root" });
  }
};

export {
  IngredientService
};
//# sourceMappingURL=chunk-QMFA6Q37.js.map
