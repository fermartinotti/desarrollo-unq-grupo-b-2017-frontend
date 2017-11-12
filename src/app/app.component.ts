import { Component } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';

@Component({
  selector: 'my-app',
  template: `<nav>
      <a routerLink="/menu" routerLinkActive="active">Menu</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent  {
	name = 'Angular';

	constructor(private clienteService: ClienteService) {}

	ngOnInit() {
		console.log('clientes')
		this.clienteService.getClientes().then((data) => {
			console.log(data)
      console.log('data')
		})
	}

}
