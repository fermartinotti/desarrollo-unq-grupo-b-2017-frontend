import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService }  from '../cliente/cliente.service';


@Component({
  selector: 'saldo',
  templateUrl: 'saldo.html',

})
export class SaldoComponent  {

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

  guardarSaldo(f: NgForm) {
    console.log(f)
    this.clienteService.saveSaldo(f.value).then((data) =>  {
			console.log(data)
		})
  }

}
