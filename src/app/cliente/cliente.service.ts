import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService{
	private clientesUrl = 'http://localhost:8080/rest/clientes/getAll';  // URL del backend

	constructor(private http: Http) {}

getClientes(): Promise<Cliente[]> { //metodo para traer todos los clientes
  return this.http.get(this.clientesUrl)
             .toPromise()
             .then(response => response.json() as Cliente[])
             .catch(this.handleError);
}

save(cliente: Cliente): Observable<Response> { //metodo para guardar un cliente
    console.log('Saving person ' + JSON.stringify(cliente));
    return this.http.put(`${this.clientesUrl}/Person`, JSON.stringify(cliente), {headers: this.getHeaders()});
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
