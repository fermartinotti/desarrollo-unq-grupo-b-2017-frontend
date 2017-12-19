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
var menu_1 = require("../menu/menu");
var proveedor_service_1 = require("../proveedor/proveedor-service");
var cliente_service_1 = require("../cliente/cliente.service");
var http_2 = require("@angular/common/http");
require("rxjs/add/operator/toPromise");
var PedidoService = (function () {
    function PedidoService(http, clienteService, proveedorService) {
        this.http = http;
        this.clienteService = clienteService;
        this.proveedorService = proveedorService;
        this.pedidoUrl = 'http://localhost:8080/rest/menus';
    }
    PedidoService.prototype.buy = function (pedido) {
        var _this = this;
        console.log(pedido);
        return new Promise(function (resolve, reject) {
            _this.clienteService.getCliente(localStorage.getItem('clienteId')).then(function (clienteRest) {
                _this.proveedorService.getProveedorByMenu(pedido.menu.id).then(function (proveedorRest) {
                    pedido.cliente = clienteRest;
                    pedido.proveedor = proveedorRest;
                    pedido.menu = menu_1.Menu.serialize(pedido.menu);
                    _this.http.post(_this.pedidoUrl + "/comprar/" + pedido.cantidad, pedido)
                        .toPromise()
                        .then(function (response) { return resolve(response); })
                        .catch(function (error) { return reject(_this.handleError); });
                });
            });
        });
    };
    PedidoService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        return headers;
    };
    PedidoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return PedidoService;
}());
PedidoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_2.HttpClient, cliente_service_1.ClienteService, proveedor_service_1.ProveedorService])
], PedidoService);
exports.PedidoService = PedidoService;
//# sourceMappingURL=pedido-service.js.map