webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coiffeur__ = __webpack_require__("./src/app/coiffeur.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment__ = __webpack_require__("./src/app/appointment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.AuthKey = '';
    }
    ApiService.prototype.getAuthKey = function () {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('auth-token', this.AuthKey);
        return { params: param };
    };
    ApiService.prototype.getUsers = function () {
        var _this = this;
        var usersList = [];
        this.http.get('/api/users', this.getAuthKey())
            .subscribe(function (data) { return _this.apiResult = data; });
        for (var _i = 0, _a = this.apiResult; _i < _a.length; _i++) {
            var user = _a[_i];
            var userToAppend = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */](user['id'], user['roles'][0], user['username'], user['firstname'], user['lastname'], user['gender']);
            usersList.push(userToAppend);
        }
        return usersList;
    };
    ApiService.prototype.getProfessionals = function () {
        var _this = this;
        var professionalsList = [];
        this.http.get('/api/professionals', this.getAuthKey())
            .subscribe(function (data) { return _this.apiResult = data; });
        for (var _i = 0, _a = this.apiResult; _i < _a.length; _i++) {
            var professionals = _a[_i];
            var professionalToAppend = new __WEBPACK_IMPORTED_MODULE_3__coiffeur__["a" /* Coiffeur */](professionals['id'], professionals['roles'][0], professionals['username'], professionals['firstname'], professionals['lastname'], professionals['gender']);
            professionalsList.push(professionalToAppend);
        }
        return professionalsList;
    };
    ApiService.prototype.getAppointments = function (id) {
        var _this = this;
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', id).set('auth-token', this.AuthKey);
        var appointmentList = [];
        this.http.get('/api/appointments', {
            params: param
        }).subscribe(function (data) { return _this.apiResult = data; });
        for (var _i = 0, _a = this.apiResult; _i < _a.length; _i++) {
            var appointment = _a[_i];
            var appointmentsToAppend = new __WEBPACK_IMPORTED_MODULE_4__appointment__["a" /* Appointment */](appointment['id'], new Date(appointment['startdate']), new Date(appointment['enddate']), appointment['description']);
            appointmentList.push(appointmentsToAppend);
        }
        return appointmentList;
    };
    ApiService.prototype.getConnectedUser = function () {
        var _this = this;
        this.http.get('/api/lastuser', this.getAuthKey())
            .subscribe(function (data) { return _this.apiResult = data; });
        var lastUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */](this.apiResult['id'], this.apiResult['roles'][0], this.apiResult['username'], this.apiResult['firstname'], this.apiResult['lastname'], this.apiResult['gender']);
        return lastUser;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  ***************************************** Sidebar ***************** -->\n\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div>\n            <!--Link to agenda home page-->\n            <a class=\"navbar-brand\" routerLink=\"/agenda\">Gali </a>\n        </div>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n\n        <div class=\"nav justify-content-end\">\n        <!--User Account-->\n            <form class=\"form-inline my-2 my-lg-0\">\n            <!--User Username or Login here-->\n            <!-- How to get rid of parentheses ????????-->\n                <p>Welcome <span>{{ currentUser.username }}</span></p>\n            <!-- Log out button must to be linked-->\n                <button class=\"btn\" type=\"submit\" routerLink=\"/logout\" [value]=\"btnSubmit\">Log Out</button>\n            </form>\n        </div>\n    </div>\n</nav>\n\n<!--  *****************************************  Sidebar ***********************-->\n<div id=\"sidebar\">\n    <ul class=\"menu\">\n        <li><a routerLink=\"/appointment\">Appointments</a></li>\n        <li><a routerLink=\"/form\">Happy Costumers</a></li>\n    </ul>\n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Poiret+One\");\n@import url(\"https://fonts.googleapis.com/css?family=Poiret+One\");\n/* ********************************** sidebar */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poiret One', cursive;\n  font-weight: bold; }\n/**format taille vw */\n#sidebar {\n  position: fixed;\n  width: 151px;\n  height: 100%;\n  background: #EAF2F8; }\n#sidebar ul li {\n  color: #4D5656;\n  list-style: none;\n  padding: 15px 10px;\n  border-bottom: 1px solid #AED6F1; }\n.menu li:hover {\n  background: #AED6F1;\n  border-left: 5px solid #A9CCE3; }\n.active a {\n  text-decoration: none;\n  color: #4D5656; }\n/* ********************************** header  */\n* {\n  color: #4D5656;\n  font-family: 'Poiret One', cursive; }\nnav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n/**Logo  bleu chaise ??*/\n.navbar-brand {\n  color: #4bcffa;\n  font-family: 'Natsuki';\n  font-size: 400%;\n  padding: 5px; }\nnav {\n  background-color: #EAF2F8;\n  padding: 20px; }\n/** header right */\n/** Welcome + user Loggedin */\np {\n  margin-top: 15px;\n  font-weight: bold;\n  font-size: 200%; }\n/** Log Out */\n/** test button background color\n#D6EAF8 = light\n\n*/\n.btn {\n  background-color: #A9CCE3;\n  font-weight: bold;\n  margin-left: 20px; }\n.btn :hover {\n  background-color: #7FB3D5; }\n.nav justify-content-end {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appointments_appointments_component__ = __webpack_require__("./src/app/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__appointments_appointments_component__["a" /* AppointmentsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment(id, startDate, endDate, 
        // professional: User,
        // customer: User,
        description) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        // this.professional = professional;
        // this.customer = customer;
        this.description = description;
    }
    return Appointment;
}());



/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  appointments works!\n</p>\n<input type=\"text\" (keyup)=\"onNameKeyUp($event)\">\n<button (click)=\"getProfile()\">Get Profil</button>\n<br>\n<div *ngIf=\"found\">\n  <span> {{name}}'s age is {{age}}</span>\n</div>\n\n\n\n<button (click)=\"postProfile()\">Post Profil</button>\n<br>\n-->\n<section id=\"mainConteiner\">\n  <form id=\"formRdv\">\n    <h3>Book of appointments</h3>\n    <!-- ***********************************   begin  type Radio ***************************-->\n    <h5>Hairdresser ? </h5>\n    <!--<div class=\"form-check\" id=\"hairdresser\">-->\n      <!--<ul>-->\n        <!--<li *ngFor=\"let coiffeur of coiffeurs\">-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios1\" value=\"option1\" checked>-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio1\"  >-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n        <!--<li>-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios2\" value=\"option2\">-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio2\" >-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n        <!--<li>-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios3\" value=\"option2\">-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio3\">-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n      <!--</ul>-->\n    <!--</div>-->\n\n    <br>\n    <!-- ********************************** end  type Radio ************-->\n\n    <!-- ********************************** Begin  DateTime  *********************************-->\n    <h5>Date and hour ?</h5>\n    <div class=\"row\">\n      <div class=\"col\">\n        <input type=\"date\" class=\"form-control\" id=\"datePicker\" placeholder=\"time\">\n      </div>\n      <div class=\"col\">\n        <input type=\"time\" class=\"form-control\" id=\"time\" placeholder=\"time\">\n      </div>\n    </div>\n\n    <br>\n    <h5> Ooops! Unavailable !</h5>\n    <!-- ********************************** end  DateTime *********-->\n\n    <!-- ********************************** begin  Textarea and unavailability ******************************-->\n    <!-- <Span>{{coiffeur.unavailable}}</Span> -->\n    <ul>\n      <li>*** here display the unavailable hours of the hairdressers</li>\n    </ul>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\">Description</label>\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"2\" placeholder=\"Color? Cut? or a cup of café/thé and a head massage ?\"></textarea>\n    </div>\n\n    <!-- ********************************** end Textarea  *********-->\n\n    <!-- ********************************** begin  input name client ******************************-->\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <label for=\"formGroupExampleInput2\">Firstname</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputNameClient1\" placeholder=\"Firstname\">\n      </div>\n      <div class=\"col\">\n        <label for=\"formGroupExampleInput2\">Lastname</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputNameClient2\" placeholder=\"Lastname\">\n      </div>\n    </div>\n    <br>\n    <!-- ********************************** end   input name client******************************-->\n\n\n    <!-- ********************************** begin Submit button ******************************-->\n\n    <button type=\"submit\" (click)=postRdv() class=\"btn btn-primary\" id=\"submitBouton\">Create RDV</button>\n    <!-- ********************************** end Submit button  ******************************-->\n  </form>\n\n  <!-- ********************************  Begin  Table  display RDV  ************************* -->\n  <table id=\"tableRdv\">\n    <tr>\n      <th>Hairdresser</th>\n      <th>Date</th>\n      <th>Time</th>\n      <th>Approved</th>\n      <th>Description</th>\n    </tr>\n\n    <tr *ngFor=\"let appointment of appointments\">\n      <td>{{appointment.date}}</td>\n      <td>{{appointment.duration}}</td>\n      <td>{{appointment.approved}}</td>\n      <td>{{appointment.description}}</td>\n    </tr>\n\n  </table>\n</section>\n"

/***/ }),

/***/ "./src/app/appointments/appointments.component.scss":
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s; }\n\n/** ***********   Main Conteiner ***********/\n\n#mainConteiner {\n  width: 90%; }\n\n/* *********** Form inside Conteiner************ */\n\n#formRdv {\n  margin: 2vw 0 0 2vw;\n  padding: 1vw;\n  width: 60%;\n  border-radius: 8px;\n  -webkit-box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3);\n          box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3); }\n\n/* Textarea and unavailability */\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\nul li {\n    padding-right: 1.8vw;\n    list-style: none; }\n\n[name=\"typeRadio\"] {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\ninput {\n  color: #18BEF0;\n  border-radius: 1.5vw;\n  -webkit-box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3);\n          box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3); }\n\n/*  DateTime */\n\n[placeholder=\"time\"] {\n  width: 51%; }\n\n/*  input name client */\n\n[id=\"formGroupExampleInput2\"] {\n  width: 55%;\n  color: #18BEF0; }\n\ntextarea {\n  width: 0 auto;\n  border-radius: 20px;\n  color: #18BEF0;\n  -webkit-box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3);\n          box-shadow: 4px 3px 4px 5px rgba(172, 179, 182, 0.3); }\n\n/*  Submit button  */\n\n[type=\"submit\"] {\n  border: none;\n  background-color: #18BEF0;\n  -webkit-box-shadow: 2px 1px 3px 5px #18BEF0;\n          box-shadow: 2px 1px 3px 5px #18BEF0;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s; }\n\n[type=\"submit\"]:hover {\n  background-color: #0084ff;\n  -webkit-box-shadow: 4px 3px 4px 5px #0084ff;\n          box-shadow: 4px 3px 4px 5px #0084ff; }\n\n/* ****************  tale *********/\n\n#tableRdv {\n  margin: 2vw 0 1vw 2vw;\n  -webkit-box-shadow: 5px 10px 10px 10px rgba(148, 230, 255, 0.2);\n          box-shadow: 5px 10px 10px 10px rgba(148, 230, 255, 0.2);\n  border-radius: 8px;\n  width: 70%;\n  text-align: center; }\n\ntr {\n  background-color: rgba(148, 230, 255, 0.2);\n  border-bottom: 1px solid #18BEF0; }\n"

/***/ }),

/***/ "./src/app/appointments/appointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointments_service__ = __webpack_require__("./src/app/appointments/appointments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    AppointmentsComponent.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentsService.getAppointments().subscribe(function (appointments) { return _this.appointments = appointments; });
    };
    AppointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rdv',
            template: __webpack_require__("./src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__("./src/app/appointments/appointments.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__appointments_service__["a" /* AppointmentsService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appointments_service__["a" /* AppointmentsService */]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/appointments/appointments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_error_handler_service__ = __webpack_require__("./src/app/http-error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AppointmentsService = /** @class */ (function () {
    function AppointmentsService(http, httpErrorHandler) {
        this.http = http;
        //url to appointments api
        this.appointmentsUrl = 'api/appointments';
        this.handleError = httpErrorHandler.createHandleError('AppointmentsService');
    }
    /** GET appointments from the server */
    AppointmentsService.prototype.getAppointments = function () {
        //let param = new HttpParams().set('auth-token', this.apiKey);
        //return this.http.get<Appointment[]>(this.appointmentsUrl, {params: param}).pipe(
        return this.http.get(this.appointmentsUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getAppointments', [])));
    };
    AppointmentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__http_error_handler_service__["a" /* HttpErrorHandler */]])
    ], AppointmentsService);
    return AppointmentsService;
}());



/***/ }),

/***/ "./src/app/coiffeur.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coiffeur; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("./src/app/user.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Coiffeur = /** @class */ (function (_super) {
    __extends(Coiffeur, _super);
    function Coiffeur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coiffeur;
}(__WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]));



/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Your account</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onsubmit(f.value)\">\n            <div class=\"col\">\n              <p>Your username is: {{ currentUser.username }}</p>\n            </div>\n            <div class=\"col\">\n                <label for=\"firstname\">Firstname</label>\n                <input name=\"firstname\" ngModel required #first=\"ngModel\" placeholder=\"{{ currentUser.firstname }}\">\n            </div>\n            <div class=\"col\">\n                <label for=\"lastname\">Lastname</label>\n                <input name=\"lastname\" ngModel #last=\"ngModel\" placeholder=\"{{ currentUser.lastname }}\">\n            </div>\n            <div class=\"col\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" ngModel #email=\"ngModel\" placeholder=\"{{ currentUser.email }}\">\n            </div>\n            <div class=\"col\">\n                <label for=\"birthdate\">Birthdate</label>\n                <input type=\"date\" ngModel #date=\"ngModel\">\n            </div>\n            <div class=\"col\">\n                <select name=\"gender\" ngModel #gender=\"ngModel\">\n                    <option value=\"true\">Male</option>\n                    <option value=\"false\">Female</option>\n                </select>\n            </div>\n            <div class=\"col\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" ngModel #address=\"ngModel\" placeholder=\"{{ currentUser.address }}\">\n            </div>\n            <div class=\"col\">\n                <label for=\"phone\">Phone</label>\n                <input type=\"tel\" ngModel #phone=\"ngModel\" placeholder=\"{{ currentUser.phone }}\">\n            </div>\n        </form>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poiret+One\");\n* {\n  background-color: #D6EAF8;\n  font-family: 'Poiret One', cursive;\n  font-weight: bold;\n  color: #4D5656;\n  padding: 20px; }\n.formwidth {\n  position: fixed;\n  left: 151px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\nspan {\n  font-weight: bold;\n  color: black;\n  border-bottom: 2px solid #AED6F1; }\nspan:hover {\n  background: #A9CCE3; }\n.fullwidth {\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(apiService) {
        this.apiService = apiService;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, role, username, firstname, lastname, gender) {
        this.id = id;
        this.role = role;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map