import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})

export class MenuListComponent  {

  menulist: Menu[];
  mySearch: String;

  constructor(private menuService: MenuService) {}

	ngOnInit() {
		console.log('Menus')
		this.getAllMenus()
	}

  getAllMenus() {
    this.menuService.getMenus().then((menuObtained) => {
      this.menulist = menuObtained
      console.log(menuObtained)
		})
  }

  nameChange(change:String) {
    if (!change) {
      this.getAllMenus()
    }
    else {
      this.menuService.getMenusByName(change).then((menuObtained) => {
        this.menulist = menuObtained
        console.log(menuObtained)
      })
    }
  }
}
