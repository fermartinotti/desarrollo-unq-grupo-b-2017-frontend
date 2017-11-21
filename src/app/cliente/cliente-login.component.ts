import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from './cliente'

@Component({
  selector: 'cliente-login-view',
  templateUrl: 'cliente-login.html',

})
export class ClienteLoginComponent {

  cliente : Cliente = new Cliente();
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

editarCliente(f:NgForm){
  console.log(f)
  this.clienteService.update(this.cliente).then((data) => {
    console.log(data)
  })
}

}

// onSubmit(f: NgForm) {
//   console.log(f)
//   this.menuService.save(f.value).then((data) =>  {
//     console.log(data)
//     console.log('data')
//   })
