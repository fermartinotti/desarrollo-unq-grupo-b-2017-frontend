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
var menu_service_1 = require("./menu.service");
var router_1 = require("@angular/router");
var menu_1 = require("./menu");
var MenuComponent = (function () {
    function MenuComponent(menuService, route) {
        this.menuService = menuService;
        this.route = route;
        this.categorias = ['Pizza', 'Pastas', 'Ensaladas', 'Parrilla'];
        this.menu = new menu_1.Menu({});
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params['id']);
            if (params['id']) {
                _this.menuService.getMenu(params['id']).then(function (menuObtained) {
                    _this.menu = menuObtained;
                    console.log(menuObtained);
                });
            }
        });
    };
    MenuComponent.prototype.onSubmit = function (f) {
        console.log(f);
        this.menuService.save(this.menu).then(function (data) {
            console.log(data);
            console.log('data');
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu-view',
        templateUrl: 'menu-view.html',
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService, router_1.ActivatedRoute])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map