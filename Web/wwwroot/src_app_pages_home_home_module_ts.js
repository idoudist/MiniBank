"use strict";
(self["webpackChunkMiniBank"] = self["webpackChunkMiniBank"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 7817:
/*!*******************************************!*\
  !*** ./src/app/constants/App.constant.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_DATA": () => (/* binding */ APP_DATA)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const APP_DATA = {
  name: 'MiniBank',
  country: 'France',
  logo: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/assets/images/logos/logo.png'
};

/***/ }),

/***/ 4339:
/*!*********************************************!*\
  !*** ./src/app/constants/regex.constant.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileNameHolder": () => (/* binding */ ProfileNameHolder),
/* harmony export */   "REGEX_HOLDER": () => (/* binding */ REGEX_HOLDER),
/* harmony export */   "SiteNameHolder": () => (/* binding */ SiteNameHolder)
/* harmony export */ });
/*
   /g : global case sensitive
   /gi: global case insensitive
 */
// profile regex
const SiteNameHolder = /SiteNameHolder/g;
const ProfileNameHolder = /ProfileNameHolder/g;
// regex constants
const REGEX_HOLDER = {
  siteNameHolder: 'SiteNameHolder',
  profileNameHolder: 'ProfileNameHolder'
};

/***/ }),

/***/ 1142:
/*!**********************************************!*\
  !*** ./src/app/constants/routes.constant.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTES": () => (/* binding */ APP_ROUTES),
/* harmony export */   "APP_URLS": () => (/* binding */ APP_URLS)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/';
const APP_URLS = {
  home: baseUrl,
  transaction: baseUrl + 'transaction',
  history: baseUrl + 'history'
};
const APP_ROUTES = {
  home: '/',
  transaction: '/' + 'transaction',
  history: '/' + 'history'
};

/***/ }),

/***/ 3529:
/*!*******************************************!*\
  !*** ./src/app/constants/seo.constant.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HISTORY_META_DATA": () => (/* binding */ HISTORY_META_DATA),
/* harmony export */   "HOME_META_DATA": () => (/* binding */ HOME_META_DATA),
/* harmony export */   "META_DATA": () => (/* binding */ META_DATA),
/* harmony export */   "TRANSACTION_META_DATA": () => (/* binding */ TRANSACTION_META_DATA)
/* harmony export */ });
/* harmony import */ var _models_common_meta_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/common/meta-config.model */ 7283);
/* harmony import */ var _regex_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.constant */ 4339);
/* harmony import */ var _routes_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.constant */ 1142);



const META_DATA = {
  ogType: 'og:type',
  ogCountryName: 'og:country-name',
  ogSiteName: 'og:site_name',
  ogUrl: 'og:url',
  ogTitle: 'og:title',
  ogDescription: 'og:description',
  ogImage: 'og:image',
  title: 'title',
  description: 'description',
  website: 'website'
};
const FullName = _regex_constant__WEBPACK_IMPORTED_MODULE_1__.REGEX_HOLDER.profileNameHolder;
const SiteName = _regex_constant__WEBPACK_IMPORTED_MODULE_1__.REGEX_HOLDER.siteNameHolder;
const HOME_META_DATA = new _models_common_meta_config_model__WEBPACK_IMPORTED_MODULE_0__.MetaConfig(`Home - ${SiteName}`, _routes_constant__WEBPACK_IMPORTED_MODULE_2__.APP_URLS.home, META_DATA.website, `this is ${FullName} personal website home page it contains a welcoming message`);
const TRANSACTION_META_DATA = new _models_common_meta_config_model__WEBPACK_IMPORTED_MODULE_0__.MetaConfig(`Transaction - ${SiteName}`, _routes_constant__WEBPACK_IMPORTED_MODULE_2__.APP_URLS.transaction, META_DATA.website, `this is ${FullName} personal website it contains account operations`);
const HISTORY_META_DATA = new _models_common_meta_config_model__WEBPACK_IMPORTED_MODULE_0__.MetaConfig(`History - ${SiteName}`, _routes_constant__WEBPACK_IMPORTED_MODULE_2__.APP_URLS.history, META_DATA.website, `this is ${FullName} personal website it contains transaction history`);

/***/ }),

/***/ 7283:
/*!****************************************************!*\
  !*** ./src/app/models/common/meta-config.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaConfig": () => (/* binding */ MetaConfig)
/* harmony export */ });
class MetaConfig {
  constructor(title, url, description, type) {
    this.title = title;
    this.url = url;
    this.description = description;
    this.type = type;
  }
}

/***/ }),

/***/ 9340:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/details/details.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/account.service */ 3913);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class DetailsComponent {
  constructor(accountService, router) {
    this.accountService = accountService;
    this.router = router;
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
  static #_ = this.ɵfac = function DetailsComponent_Factory(t) {
    return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DetailsComponent,
    selectors: [["app-details"]],
    decls: 10,
    vars: 6,
    consts: [[1, "details", "page-content"], [1, "pl-4", "pr-4"], [1, "btn", "btn-danger", "btn-lg", "btn-block", 3, "click"]],
    template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_8_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "HOME.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "HOME.SLOGAN"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".details[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n.details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  text-align: center;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy90ZW1wbGF0ZS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8yJTIwR2l0SHViL01pbmlCYW5rL01pbmlCYW5rL0Zyb250L3NyYy9hcHAvcGFnZXMvaG9tZS9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUNFQTtFQUNJLGlCQUFBO0FDQUo7QURDSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUiIsInNvdXJjZXNDb250ZW50IjpbIi8qdGVtcGxhdGUgY29sb3JzKi9cclxuJGJsYWNraXNoOiAjMEQwRTJDO1xyXG4kYmx1ZWlzaDogIzBCNDFCMTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0QxQzJBRTtcclxuJHNlY29uZGFyeS1jb2xvci0yOiAjQUY5RDg3O1xyXG4kc2hhZGU6ICNGOEY2RjM7XHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGRhbmdlcjogI0Y1NTk0QjsiLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3RlbXBsYXRlLXZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZGV0YWlsc3tcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiLyp0ZW1wbGF0ZSBjb2xvcnMqL1xuLmRldGFpbHMge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5kZXRhaWxzIGgxIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWxzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 9328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 9328);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ 8202);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ 9340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [
    // routing
    _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
    // shared module
    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__.IntroComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_4__.DetailsComponent],
    imports: [
    // routing
    _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
    // shared module
    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 9328:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/seo.constant */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_internal_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/internal/seo.service */ 2191);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intro/intro.component */ 8202);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/details.component */ 9340);





class HomeComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.setPageSeoData(src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_0__.HOME_META_DATA);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_internal_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 3,
    vars: 0,
    consts: [[1, "home"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-intro")(2, "app-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__.IntroComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_3__.DetailsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8202:
/*!*****************************************************!*\
  !*** ./src/app/pages/home/intro/intro.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IntroComponent {
  constructor() {}
  static #_ = this.ɵfac = function IntroComponent_Factory(t) {
    return new (t || IntroComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IntroComponent,
    selectors: [["app-intro"]],
    decls: 4,
    vars: 0,
    consts: [[1, "intro"], [1, "full-image-wrap"], [1, "img-wrapper"], ["src", "/assets/images/photos/intro-1.png", "alt", "main-photo"]],
    template: function IntroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".intro[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n  height: 600px;\n}\n@media screen and (max-width: 767px) {\n  .intro[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzIlMjBHaXRIdWIvTWluaUJhbmsvTWluaUJhbmsvRnJvbnQvc3JjL2FwcC9wYWdlcy9ob21lL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQ0FSO0FEQ1E7RUFGSjtJQUdRLGFBQUE7RUNFVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvIHtcclxuICAgIC5pbWctd3JhcHBlcntcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmludHJvIC5pbWctd3JhcHBlciB7XG4gIGhlaWdodDogNjAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaW50cm8gLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2191:
/*!**************************************************!*\
  !*** ./src/app/services/internal/seo.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/App.constant */ 7817);
/* harmony import */ var src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/regex.constant */ 4339);
/* harmony import */ var src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/seo.constant */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);





class SeoService {
  constructor(metaService, titleService) {
    this.metaService = metaService;
    this.titleService = titleService;
  }
  setPageSeoData(config) {
    this.generateMetaTags(config);
    this.setPageTitle(config.title);
  }
  generateMetaTags(config) {
    // meta data name tags
    this.metaService.updateTag({
      name: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.title,
      content: config.title.replace(src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.SiteNameHolder, src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name)
    });
    this.metaService.updateTag({
      name: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.description,
      content: config.description.replace(src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.ProfileNameHolder, src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name)
    });
    // meta data property tags
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogTitle,
      content: config.title.replace(src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.SiteNameHolder, src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name)
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogUrl,
      content: config.url
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogDescription,
      content: config.description.replace(src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.ProfileNameHolder, src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name)
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogCountryName,
      content: src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.country
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogSiteName,
      content: src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogType,
      content: config.type
    });
    this.metaService.updateTag({
      property: src_app_constants_seo_constant__WEBPACK_IMPORTED_MODULE_2__.META_DATA.ogImage,
      content: src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.logo
    });
  }
  setPageTitle(title) {
    this.titleService.setTitle(title.replace(src_app_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.SiteNameHolder, src_app_constants_App_constant__WEBPACK_IMPORTED_MODULE_0__.APP_DATA.name));
  }
  static #_ = this.ɵfac = function SeoService_Factory(t) {
    return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: SeoService,
    factory: SeoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map