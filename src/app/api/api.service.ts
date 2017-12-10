import { Http, Response, Headers } from '@angular/http';
import { Injectable }    from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private apiUrl = 'http://localhost:8080/rest/'

  constructor(private http: Http) {}

  public get(endpoint:String): Promise<Response> {
    	return this.http.get(this.apiUrl + endpoint, { headers: this.getHeaders()} ).toPromise()
  }

  public put(endpoint: String): Promise<Response> {
      return this.http.put(this.apiUrl + endpoint, { headers: this.getHeaders()} ).toPromise()
  }

  public post(endpoint: String): Promise<Response> {
      return this.http.post(this.apiUrl + endpoint, { headers: this.getHeaders()} ).toPromise()
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
