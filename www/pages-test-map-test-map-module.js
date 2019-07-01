(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-map-test-map-module"],{

/***/ "./src/app/pages/test-map/test-map.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test-map/test-map.module.ts ***!
  \***************************************************/
/*! exports provided: TestMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMapPageModule", function() { return TestMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-map.page */ "./src/app/pages/test-map/test-map.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var routes = [
    {
        path: '',
        component: _test_map_page__WEBPACK_IMPORTED_MODULE_6__["TestMapPage"]
    }
];
var TestMapPageModule = /** @class */ (function () {
    function TestMapPageModule() {
    }
    TestMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC8SehJEhUgxWvlRE30IWFHPRpucpsAirY'
                })
            ],
            declarations: [_test_map_page__WEBPACK_IMPORTED_MODULE_6__["TestMapPage"]]
        })
    ], TestMapPageModule);
    return TestMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/test-map/test-map.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/test-map/test-map.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Trouver un restaurant\n    </ion-title>\n    <ion-img src=\"/assets/icon/vaudvin_logo.png\" class=\"img-toolbar\" slot=\"end\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar (ionChange)=\"onChange($event)\" placeHolder=\"Rechercher un restaurant\"></ion-searchbar>\n  <agm-map\n   [style.height.px]=\"height\"\n   [latitude]=\"lat\"\n   [longitude]=\"lng\">\n     <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/test-map/test-map.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/test-map/test-map.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-toolbar {\n  width: 100px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1tYXAvQzpcXFVzZXJzXFxFZGR5XFxEcm9wYm94XFxASEVHU2VtZXN0cmU4XFxUcmF2YWlsLWRlLUJhY2hlbG9yXFxJb25pY1xcVmF1ZFZpbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXHRlc3QtbWFwXFx0ZXN0LW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdC1tYXAvdGVzdC1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10b29sYmFye1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/test-map/test-map.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/test-map/test-map.page.ts ***!
  \*************************************************/
/*! exports provided: TestMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMapPage", function() { return TestMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TestMapPage = /** @class */ (function () {
    function TestMapPage(platform) {
        this.platform = platform;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.height = 0;
        console.log(platform.height());
        this.height = platform.height() - 56;
    }
    TestMapPage.prototype.ngOnInit = function () {
    };
    TestMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-map',
            template: __webpack_require__(/*! ./test-map.page.html */ "./src/app/pages/test-map/test-map.page.html"),
            styles: [__webpack_require__(/*! ./test-map.page.scss */ "./src/app/pages/test-map/test-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], TestMapPage);
    return TestMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-test-map-test-map-module.js.map