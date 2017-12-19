import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pedido } from './pedido';
import { Menu } from '../menu/menu';
import { ProveedorService } from '../proveedor/proveedor-service';
import { ClienteService } from '../cliente/cliente.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PedidoService{

	constructor(private http: HttpClient, private clienteService: ClienteService, private proveedorService: ProveedorService) {}
	private pedidoUrl = 'http://localhost:8080/rest/menus';

	buy(pedido: Pedido): Promise<Response> {
		console.log(pedido)
		return new Promise((resolve, reject) => {
			this.clienteService.getCliente(localStorage.getItem('clienteId')).then(clienteRest => {
				this.proveedorService.getProveedorByMenu(pedido.menu.id).then(proveedorRest => {
					pedido.cliente = clienteRest
					pedido.proveedor = proveedorRest
					pedido.menu = Menu.serialize(pedido.menu)
					this.http.post(`${this.pedidoUrl}/comprar/`+ pedido.cantidad, pedido)
						.toPromise()
						.then(response => resolve(response))
						.catch(error => reject(this.handleError));
			})})
		});

	}

	private getHeaders() {
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
		return headers;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
