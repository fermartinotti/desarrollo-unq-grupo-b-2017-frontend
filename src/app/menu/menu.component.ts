import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Menu } from './menu'
import { Router } from '@angular/router';
@Component({
  selector: 'menu-view',
  templateUrl: 'menu-view.html',

})
export class MenuComponent {
  categorias = ['Pizza', 'Empanadas', 'Sushi', 'Pastas', 'Ensaladas', 'Parrilla'];
  menu : Menu = new Menu({});

  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       console.log(params['id'])
       if (params['id']){
         console.log('dasds')
         this.menuService.getMenu(params['id']).then((menuObtained) => {
           this.menu = menuObtained
           console.log(menuObtained)
         })
       }
    })
  }

  onSubmit(f: NgForm) {
    console.log(f)
    this.menuService.save(this.menu).then((data) =>  {
			console.log(data)
		})
  }

  createMenu(f: NgForm) {
    console.log(f)
    this.menuService.save(this.menu).then((data) =>  {
      console.log(this.router)
      this.router.navigateByUrl('/menu/'+data.json().id)
		})
  }

  updateMenu(f: NgForm) {
    console.log(f)
    this.menuService.update(this.menu).then((data) =>  {
      console.log(data)
		})
  }
}
