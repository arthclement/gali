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

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-rdv></app-rdv>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_cache_service__ = __webpack_require__("./src/app/request-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_error_handler_service__ = __webpack_require__("./src/app/http-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointments_appointments_component__ = __webpack_require__("./src/app/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { httpInterceptorProviders } from './http-interceptors/index';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__appointments_appointments_component__["a" /* AppointmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__messages_messages_component__["a" /* MessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'My-Xsrf-Cookie',
                    headerName: 'My-Xsrf-Header',
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__http_error_handler_service__["a" /* HttpErrorHandler */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__request_cache_service__["a" /* RequestCache */], useClass: __WEBPACK_IMPORTED_MODULE_3__request_cache_service__["b" /* RequestCacheWithMap */] },
                __WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */]
                // httpInterceptorProviders
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  appointments works!\n</p>\n<input type=\"text\" (keyup)=\"onNameKeyUp($event)\">\n<button (click)=\"getProfile()\">Get Profil</button>\n<br>\n<div *ngIf=\"found\">\n  <span> {{name}}'s age is {{age}}</span>\n</div>\n\n\n\n<button (click)=\"postProfile()\">Post Profil</button>\n<br>\n-->\n<section id=\"mainConteiner\">\n  <form id=\"formRdv\">\n    <h3>Book of appointments</h3>\n    <!-- ***********************************   begin  type Radio ***************************-->\n    <h5>Hairdresser ? </h5>\n    <!--<div class=\"form-check\" id=\"hairdresser\">-->\n      <!--<ul>-->\n        <!--<li *ngFor=\"let coiffeur of coiffeurs\">-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios1\" value=\"option1\" checked>-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio1\"  >-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n        <!--<li>-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios2\" value=\"option2\">-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio2\" >-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n        <!--<li>-->\n          <!--<input class=\"form-check-input\" type=\"radio\" name=\"typeRadio\" id=\"typeRadios3\" value=\"option2\">-->\n          <!--<label class=\"form-check-label\" for=\"typeRadio3\">-->\n            <!--{{coiffeur.firstname}}-->\n          <!--</label>-->\n        <!--</li>-->\n      <!--</ul>-->\n    <!--</div>-->\n\n    <br>\n    <!-- ********************************** end  type Radio ************-->\n\n    <!-- ********************************** Begin  DateTime  *********************************-->\n    <h5>Date and hour ?</h5>\n    <div class=\"row\">\n      <div class=\"col\">\n        <input type=\"date\" class=\"form-control\" id=\"datePicker\" placeholder=\"time\">\n      </div>\n      <div class=\"col\">\n        <input type=\"time\" class=\"form-control\" id=\"time\" placeholder=\"time\">\n      </div>\n    </div>\n\n    <br>\n    <h5> Ooops! Unavailable !</h5>\n    <!-- ********************************** end  DateTime *********-->\n\n    <!-- ********************************** begin  Textarea and unavailability ******************************-->\n    <!-- <Span>{{coiffeur.unavailable}}</Span> -->\n    <ul>\n      <li>*** here display the unavailable hours of the hairdressers</li>\n    </ul>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\">Description</label>\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"2\" placeholder=\"Color? Cut? or a cup of café/thé and a head massage ?\"></textarea>\n    </div>\n\n    <!-- ********************************** end Textarea  *********-->\n\n    <!-- ********************************** begin  input name client ******************************-->\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <label for=\"formGroupExampleInput2\">Firstname</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputNameClient1\" placeholder=\"Firstname\">\n      </div>\n      <div class=\"col\">\n        <label for=\"formGroupExampleInput2\">Lastname</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputNameClient2\" placeholder=\"Lastname\">\n      </div>\n    </div>\n    <br>\n    <!-- ********************************** end   input name client******************************-->\n\n\n    <!-- ********************************** begin Submit button ******************************-->\n\n    <button type=\"submit\" (click)=postRdv() class=\"btn btn-primary\" id=\"submitBouton\">Create RDV</button>\n    <!-- ********************************** end Submit button  ******************************-->\n  </form>\n\n  <!-- ********************************  Begin  Table  display RDV  ************************* -->\n  <table id=\"tableRdv\">\n    <tr>\n      <th>Hairdresser</th>\n      <th>Date</th>\n      <th>Time</th>\n      <th>Approved</th>\n      <th>Description</th>\n    </tr>\n\n    <tr *ngFor=\"let appointment of appointments\">\n      <td>{{appointment.id}}</td>\n      <td>{{appointment.professional.id}}</td>\n      <td>{{appointment.date}}</td>\n      <td>{{appointment.duration}}</td>\n      <td>{{appointment.description}}</td>\n    </tr>\n\n  </table>\n</section>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
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
        return this.http.get(this.appointmentsUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getAppointments', [])));
    };
    AppointmentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__http_error_handler_service__["a" /* HttpErrorHandler */]])
    ], AppointmentsService);
    return AppointmentsService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  <h3>Messages</h3>\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n  <br>\n  <ol>\n    <li *ngFor='let message of messageService.messages'> {{message}} </li>\n  </ol>\n</div>\n\n\n<!--\nCopyright 2017-2018 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n-->\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/request-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestCacheWithMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestCache = /** @class */ (function () {
    function RequestCache() {
    }
    return RequestCache;
}());

var maxAge = 30000; // maximum cache age (ms)
var RequestCacheWithMap = /** @class */ (function () {
    function RequestCacheWithMap(messenger) {
        this.messenger = messenger;
        this.cache = new Map();
    }
    RequestCacheWithMap.prototype.get = function (req) {
        var url = req.urlWithParams;
        var cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        var isExpired = cached.lastRead < (Date.now() - maxAge);
        var expired = isExpired ? 'expired ' : '';
        this.messenger.add("Found " + expired + "cached response for \"" + url + "\".");
        return isExpired ? undefined : cached.response;
    };
    RequestCacheWithMap.prototype.put = function (req, response) {
        var _this = this;
        var url = req.urlWithParams;
        this.messenger.add("Caching response from \"" + url + "\".");
        var entry = { url: url, response: response, lastRead: Date.now() };
        this.cache.set(url, entry);
        // remove expired cache entries
        var expired = Date.now() - maxAge;
        this.cache.forEach(function (entry) {
            if (entry.lastRead < expired) {
                _this.cache.delete(entry.url);
            }
        });
        this.messenger.add("Request cache size: " + this.cache.size + ".");
    };
    RequestCacheWithMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], RequestCacheWithMap);
    return RequestCacheWithMap;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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