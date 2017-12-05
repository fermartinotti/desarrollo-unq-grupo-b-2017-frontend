"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var menu_1 = require("../menu/menu");
var PedidoComponent = (function () {
    function PedidoComponent() {
        this.menu = new menu_1.Menu({});
        //constructor(private pedidoService: PedidoService, private route: ActivatedRoute, private router: Router) {}
        //constructor(private menuService: MenuService, private route: ActivatedRoute) {}
        //
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
        // onSubmit(f: NgForm) {
        //   console.log(f)
        //   this.menuService.save(this.menu).then((data) =>  {
        // 		console.log(data)
        //     console.log('data')
        // 	})
        // }
    }
    return PedidoComponent;
}());
PedidoComponent = __decorate([
    core_1.Component({
        selector: 'pedido',
        templateUrl: 'pedido.html'
    })
], PedidoComponent);
exports.PedidoComponent = PedidoComponent;
//# sourceMappingURL=pedido.component.js.map