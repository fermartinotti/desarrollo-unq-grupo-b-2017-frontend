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
var proveedor_service_1 = require("../proveedor/proveedor-service");
var proveedor_1 = require("../proveedor/proveedor");
var RetirarSaldoComponent = (function () {
    function RetirarSaldoComponent(proveedorService, route) {
        this.proveedorService = proveedorService;
        this.route = route;
        this.proveedor = new proveedor_1.Proveedor();
        this.saldo = 0;
    }
    RetirarSaldoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.proveedorService.getSaldo(this.proveedor.id).then((data) =>  {
        //   console.log(data)
        //   this.proveedor.creditos = parseFloat(data.json().creditos)
        // })
        this.proveedorService.getSaldo(localStorage.getItem('proveedorId')).then(function (data) {
            console.log(data);
            _this.proveedor.creditos = parseFloat(data.toString());
        });
    };
    RetirarSaldoComponent.prototype.retirarSaldo = function (f) {
        this.proveedorService.retirarSaldo(this.proveedor).then(function (data) {
            console.log(data);
        });
    };
    return RetirarSaldoComponent;
}());
RetirarSaldoComponent = __decorate([
    core_1.Component({
        selector: 'saldo',
        templateUrl: 'retirar-saldo.html',
    }),
    __metadata("design:paramtypes", [proveedor_service_1.ProveedorService, router_1.ActivatedRoute])
], RetirarSaldoComponent);
exports.RetirarSaldoComponent = RetirarSaldoComponent;
//# sourceMappingURL=retirar-saldo.component.js.map