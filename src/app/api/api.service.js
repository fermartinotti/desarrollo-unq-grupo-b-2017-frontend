"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var ApiService = (function () {
    function ApiService() {
        this.apiUrl = 'http://localhost:8080/rest/';
    }
    // constructor(private http: Http) {}
    //
    // public get(endpoint:String): Promise<Response> {
    //   	return this.http.get(this.apiUrl + endpoint ).toPromise()
    // }
    // public put(endpoint: String): Promise<Response> {
    //     return this.http.put(this.apiUrl + endpoint ).toPromise()
    // }
    // public post(endpoint: String): Promise<Response> {
    //     return this.http.post(this.apiUrl + endpoint  ).toPromise()
    // }
    ApiService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
        return headers;
    };
    ApiService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable()
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map