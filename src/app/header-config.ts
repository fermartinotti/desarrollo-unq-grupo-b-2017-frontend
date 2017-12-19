import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('access_token');

    if(token){
    // Clone the request to add the new header.
      const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
      return next.handle(authReq);
    }
    else{
      return next.handle(req);
    }
    // Pass on the cloned request instead of the original request.
  }
}
