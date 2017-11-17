import { Component } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent  {

	constructor(private clienteService: ClienteService) {}

	ngOnInit() {
		console.log('clientes')
		this.clienteService.getClientes().then((data) => {
			console.log(data)
		})
	}

}
