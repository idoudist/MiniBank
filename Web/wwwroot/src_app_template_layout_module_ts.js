"use strict";
(self["webpackChunkMiniBank"] = self["webpackChunkMiniBank"] || []).push([["src_app_template_layout_module_ts"],{

/***/ 9672:
/*!**********************************************!*\
  !*** ./src/app/constants/layout.constant.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HEADER_ITEMS": () => (/* binding */ HEADER_ITEMS)
/* harmony export */ });
const HEADER_ITEMS = [{
  label: 'HEADER.HOME',
  link: ''
}, {
  label: 'HEADER.TRANSACTION',
  link: '/transaction'
}, {
  label: 'HEADER.HISTORY',
  link: '/history'
}];

/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api/account.service */ 3913);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
  constructor(accountService, toastr, router) {
    this.accountService = accountService;
    this.toastr = toastr;
    this.router = router;
  }
  canActivate() {
    const storedUser = localStorage.getItem('user');
    if (storedUser === null || storedUser === undefined) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
    /*return this.accountService.currentUser$.pipe(
      map((user: User) => {
        if (user) {
          return true;
        } else {
          this.toastr.error('you do not have required permission!');
          console.log('error auth');
          this.router.navigateByUrl('/login');
          return false;
        }
      }),
      catchError(err => {
        console.log('error auth');
        this.router.navigateByUrl('/login');
        return of(false);
      }),
    );*/
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2057:
/*!*****************************************!*\
  !*** ./src/app/models/common/langue.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Langue": () => (/* binding */ Langue)
/* harmony export */ });
/* harmony import */ var _enums_direction_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/direction.enum */ 4961);

class Langue {
  constructor() {
    this.id = 'en';
    this.name = 'English';
    this.title = 'ENGLISH';
    this.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_0__.DirectionEnum.Left;
    this.flag = '';
    this.description = '';
  }
}

/***/ }),

/***/ 3948:
/*!*****************************************************!*\
  !*** ./src/app/template/footer/footer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FooterComponent {
  constructor() {
    this.appLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 0,
    consts: [[1, "footer", "page-content"], [1, "copy-right"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Copyright \u00A9 2023 Fadi Idoudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  \n  \n}\n@media screen and (min-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n}\n.footer[_ngcontent-%COMP%]   .copy-right[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  color: #797979;\n}\n.footer[_ngcontent-%COMP%]   .copy-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 5px !important;\n  font-size: 16px !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVtcGxhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzIlMjBHaXRIdWIvTWluaUJhbmsvTWluaUJhbmsvRnJvbnQvc3JjL2FwcC90ZW1wbGF0ZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFFQSxRQUFBO0VBVUEsV0FBQTtBQ1RKO0FEQ0k7RUFDSTtJQUNJLG1CQUFBO0lBQ0Esa0JBQUE7RUNDVjtBQUNGO0FES0k7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNIVjtBQUNGO0FETUk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNKUjtBREtRO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDSFoiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAvKiB3ZWIgKi9cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiBtb2JpbGUgKi9cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHktcmlnaHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgLyogd2ViICovXG4gIC8qIG1vYmlsZSAqL1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3RlciAubWVudSB7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXIgLm1lbnUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gIH1cbn1cbi5mb290ZXIgLmNvcHktcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBjb2xvcjogIzc5Nzk3OTtcbn1cbi5mb290ZXIgLmNvcHktcmlnaHQgcCB7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4802:
/*!**************************************************************************!*\
  !*** ./src/app/template/header/header-mobile/header-mobile.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMobileComponent": () => (/* binding */ HeaderMobileComponent)
/* harmony export */ });
/* harmony import */ var src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/langues.constant */ 6347);
/* harmony import */ var src_app_constants_layout_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/layout.constant */ 9672);
/* harmony import */ var src_app_models_common_langue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/common/langue */ 2057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_internal_langues_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/internal/langues.service */ 9650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function HeaderMobileComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function HeaderMobileComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r6.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
  }
}
function HeaderMobileComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 21);
  }
}
function HeaderMobileComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 22);
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function HeaderMobileComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderMobileComponent_div_20_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.isMenuCollapsed = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r8.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, item_r8.label.toUpperCase()));
  }
}
class HeaderMobileComponent {
  constructor(langueService) {
    this.langueService = langueService;
    this.langues = src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.Langues;
    this.currentLang = new src_app_models_common_langue__WEBPACK_IMPORTED_MODULE_2__.Langue();
    this.selectedLangue = {};
    this.isMenuCollapsed = true;
    this.headerItems = src_app_constants_layout_constant__WEBPACK_IMPORTED_MODULE_1__.HEADER_ITEMS;
  }
  ngOnInit() {
    this.currentLang = this.langueService.getCurrentLangue();
    const index = src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.Langues.findIndex(x => x.id === this.currentLang.id);
    this.selectedLangue = this.langues[index].id;
  }
  changeLang(lang) {
    this.langueService.setCurrentLangue(lang);
  }
  static #_ = this.ɵfac = function HeaderMobileComponent_Factory(t) {
    return new (t || HeaderMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_internal_langues_service__WEBPACK_IMPORTED_MODULE_3__.LanguesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderMobileComponent,
    selectors: [["app-header-mobile"]],
    decls: 21,
    vars: 8,
    consts: [[1, "top-bar-mobile", "mobile-template"], [1, "container"], [1, "header-mobile", "navbar", "navbar-expand-lg", "rtl-direction"], [1, "full-image-wrap"], [1, "img-wrapper", "logos"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/logos/logo-en.svg", "alt", "logo"], [1, "ltr"], ["bindLabel", "name", "bindValue", "id", "dropdownPosition", "bottom", 1, "langue", 3, "searchable", "clearable", "items", "ngModel", "change", "ngModelChange"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "button", "alt", "MiniBank", 1, "navbar-toggler", "rtl-direction", 3, "click"], [1, "img-wrapper", "bars"], [1, "navbar-brand"], ["src", "assets/images/icons/menu.svg", "alt", "menu", "class", "toggle-menu", 4, "ngIf"], ["src", "assets/images/icons/cross.svg", "alt", "cross", "class", "toggle-menu", 4, "ngIf"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "mobile-links", "rtl-bloc"], ["class", "link-wrap rtl-text", 4, "ngFor", "ngForOf"], ["height", "22", "width", "22", "alt", "flag", 3, "src"], [1, "px-2"], ["src", "assets/images/icons/menu.svg", "alt", "menu", 1, "toggle-menu"], ["src", "assets/images/icons/cross.svg", "alt", "cross", 1, "toggle-menu"], [1, "link-wrap", "rtl-text"], ["routerLinkActive", "item-selected", 1, "rtl-bloc", "item", 3, "routerLink", "routerLinkActiveOptions", "click"], [1, "rtl-float"]],
    template: function HeaderMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HeaderMobileComponent_Template_ng_select_change_8_listener($event) {
          return ctx.changeLang($event);
        })("ngModelChange", function HeaderMobileComponent_Template_ng_select_ngModelChange_8_listener($event) {
          return ctx.selectedLangue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HeaderMobileComponent_ng_template_9_Template, 3, 2, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HeaderMobileComponent_ng_template_10_Template, 3, 2, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_11_listener() {
          return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3)(13, "div", 12)(14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderMobileComponent_img_15_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HeaderMobileComponent_img_16_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16)(18, "div", 17)(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, HeaderMobileComponent_div_20_Template, 6, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchable", false)("clearable", false)("items", ctx.langues)("ngModel", ctx.selectedLangue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.headerItems);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgLabelTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".top-bar-mobile[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  box-shadow: 0 3px 2px -2px #DCDCDC;\n  background-color: #FFF;\n  width: 100%;\n}\n.top-bar-mobile[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%] {\n  height: 37px;\n  width: 37px;\n  background-color: white;\n  border-radius: 50%;\n}\n.top-bar-mobile[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 40px !important;\n  max-width: 40px !important;\n}\n.top-bar-mobile[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%] {\n  transform: translate(8px, 0px);\n}\n.top-bar-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.top-bar-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 16px;\n  text-decoration: none;\n}\n\n.mobile-links[_ngcontent-%COMP%] {\n  padding-bottom: 26px;\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-left: 20px;\n  position: absolute;\n  text-align: left;\n  margin: 0;\n  z-index: 100;\n  background-color: #FFF;\n  box-shadow: 0 4px 2px -2px gray;\n  left: 0 !important;\n  right: 0 !important;\n  font-family: font-bold;\n}\n\n.link-wrap[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.link-wrap[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: bold;\n  color: #000;\n}\n.link-wrap[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%] {\n  color: #F39100 !important;\n}\n\n.langue[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  width: 100%;\n  flex-direction: column !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  min-width: 110px;\n}\n.langue[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.ng-option[_ngcontent-%COMP%], .ng-option-selected[_ngcontent-%COMP%], .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.header-mobile[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 120px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy90ZW1wbGF0ZS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVtcGxhdGUvaGVhZGVyL2hlYWRlci1tb2JpbGUvaGVhZGVyLW1vYmlsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzIlMjBHaXRIdWIvTWluaUJhbmsvTWluaUJhbmsvRnJvbnQvc3JjL2FwcC90ZW1wbGF0ZS9oZWFkZXIvaGVhZGVyLW1vYmlsZS9oZWFkZXItbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQWNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDYkY7QURGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FESEk7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0FDS047QURISTtFQUNFLDhCQUFBO0FDS047QURFRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNESjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hGO0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRko7QURLRTtFQUNFLHlCQUFBO0FDSEo7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDTEY7QURNRTtFQUNHLGVBQUE7QUNKTDs7QURRQTtFQUNFLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTkoiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRlbXBsYXRlIGNvbG9ycyovXHJcbiRibGFja2lzaDogIzBEMEUyQztcclxuJGJsdWVpc2g6ICMwQjQxQjE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNEMUMyQUU7XHJcbiRzZWNvbmRhcnktY29sb3ItMjogI0FGOUQ4NztcclxuJHNoYWRlOiAjRjhGNkYzO1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRkYW5nZXI6ICNGNTU5NEI7IiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy90ZW1wbGF0ZS12YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnRvcC1iYXItbW9iaWxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIC5iYXJzIHtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuICAgIC50b2dnbGUtbWVudXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCAwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCAjRENEQ0RDO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vYmlsZS1saW5rcyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI2cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGZvbnQtYm9sZDtcclxufVxyXG5cclxuLmxpbmstd3JhcCB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIC5pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogI0YzOTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLmxhbmd1ZSB7IFxyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQgO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSAgIFxyXG59XHJcblxyXG4ubmctb3B0aW9uICwgLm5nLW9wdGlvbi1zZWxlY3RlZCwgLm5nLW9wdGlvbi1tYXJrZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbW9iaWxlIHtcclxuICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn0iLCIvKnRlbXBsYXRlIGNvbG9ycyovXG4udG9wLWJhci1tb2JpbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggI0RDRENEQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9wLWJhci1tb2JpbGUgLmJhcnMge1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnRvcC1iYXItbW9iaWxlIC5iYXJzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4udG9wLWJhci1tb2JpbGUgLmJhcnMgLnRvZ2dsZS1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCAwcHgpO1xufVxuLnRvcC1iYXItbW9iaWxlIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AtYmFyLW1vYmlsZSBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1vYmlsZS1saW5rcyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBmb250LWJvbGQ7XG59XG5cbi5saW5rLXdyYXAge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmxpbmstd3JhcCAuaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxpbmstd3JhcCAuaXRlbS1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjRjM5MTAwICFpbXBvcnRhbnQ7XG59XG5cbi5sYW5ndWUge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDExMHB4O1xufVxuLmxhbmd1ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5nLW9wdGlvbiwgLm5nLW9wdGlvbi1zZWxlY3RlZCwgLm5nLW9wdGlvbi1tYXJrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlci1tb2JpbGUge1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9421:
/*!********************************************************************!*\
  !*** ./src/app/template/header/header-web/header-web.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWebComponent": () => (/* binding */ HeaderWebComponent)
/* harmony export */ });
/* harmony import */ var src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/langues.constant */ 6347);
/* harmony import */ var src_app_constants_layout_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/layout.constant */ 9672);
/* harmony import */ var src_app_models_common_langue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/common/langue */ 2057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_internal_langues_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/internal/langues.service */ 9650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










const _c0 = function () {
  return {
    exact: true
  };
};
function HeaderWebComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r3.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, item_r3.label.toUpperCase()), " ");
  }
}
function HeaderWebComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function HeaderWebComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r6.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
  }
}
class HeaderWebComponent {
  constructor(langueService) {
    this.langueService = langueService;
    this.currentLang = new src_app_models_common_langue__WEBPACK_IMPORTED_MODULE_2__.Langue();
    this.selectedLangue = {};
    this.headerItems = src_app_constants_layout_constant__WEBPACK_IMPORTED_MODULE_1__.HEADER_ITEMS;
    this.langues = src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.Langues;
  }
  ngOnInit() {
    // set current language
    this.currentLang = this.langueService.getCurrentLangue();
    const index = src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.Langues.findIndex(x => x.id === this.currentLang.id);
    this.selectedLangue = this.langues[index].id;
  }
  changeLang(lang) {
    this.langueService.setCurrentLangue(lang);
  }
  static #_ = this.ɵfac = function HeaderWebComponent_Factory(t) {
    return new (t || HeaderWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_internal_langues_service__WEBPACK_IMPORTED_MODULE_3__.LanguesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderWebComponent,
    selectors: [["app-header-web"]],
    decls: 14,
    vars: 5,
    consts: [[1, "top-bar"], [1, "row", "container-fluid", "rtl-direction"], [1, "col-2", "full-image-wrap", "rtl-bloc"], [1, "img-wrapper", "logos"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/logos/logo-en.svg", "alt", "logo"], [1, "col-8"], ["class", "web-menu", 4, "ngFor", "ngForOf"], [1, "col-2", "rtl-direction", "rtl-text"], [1, "translate"], ["bindLabel", "name", "bindValue", "id", "dropdownPosition", "bottom", 1, "langue", "pt-3", 3, "searchable", "clearable", "items", "ngModel", "change", "ngModelChange"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "web-menu"], ["routerLinkActive", "item-selected", 1, "item", 3, "routerLink", "routerLinkActiveOptions"], ["height", "22", "width", "22", "alt", "flag", 3, "src"], [1, "px-2"]],
    template: function HeaderWebComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, HeaderWebComponent_li_8_Template, 4, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "ng-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HeaderWebComponent_Template_ng_select_change_11_listener($event) {
          return ctx.changeLang($event);
        })("ngModelChange", function HeaderWebComponent_Template_ng_select_ngModelChange_11_listener($event) {
          return ctx.selectedLangue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, HeaderWebComponent_ng_template_12_Template, 3, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderWebComponent_ng_template_13_Template, 3, 2, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.headerItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchable", false)("clearable", false)("items", ctx.langues)("ngModel", ctx.selectedLangue);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgLabelTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".top-bar[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 8%;\n  padding-left: 8%;\n  background-color: #FFF;\n  width: 100%;\n  box-shadow: 0 3px 2px -2px #DCDCDC;\n  position: fixed;\n  z-index: 2;\n}\n.top-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.top-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.top-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: bold;\n  color: #000;\n}\n.top-bar[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%] {\n  color: #F39100 !important;\n}\n.top-bar[_ngcontent-%COMP%]   .web-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: #0D0E2C;\n  font-weight: bold;\n  font-family: font-bold;\n}\n.top-bar[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 200px !important;\n  max-width: 200px !important;\n}\n.top-bar[_ngcontent-%COMP%]   .langue-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.top-bar[_ngcontent-%COMP%]   .langue[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  width: 100%;\n  flex-direction: column !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 65px;\n}\n.top-bar[_ngcontent-%COMP%]   .langue[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.top-bar[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .ng-option-selected[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.top-bar[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 5px;\n  border-radius: 5px;\n  background-color: #F39100;\n  color: white;\n  cursor: pointer;\n}\n.top-bar[_ngcontent-%COMP%]   .translate[_ngcontent-%COMP%] {\n  display: flex;\n}\n.top-bar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy90ZW1wbGF0ZS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVtcGxhdGUvaGVhZGVyL2hlYWRlci13ZWIvaGVhZGVyLXdlYi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzIlMjBHaXRIdWIvTWluaUJhbmsvTWluaUJhbmsvRnJvbnQvc3JjL2FwcC90ZW1wbGF0ZS9oZWFkZXIvaGVhZGVyLXdlYi9oZWFkZXItd2ViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxxQkFBQTtBQ0VOO0FERUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLHlCQUFBO0FDREo7QURLSTtFQUNFLDBCQUFBO0VBQ0EsY0QxQ0s7RUMyQ0wsaUJBQUE7RUFDQSxzQkFBQTtBQ0hOO0FEU0k7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FDUE47QURhRTtFQUNFLGFBQUE7QUNYSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEYUk7RUFDRyxlQUFBO0FDWFA7QURlRTtFQUNFLHVCQUFBO0FDYko7QURnQkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEaUJFO0VBQ0UsYUFBQTtBQ2ZKO0FEa0JFO0VBQ0UsZUFBQTtBQ2hCSiIsInNvdXJjZXNDb250ZW50IjpbIi8qdGVtcGxhdGUgY29sb3JzKi9cclxuJGJsYWNraXNoOiAjMEQwRTJDO1xyXG4kYmx1ZWlzaDogIzBCNDFCMTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0QxQzJBRTtcclxuJHNlY29uZGFyeS1jb2xvci0yOiAjQUY5RDg3O1xyXG4kc2hhZGU6ICNGOEY2RjM7XHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGRhbmdlcjogI0Y1NTk0QjsiLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3RlbXBsYXRlLXZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4udG9wLWJhciB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogOCU7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggI0RDRENEQztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB1bCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG4gIGxpIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDAgO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tc2VsZWN0ZWQgeyAgIFxyXG4gICAgY29sb3I6ICNGMzkxMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53ZWItbWVudSB7XHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAkYmxhY2tpc2g7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LWZhbWlseTogZm9udC1ib2xkOyBcclxuICAgIH1cclxuICAgICAgICBcclxuICB9XHJcblxyXG4gIC5sb2dvc3tcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG4gIH1cclxuICBcclxuICBcclxuXHJcbiAgLmxhbmd1ZS13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYW5ndWUgeyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQgO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiA2NXB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5uZy1vcHRpb24gLCAubmctb3B0aW9uLXNlbGVjdGVkLCAubmctb3B0aW9uLW1hcmtlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1idXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOTEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC50cmFuc2xhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iLCIvKnRlbXBsYXRlIGNvbG9ycyovXG4udG9wLWJhciB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggI0RDRENEQztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xufVxuLnRvcC1iYXIgdWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AtYmFyIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRvcC1iYXIgbGkgLml0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRvcC1iYXIgLml0ZW0tc2VsZWN0ZWQge1xuICBjb2xvcjogI0YzOTEwMCAhaW1wb3J0YW50O1xufVxuLnRvcC1iYXIgLndlYi1tZW51IGEge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwRDBFMkM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogZm9udC1ib2xkO1xufVxuLnRvcC1iYXIgLmxvZ29zIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cbi50b3AtYmFyIC5sYW5ndWUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udG9wLWJhciAubGFuZ3VlIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWluLXdpZHRoOiA2NXB4O1xufVxuLnRvcC1iYXIgLmxhbmd1ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b3AtYmFyIC5uZy1vcHRpb24sIC50b3AtYmFyIC5uZy1vcHRpb24tc2VsZWN0ZWQsIC50b3AtYmFyIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udG9wLWJhciAuY29udGFjdC1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzOTEwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9wLWJhciAudHJhbnNsYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50b3AtYmFyIC5uYXZiYXItYnJhbmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3041:
/*!*****************************************************!*\
  !*** ./src/app/template/header/header.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_web_header_web_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-web/header-web.component */ 9421);
/* harmony import */ var _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-mobile/header-mobile.component */ 4802);



class HeaderComponent {
  constructor() {}
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 5,
    vars: 0,
    consts: [[1, "header"], [1, "web-template"], [1, "mobile-template"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header-web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-header-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_header_web_header_web_component__WEBPACK_IMPORTED_MODULE_0__.HeaderWebComponent, _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_1__.HeaderMobileComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6022:
/*!***************************************************!*\
  !*** ./src/app/template/layout-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 8574);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/pages.module */ 8950)).then(m => m.PagesModule)
  }]
}];
class LayoutRoutingModule {
  static #_ = this.ɵfac = function LayoutRoutingModule_Factory(t) {
    return new (t || LayoutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LayoutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6087:
/*!*******************************************!*\
  !*** ./src/app/template/layout.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-routing.module */ 6022);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ 8574);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3041);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 3948);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _header_header_web_header_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header-web/header-web.component */ 9421);
/* harmony import */ var _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header-mobile/header-mobile.component */ 4802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);









class LayoutModule {
  static #_ = this.ɵfac = function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: LayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [
    // layout module
    _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule,
    // shared module
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
    // for layout components
    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_web_header_web_component__WEBPACK_IMPORTED_MODULE_5__.HeaderWebComponent, _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_6__.HeaderMobileComponent],
    imports: [
    // layout module
    _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule,
    // shared module
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
    // for layout components
    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]
  });
})();

/***/ }),

/***/ 8574:
/*!*****************************************************!*\
  !*** ./src/app/template/layout/layout.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3041);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 3948);




class LayoutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    decls: 4,
    vars: 0,
    consts: [[1, "page-wrapper"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4844:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audit": () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);



function audit(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 998:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auditTime": () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 4844);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 8947);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}

/***/ }),

/***/ 1989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 3018:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameAction": () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 5198);
/* harmony import */ var _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameProvider */ 2915);


class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.requestAnimationFrame(() => scheduler.flush(undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = undefined;
    }
    return undefined;
  }
}

/***/ }),

/***/ 9415:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameScheduler": () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 5744);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 4594:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 5198);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 7666);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      scheduler._scheduled = undefined;
    }
    return undefined;
  }
}

/***/ }),

/***/ 321:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 5744);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8184:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrame": () => (/* binding */ animationFrame),
/* harmony export */   "animationFrameScheduler": () => (/* binding */ animationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 3018);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 9415);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;

/***/ }),

/***/ 2915:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrameProvider": () => (/* binding */ animationFrameProvider)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 6078);

const animationFrameProvider = {
  schedule(callback) {
    let request = requestAnimationFrame;
    let cancel = cancelAnimationFrame;
    const {
      delegate
    } = animationFrameProvider;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    const handle = request(timestamp => {
      cancel = undefined;
      callback(timestamp);
    });
    return new _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
  },
  requestAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
  },
  cancelAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
  },
  delegate: undefined
};

/***/ }),

/***/ 275:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asap": () => (/* binding */ asap),
/* harmony export */   "asapScheduler": () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 4594);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 321);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;

/***/ }),

/***/ 7666:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "immediateProvider": () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 1714);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 1714:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": () => (/* binding */ Immediate),
/* harmony export */   "TestTools": () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};

/***/ }),

/***/ 3054:
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm2020/ng-select-ng-select.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgFooterTemplateDirective": () => (/* binding */ NgFooterTemplateDirective),
/* harmony export */   "NgHeaderTemplateDirective": () => (/* binding */ NgHeaderTemplateDirective),
/* harmony export */   "NgItemLabelDirective": () => (/* binding */ NgItemLabelDirective),
/* harmony export */   "NgLabelTemplateDirective": () => (/* binding */ NgLabelTemplateDirective),
/* harmony export */   "NgLoadingSpinnerTemplateDirective": () => (/* binding */ NgLoadingSpinnerTemplateDirective),
/* harmony export */   "NgLoadingTextTemplateDirective": () => (/* binding */ NgLoadingTextTemplateDirective),
/* harmony export */   "NgMultiLabelTemplateDirective": () => (/* binding */ NgMultiLabelTemplateDirective),
/* harmony export */   "NgNotFoundTemplateDirective": () => (/* binding */ NgNotFoundTemplateDirective),
/* harmony export */   "NgOptgroupTemplateDirective": () => (/* binding */ NgOptgroupTemplateDirective),
/* harmony export */   "NgOptionComponent": () => (/* binding */ NgOptionComponent),
/* harmony export */   "NgOptionTemplateDirective": () => (/* binding */ NgOptionTemplateDirective),
/* harmony export */   "NgSelectComponent": () => (/* binding */ NgSelectComponent),
/* harmony export */   "NgSelectConfig": () => (/* binding */ NgSelectConfig),
/* harmony export */   "NgSelectModule": () => (/* binding */ NgSelectModule),
/* harmony export */   "NgTagTemplateDirective": () => (/* binding */ NgTagTemplateDirective),
/* harmony export */   "NgTypeToSearchTemplateDirective": () => (/* binding */ NgTypeToSearchTemplateDirective),
/* harmony export */   "SELECTION_MODEL_FACTORY": () => (/* binding */ SELECTION_MODEL_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 998);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);







const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) {
  return {
    searchTerm: a0
  };
};
function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
  }
}
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.unselect(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
  }
}
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}
const _c6 = function (a0, a1, a2) {
  return {
    item: a0,
    clear: a1,
    label: a2
  };
};
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
  }
}
function NgSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
  }
}
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}
const _c7 = function (a0, a1) {
  return {
    items: a0,
    clear: a1
  };
};
function NgSelectComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
  }
}
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
  }
}
function NgSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}
const _c8 = function (a0, a1, a2, a3) {
  return {
    item: a0,
    item$: a1,
    index: a2,
    searchTerm: a3
  };
};
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const item_r24 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.toggleItem(item_r24));
    })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const item_r24 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.onItemHover(item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.itemsList.unmarkItem());
    })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.selectTag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.viewPortItems = $event);
    })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
  }
}
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
class NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
  return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgItemLabelDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    ngItemLabel: "ngItemLabel",
    escape: "escape"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngItemLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
  return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgOptionTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-option-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
  return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgOptgroupTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-optgroup-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
  return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLabelTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
  return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgMultiLabelTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-multi-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
  return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgHeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-header-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
  return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgFooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-footer-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
  return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgNotFoundTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-notfound-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
  return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgTypeToSearchTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-typetosearch-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
  return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLoadingTextTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-loadingtext-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
  return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgTagTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-tag-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
  return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLoadingSpinnerTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-loadingspinner-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, () => {
    // eslint-disable-next-line no-bitwise
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
const diacritics = {
  '\u24B6': 'A',
  '\uFF21': 'A',
  '\u00C0': 'A',
  '\u00C1': 'A',
  '\u00C2': 'A',
  '\u1EA6': 'A',
  '\u1EA4': 'A',
  '\u1EAA': 'A',
  '\u1EA8': 'A',
  '\u00C3': 'A',
  '\u0100': 'A',
  '\u0102': 'A',
  '\u1EB0': 'A',
  '\u1EAE': 'A',
  '\u1EB4': 'A',
  '\u1EB2': 'A',
  '\u0226': 'A',
  '\u01E0': 'A',
  '\u00C4': 'A',
  '\u01DE': 'A',
  '\u1EA2': 'A',
  '\u00C5': 'A',
  '\u01FA': 'A',
  '\u01CD': 'A',
  '\u0200': 'A',
  '\u0202': 'A',
  '\u1EA0': 'A',
  '\u1EAC': 'A',
  '\u1EB6': 'A',
  '\u1E00': 'A',
  '\u0104': 'A',
  '\u023A': 'A',
  '\u2C6F': 'A',
  '\uA732': 'AA',
  '\u00C6': 'AE',
  '\u01FC': 'AE',
  '\u01E2': 'AE',
  '\uA734': 'AO',
  '\uA736': 'AU',
  '\uA738': 'AV',
  '\uA73A': 'AV',
  '\uA73C': 'AY',
  '\u24B7': 'B',
  '\uFF22': 'B',
  '\u1E02': 'B',
  '\u1E04': 'B',
  '\u1E06': 'B',
  '\u0243': 'B',
  '\u0182': 'B',
  '\u0181': 'B',
  '\u24B8': 'C',
  '\uFF23': 'C',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010A': 'C',
  '\u010C': 'C',
  '\u00C7': 'C',
  '\u1E08': 'C',
  '\u0187': 'C',
  '\u023B': 'C',
  '\uA73E': 'C',
  '\u24B9': 'D',
  '\uFF24': 'D',
  '\u1E0A': 'D',
  '\u010E': 'D',
  '\u1E0C': 'D',
  '\u1E10': 'D',
  '\u1E12': 'D',
  '\u1E0E': 'D',
  '\u0110': 'D',
  '\u018B': 'D',
  '\u018A': 'D',
  '\u0189': 'D',
  '\uA779': 'D',
  '\u01F1': 'DZ',
  '\u01C4': 'DZ',
  '\u01F2': 'Dz',
  '\u01C5': 'Dz',
  '\u24BA': 'E',
  '\uFF25': 'E',
  '\u00C8': 'E',
  '\u00C9': 'E',
  '\u00CA': 'E',
  '\u1EC0': 'E',
  '\u1EBE': 'E',
  '\u1EC4': 'E',
  '\u1EC2': 'E',
  '\u1EBC': 'E',
  '\u0112': 'E',
  '\u1E14': 'E',
  '\u1E16': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u00CB': 'E',
  '\u1EBA': 'E',
  '\u011A': 'E',
  '\u0204': 'E',
  '\u0206': 'E',
  '\u1EB8': 'E',
  '\u1EC6': 'E',
  '\u0228': 'E',
  '\u1E1C': 'E',
  '\u0118': 'E',
  '\u1E18': 'E',
  '\u1E1A': 'E',
  '\u0190': 'E',
  '\u018E': 'E',
  '\u24BB': 'F',
  '\uFF26': 'F',
  '\u1E1E': 'F',
  '\u0191': 'F',
  '\uA77B': 'F',
  '\u24BC': 'G',
  '\uFF27': 'G',
  '\u01F4': 'G',
  '\u011C': 'G',
  '\u1E20': 'G',
  '\u011E': 'G',
  '\u0120': 'G',
  '\u01E6': 'G',
  '\u0122': 'G',
  '\u01E4': 'G',
  '\u0193': 'G',
  '\uA7A0': 'G',
  '\uA77D': 'G',
  '\uA77E': 'G',
  '\u24BD': 'H',
  '\uFF28': 'H',
  '\u0124': 'H',
  '\u1E22': 'H',
  '\u1E26': 'H',
  '\u021E': 'H',
  '\u1E24': 'H',
  '\u1E28': 'H',
  '\u1E2A': 'H',
  '\u0126': 'H',
  '\u2C67': 'H',
  '\u2C75': 'H',
  '\uA78D': 'H',
  '\u24BE': 'I',
  '\uFF29': 'I',
  '\u00CC': 'I',
  '\u00CD': 'I',
  '\u00CE': 'I',
  '\u0128': 'I',
  '\u012A': 'I',
  '\u012C': 'I',
  '\u0130': 'I',
  '\u00CF': 'I',
  '\u1E2E': 'I',
  '\u1EC8': 'I',
  '\u01CF': 'I',
  '\u0208': 'I',
  '\u020A': 'I',
  '\u1ECA': 'I',
  '\u012E': 'I',
  '\u1E2C': 'I',
  '\u0197': 'I',
  '\u24BF': 'J',
  '\uFF2A': 'J',
  '\u0134': 'J',
  '\u0248': 'J',
  '\u24C0': 'K',
  '\uFF2B': 'K',
  '\u1E30': 'K',
  '\u01E8': 'K',
  '\u1E32': 'K',
  '\u0136': 'K',
  '\u1E34': 'K',
  '\u0198': 'K',
  '\u2C69': 'K',
  '\uA740': 'K',
  '\uA742': 'K',
  '\uA744': 'K',
  '\uA7A2': 'K',
  '\u24C1': 'L',
  '\uFF2C': 'L',
  '\u013F': 'L',
  '\u0139': 'L',
  '\u013D': 'L',
  '\u1E36': 'L',
  '\u1E38': 'L',
  '\u013B': 'L',
  '\u1E3C': 'L',
  '\u1E3A': 'L',
  '\u0141': 'L',
  '\u023D': 'L',
  '\u2C62': 'L',
  '\u2C60': 'L',
  '\uA748': 'L',
  '\uA746': 'L',
  '\uA780': 'L',
  '\u01C7': 'LJ',
  '\u01C8': 'Lj',
  '\u24C2': 'M',
  '\uFF2D': 'M',
  '\u1E3E': 'M',
  '\u1E40': 'M',
  '\u1E42': 'M',
  '\u2C6E': 'M',
  '\u019C': 'M',
  '\u24C3': 'N',
  '\uFF2E': 'N',
  '\u01F8': 'N',
  '\u0143': 'N',
  '\u00D1': 'N',
  '\u1E44': 'N',
  '\u0147': 'N',
  '\u1E46': 'N',
  '\u0145': 'N',
  '\u1E4A': 'N',
  '\u1E48': 'N',
  '\u0220': 'N',
  '\u019D': 'N',
  '\uA790': 'N',
  '\uA7A4': 'N',
  '\u01CA': 'NJ',
  '\u01CB': 'Nj',
  '\u24C4': 'O',
  '\uFF2F': 'O',
  '\u00D2': 'O',
  '\u00D3': 'O',
  '\u00D4': 'O',
  '\u1ED2': 'O',
  '\u1ED0': 'O',
  '\u1ED6': 'O',
  '\u1ED4': 'O',
  '\u00D5': 'O',
  '\u1E4C': 'O',
  '\u022C': 'O',
  '\u1E4E': 'O',
  '\u014C': 'O',
  '\u1E50': 'O',
  '\u1E52': 'O',
  '\u014E': 'O',
  '\u022E': 'O',
  '\u0230': 'O',
  '\u00D6': 'O',
  '\u022A': 'O',
  '\u1ECE': 'O',
  '\u0150': 'O',
  '\u01D1': 'O',
  '\u020C': 'O',
  '\u020E': 'O',
  '\u01A0': 'O',
  '\u1EDC': 'O',
  '\u1EDA': 'O',
  '\u1EE0': 'O',
  '\u1EDE': 'O',
  '\u1EE2': 'O',
  '\u1ECC': 'O',
  '\u1ED8': 'O',
  '\u01EA': 'O',
  '\u01EC': 'O',
  '\u00D8': 'O',
  '\u01FE': 'O',
  '\u0186': 'O',
  '\u019F': 'O',
  '\uA74A': 'O',
  '\uA74C': 'O',
  '\u01A2': 'OI',
  '\uA74E': 'OO',
  '\u0222': 'OU',
  '\u24C5': 'P',
  '\uFF30': 'P',
  '\u1E54': 'P',
  '\u1E56': 'P',
  '\u01A4': 'P',
  '\u2C63': 'P',
  '\uA750': 'P',
  '\uA752': 'P',
  '\uA754': 'P',
  '\u24C6': 'Q',
  '\uFF31': 'Q',
  '\uA756': 'Q',
  '\uA758': 'Q',
  '\u024A': 'Q',
  '\u24C7': 'R',
  '\uFF32': 'R',
  '\u0154': 'R',
  '\u1E58': 'R',
  '\u0158': 'R',
  '\u0210': 'R',
  '\u0212': 'R',
  '\u1E5A': 'R',
  '\u1E5C': 'R',
  '\u0156': 'R',
  '\u1E5E': 'R',
  '\u024C': 'R',
  '\u2C64': 'R',
  '\uA75A': 'R',
  '\uA7A6': 'R',
  '\uA782': 'R',
  '\u24C8': 'S',
  '\uFF33': 'S',
  '\u1E9E': 'S',
  '\u015A': 'S',
  '\u1E64': 'S',
  '\u015C': 'S',
  '\u1E60': 'S',
  '\u0160': 'S',
  '\u1E66': 'S',
  '\u1E62': 'S',
  '\u1E68': 'S',
  '\u0218': 'S',
  '\u015E': 'S',
  '\u2C7E': 'S',
  '\uA7A8': 'S',
  '\uA784': 'S',
  '\u24C9': 'T',
  '\uFF34': 'T',
  '\u1E6A': 'T',
  '\u0164': 'T',
  '\u1E6C': 'T',
  '\u021A': 'T',
  '\u0162': 'T',
  '\u1E70': 'T',
  '\u1E6E': 'T',
  '\u0166': 'T',
  '\u01AC': 'T',
  '\u01AE': 'T',
  '\u023E': 'T',
  '\uA786': 'T',
  '\uA728': 'TZ',
  '\u24CA': 'U',
  '\uFF35': 'U',
  '\u00D9': 'U',
  '\u00DA': 'U',
  '\u00DB': 'U',
  '\u0168': 'U',
  '\u1E78': 'U',
  '\u016A': 'U',
  '\u1E7A': 'U',
  '\u016C': 'U',
  '\u00DC': 'U',
  '\u01DB': 'U',
  '\u01D7': 'U',
  '\u01D5': 'U',
  '\u01D9': 'U',
  '\u1EE6': 'U',
  '\u016E': 'U',
  '\u0170': 'U',
  '\u01D3': 'U',
  '\u0214': 'U',
  '\u0216': 'U',
  '\u01AF': 'U',
  '\u1EEA': 'U',
  '\u1EE8': 'U',
  '\u1EEE': 'U',
  '\u1EEC': 'U',
  '\u1EF0': 'U',
  '\u1EE4': 'U',
  '\u1E72': 'U',
  '\u0172': 'U',
  '\u1E76': 'U',
  '\u1E74': 'U',
  '\u0244': 'U',
  '\u24CB': 'V',
  '\uFF36': 'V',
  '\u1E7C': 'V',
  '\u1E7E': 'V',
  '\u01B2': 'V',
  '\uA75E': 'V',
  '\u0245': 'V',
  '\uA760': 'VY',
  '\u24CC': 'W',
  '\uFF37': 'W',
  '\u1E80': 'W',
  '\u1E82': 'W',
  '\u0174': 'W',
  '\u1E86': 'W',
  '\u1E84': 'W',
  '\u1E88': 'W',
  '\u2C72': 'W',
  '\u24CD': 'X',
  '\uFF38': 'X',
  '\u1E8A': 'X',
  '\u1E8C': 'X',
  '\u24CE': 'Y',
  '\uFF39': 'Y',
  '\u1EF2': 'Y',
  '\u00DD': 'Y',
  '\u0176': 'Y',
  '\u1EF8': 'Y',
  '\u0232': 'Y',
  '\u1E8E': 'Y',
  '\u0178': 'Y',
  '\u1EF6': 'Y',
  '\u1EF4': 'Y',
  '\u01B3': 'Y',
  '\u024E': 'Y',
  '\u1EFE': 'Y',
  '\u24CF': 'Z',
  '\uFF3A': 'Z',
  '\u0179': 'Z',
  '\u1E90': 'Z',
  '\u017B': 'Z',
  '\u017D': 'Z',
  '\u1E92': 'Z',
  '\u1E94': 'Z',
  '\u01B5': 'Z',
  '\u0224': 'Z',
  '\u2C7F': 'Z',
  '\u2C6B': 'Z',
  '\uA762': 'Z',
  '\u24D0': 'a',
  '\uFF41': 'a',
  '\u1E9A': 'a',
  '\u00E0': 'a',
  '\u00E1': 'a',
  '\u00E2': 'a',
  '\u1EA7': 'a',
  '\u1EA5': 'a',
  '\u1EAB': 'a',
  '\u1EA9': 'a',
  '\u00E3': 'a',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u1EB1': 'a',
  '\u1EAF': 'a',
  '\u1EB5': 'a',
  '\u1EB3': 'a',
  '\u0227': 'a',
  '\u01E1': 'a',
  '\u00E4': 'a',
  '\u01DF': 'a',
  '\u1EA3': 'a',
  '\u00E5': 'a',
  '\u01FB': 'a',
  '\u01CE': 'a',
  '\u0201': 'a',
  '\u0203': 'a',
  '\u1EA1': 'a',
  '\u1EAD': 'a',
  '\u1EB7': 'a',
  '\u1E01': 'a',
  '\u0105': 'a',
  '\u2C65': 'a',
  '\u0250': 'a',
  '\uA733': 'aa',
  '\u00E6': 'ae',
  '\u01FD': 'ae',
  '\u01E3': 'ae',
  '\uA735': 'ao',
  '\uA737': 'au',
  '\uA739': 'av',
  '\uA73B': 'av',
  '\uA73D': 'ay',
  '\u24D1': 'b',
  '\uFF42': 'b',
  '\u1E03': 'b',
  '\u1E05': 'b',
  '\u1E07': 'b',
  '\u0180': 'b',
  '\u0183': 'b',
  '\u0253': 'b',
  '\u24D2': 'c',
  '\uFF43': 'c',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010B': 'c',
  '\u010D': 'c',
  '\u00E7': 'c',
  '\u1E09': 'c',
  '\u0188': 'c',
  '\u023C': 'c',
  '\uA73F': 'c',
  '\u2184': 'c',
  '\u24D3': 'd',
  '\uFF44': 'd',
  '\u1E0B': 'd',
  '\u010F': 'd',
  '\u1E0D': 'd',
  '\u1E11': 'd',
  '\u1E13': 'd',
  '\u1E0F': 'd',
  '\u0111': 'd',
  '\u018C': 'd',
  '\u0256': 'd',
  '\u0257': 'd',
  '\uA77A': 'd',
  '\u01F3': 'dz',
  '\u01C6': 'dz',
  '\u24D4': 'e',
  '\uFF45': 'e',
  '\u00E8': 'e',
  '\u00E9': 'e',
  '\u00EA': 'e',
  '\u1EC1': 'e',
  '\u1EBF': 'e',
  '\u1EC5': 'e',
  '\u1EC3': 'e',
  '\u1EBD': 'e',
  '\u0113': 'e',
  '\u1E15': 'e',
  '\u1E17': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u00EB': 'e',
  '\u1EBB': 'e',
  '\u011B': 'e',
  '\u0205': 'e',
  '\u0207': 'e',
  '\u1EB9': 'e',
  '\u1EC7': 'e',
  '\u0229': 'e',
  '\u1E1D': 'e',
  '\u0119': 'e',
  '\u1E19': 'e',
  '\u1E1B': 'e',
  '\u0247': 'e',
  '\u025B': 'e',
  '\u01DD': 'e',
  '\u24D5': 'f',
  '\uFF46': 'f',
  '\u1E1F': 'f',
  '\u0192': 'f',
  '\uA77C': 'f',
  '\u24D6': 'g',
  '\uFF47': 'g',
  '\u01F5': 'g',
  '\u011D': 'g',
  '\u1E21': 'g',
  '\u011F': 'g',
  '\u0121': 'g',
  '\u01E7': 'g',
  '\u0123': 'g',
  '\u01E5': 'g',
  '\u0260': 'g',
  '\uA7A1': 'g',
  '\u1D79': 'g',
  '\uA77F': 'g',
  '\u24D7': 'h',
  '\uFF48': 'h',
  '\u0125': 'h',
  '\u1E23': 'h',
  '\u1E27': 'h',
  '\u021F': 'h',
  '\u1E25': 'h',
  '\u1E29': 'h',
  '\u1E2B': 'h',
  '\u1E96': 'h',
  '\u0127': 'h',
  '\u2C68': 'h',
  '\u2C76': 'h',
  '\u0265': 'h',
  '\u0195': 'hv',
  '\u24D8': 'i',
  '\uFF49': 'i',
  '\u00EC': 'i',
  '\u00ED': 'i',
  '\u00EE': 'i',
  '\u0129': 'i',
  '\u012B': 'i',
  '\u012D': 'i',
  '\u00EF': 'i',
  '\u1E2F': 'i',
  '\u1EC9': 'i',
  '\u01D0': 'i',
  '\u0209': 'i',
  '\u020B': 'i',
  '\u1ECB': 'i',
  '\u012F': 'i',
  '\u1E2D': 'i',
  '\u0268': 'i',
  '\u0131': 'i',
  '\u24D9': 'j',
  '\uFF4A': 'j',
  '\u0135': 'j',
  '\u01F0': 'j',
  '\u0249': 'j',
  '\u24DA': 'k',
  '\uFF4B': 'k',
  '\u1E31': 'k',
  '\u01E9': 'k',
  '\u1E33': 'k',
  '\u0137': 'k',
  '\u1E35': 'k',
  '\u0199': 'k',
  '\u2C6A': 'k',
  '\uA741': 'k',
  '\uA743': 'k',
  '\uA745': 'k',
  '\uA7A3': 'k',
  '\u24DB': 'l',
  '\uFF4C': 'l',
  '\u0140': 'l',
  '\u013A': 'l',
  '\u013E': 'l',
  '\u1E37': 'l',
  '\u1E39': 'l',
  '\u013C': 'l',
  '\u1E3D': 'l',
  '\u1E3B': 'l',
  '\u017F': 'l',
  '\u0142': 'l',
  '\u019A': 'l',
  '\u026B': 'l',
  '\u2C61': 'l',
  '\uA749': 'l',
  '\uA781': 'l',
  '\uA747': 'l',
  '\u01C9': 'lj',
  '\u24DC': 'm',
  '\uFF4D': 'm',
  '\u1E3F': 'm',
  '\u1E41': 'm',
  '\u1E43': 'm',
  '\u0271': 'm',
  '\u026F': 'm',
  '\u24DD': 'n',
  '\uFF4E': 'n',
  '\u01F9': 'n',
  '\u0144': 'n',
  '\u00F1': 'n',
  '\u1E45': 'n',
  '\u0148': 'n',
  '\u1E47': 'n',
  '\u0146': 'n',
  '\u1E4B': 'n',
  '\u1E49': 'n',
  '\u019E': 'n',
  '\u0272': 'n',
  '\u0149': 'n',
  '\uA791': 'n',
  '\uA7A5': 'n',
  '\u01CC': 'nj',
  '\u24DE': 'o',
  '\uFF4F': 'o',
  '\u00F2': 'o',
  '\u00F3': 'o',
  '\u00F4': 'o',
  '\u1ED3': 'o',
  '\u1ED1': 'o',
  '\u1ED7': 'o',
  '\u1ED5': 'o',
  '\u00F5': 'o',
  '\u1E4D': 'o',
  '\u022D': 'o',
  '\u1E4F': 'o',
  '\u014D': 'o',
  '\u1E51': 'o',
  '\u1E53': 'o',
  '\u014F': 'o',
  '\u022F': 'o',
  '\u0231': 'o',
  '\u00F6': 'o',
  '\u022B': 'o',
  '\u1ECF': 'o',
  '\u0151': 'o',
  '\u01D2': 'o',
  '\u020D': 'o',
  '\u020F': 'o',
  '\u01A1': 'o',
  '\u1EDD': 'o',
  '\u1EDB': 'o',
  '\u1EE1': 'o',
  '\u1EDF': 'o',
  '\u1EE3': 'o',
  '\u1ECD': 'o',
  '\u1ED9': 'o',
  '\u01EB': 'o',
  '\u01ED': 'o',
  '\u00F8': 'o',
  '\u01FF': 'o',
  '\u0254': 'o',
  '\uA74B': 'o',
  '\uA74D': 'o',
  '\u0275': 'o',
  '\u01A3': 'oi',
  '\u0223': 'ou',
  '\uA74F': 'oo',
  '\u24DF': 'p',
  '\uFF50': 'p',
  '\u1E55': 'p',
  '\u1E57': 'p',
  '\u01A5': 'p',
  '\u1D7D': 'p',
  '\uA751': 'p',
  '\uA753': 'p',
  '\uA755': 'p',
  '\u24E0': 'q',
  '\uFF51': 'q',
  '\u024B': 'q',
  '\uA757': 'q',
  '\uA759': 'q',
  '\u24E1': 'r',
  '\uFF52': 'r',
  '\u0155': 'r',
  '\u1E59': 'r',
  '\u0159': 'r',
  '\u0211': 'r',
  '\u0213': 'r',
  '\u1E5B': 'r',
  '\u1E5D': 'r',
  '\u0157': 'r',
  '\u1E5F': 'r',
  '\u024D': 'r',
  '\u027D': 'r',
  '\uA75B': 'r',
  '\uA7A7': 'r',
  '\uA783': 'r',
  '\u24E2': 's',
  '\uFF53': 's',
  '\u00DF': 's',
  '\u015B': 's',
  '\u1E65': 's',
  '\u015D': 's',
  '\u1E61': 's',
  '\u0161': 's',
  '\u1E67': 's',
  '\u1E63': 's',
  '\u1E69': 's',
  '\u0219': 's',
  '\u015F': 's',
  '\u023F': 's',
  '\uA7A9': 's',
  '\uA785': 's',
  '\u1E9B': 's',
  '\u24E3': 't',
  '\uFF54': 't',
  '\u1E6B': 't',
  '\u1E97': 't',
  '\u0165': 't',
  '\u1E6D': 't',
  '\u021B': 't',
  '\u0163': 't',
  '\u1E71': 't',
  '\u1E6F': 't',
  '\u0167': 't',
  '\u01AD': 't',
  '\u0288': 't',
  '\u2C66': 't',
  '\uA787': 't',
  '\uA729': 'tz',
  '\u24E4': 'u',
  '\uFF55': 'u',
  '\u00F9': 'u',
  '\u00FA': 'u',
  '\u00FB': 'u',
  '\u0169': 'u',
  '\u1E79': 'u',
  '\u016B': 'u',
  '\u1E7B': 'u',
  '\u016D': 'u',
  '\u00FC': 'u',
  '\u01DC': 'u',
  '\u01D8': 'u',
  '\u01D6': 'u',
  '\u01DA': 'u',
  '\u1EE7': 'u',
  '\u016F': 'u',
  '\u0171': 'u',
  '\u01D4': 'u',
  '\u0215': 'u',
  '\u0217': 'u',
  '\u01B0': 'u',
  '\u1EEB': 'u',
  '\u1EE9': 'u',
  '\u1EEF': 'u',
  '\u1EED': 'u',
  '\u1EF1': 'u',
  '\u1EE5': 'u',
  '\u1E73': 'u',
  '\u0173': 'u',
  '\u1E77': 'u',
  '\u1E75': 'u',
  '\u0289': 'u',
  '\u24E5': 'v',
  '\uFF56': 'v',
  '\u1E7D': 'v',
  '\u1E7F': 'v',
  '\u028B': 'v',
  '\uA75F': 'v',
  '\u028C': 'v',
  '\uA761': 'vy',
  '\u24E6': 'w',
  '\uFF57': 'w',
  '\u1E81': 'w',
  '\u1E83': 'w',
  '\u0175': 'w',
  '\u1E87': 'w',
  '\u1E85': 'w',
  '\u1E98': 'w',
  '\u1E89': 'w',
  '\u2C73': 'w',
  '\u24E7': 'x',
  '\uFF58': 'x',
  '\u1E8B': 'x',
  '\u1E8D': 'x',
  '\u24E8': 'y',
  '\uFF59': 'y',
  '\u1EF3': 'y',
  '\u00FD': 'y',
  '\u0177': 'y',
  '\u1EF9': 'y',
  '\u0233': 'y',
  '\u1E8F': 'y',
  '\u00FF': 'y',
  '\u1EF7': 'y',
  '\u1E99': 'y',
  '\u1EF5': 'y',
  '\u01B4': 'y',
  '\u024F': 'y',
  '\u1EFF': 'y',
  '\u24E9': 'z',
  '\uFF5A': 'z',
  '\u017A': 'z',
  '\u1E91': 'z',
  '\u017C': 'z',
  '\u017E': 'z',
  '\u1E93': 'z',
  '\u1E95': 'z',
  '\u01B6': 'z',
  '\u0225': 'z',
  '\u0240': 'z',
  '\u2C6C': 'z',
  '\uA763': 'z',
  '\u0386': '\u0391',
  '\u0388': '\u0395',
  '\u0389': '\u0397',
  '\u038A': '\u0399',
  '\u03AA': '\u0399',
  '\u038C': '\u039F',
  '\u038E': '\u03A5',
  '\u03AB': '\u03A5',
  '\u038F': '\u03A9',
  '\u03AC': '\u03B1',
  '\u03AD': '\u03B5',
  '\u03AE': '\u03B7',
  '\u03AF': '\u03B9',
  '\u03CA': '\u03B9',
  '\u0390': '\u03B9',
  '\u03CC': '\u03BF',
  '\u03CD': '\u03C5',
  '\u03CB': '\u03C5',
  '\u03B0': '\u03C5',
  '\u03C9': '\u03C9',
  '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
  const match = a => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
class ItemsList {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = new Map();
      this._groups.set(undefined, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = item => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = item => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find(item => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach(item => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find(item => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find(x => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter(x => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(+1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf('.') === -1) {
      return option[key];
    } else {
      const keys = key.split('.');
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : '',
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find(x => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter(x => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every(x => x.selected)) {
        this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === undefined) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = new Map();
    if (items.length === 0) {
      return groups;
    }
    // Check if items are already grouped by given key.
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = item => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : undefined;
    };
    // Group items by key.
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === undefined) {
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup.map(x => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? '' : String(key),
        children: undefined,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map(x => {
        x.parent = parent;
        x.children = undefined;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map(x => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
}
var KeyCode;
(function (KeyCode) {
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Esc"] = 27] = "Esc";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
  KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
class NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
  return new (t || NgDropdownPanelService)();
};
NgDropdownPanelService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgDropdownPanelService,
  factory: NgDropdownPanelService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const CSS_POSITIONS = ['top', 'right', 'bottom', 'left'];
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass('bottom');
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = '1';
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach(position => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(e => {
        const path = e.path || e.composedPath && e.composedPath();
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', {
        capture: true
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'mousedown', {
        capture: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe($event => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== 'auto') {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + 'px';
    this._dropdown.style.width = select.width + 'px';
    this._dropdown.style.minWidth = select.width + 'px';
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === 'top') {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + 'px';
      this._dropdown.style.top = 'auto';
    } else if (this._currentPosition === 'bottom') {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + 'px';
      this._dropdown.style.bottom = 'auto';
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._dropdown, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(event => {
        const target = event.target;
        if (target.tagName === 'INPUT') {
          return;
        }
        event.preventDefault();
      });
    });
  }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
  return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
};
NgDropdownPanelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    }
  },
  inputs: {
    items: "items",
    markedItem: "markedItem",
    position: "position",
    appendTo: "appendTo",
    bufferAmount: "bufferAmount",
    virtualScroll: "virtualScroll",
    headerTemplate: "headerTemplate",
    footerTemplate: "footerTemplate",
    filterValue: "filterValue"
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 6,
  consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'ng-dropdown-panel',
      template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: NgDropdownPanelService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
      }]
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }]
  });
})();
class NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._disabled = false;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = this._isDisabled(value);
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
  _isDisabled(value) {
    return value != null && `${value}` !== 'false';
  }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
  return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgOptionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    value: "value",
    disabled: "disabled"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgSelectConfig {
  constructor() {
    this.notFoundText = 'No items found';
    this.typeToSearchText = 'Type to search';
    this.addTagText = 'Add item';
    this.loadingText = 'Loading...';
    this.clearAllText = 'Clear all';
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = 'underline';
  }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
  return new (t || NgSelectConfig)();
};
NgSelectConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgSelectConfig,
  factory: NgSelectConfig.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ConsoleService {
  warn(message) {
    console.warn(message);
  }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) {
  return new (t || ConsoleService)();
};
ConsoleService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConsoleService,
  factory: ConsoleService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.keyDownFn = _ => true;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    // output events
    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this._items = [];
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._onChange = _ => {};
    this._onTouched = () => {};
    this.clearItem = item => {
      const option = this.selectedItems.find(x => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel());
    this.element = _elementRef.nativeElement;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    if (value === null) {
      value = [];
    }
    this._itemsAreUsed = true;
    this._items = value;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== undefined && fn !== null && !isFunction(fn)) {
      throw Error('`compareWith` must be a function.');
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map(x => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return undefined;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyCode = KeyCode[$event.which];
    if (keyCode) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if ($event.key && $event.key.length === 1) {
      this._keyPress$.next($event.key.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    switch ($event.which) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleMousedown($event) {
    const target = $event.target;
    if (target.tagName !== 'INPUT') {
      $event.preventDefault();
    }
    if (target.classList.contains('ng-clear-wrapper')) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains('ng-arrow-wrapper')) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains('ng-value-icon')) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.multiple && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this._onSelectionChanged();
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
  }
  focus() {
    if (!this.searchInput.nativeElement.readOnly) {
      this.searchInput.nativeElement.focus();
    }
    ;
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item);
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = item => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then(item => this.select(handleTag(item))).catch(() => {});
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term)) && !this.loading;
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map(x => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add('ng-select-focused');
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove('ng-select-focused');
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems && this.selectedItems[0];
    this.searchTerm = selected && selected.label || null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = options => {
      this.items = options.map(option => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map(option => option.stateChange$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(option => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(options => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = item => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn('Multiple select ngModel should be array.');
        return false;
      }
      return value.every(item => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = val => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach(item => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(letter => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this._pressedKeys.join(''))).subscribe(term => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input = this.searchInput.nativeElement;
    const attributes = {
      type: 'text',
      autocorrect: 'off',
      autocapitalize: 'off',
      autocomplete: this.labelForId ? 'off' : this.dropdownId,
      ...this.inputAttrs
    };
    for (const key of Object.keys(attributes)) {
      input.setAttribute(key, attributes[key]);
    }
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map(x => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.multiple && this.appendTo) {
      // Make sure items are rendered.
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false && !this.addTag) {
      return;
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(+1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm && this.searchTerm.trim();
    return term && term.length >= this.minTermLength;
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
  }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
  return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
};
NgSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single);
    }
  },
  inputs: {
    bindLabel: "bindLabel",
    bindValue: "bindValue",
    markFirst: "markFirst",
    placeholder: "placeholder",
    notFoundText: "notFoundText",
    typeToSearchText: "typeToSearchText",
    addTagText: "addTagText",
    loadingText: "loadingText",
    clearAllText: "clearAllText",
    appearance: "appearance",
    dropdownPosition: "dropdownPosition",
    appendTo: "appendTo",
    loading: "loading",
    closeOnSelect: "closeOnSelect",
    hideSelected: "hideSelected",
    selectOnTab: "selectOnTab",
    openOnEnter: "openOnEnter",
    maxSelectedItems: "maxSelectedItems",
    groupBy: "groupBy",
    groupValue: "groupValue",
    bufferAmount: "bufferAmount",
    virtualScroll: "virtualScroll",
    selectableGroup: "selectableGroup",
    selectableGroupAsModel: "selectableGroupAsModel",
    searchFn: "searchFn",
    trackByFn: "trackByFn",
    clearOnBackspace: "clearOnBackspace",
    labelForId: "labelForId",
    inputAttrs: "inputAttrs",
    tabIndex: "tabIndex",
    readonly: "readonly",
    searchWhileComposing: "searchWhileComposing",
    minTermLength: "minTermLength",
    editableSearchTerm: "editableSearchTerm",
    keyDownFn: "keyDownFn",
    typeahead: "typeahead",
    multiple: "multiple",
    addTag: "addTag",
    searchable: "searchable",
    clearable: "clearable",
    isOpen: "isOpen",
    items: "items",
    compareWith: "compareWith",
    clearSearchOnAdd: "clearSearchOnAdd"
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
    multi: true
  }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 14,
  vars: 19,
  consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        return ctx.handleMousedown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filter(_r2.value));
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
        return ctx.onCompositionStart();
      })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionEnd(_r2.value));
      })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
        return ctx.onInputBlur($event);
      })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgDropdownPanelComponent, NgItemLabelDirective],
  styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-select',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
      styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['class']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['autofocus']
      }]
    }, {
      type: NgSelectConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [SELECTION_MODEL_FACTORY]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ConsoleService
    }];
  }, {
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-typeahead']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-opened']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scrollToEnd']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput', {
        static: true
      }]
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-disabled']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-filtered']
    }],
    single: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-single']
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
class DefaultSelectionModel {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter(x => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter(x => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter(x => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter(x => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter(x => x.parent !== parent), ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter(x => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every(x => !x.disabled || x.selected);
  }
}
class NgSelectModule {}
NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
  return new (t || NgSelectModule)();
};
NgSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgSelectModule
});
NgSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: DefaultSelectionModelFactory
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_template_layout_module_ts.js.map