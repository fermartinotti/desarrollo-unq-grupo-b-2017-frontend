import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from './menu'
import 'rxjs/add/operator/toPromise';

export class MenuServiceQuery {
  nombre:    String;
  categoria: String;
  localidad: String;
  page:      number;
}

@Injectable()
export class MenuService {
	private menusUrl = 'http://localhost:8080/rest/menus';  // URL del backend

	constructor(private http: Http) {}

  // getMenus(query: MenuServiceQuery): Promise<Menu[]> { //metodo para traer todos los Menus
  //   return this.http.get(`${this.menusUrl}/getAll`, {search: query})
  //              .toPromise()
  //              .then(response => response.json() as Menu[])
  //              .catch(this.handleError);
  // }

	getMenus(query: MenuServiceQuery): Promise<Menu[]> { //metodo para traer todos los Menus
    console.log(`${this.menusUrl}/getByNombre/` + query.nombre + '/' + query.page)
	  return this.http.get(`${this.menusUrl}/getByNombre/` + query.nombre + '/' + query.page)
	             .toPromise()
	             .then(response => response.json() as Menu[])
	             .catch(this.handleError);
	}

	getMenusByName(nombre:String): Promise<Menu[]> { //metodo para traer todos los Menus
	  return this.http.get(`${this.menusUrl}/getByNombre/`+nombre+'/1')
	             .toPromise()
	             .then(response => response.json() as Menu[])
	             .catch(this.handleError);
	}

	getMenu(id:any): Promise<Menu> { //metodo para traer un Menu
	  return this.http.get(`${this.menusUrl}/`+id )
	             .toPromise()
	             .then(response => response.json() as Menu)
	             .catch(this.handleError);
	}

	save(menu: Menu): Promise<Response> {
	    console.log('Saving menu ' + JSON.stringify(menu));
			console.log(`${this.menusUrl}/create`)
	    return this.http.post(`${this.menusUrl}/create`, JSON.stringify(menu), {headers: this.getHeaders()}).toPromise()
				.then(response => response.json())
				.catch(this.handleError);;
	}

	update(menu: Menu, id:any): Promise<Response> {
	    console.log('updating menu ' + JSON.stringify(menu));
			console.log(`${this.menusUrl}/update`)
	    return this.http.put(`${this.menusUrl}/update`, JSON.stringify(menu), {headers: this.getHeaders()}).toPromise()
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
