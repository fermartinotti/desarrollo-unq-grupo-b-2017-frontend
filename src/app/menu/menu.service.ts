import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from './menu'
import { Proveedor } from '../proveedor/proveedor'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

export class MenuServiceQuery {
  nombre:     String;
  categoria:  String;
  localidad:  String;
  pageNumber: number;
}

@Injectable()
export class MenuService {
	private menusUrl = 'http://localhost:8080/rest/menus';  // URL del backend
  private proveedorUrl = 'http://localhost:8080/rest/proveedores';

	constructor(private http: HttpClient) {}

  getMenus(query: MenuServiceQuery): Promise<Menu[]> { //metodo para traer todos los Menus del filtro
    console.log(Object.keys(query))
    var acumulado = Object.keys(query).reduce((accumulator, currentValue, currentIndex, array) => { return query[currentValue] !== '' ? accumulator + currentValue + '=' + query[currentValue] + '&' : accumulator }, '?')
    console.log(`${this.menusUrl}/search/` + acumulado)
	  return this.http.get(`${this.menusUrl}/search/` + acumulado)
	             .toPromise()
	             .then(response => response as Menu[])
	             .catch(this.handleError);
	}

	getMenusByName(nombre:String): Promise<Menu[]> { //metodo para traer todos los Menus
	  return this.http.get(`${this.menusUrl}/getByNombre/`+nombre+'/1')
	             .toPromise()
	             .then(response => response as Menu[])
	             .catch(this.handleError);
	}

	getMenu(id:any): Promise<Menu> { //metodo para traer un Menu
	  return this.http.get(`${this.menusUrl}/`+id )
	             .toPromise()
	             .then(response => response as Menu)
	             .catch(this.handleError);
	}

	save(menu: Menu): Promise<Response> {
	    console.log('Saving menu ' + JSON.stringify(menu));
			console.log(`${this.menusUrl}/create`)
	    return this.http.post(`${this.menusUrl}/create`, JSON.stringify(menu)).toPromise()
				.then(response => response)
				.catch(this.handleError);
	}

	update(menu: Menu): Promise<Response> {
      menu.fechaVigenciaDesde = new Date().toISOString()
      menu.fechaVigenciaHasta = new Date().toISOString()
	    console.log('updating menu ' + JSON.stringify(menu));
			console.log(`${this.menusUrl}/edit`)
	    return this.http.put(`${this.menusUrl}/edit`, JSON.stringify(menu)).toPromise()
				.then(response => response)
				.catch(this.handleError);;
	}

  getProveedorByMenu(id:any): Promise<Proveedor>{
    console.log('getting proveedor ' + JSON.stringify(id));
    console.log(`${this.proveedorUrl}/searchProveedor/`+ id)
    return this.http.get(`${this.proveedorUrl}/searchProveedor/`+ id)
      .toPromise()
      .then(response => response as Proveedor)
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
