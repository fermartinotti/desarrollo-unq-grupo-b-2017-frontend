import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from './cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'cliente-login-view',
  templateUrl: 'cliente-login.html',

})
export class ClienteLoginComponent {
  cliente : Cliente = new Cliente();
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {}


create(f:NgForm){
  console.log(f)
  this.cliente.email = localStorage.getItem('email')
  this.clienteService.save(this.cliente).then((response) => {
    //window.localStorage.setItem('clienteId', String(data.json().id))
    localStorage.setItem('clienteId', String(response.json().id) )
    //console.log(localStorage.getItem('clienteId', String(data.json().id)))
    this.router.navigateByUrl('/cliente-login/'+response)
  })
}


update(f:NgForm){
  console.log(f)
  console.log(localStorage.getItem('clienteId'),this.cliente.creditos + "22")
  this.cliente.id = Number(localStorage.getItem('clienteId'))
  this.clienteService.update(this.cliente).then((data) => {
    console.log(data)
  })
}

}
