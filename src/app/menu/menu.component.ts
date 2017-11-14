import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Menu } from './menu'

@Component({
  selector: 'menu-view',
  templateUrl: 'menu-view.html',

})
export class MenuComponent {
  categorias = ['Pizza', 'Pastas', 'Ensaladas', 'Parrilla'];
  menu : Menu = {}

  constructor(private menuService: MenuService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       console.log(params['id'])
       if (params['id']){
         this.menuService.getMenu(params['id']).then((menuObtained) => {
           this.menu = menuObtained
           console.log(menuObtained)
         }
       }
    });
  }

  onSubmit(f: NgForm) {
    console.log(f)
    this.menuService.save(f.value).then((data) =>  {
			console.log(data)
      console.log('data')
		})
  }
}
