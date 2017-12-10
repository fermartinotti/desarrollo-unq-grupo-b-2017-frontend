"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_view_component_1 = require("./main-view/main-view.component");
var menu_component_1 = require("./menu/menu.component");
var menu_list_component_1 = require("./menu/menu-list.component");
var cliente_login_component_1 = require("./cliente/cliente-login.component");
var proveedor_login_component_1 = require("./proveedor/proveedor-login.component");
var cargar_saldo_component_1 = require("./saldo/cargar-saldo.component");
var retirar_saldo_component_1 = require("./saldo/retirar-saldo.component");
var pedido_component_1 = require("./pedido/pedido.component");
var callback_component_1 = require("./callback/callback.component");
var routes = [
    { path: '', component: main_view_component_1.MainViewComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'menu/:id', component: menu_component_1.MenuComponent },
    { path: 'menu-list', component: menu_list_component_1.MenuListComponent },
    { path: 'cliente-login', component: cliente_login_component_1.ClienteLoginComponent },
    { path: 'cliente-login/:id', component: cliente_login_component_1.ClienteLoginComponent },
    { path: 'proveedor-login', component: proveedor_login_component_1.ProveedorLoginComponent },
    { path: 'proveedor-login/:id', component: proveedor_login_component_1.ProveedorLoginComponent },
    { path: 'cargar-saldo', component: cargar_saldo_component_1.SaldoComponent },
    { path: 'retirar-saldo', component: retirar_saldo_component_1.RetirarSaldoComponent },
    { path: 'pedido', component: pedido_component_1.PedidoComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map