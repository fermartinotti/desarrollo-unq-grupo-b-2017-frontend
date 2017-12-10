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
var api_service_1 = require("../api/api.service");
require("rxjs/add/operator/toPromise");
var ClienteService = (function () {
    function ClienteService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.clienteUrl = 'clientes';
    }
    ClienteService.prototype.getCliente = function (id) {
        return this.apiService.get(this.clienteUrl + "/getById" + id)
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClienteService.prototype.getClientes = function () {
        return this.apiService.get(this.clienteUrl + "/getAll")
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClienteService.prototype.save = function (cliente) {
        console.log('Saving cliente ' + JSON.stringify(cliente));
        console.log(this.clienteUrl + "/create");
        return this.apiService.post(this.clienteUrl + "/create")
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ClienteService.prototype.update = function (cliente) {
        console.log('edit cliente ' + JSON.stringify(cliente));
        console.log(this.clienteUrl + "/edit");
        return this.apiService.put(this.clienteUrl + "/edit")
            .then(function (response) { return response; })
            .catch(this.handleError);
        ;
    };
    ClienteService.prototype.getSaldo = function (id) {
        console.log(this.clienteUrl + "/getCreditos");
        return this.apiService.get(this.clienteUrl + "/getCreditos/" + id)
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ClienteService.prototype.saveSaldo = function (cliente) {
        console.log(this.clienteUrl + "/cargarCreditos");
        return this.apiService.put(this.clienteUrl + "/cargarCreditos")
            .then(function (response) { return response; })
            .catch(this.handleError);
        ;
    };
    ClienteService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        return headers;
    };
    ClienteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ClienteService;
}());
ClienteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, api_service_1.ApiService])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map