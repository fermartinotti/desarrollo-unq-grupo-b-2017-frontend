import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './cliente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService{
	private clienteUrl = 'http://localhost:8080/rest/clientes';  // URL del backend

	constructor(private http: Http) {}

getClientes(): Promise<Cliente[]> { //metodo para traer todos los clientes
  return this.http.get(`${this.clienteUrl}/getAll`)
             .toPromise()
             .then(response => response.json() as Cliente[])
             .catch(this.handleError);
}

save(cliente: Cliente): Promise<Response> { //metodo para guardar un cliente
	console.log('Saving cliente ' + JSON.stringify(cliente));
	console.log(`${this.clienteUrl}/create`)
	return this.http.post(`${this.clienteUrl}/create`, JSON.stringify(cliente), {headers: this.getHeaders()}).toPromise()
		.then(response => response.json())
		.catch(this.handleError);;
  }

private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
}
