import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'menu-view',
  templateUrl: 'menu-view.html',

})
export class MenuComponent  {

  constructor(private menuService: MenuService) {}

  onSubmit(f: NgForm) {
    console.log(f)
    this.menuService.save(f.value).then((data) =>  {
			console.log(data)
      console.log('data')
		})
  }
}
