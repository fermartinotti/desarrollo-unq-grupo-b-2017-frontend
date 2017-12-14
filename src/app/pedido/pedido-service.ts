import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pedido } from './pedido';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PedidoService{
	private pedidoUrl = 'http://localhost:8080/rest/comprar';  // URL del backend

	constructor(private http: HttpClient) {}

}
