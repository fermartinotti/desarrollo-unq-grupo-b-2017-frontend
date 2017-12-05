import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProveedorService }  from '../proveedor/proveedor-service';
import { Proveedor }  from '../proveedor/proveedor';

@Component({
  selector: 'saldo',
  templateUrl: 'retirar-saldo.html',
})
export class RetirarSaldoComponent  {
  proveedor : Proveedor = new Proveedor();
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

  retirarSaldo(f: NgForm) {
    console.log(f)
    console.log(localStorage.getItem('proveedorId'),this.proveedor.creditos)
    this.proveedor.id = Number(localStorage.getItem('proveedorId'))
    this.proveedorService.retirarSaldo(f.value).then((data) =>  {
			console.log(data)
		})
  }

}
