(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content\" responsive-sm>\n  <ion-card class=\"login-card\" responsive-sm>\n    <ion-img src=\"/assets/icon/vaudvin_logo.png\" class=\"img-toolbar\" slot=\"center\"></ion-img>\n    <div class=\"div-label\">\n      <ion-label class=\"login-label\" color=\"primary\">Bienvenue sur VaudVin !</ion-label>\n    </div>\n    <ion-item class=\"login-input\" responsive-sm>\n      <ion-input placeholder=\"Nom d'utilisateur\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n    <ion-item class=\"login-input\" responsive-sm>\n      <ion-input type=\"password\" placeholder=\"Mot de passe\" [(ngModel)]=\"password\" (keydown)=\"login($event)\"></ion-input>\n    </ion-item>\n    <ion-button class=\"login-btn\" (click)=\"login($event)\">Login</ion-button>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content .login-card {\n  padding-top: 10px;\n  text-align: center;\n  height: auto; }\n  .login-content .login-card .img-toolbar {\n    text-align: center;\n    margin: auto;\n    width: 25vh;\n    height: 14vh; }\n  .login-content .login-card .div-label {\n    margin-top: 30px;\n    margin-bottom: 25px; }\n  .login-content .login-card .login-label {\n    font-size: 1.6em; }\n  .login-content .login-card .login-input {\n    padding-right: 20px; }\n  .login-content .login-card .login-btn {\n    text-transform: none;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxFZGR5XFxEcm9wYm94XFxASEVHU2VtZXN0cmU4XFxUcmF2YWlsLWRlLUJhY2hlbG9yXFxJb25pY1xcVmF1ZFZpbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVcsRUFBQTtFQUpuQjtJQU1ZLGtCQUFrQjtJQUNsQixZQUFXO0lBQ1gsV0FBVTtJQUNWLFlBQVcsRUFBQTtFQVR2QjtJQVlZLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQUE7RUFiOUI7SUFpQlksZ0JBQWUsRUFBQTtFQWpCM0I7SUFvQlksbUJBQWtCLEVBQUE7RUFwQjlCO0lBdUJZLG9CQUFvQjtJQUNwQixnQkFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudHtcclxuICAgIC5sb2dpbi1jYXJke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIC5pbWctdG9vbGJhcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgd2lkdGg6MjV2aDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE0dmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS42ZW07ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW4taW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLWJ0bntcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginPage = /** @class */ (function () {
    function LoginPage(router) {
        this.router = router;
        this.lstUsers = new Array();
        this.lstPasswords = new Array();
    }
    LoginPage.prototype.ngOnInit = function () {
        /* A CORRIGER DANS UNE FUTURE VERSION*/
        this.lstUsers.push('admin');
        this.lstUsers.push('papa');
        this.lstUsers.push('eric');
        this.lstUsers.push('eddy');
        this.lstUsers.push('maman');
        this.lstUsers.push('test');
        this.lstUsers.push('user');
        this.lstPasswords.push('admin');
        this.lstPasswords.push('papa');
        this.lstPasswords.push('eric');
        this.lstPasswords.push('eddy');
        this.lstPasswords.push('maman');
        this.lstPasswords.push('test');
        this.lstPasswords.push('user');
    };
    LoginPage.prototype.login = function (event) {
        console.log(event.keyCode);
        if (event.keyCode === 13 || event.keyCode == null) {
            if (this.lstUsers.indexOf(this.username) !== -1 && this.lstPasswords.indexOf(this.password) !== -1) {
                this.router.navigate(['home']);
            }
            else {
                alert('Le nom d\'utilisateur ou le mot de passe est invalide !');
            }
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map