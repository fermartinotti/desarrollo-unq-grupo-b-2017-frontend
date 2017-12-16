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
var proveedor_service_1 = require("./proveedor-service");
var proveedor_1 = require("./proveedor");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var ProveedorLoginComponent = (function () {
    function ProveedorLoginComponent(proveedorService, route, router) {
        this.proveedorService = proveedorService;
        this.route = route;
        this.router = router;
        this.proveedor = new proveedor_1.Proveedor();
    }
    ProveedorLoginComponent.prototype.create = function (f) {
        var _this = this;
        console.log(f);
        this.proveedorService.save(this.proveedor).then(function (data) {
            console.log(_this.router);
            console.log(data);
            console.log(data.json().id);
            localStorage.setItem('proveedorId', String(data.json().id));
            //console.log(localStorage.getItem('proveedorId', String(data.json().id)))
            _this.router.navigateByUrl('/proveedor-login/' + data.json().id);
        });
    };
    ProveedorLoginComponent.prototype.update = function (f) {
        console.log(f);
        console.log(localStorage.getItem('proveedorId'), this.proveedor.creditos);
        this.proveedor.id = Number(localStorage.getItem('proveedorId'));
        this.proveedorService.update(this.proveedor).then(function (data) {
            console.log(data);
        });
    };
    return ProveedorLoginComponent;
}());
ProveedorLoginComponent = __decorate([
    core_1.Component({
        selector: 'proveedor-login',
        templateUrl: 'proveedor-login.html',
    }),
    __metadata("design:paramtypes", [proveedor_service_1.ProveedorService, router_1.ActivatedRoute, router_2.Router])
], ProveedorLoginComponent);
exports.ProveedorLoginComponent = ProveedorLoginComponent;
//# sourceMappingURL=proveedor-login.component.js.map