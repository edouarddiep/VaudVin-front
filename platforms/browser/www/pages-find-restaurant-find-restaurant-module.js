(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-find-restaurant-find-restaurant-module"],{

/***/ "./src/app/models/Restaurant.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/Restaurant.model.ts ***!
  \********************************************/
/*! exports provided: Restaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurant", function() { return Restaurant; });
var Restaurant = /** @class */ (function () {
    function Restaurant() {
    }
    return Restaurant;
}());



/***/ }),

/***/ "./src/app/pages/find-restaurant/find-restaurant.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/find-restaurant/find-restaurant.module.ts ***!
  \*****************************************************************/
/*! exports provided: FindRestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRestaurantPageModule", function() { return FindRestaurantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _find_restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find-restaurant.page */ "./src/app/pages/find-restaurant/find-restaurant.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var routes = [
    {
        path: '',
        component: _find_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["FindRestaurantPage"]
    }
];
var FindRestaurantPageModule = /** @class */ (function () {
    function FindRestaurantPageModule() {
    }
    FindRestaurantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_find_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["FindRestaurantPage"]],
            providers: [_agm_core__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsAPIWrapper"]],
        })
    ], FindRestaurantPageModule);
    return FindRestaurantPageModule;
}());



/***/ }),

/***/ "./src/app/pages/find-restaurant/find-restaurant.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/find-restaurant/find-restaurant.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Trouver un restaurant\n    </ion-title>\n    <ion-img src=\"/assets/icon/vaudvin_logo.png\" class=\"img-toolbar\" slot=\"end\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-card *ngFor=\"let restaurant of restaurants\" class=\"restau-card\" (click)=\"getDetails(restaurant)\">\n      <ion-item>\n        <div class=\"div-icon\">\n          <ion-icon name=\"restaurant\" class=\"img-icon\"></ion-icon>\n        </div>\n        <div class=\"restau-info\">\n          <ion-label class=\"restau-title\">{{restaurant.name}}</ion-label>\n          <ion-label>{{restaurant.type}}</ion-label>\n          <ion-label>{{restaurant.address_1}}</ion-label>\n          <ion-label>{{restaurant.zip_code}} - {{restaurant.city}}</ion-label>\n          <ion-label>{{restaurant.phone_number}}</ion-label>\n        </div>\n      </ion-item>  \n    </ion-card>\n  </ion-list>\n  <agm-map\n   [style.height.px]=\"height\"\n   [latitude]=\"lat\"\n   [longitude]=\"lng\">\n     <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/find-restaurant/find-restaurant.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/find-restaurant/find-restaurant.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-toolbar {\n  width: 100px;\n  height: 50px; }\n\n.restau-card {\n  cursor: pointer; }\n\n.div-icon {\n  margin-right: 10px;\n  height: 20px;\n  width: 40px; }\n\n.div-icon .img-icon {\n    height: 40px;\n    width: 40px; }\n\n.restau-info {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.restau-info .restau-title {\n    font-weight: bold;\n    font-size: 1.1em;\n    color: #df4b68; }\n\nagm-map {\n  height: 100% !important;\n  width: 100%; }\n\n.gm-style {\n  text-align: center; }\n\nagm-info-window {\n  display: block;\n  margin: 0 auto;\n  font-size: 20px;\n  max-width: 80px;\n  max-height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmluZC1yZXN0YXVyYW50L0M6XFxVc2Vyc1xcRWRkeVxcRHJvcGJveFxcQEhFR1NlbWVzdHJlOFxcVHJhdmFpbC1kZS1CYWNoZWxvclxcSW9uaWNcXFZhdWRWaW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxmaW5kLXJlc3RhdXJhbnRcXGZpbmQtcmVzdGF1cmFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUVmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUhmO0lBTVEsWUFBVztJQUNYLFdBQVUsRUFBQTs7QUFJbEI7RUFDSSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUE7O0FBRnZCO0lBSVEsaUJBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsY0FBYyxFQUFBOztBQUl0QjtFQUNJLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maW5kLXJlc3RhdXJhbnQvZmluZC1yZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdG9vbGJhcntcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuLnJlc3RhdS1jYXJke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGl2LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG5cclxuICAgIC5pbWctaWNvbntcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVzdGF1LWluZm97XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcclxuICAgIC5yZXN0YXUtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjEuMWVtO1xyXG4gICAgICAgIGNvbG9yOiAjZGY0YjY4O1xyXG4gICAgfVxyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5nbS1zdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGFnbS1pbmZvLXdpbmRvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/find-restaurant/find-restaurant.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/find-restaurant/find-restaurant.page.ts ***!
  \***************************************************************/
/*! exports provided: FindRestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRestaurantPage", function() { return FindRestaurantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");






var LocalisationMarqueur = /** @class */ (function () {
    function LocalisationMarqueur(restaurant, lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.restaurant = restaurant;
    }
    return LocalisationMarqueur;
}());
var FindRestaurantPage = /** @class */ (function () {
    function FindRestaurantPage(mapsApiLoader, zone, wrapper, rs, router, platform) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.rs = rs;
        this.router = router;
        this.platform = platform;
        this.restaurants = new Array();
        this.isLoading = false;
        this.cpt = 0;
        this.lstLocalisations = new Array();
        this.icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            scaledSize: {
                width: 40,
                height: 40
            }
        };
        this.location = {
            lat: this.lat,
            lng: this.lng,
            marker: {
                lat: this.lat,
                lng: this.lng,
            },
            zoom: 5
        };
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    FindRestaurantPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.getRestaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        console.log(this.restaurants.length);
        setTimeout(function () {
            _this.location.marker.draggable = false;
            _this.geoLocation();
            _this.getRestaurants();
            _this.cpt = 1;
            _this.isLoading = false;
        }, 0);
    };
    FindRestaurantPage.prototype.getRestaurants = function () {
        var _this = this;
        this.rs.getRestaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    FindRestaurantPage.prototype.geoLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    _this.zoom = 16;
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                }
            }, function (error) { return console.log(error); });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    FindRestaurantPage.prototype.navigateToRestaurant = function (restaurant) {
        //this.router.navigate(['vendor-profil/' + restaurant.id]);
        console.log("route pour restaurant");
    };
    /*
      onChange(event){
        this.rs.getRestaurantsByName(event.detail.value).subscribe(restaurants => this.restaurants = restaurants);
        this.rs.pushNextArrayRestaurants(this.restaurants);
      }
    */
    FindRestaurantPage.prototype.getDetails = function (r) {
        this.rs.setRestaurant(r);
        this.router.navigate(['restaurant-detail']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"])
    ], FindRestaurantPage.prototype, "map", void 0);
    FindRestaurantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-restaurant',
            template: __webpack_require__(/*! ./find-restaurant.page.html */ "./src/app/pages/find-restaurant/find-restaurant.page.html"),
            styles: [__webpack_require__(/*! ./find-restaurant.page.scss */ "./src/app/pages/find-restaurant/find-restaurant.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsAPIWrapper"], src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], FindRestaurantPage);
    return FindRestaurantPage;
}());



/***/ }),

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Restaurant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Restaurant.model */ "./src/app/models/Restaurant.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _vin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin.service */ "./src/app/services/vin.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var RestaurantService = /** @class */ (function () {
    function RestaurantService(http, vinService) {
        this.http = http;
        this.vinService = vinService;
        this.restaurants$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new Array());
        this.restaurant = new _models_Restaurant_model__WEBPACK_IMPORTED_MODULE_2__["Restaurant"];
        this.restaurant$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.restaurant);
        this.listeVins = new Array();
        this.restaurantsFiltres = new Array();
    }
    RestaurantService.prototype.getRestaurants = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL"].domaine + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL"].restaurant.verb);
    };
    /*
    getRestaurantsByName(content: string): Observable<Array<Restaurant>> {
      this.restaurantsFiltres = new Array<Restaurant>();
      this.listeRestaurants.forEach(r => {
        const nom = r.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const type = r.type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const contentNormalized = content.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if(nom.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || type.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())) {
          this.restaurantsFiltres.push(r);
        }
      });
      return of(this.restaurantsFiltres);
    }
  */
    RestaurantService.prototype.pushNextArrayRestaurants = function (restaurants) {
        this.restaurants$.next(restaurants);
    };
    RestaurantService.prototype.setRestaurant = function (r) {
        this.restaurant = r;
    };
    RestaurantService.prototype.getRestaurant = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.restaurant);
    };
    RestaurantService.prototype.pushNextRestaurant = function () {
        this.restaurant$.next(this.restaurant);
    };
    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _vin_service__WEBPACK_IMPORTED_MODULE_4__["VinService"]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "./src/app/services/vin.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/vin.service.ts ***!
  \*****************************************/
/*! exports provided: VinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinService", function() { return VinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var VinService = /** @class */ (function () {
    function VinService(http) {
        this.http = http;
        this.vin$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.vin);
        this.vins$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.millesime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.listeVinsFiltree = new Array();
    }
    VinService.prototype.getWines = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL"].domaine + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["URL"].wine.verb);
    };
    /*
    getVinsFilteredByName(content: string): Observable<Array<Vin>> {
      this.listeVinsFiltree = new Array<Vin>();
      this.vins.forEach(v => {
        const nom = v.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const provenance = v.provenance.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const producteur = v.producteur.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const cepage = v.cepage.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const type = v.type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const style = v.style.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const millesime = v.millesime;
        const medaille = v.medaille.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const contentNormalized = content.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (nom.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || provenance.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || provenance.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || producteur.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || cepage.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || type.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || style.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
        || millesime.toString().includes(contentNormalized.toLocaleUpperCase())
        || medaille.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())) {
          this.listeVinsFiltree.push(v);
        }
      });
      return of(this.listeVinsFiltree);
    }
  
    */
    VinService.prototype.pushNextVinArray = function (vins) {
        this.vins$.next(vins);
    };
    VinService.prototype.getMillesime = function (nomVin) {
    };
    /*
    getSelectedVin(vin: Vin): Observable<Vin> {
      var index = this.vins.indexOf(vin);
      this.vin = this.vins[index];
      return of(this.vin);
    }
  
    */
    VinService.prototype.pushNextVin = function () {
        this.vin$.next(this.vin);
    };
    VinService.prototype.getVinDetail = function () {
        return this.vin$.asObservable();
    };
    VinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VinService);
    return VinService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-find-restaurant-find-restaurant-module.js.map