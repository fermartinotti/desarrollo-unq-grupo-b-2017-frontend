import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProveedorService }  from '../proveedor/proveedor-service';

@Component({
  selector: 'saldo',
  templateUrl: 'retirar-saldo.html',
})
export class RetirarSaldoComponent  {

  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

  retirarSaldo(f: NgForm) {
    console.log(f)
    this.proveedorService.retirarSaldo(f.value).then((data) =>  {
			console.log(data)
		})
  }

}
