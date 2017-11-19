import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorService } from './proveedor-service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'proveedor-login',
  templateUrl: 'proveedor-login.html',

})
export class ProveedorLoginComponent {

  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

  guardarProveedor(f: NgForm) {
    console.log(f)
    this.proveedorService.save(f.value).then((data) =>  {
			console.log(data)
		})
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

}
