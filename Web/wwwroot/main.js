"use strict";
(self["webpackChunkMiniBank"] = self["webpackChunkMiniBank"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_template_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template/layout.module */ 6087)).then(m => m.LayoutModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_sign-in_sign-in_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 2831)).then(m => m.SignInModule)
}, {
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_sign-up_sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 3982)).then(m => m.SignUpModule)
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _services_internal_langues_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/internal/langues.service */ 9650);
/* harmony import */ var _services_internal_ssr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/internal/ssr.service */ 6107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AppComponent {
  constructor(translateService, langueService, ssrService) {
    this.translateService = translateService;
    this.langueService = langueService;
    this.ssrService = ssrService;
    this.title = 'MiniBank';
    const currentLang = this.langueService.getCurrentLangue();
    this.translateService.setDefaultLang(currentLang.id);
    this.translateService.use(currentLang.id);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_internal_langues_service__WEBPACK_IMPORTED_MODULE_0__.LanguesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_internal_ssr_service__WEBPACK_IMPORTED_MODULE_1__.SsrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _services_internal_langues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/internal/langues.service */ 9650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _services_internal_ssr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/internal/ssr.service */ 6107);
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/common */ 9506);
/* harmony import */ var _services_internal_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/internal/seo.service */ 2191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_internal_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/internal/notification.service */ 5028);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 3543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);


















// AoT requires an exported function for factories
const createTranslateLoader = httpClient => {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
};
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor,
      multi: true
    }, _services_internal_langues_service__WEBPACK_IMPORTED_MODULE_2__.LanguesService, _services_internal_ssr_service__WEBPACK_IMPORTED_MODULE_3__.SsrService, _services_internal_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient, _services_internal_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule.withServerTransition({
      appId: 'serverApp'
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
    // translation server side
    _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__.TransferHttpCacheModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.TransferState]
      }
    }),
    // toaster
    ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
    // translation server side
    _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__.TransferHttpCacheModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule]
  });
})();

/***/ }),

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
  logo: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/assets/images/logos/logo.svg'
};

/***/ }),

/***/ 6347:
/*!***********************************************!*\
  !*** ./src/app/constants/langues.constant.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLang": () => (/* binding */ DefaultLang),
/* harmony export */   "EnLangue": () => (/* binding */ EnLangue),
/* harmony export */   "FrLangue": () => (/* binding */ FrLangue),
/* harmony export */   "Langues": () => (/* binding */ Langues)
/* harmony export */ });
/* harmony import */ var _models_enums_direction_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enums/direction.enum */ 4961);

const EnLangue = {
  id: 'en',
  name: 'English',
  title: 'ENGLISH',
  direction: _models_enums_direction_enum__WEBPACK_IMPORTED_MODULE_0__.DirectionEnum.Left,
  flag: 'assets/images/icons/gb.svg',
  description: ''
};
const FrLangue = {
  id: 'fr',
  name: 'Français',
  title: 'FRENCH',
  direction: _models_enums_direction_enum__WEBPACK_IMPORTED_MODULE_0__.DirectionEnum.Left,
  flag: 'assets/images/icons/fr.svg',
  description: ''
};
const Langues = [EnLangue, FrLangue];
const DefaultLang = EnLangue;

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

/***/ 1289:
/*!***********************************************!*\
  !*** ./src/app/constants/storage.constant.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorage": () => (/* binding */ LocalStorage)
/* harmony export */ });
const LocalStorage = {
  Lang: 'lang'
};

/***/ }),

/***/ 3543:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api/account.service */ 3913);



class JwtInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    let currentUser;
    // the take 1 will make the observable work like a promise
    this.accountService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
      next: user => {
        currentUser = user;
        if (currentUser) {
          request = request.clone({
            setHeaders: {
              // the space ' ' after Bearer is very important dont miss it
              Authorization: `Bearer ${currentUser.token}`
            }
          });
        }
      }
    });
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptor_Factory(t) {
    return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_api_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
  });
}

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

/***/ 4961:
/*!************************************************!*\
  !*** ./src/app/models/enums/direction.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionEnum": () => (/* binding */ DirectionEnum)
/* harmony export */ });
var DirectionEnum;
(function (DirectionEnum) {
  DirectionEnum[DirectionEnum["Up"] = 1] = "Up";
  DirectionEnum[DirectionEnum["Down"] = 2] = "Down";
  DirectionEnum[DirectionEnum["Left"] = 3] = "Left";
  DirectionEnum[DirectionEnum["Right"] = 4] = "Right";
})(DirectionEnum || (DirectionEnum = {}));

/***/ }),

/***/ 3913:
/*!*************************************************!*\
  !*** ./src/app/services/api/account.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AccountService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.currentUser$ = this.currentUserSource.asObservable();
  }
  login(model) {
    return this.http.post(`${this.baseUrl}account/login`, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      const user = response;
      if (user) {
        this.setCurrentUser(user);
      }
    }));
  }
  register(model) {
    return this.http.post(`${this.baseUrl}account/register`, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      const user = response;
      if (user) {
        this.setCurrentUser(user);
      }
      return user;
    }));
  }
  setCurrentUser(user) {
    user.roles = [];
    // get role from decoded token
    const roles = this.getDecodedToken(user.token).role;
    // check if role is an array if not add it to roles
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    // set user in local storage
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  static #_ = this.ɵfac = function AccountService_Factory(t) {
    return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AccountService,
    factory: AccountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9650:
/*!******************************************************!*\
  !*** ./src/app/services/internal/langues.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguesService": () => (/* binding */ LanguesService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/langues.constant */ 6347);
/* harmony import */ var src_app_constants_storage_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/storage.constant */ 1289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ssr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ssr.service */ 6107);





class LanguesService {
  constructor(document, ssrService) {
    this.document = document;
    this.ssrService = ssrService;
  }
  getCurrentLangue() {
    // langue
    if (this.ssrService.isOnBrowser()) {
      const currentLangueJson = localStorage.getItem(src_app_constants_storage_constant__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.Lang) || JSON.stringify(src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.DefaultLang);
      localStorage.setItem(src_app_constants_storage_constant__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.Lang, currentLangueJson);
      const currentLang = JSON.parse(currentLangueJson) || src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.DefaultLang;
      this.document.documentElement.lang = currentLang.id;
      localStorage.setItem(src_app_constants_storage_constant__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.Lang, JSON.stringify(currentLang));
      return currentLang;
    }
    return src_app_constants_langues_constant__WEBPACK_IMPORTED_MODULE_0__.DefaultLang;
  }
  setCurrentLangue(lang) {
    if (this.ssrService.isOnBrowser()) {
      localStorage.setItem(src_app_constants_storage_constant__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.Lang, JSON.stringify(lang));
      window.location.reload();
    }
  }
  static #_ = this.ɵfac = function LanguesService_Factory(t) {
    return new (t || LanguesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ssr_service__WEBPACK_IMPORTED_MODULE_2__.SsrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LanguesService,
    factory: LanguesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5028:
/*!***********************************************************!*\
  !*** ./src/app/services/internal/notification.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4817);


class NotificationService {
  constructor(toastr) {
    this.toastr = toastr;
  }
  showSuccess(message, title) {
    this.toastr.success(message, title);
  }
  showError(message, title) {
    this.toastr.error(message, title);
  }
  showInfo(message, title) {
    this.toastr.info(message, title);
  }
  showWarning(message, title) {
    this.toastr.warning(message, title);
  }
  static #_ = this.ɵfac = function NotificationService_Factory(t) {
    return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
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

/***/ }),

/***/ 6107:
/*!**************************************************!*\
  !*** ./src/app/services/internal/ssr.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsrService": () => (/* binding */ SsrService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SsrService {
  constructor(platformId) {
    this.platformId = platformId;
  }
  isOnBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId);
  }
  static #_ = this.ɵfac = function SsrService_Factory(t) {
    return new (t || SsrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SsrService,
    factory: SsrService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  swaggerUrl: 'https://localhost:5001/swagger/index.html'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map