import { Component }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Menu } from '../menu/menu';
import { PedidoService }  from '../pedido/pedido-service';
import { MenuService } from '../menu/menu.service';
import { MenuServiceQuery } from '../menu/menu.service';
import { Router } from '@angular/router';
import { Pedido }  from '../pedido/pedido';

@Component({
  selector: 'pedido',
  templateUrl: 'pedido.html'
})
export class PedidoComponent {
  pedido : Pedido = new Pedido();
  menulist: Menu[];
  query: MenuServiceQuery;

  constructor(private pedidoService: PedidoService, private route: ActivatedRoute, private menuService: MenuService) {
    this.query = {
      nombre:    '',
      categoria: '',
      localidad: '',
      pageNumber: 1,
    }
  }

  ngOnInit() {
		this.getMenus()
	}

  getMenus() {
    this.menuService.getMenus(this.query).then((menuObtained) => {
      this.menulist = menuObtained
      console.log(menuObtained)
      this.menulist.map((menu) => { //seteo el proveedor de cada menu
          this.menuService.getProveedorByMenu(menu.id).then((prov) => menu.proveedor = prov)
      })
		})
  }

  next(){
    //this.query.page += 1;
    this.query.pageNumber = this.query.pageNumber + 1;
    this.getMenus();
  }

  previous(){
    this.query.pageNumber -= 1;
    this.getMenus();
  }

  changeParam(next: string, attrName: string) {
    this.query[attrName] = next;
    console.log(this.query);
  }

  comprar(pedidoForm: NgForm) {
    console.log(pedidoForm.value)
    console.log(this.pedido.cantidad)
    this.pedidoService.buy(this.pedido).then((data) =>  {
			console.log(data)
		})
  }


}
