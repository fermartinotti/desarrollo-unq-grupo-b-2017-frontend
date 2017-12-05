import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Proveedor } from './proveedor';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProveedorService{
	private proveedorUrl = 'http://localhost:8080/rest/proveedores';  // URL del backend

	constructor(private http: Http) {}

// getClientes(): Promise<Cliente[]> { //metodo para traer todos los clientes
//   return this.http.get(`${this.clienteUrl}/getAll`)
//              .toPromise()
//              .then(response => response.json() as Cliente[])
//              .catch(this.handleError);
// }
//
save(proveedor: Proveedor): Promise<Response> { //metodo para guardar un cliente
	console.log('Saving proveedor ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/create`)
	return this.http.post(`${this.proveedorUrl}/create`, JSON.stringify(proveedor), {headers: this.getHeaders()}).toPromise()
		.then(response => response)
		.catch(this.handleError);;
  }

update(proveedor: Proveedor): Promise<Response> { //metodo para actualizar un proveedor
	console.log('edit proveedor ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/edit`)
	return this.http.put(`${this.proveedorUrl}/edit`, JSON.stringify(proveedor), {headers: this.getHeaders()}).toPromise()
		.then(response => response)
		.catch(this.handleError);;
  }


//cambiar cuando sepa como traerme el proveedor registrado
retirarSaldo(proveedor: Proveedor): Promise<Response> { //metodo para guardar un cliente
	console.log('Saving proveedor ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/create`)
	return this.http.post(`${this.proveedorUrl}/create`, JSON.stringify(proveedor), {headers: this.getHeaders()}).toPromise()
		.then(response => response)
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
