"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var proveedor_login_component_1 = require("./proveedor/proveedor-login.component");
var menu_list_component_1 = require("./menu/menu-list.component");
var main_view_component_1 = require("./main-view/main-view.component");
var cargar_saldo_component_1 = require("./saldo/cargar-saldo.component");
var pedido_component_1 = require("./pedido/pedido.component");
var pedido_service_1 = require("./pedido/pedido-service");
var retirar_saldo_component_1 = require("./saldo/retirar-saldo.component");
var callback_component_1 = require("./callback/callback.component");
var cliente_login_component_1 = require("./cliente/cliente-login.component");
var cliente_service_1 = require("./cliente/cliente.service");
var menu_service_1 = require("./menu/menu.service");
var proveedor_service_1 = require("./proveedor/proveedor-service");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var auth0_service_1 = require("./auth0/auth0.service");
var api_service_1 = require("./api/api.service");
var http_1 = require("@angular/common/http");
var header_config_1 = require("./header-config");
var http_2 = require("@angular/common/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_2.HttpClientModule
        ],
        declarations: [
            app_component_1.AppComponent,
            menu_component_1.MenuComponent,
            main_view_component_1.MainViewComponent,
            menu_list_component_1.MenuListComponent,
            cliente_login_component_1.ClienteLoginComponent,
            proveedor_login_component_1.ProveedorLoginComponent,
            cargar_saldo_component_1.SaldoComponent,
            retirar_saldo_component_1.RetirarSaldoComponent,
            pedido_component_1.PedidoComponent,
            callback_component_1.CallbackComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: http_1.HTTP_INTERCEPTORS,
                useClass: header_config_1.SetHeaderInterceptor,
                multi: true },
            cliente_service_1.ClienteService,
            menu_service_1.MenuService,
            proveedor_service_1.ProveedorService,
            pedido_service_1.PedidoService,
            auth0_service_1.AuthService,
            api_service_1.ApiService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map