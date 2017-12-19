import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor/proveedor-service';
import { ClienteService } from '../cliente/cliente.service';
import * as auth0 from 'auth0-js';


@Injectable()
export class AuthService {

  private onChangeCallbacks:{(): void;}[]

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid profile email'
  });

  constructor(
    public router: Router,
    private clienteService: ClienteService,
    private proveedorService: ProveedorService
  ) {
    this.onChangeCallbacks = [];
  }

  public login(): void {
    this.auth0.authorize();
  }

  public onChange(callback:any): void {
    this.onChangeCallbacks.push(callback);
  }

  private change(): void {
    this.onChangeCallbacks.forEach((callback) => callback())
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult:any): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log(authResult)
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    var email = this.parseJwt(authResult.idToken).email;
    localStorage.setItem('email', email);
    this.clienteService.getClienteByEmail(email)
    .then(response => {
      localStorage.setItem('clienteId', response.id.toString())
      this.change();
    })
    .catch(response => {
      this.proveedorService.getProveedorByEmail(email)
      .then(response => {
        localStorage.setItem('proveedorId', response.id.toString())
        this.change();
      })
    });;
  }

  private parseJwt(token: String) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');
    localStorage.removeItem('clienteId');
    localStorage.removeItem('proveedorId');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
