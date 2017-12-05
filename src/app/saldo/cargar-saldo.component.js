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
var router_1 = require("@angular/router");
var cliente_service_1 = require("../cliente/cliente.service");
var cliente_1 = require("../cliente/cliente");
var SaldoComponent = (function () {
    function SaldoComponent(clienteService, route) {
        this.clienteService = clienteService;
        this.route = route;
        this.cliente = new cliente_1.Cliente();
        this.recarga = 0;
    }
    SaldoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('clienteId'), this.cliente.creditos);
        this.cliente.id = Number(localStorage.getItem('clienteId'));
        this.clienteService.getSaldo(this.cliente.id).then(function (data) {
            _this.cliente.creditos = parseFloat(data.text());
        });
    };
    SaldoComponent.prototype.guardarSaldo = function (f) {
        var _this = this;
        console.log(f);
        console.log(localStorage.getItem('clienteId'), this.cliente.creditos);
        this.cliente.id = Number(localStorage.getItem('clienteId'));
        this.clienteService.saveSaldo(this.cliente).then(function (data) {
            console.log(data);
            _this.cliente.creditos = _this.cliente.creditos + _this.recarga;
        });
    };
    return SaldoComponent;
}());
SaldoComponent = __decorate([
    core_1.Component({
        selector: 'saldo',
        templateUrl: 'saldo.html',
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService, router_1.ActivatedRoute])
], SaldoComponent);
exports.SaldoComponent = SaldoComponent;
//# sourceMappingURL=cargar-saldo.component.js.map