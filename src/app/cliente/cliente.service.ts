import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './cliente';
import { ApiService } from '../api/api.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService {
	private clienteUrl = 'clientes';

	constructor(private http: Http, private apiService: ApiService ) {}

	getCliente(id:any): Promise<Cliente> { //metodo para traer un cliente
		return this.apiService.get(`${this.clienteUrl}/getById`+id)
		.then((response: Response) => response.json() as Cliente)
		.catch(this.handleError)
	}

	getClientes(): Promise<Cliente[]> { //metodo para traer todos los clientes
		return this.apiService.get(`${this.clienteUrl}/getAll`)
		.then((response: Response) => response.json() as Cliente[])
		.catch(this.handleError);
	}

	save(cliente: Cliente): Promise<Response> {
		console.log('Saving cliente ' + JSON.stringify(cliente));
		console.log(`${this.clienteUrl}/create`)
		return this.apiService.post(`${this.clienteUrl}/create`)
		.then((response: Response) => response)
		.catch(this.handleError);
	}

	update(cliente: Cliente): Promise<Response> { //metodo para guardar un cliente
		console.log('edit cliente ' + JSON.stringify(cliente));
		console.log(`${this.clienteUrl}/edit`)
		return this.apiService.put(`${this.clienteUrl}/edit`)
		.then((response: Response) => response)
		.catch(this.handleError);;
	}

	getSaldo(id:any): Promise<Response> { //metodo para traer saldo de un cliente
		console.log(`${this.clienteUrl}/getCreditos`)
		return this.apiService.get(`${this.clienteUrl}/getCreditos/`+id)
		.then((response: Response) => response)
		.catch(this.handleError);
	}

	saveSaldo(cliente: Cliente): Promise<Response> { //metodo para cargar saldo a un cliente
		console.log(`${this.clienteUrl}/cargarCreditos`)
		return this.apiService.put(`${this.clienteUrl}/cargarCreditos`)
		.then((response: Response) => response)
		.catch(this.handleError);;
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
