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
require("rxjs/add/operator/toPromise");
var ProveedorService = (function () {
    function ProveedorService(http) {
        this.http = http;
        this.proveedorUrl = 'http://localhost:8080/rest/proveedores'; // URL del backend
    }
    // getClientes(): Promise<Cliente[]> { //metodo para traer todos los clientes
    //   return this.http.get(`${this.clienteUrl}/getAll`)
    //              .toPromise()
    //              .then(response => response.json() as Cliente[])
    //              .catch(this.handleError);
    // }
    //
    ProveedorService.prototype.save = function (proveedor) {
        console.log('Saving proveedor ' + JSON.stringify(proveedor));
        console.log(this.proveedorUrl + "/create");
        return this.http.post(this.proveedorUrl + "/create", JSON.stringify(proveedor), { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        ;
    };
    //cambiar cuando sepa como traerme el proveedor registrado
    ProveedorService.prototype.retirarSaldo = function (proveedor) {
        console.log('Saving proveedor ' + JSON.stringify(proveedor));
        console.log(this.proveedorUrl + "/create");
        return this.http.post(this.proveedorUrl + "/create", JSON.stringify(proveedor), { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        ;
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
    __metadata("design:paramtypes", [http_1.Http])
], ProveedorService);
exports.ProveedorService = ProveedorService;
//# sourceMappingURL=proveedor-service.js.map