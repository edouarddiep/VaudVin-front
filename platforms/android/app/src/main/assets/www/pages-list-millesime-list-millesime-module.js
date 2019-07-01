(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-millesime-list-millesime-module"],{

/***/ "./src/app/pages/list-millesime/list-millesime.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/list-millesime/list-millesime.module.ts ***!
  \***************************************************************/
/*! exports provided: ListMillesimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMillesimePageModule", function() { return ListMillesimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_millesime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-millesime.page */ "./src/app/pages/list-millesime/list-millesime.page.ts");







var routes = [
    {
        path: '',
        component: _list_millesime_page__WEBPACK_IMPORTED_MODULE_6__["ListMillesimePage"]
    }
];
var ListMillesimePageModule = /** @class */ (function () {
    function ListMillesimePageModule() {
    }
    ListMillesimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_millesime_page__WEBPACK_IMPORTED_MODULE_6__["ListMillesimePage"]]
        })
    ], ListMillesimePageModule);
    return ListMillesimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/list-millesime/list-millesime.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/list-millesime/list-millesime.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>list-millesime</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <ion-card *ngFor=\"let millesime of millesimes\" class=\"millesime-card\" (click)=\"getDetails(millesime)\">\n        <ion-item>\n          <div class=\"div-icon\">\n            <ion-icon name=\"restaurant\" class=\"img-icon\"></ion-icon>\n          </div>\n          <div class=\"restau-info\">\n            <ion-label class=\"restau-title\">{{restaurant.nom}}</ion-label>\n            <ion-label>{{restaurant.type}}</ion-label>\n            <ion-label>{{restaurant.adresse}}</ion-label>\n            <ion-label>{{restaurant.code_postal}} - {{restaurant.ville}}</ion-label>\n            <ion-label>{{restaurant.no_telephone}}</ion-label>\n          </div>\n        </ion-item>  \n      </ion-card>\n    </ion-list>\n    <!--\n      <div *ngIf=\"selectedItem\" padding>\n        You navigated here from <b>{{selectedItem.title }}</b>\n      </div>\n    -->\n  </ion-content>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/list-millesime/list-millesime.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/list-millesime/list-millesime.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtbWlsbGVzaW1lL2xpc3QtbWlsbGVzaW1lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/list-millesime/list-millesime.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/list-millesime/list-millesime.page.ts ***!
  \*************************************************************/
/*! exports provided: ListMillesimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMillesimePage", function() { return ListMillesimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListMillesimePage = /** @class */ (function () {
    function ListMillesimePage() {
    }
    ListMillesimePage.prototype.ngOnInit = function () {
    };
    ListMillesimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-millesime',
            template: __webpack_require__(/*! ./list-millesime.page.html */ "./src/app/pages/list-millesime/list-millesime.page.html"),
            styles: [__webpack_require__(/*! ./list-millesime.page.scss */ "./src/app/pages/list-millesime/list-millesime.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListMillesimePage);
    return ListMillesimePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-millesime-list-millesime-module.js.map