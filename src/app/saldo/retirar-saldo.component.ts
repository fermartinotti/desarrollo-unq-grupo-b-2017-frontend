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
  saldo : number = 0;
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

  ngOnInit(){
    // this.proveedorService.getSaldo(this.proveedor.id).then((data) =>  {
    //   console.log(data)
    //   this.proveedor.creditos = parseFloat(data.json().creditos)
		// })
    this.proveedorService.getSaldo(localStorage.getItem('proveedorId')).then((data) =>  {
      console.log(data)
      this.proveedor.creditos = parseFloat(data.toString())
		})
  }

  retirarSaldo(f: NgForm) {
    this.proveedorService.retirarSaldo(this.proveedor).then((data) =>  {
			console.log(data)
		})
  }

}
