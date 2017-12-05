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
var MenuListComponent = (function () {
    function MenuListComponent(menuService) {
        this.menuService = menuService;
        this.query = {
            nombre: '',
            categoria: '',
            localidad: '',
            pageNumber: 1,
        };
    }
    MenuListComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenuListComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getMenus(this.query).then(function (menuObtained) {
            _this.menulist = menuObtained;
            console.log(menuObtained);
        });
    };
    MenuListComponent.prototype.next = function () {
        //this.query.page += 1;
        this.query.pageNumber = this.query.pageNumber + 1;
        this.getMenus();
    };
    MenuListComponent.prototype.previous = function () {
        this.query.pageNumber -= 1;
        this.getMenus();
    };
    MenuListComponent.prototype.changeParam = function (next, attrName) {
        this.query[attrName] = next;
        console.log(this.query);
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    core_1.Component({
        selector: 'menu-list',
        templateUrl: 'menu-list.html'
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuListComponent);
exports.MenuListComponent = MenuListComponent;
//# sourceMappingURL=menu-list.component.js.map