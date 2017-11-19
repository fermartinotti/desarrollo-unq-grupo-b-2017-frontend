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
var ProveedorComponent = (function () {
    function ProveedorComponent(proveedorService, route) {
        this.proveedorService = proveedorService;
        this.route = route;
    }
    // ngOnInit() {
    //    this.route.params.subscribe(params => {
    //      console.log(params['id'])
    //      if (params['id']){
    //        this.menuService.getMenu(params['id']).then((menuObtained) => {
    //          this.menu = menuObtained
    //          console.log(menuObtained)
    //        })
    //      }
    //   })
    // }
    //
    ProveedorComponent.prototype.guardarProveedor = function (f) {
        console.log(f);
        this.proveedorService.save(f.value).then(function (data) {
            console.log(data);
            console.log('data');
        });
    };
    return ProveedorComponent;
}());
ProveedorComponent = __decorate([
    core_1.Component({
        selector: 'proveedor-login',
        templateUrl: 'proveedor-login.html',
    }),
    __metadata("design:paramtypes", [Object, router_1.ActivatedRoute])
], ProveedorComponent);
exports.ProveedorComponent = ProveedorComponent;
//# sourceMappingURL=proveedor.component.js.map