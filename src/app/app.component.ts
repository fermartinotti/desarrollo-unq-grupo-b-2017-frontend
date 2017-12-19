import { Component } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';
import { AuthService } from './auth0/auth0.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {

  hasClienteId : boolean = false;
  hasProveedorId : boolean = false;

	constructor(
    private clienteService: ClienteService,
    public auth: AuthService
  ) {
    auth.handleAuthentication();
  }

  ngOnInit(){
    this.consolidate()
    this.auth.onChange(()=> this.consolidate())
  }

	consolidate() {
    console.log('consolidate')
    if(localStorage.getItem('clienteId')){
        this.hasClienteId = true;
    }
    if(localStorage.getItem('proveedorId')){
        this.hasProveedorId = true;
    }
	}

}
