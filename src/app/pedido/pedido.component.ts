import { Component }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Menu } from '../menu/menu';
import { PedidoService }  from '../pedido/pedido-service';
import { Router } from '@angular/router';

@Component({
  selector: 'pedido',
  templateUrl: 'pedido.html'
})
export class PedidoComponent{

  menu : Menu = new Menu({});

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
