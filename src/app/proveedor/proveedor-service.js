"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
require("rxjs/add/operator/toPromise");
var ProveedorService = (function () {
    function ProveedorService(http) {
        this.http = http;
        this.proveedorUrl = 'http://localhost:8080/rest/proveedores'; // URL del backend
    }
    ProveedorService.prototype.getSaldo = function (id) {
        console.log(this.proveedorUrl + "/getCreditos/" + id);
        return this.http.get(this.proveedorUrl + "/getCreditos/" + id)
            .toPromise()
            .then(function (response) {
            console.log(response);
            return response;
        })
            .catch(this.handleError);
        ;
    };
    ProveedorService.prototype.getProveedorByEmail = function (email) {
        console.log(this.proveedorUrl + "/getByEmail/" + email);
        return this.http.get(this.proveedorUrl + "/getByEmail/" + email)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ProveedorService.prototype.getProveedorByMenu = function (id) {
        return this.http.get(this.proveedorUrl + "/searchProveedor/" + id)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ProveedorService.prototype.save = function (proveedor) {
        console.log('Saving proveedor ' + JSON.stringify(proveedor));
        console.log(this.proveedorUrl + "/create");
        return this.http.post(this.proveedorUrl + "/create", JSON.stringify(proveedor)).toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
        ;
    };
    ProveedorService.prototype.update = function (proveedor) {
        console.log('edit proveedor ' + JSON.stringify(proveedor));
        console.log(this.proveedorUrl + "/edit");
        return this.http.put(this.proveedorUrl + "/edit", JSON.stringify(proveedor)).toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
        ;
    };
    ProveedorService.prototype.retirarSaldo = function (proveedor) {
        console.log('retirando saldo ' + JSON.stringify(proveedor));
        console.log(this.proveedorUrl + "/retirarCreditos");
        return this.http.post(this.proveedorUrl + "/retirarCreditos", JSON.stringify(proveedor)).toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ProveedorService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    ProveedorService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ProveedorService;
}());
ProveedorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_2.HttpClient])
], ProveedorService);
exports.ProveedorService = ProveedorService;
//# sourceMappingURL=proveedor-service.js.map