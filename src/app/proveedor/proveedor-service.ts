import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Proveedor } from './proveedor';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProveedorService{
	private proveedorUrl = 'http://localhost:8080/rest/proveedores';  // URL del backend

	constructor(private http: HttpClient) {}

	getSaldo(id:any): Promise<Response> { //metodo para traer saldo de un proveedor
		console.log(`${this.proveedorUrl}/getCreditos/`+id)
		return this.http.get(`${this.proveedorUrl}/getCreditos/`+id)
			.toPromise()
			.then(response =>{
				console.log(response)
				return response
			})
			.catch(this.handleError);;
	}

	getProveedorByEmail(email:String): Promise<Proveedor> {
		console.log(`${this.proveedorUrl}/getByEmail/`+ email);
		return this.http.get(`${this.proveedorUrl}/getByEmail/`+ email)
							 .toPromise()
							 .then(response => response as Proveedor)
							 .catch(this.handleError);
	}

	getProveedorByMenu(id:any): Promise<Proveedor> {
		return this.http.get(`${this.proveedorUrl}/searchProveedor/`+ id)
							 .toPromise()
							 .then(response => response as Proveedor)
							 .catch(this.handleError);
	}

save(proveedor: Proveedor): Promise<Response> { //metodo para guardar un cliente
	console.log('Saving proveedor ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/create`)
	return this.http.post(`${this.proveedorUrl}/create`, JSON.stringify(proveedor)).toPromise()
		.then(response => response)
		.catch(this.handleError);;
  }

update(proveedor: Proveedor): Promise<Response> { //metodo para actualizar un proveedor
	console.log('edit proveedor ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/edit`)
	return this.http.put(`${this.proveedorUrl}/edit`, JSON.stringify(proveedor)).toPromise()
		.then(response => response)
		.catch(this.handleError);;
  }

retirarSaldo(proveedor: Proveedor): Promise<Response> { //metodo para retirar saldo de un proveedor
	console.log('retirando saldo ' + JSON.stringify(proveedor));
	console.log(`${this.proveedorUrl}/retirarCreditos`)
	return this.http.post(`${this.proveedorUrl}/retirarCreditos`, JSON.stringify(proveedor)).toPromise()
		.then(response => response)
		.catch(this.handleError);
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
