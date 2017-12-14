import { Component } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';
import { AuthService } from './auth0/auth0.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {

	constructor(
    private clienteService: ClienteService,
    public auth: AuthService
  ) {
    auth.handleAuthentication();
  }

	ngOnInit() {
		console.log('clientes')
		this.clienteService.getClientes().then((data) => {
			console.log(data)
		})
	}

}
