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
var pedido_service_1 = require("../pedido/pedido-service");
var menu_service_1 = require("../menu/menu.service");
var pedido_1 = require("../pedido/pedido");
var PedidoComponent = (function () {
    function PedidoComponent(pedidoService, route, menuService) {
        this.pedidoService = pedidoService;
        this.route = route;
        this.menuService = menuService;
        this.pedido = new pedido_1.Pedido();
        this.query = {
            nombre: '',
            categoria: '',
            localidad: '',
            pageNumber: 1,
        };
    }
    PedidoComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    PedidoComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getMenus(this.query).then(function (menuObtained) {
            _this.menulist = menuObtained;
            console.log(menuObtained);
            _this.menulist.map(function (menu) {
                _this.menuService.getProveedorByMenu(menu.id).then(function (prov) { return menu.proveedor = prov; });
            });
        });
    };
    PedidoComponent.prototype.next = function () {
        //this.query.page += 1;
        this.query.pageNumber = this.query.pageNumber + 1;
        this.getMenus();
    };
    PedidoComponent.prototype.previous = function () {
        this.query.pageNumber -= 1;
        this.getMenus();
    };
    PedidoComponent.prototype.changeParam = function (next, attrName) {
        this.query[attrName] = next;
        console.log(this.query);
    };
    PedidoComponent.prototype.comprar = function (pedidoForm) {
        console.log(pedidoForm.value);
        console.log(this.pedido.cantidad);
        this.pedidoService.buy(this.pedido).then(function (data) {
            console.log(data);
        });
    };
    return PedidoComponent;
}());
PedidoComponent = __decorate([
    core_1.Component({
        selector: 'pedido',
        templateUrl: 'pedido.html'
    }),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService, router_1.ActivatedRoute, menu_service_1.MenuService])
], PedidoComponent);
exports.PedidoComponent = PedidoComponent;
//# sourceMappingURL=pedido.component.js.map