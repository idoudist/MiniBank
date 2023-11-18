"use strict";
(self["webpackChunkMiniBank"] = self["webpackChunkMiniBank"] || []).push([["common"],{

/***/ 3815:
/*!*********************************************************!*\
  !*** ./src/app/helpers/pagination/pagination.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPaginatedResults": () => (/* binding */ getPaginatedResults),
/* harmony export */   "getPaginationHeaders": () => (/* binding */ getPaginationHeaders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ 289);



function getPaginatedResults(url, params, http) {
  const paginatedResult = new _pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatedResult();
  return http.get(url, {
    observe: 'response',
    params
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
    paginatedResult.result = response.body || null;
    if (response.headers.get('Pagination') !== null) {
      paginatedResult.pagination = JSON.parse(response.headers.get('Pagination') || "{}");
    }
    return paginatedResult;
  }));
}
function getPaginationHeaders(pageNumber, pageSize) {
  let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());
  return params;
}

/***/ }),

/***/ 289:
/*!**************************************************!*\
  !*** ./src/app/helpers/pagination/pagination.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedResult": () => (/* binding */ PaginatedResult)
/* harmony export */ });
class PaginatedResult {}

/***/ }),

/***/ 1878:
/*!*****************************************************!*\
  !*** ./src/app/services/api/transaction.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var src_app_helpers_pagination_pagination_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/pagination/pagination.helper */ 3815);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class TransactionService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'api/Transaction/';
    this.memberCache = new Map();
  }
  deposit(operation) {
    const url = `${this.baseUrl}deposit`;
    return this.http.post(url, operation);
  }
  withdrow(operation) {
    const url = `${this.baseUrl}withdrow`;
    return this.http.post(url, operation);
  }
  getTransactions(pageNumber, pageSize) {
    let params = (0,src_app_helpers_pagination_pagination_helper__WEBPACK_IMPORTED_MODULE_0__.getPaginationHeaders)(pageNumber, pageSize);
    const url = `${this.baseUrl}transactions`;
    return (0,src_app_helpers_pagination_pagination_helper__WEBPACK_IMPORTED_MODULE_0__.getPaginatedResults)(url, params, this.http);
  }
  getTransaction(id) {
    const url = `${this.baseUrl}transaction/${id}`;
    return this.http.get(url);
  }
  getBalance() {
    const url = `${this.baseUrl}balance`;
    return this.http.get(url);
  }
  static #_ = this.ɵfac = function TransactionService_Factory(t) {
    return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TransactionService,
    factory: TransactionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map