import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorService } from './proveedor-service';
import { Proveedor } from './proveedor';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'proveedor-login',
  templateUrl: 'proveedor-login.html',

})
export class ProveedorLoginComponent {
  proveedor : Proveedor = new Proveedor();
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute, private router: Router) {}

  create(f:NgForm) {
    console.log(f)
    this.proveedorService.save(this.proveedor).then((data) =>  {
      console.log(this.router)
      console.log(data)
      // console.log(data.json())
      console.log(data.json().id)
      //window.localStorage.setItem('clienteId', String(data.json().id))
      localStorage.setItem('proveedorId', String(data.json().id))
      //console.log(localStorage.getItem('proveedorId', String(data.json().id)))
      this.router.navigateByUrl('/proveedor-login/'+data.json().id)
		})
  }

  update(f:NgForm){
    console.log(f)
    console.log(localStorage.getItem('proveedorId'),this.proveedor.creditos)
    this.proveedor.id = Number(localStorage.getItem('proveedorId'))
    this.proveedorService.update(this.proveedor).then((data) => {
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
