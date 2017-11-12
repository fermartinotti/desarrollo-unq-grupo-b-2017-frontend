import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {
	private menusUrl = 'http://localhost:8080/rest/menus';  // URL del backend

	constructor(private http: Http) {}

	save(menu: Menu): Promise<Response> {
	    console.log('Saving menu ' + JSON.stringify(menu));
			console.log(`${this.menusUrl}/create`)
	    return this.http.post(`${this.menusUrl}/create`, JSON.stringify(menu), {headers: this.getHeaders()}).toPromise()
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
