(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-wine-list-wine-module"],{

/***/ "./src/app/pages/list-wine/list-wine.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/list-wine/list-wine.module.ts ***!
  \*****************************************************/
/*! exports provided: ListWinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWinePageModule", function() { return ListWinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_wine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-wine.page */ "./src/app/pages/list-wine/list-wine.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _list_wine_page__WEBPACK_IMPORTED_MODULE_6__["ListWinePage"]
    }
];
var ListWinePageModule = /** @class */ (function () {
    function ListWinePageModule() {
    }
    ListWinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ],
            declarations: [_list_wine_page__WEBPACK_IMPORTED_MODULE_6__["ListWinePage"]],
        })
    ], ListWinePageModule);
    return ListWinePageModule;
}());



/***/ }),

/***/ "./src/app/pages/list-wine/list-wine.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/list-wine/list-wine.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Noter / Evaluer un vin\n    </ion-title>\n    <ion-img src=\"/assets/icon/vaudvin_logo.png\" class=\"img-toolbar\" slot=\"end\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list>\n  <app-searchbar></app-searchbar>\n  <ion-card *ngFor=\"let vin of vins\" class=\"wine-card\" (click)=\"goToDetails(vin)\">\n    <ion-item class=\"vin-wrapper\">\n      <ion-img class=\"img-vin\" src=\"data:image/jpeg;base64,{{vin.photo}}\"></ion-img>\n      <div class=\"vin-info\">\n        <ion-label class=\"vin-title\">{{vin.name}}</ion-label>\n        <ion-label>{{vin.region}}</ion-label>\n        <ion-label>{{vin.producer}}</ion-label>\n        <ion-label>{{vin.grape_variety}}</ion-label>\n        <ion-label>Vin {{vin.category}}</ion-label>\n        <ion-label>{{vin.vintage}}</ion-label>\n      </div>\n    </ion-item>  \n  </ion-card>\n</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/list-wine/list-wine.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/list-wine/list-wine.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-toolbar {\n  width: 100px;\n  height: 50px; }\n\n.wine-card {\n  text-align: center;\n  align-content: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  padding-right: 10px;\n  box-shadow: inset 0px 8px 10px -15px black, outset 0px -8px 10px -15px black;\n  cursor: pointer; }\n\n.wine-card .img-vin {\n    width: 50px;\n    height: 190px;\n    min-width: 50px;\n    min-height: 190px;\n    padding-bottom: 50px; }\n\n.wine-card .vin-wrapper {\n    margin-right: 20px;\n    margin-left: 20px; }\n\n.wine-card .vin-wrapper .vin-info {\n      margin-left: 20px;\n      padding-bottom: 50px;\n      font-size: calc(11px + .5vw); }\n\n.wine-card .vin-wrapper .vin-info .vin-title {\n        font-weight: bold;\n        font-size: calc(13px + .5vw);\n        color: #df4b68; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC13aW5lL0M6XFxVc2Vyc1xcRWRkeVxcRHJvcGJveFxcQEhFR1NlbWVzdHJlOFxcVHJhdmFpbC1kZS1CYWNoZWxvclxcSW9uaWNcXFZhdWRWaW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxsaXN0LXdpbmVcXGxpc3Qtd2luZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLDRFQUE0RTtFQUM1RSxlQUFlLEVBQUE7O0FBVG5CO0lBV1EsV0FBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBOztBQWY1QjtJQWtCUSxrQkFBaUI7SUFDakIsaUJBQWdCLEVBQUE7O0FBbkJ4QjtNQXFCWSxpQkFBZ0I7TUFDaEIsb0JBQW1CO01BQ25CLDRCQUE0QixFQUFBOztBQXZCeEM7UUF5QmdCLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdC13aW5lL2xpc3Qtd2luZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRvb2xiYXJ7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG59XHJcbi53aW5lLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA4cHggMTBweCAtMTVweCBibGFjaywgb3V0c2V0IDBweCAtOHB4IDEwcHggLTE1cHggYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuaW1nLXZpbntcclxuICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnZpbi13cmFwcGVye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgLnZpbi1pbmZve1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTFweCArIC41dncpO1xyXG4gICAgICAgICAgICAudmluLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTNweCArIC41dncpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkZjRiNjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/list-wine/list-wine.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/list-wine/list-wine.page.ts ***!
  \***************************************************/
/*! exports provided: ListWinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWinePage", function() { return ListWinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/vin.service */ "./src/app/services/vin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListWinePage = /** @class */ (function () {
    function ListWinePage(vs, router) {
        this.vs = vs;
        this.router = router;
        this.base64 = 'data:image/jpeg;base64,';
    }
    ListWinePage.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.getWines().subscribe(function (vins) {
            _this.vins = vins;
        });
    };
    ListWinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-wine',
            template: __webpack_require__(/*! ./list-wine.page.html */ "./src/app/pages/list-wine/list-wine.page.html"),
            styles: [__webpack_require__(/*! ./list-wine.page.scss */ "./src/app/pages/list-wine/list-wine.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_vin_service__WEBPACK_IMPORTED_MODULE_2__["VinService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListWinePage);
    return ListWinePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-wine-list-wine-module.js.map