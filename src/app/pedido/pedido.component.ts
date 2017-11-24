import { Component }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'pedido',
  templateUrl: 'pedido.html'
})
export class PedidoComponent{

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
