import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService }  from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'saldo',
  templateUrl: 'saldo.html',

})
export class SaldoComponent {
  cliente : Cliente = new Cliente();
  recarga : number = 0;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}
  
  ngOnInit(){
    console.log(localStorage.getItem('clienteId'),this.cliente.creditos)
    this.cliente.id = Number(localStorage.getItem('clienteId'))
    this.clienteService.getSaldo(this.cliente.id).then((data) =>  {
      this.cliente.creditos = parseFloat(data.text())
		})
  }

  guardarSaldo(f: NgForm){
    console.log(f)
    console.log(localStorage.getItem('clienteId'),this.cliente.creditos)
    this.cliente.id = Number(localStorage.getItem('clienteId'))
    this.clienteService.saveSaldo(this.cliente).then((data) =>  {
			console.log(data)
      this.cliente.creditos = this.cliente.creditos + this.recarga
		})
  }
}
