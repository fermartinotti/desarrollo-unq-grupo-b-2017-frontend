import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MenuService } from './menu.service';
import { MenuServiceQuery } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuListComponent {
  menulist: Menu[];
  query: MenuServiceQuery;
  constructor(private menuService: MenuService) {
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
}
