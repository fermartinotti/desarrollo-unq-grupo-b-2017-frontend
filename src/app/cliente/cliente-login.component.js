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
var cliente_service_1 = require("./cliente.service");
var router_1 = require("@angular/router");
var cliente_1 = require("./cliente");
var router_2 = require("@angular/router");
var ClienteLoginComponent = (function () {
    function ClienteLoginComponent(clienteService, route, router) {
        this.clienteService = clienteService;
        this.route = route;
        this.router = router;
        this.cliente = new cliente_1.Cliente();
    }
    ClienteLoginComponent.prototype.create = function (f) {
        var _this = this;
        console.log(f);
        this.clienteService.save(this.cliente).then(function (data) {
            console.log(_this.router);
            console.log(data);
            console.log(data.json());
            console.log(data.json().id);
            //window.localStorage.setItem('clienteId', String(data.json().id))
            localStorage.setItem('clienteId', String(data.json().id));
            //console.log(localStorage.getItem('clienteId', String(data.json().id)))
            _this.router.navigateByUrl('/cliente-login/' + data.json().id);
        });
    };
    ClienteLoginComponent.prototype.update = function (f) {
        console.log(f);
        console.log(localStorage.getItem('clienteId'), this.cliente.creditos + "22");
        this.cliente.id = Number(localStorage.getItem('clienteId'));
        this.clienteService.update(this.cliente).then(function (data) {
            console.log(data);
        });
    };
    return ClienteLoginComponent;
}());
ClienteLoginComponent = __decorate([
    core_1.Component({
        selector: 'cliente-login-view',
        templateUrl: 'cliente-login.html',
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService, router_1.ActivatedRoute, router_2.Router])
], ClienteLoginComponent);
exports.ClienteLoginComponent = ClienteLoginComponent;
// onSubmit(f: NgForm) {
//   console.log(f)
//   this.menuService.save(f.value).then((data) =>  {
//     console.log(data)
//     console.log('data')
//   })
//# sourceMappingURL=cliente-login.component.js.map