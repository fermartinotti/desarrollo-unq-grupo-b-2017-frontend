"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth0_variables_1 = require("./auth0-variables");
var router_1 = require("@angular/router");
var proveedor_service_1 = require("../proveedor/proveedor-service");
var cliente_service_1 = require("../cliente/cliente.service");
var auth0 = require("auth0-js");
var AuthService = (function () {
    function AuthService(router, clienteService, proveedorService) {
        this.router = router;
        this.clienteService = clienteService;
        this.proveedorService = proveedorService;
        this.auth0 = new auth0.WebAuth({
            clientID: auth0_variables_1.AUTH_CONFIG.clientID,
            domain: auth0_variables_1.AUTH_CONFIG.domain,
            responseType: 'token id_token',
            audience: "https://" + auth0_variables_1.AUTH_CONFIG.domain + "/userinfo",
            redirectUri: auth0_variables_1.AUTH_CONFIG.callbackURL,
            scope: 'openid profile email'
        });
        this.onChangeCallbacks = [];
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.onChange = function (callback) {
        this.onChangeCallbacks.push(callback);
    };
    AuthService.prototype.change = function () {
        this.onChangeCallbacks.forEach(function (callback) { return callback(); });
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        var _this = this;
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        console.log(authResult);
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        var email = this.parseJwt(authResult.idToken).email;
        localStorage.setItem('email', email);
        this.clienteService.getClienteByEmail(email)
            .then(function (response) {
            localStorage.setItem('clienteId', response.id.toString());
            _this.change();
        })
            .catch(function (response) {
            _this.proveedorService.getProveedorByEmail(email)
                .then(function (response) {
                localStorage.setItem('proveedorId', response.id.toString());
                _this.change();
            });
        });
        ;
    };
    AuthService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('email');
        localStorage.removeItem('clienteId');
        localStorage.removeItem('proveedorId');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        cliente_service_1.ClienteService,
        proveedor_service_1.ProveedorService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth0.service.js.map