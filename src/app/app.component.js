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
var cliente_service_1 = require("./cliente/cliente.service");
var auth0_service_1 = require("./auth0/auth0.service");
var AppComponent = (function () {
    function AppComponent(clienteService, auth) {
        this.clienteService = clienteService;
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('clientes');
        this.clienteService.getClientes().then(function (data) {
            console.log(data);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        auth0_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map