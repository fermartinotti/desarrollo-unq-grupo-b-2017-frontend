"use strict";
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
        this.clientesUrl = 'http://localhost:8080/rest/clientes'; // URL del backend
    }
    ClienteService.prototype.getHeroes = function () {
        return this.http.get(this.clientesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ClienteService.prototype.save = function (cliente) {
        console.log('Saving person ' + JSON.stringify(cliente));
        return this.http.put(this.clientesUrl + "/Person", JSON.stringify(cliente), { headers: this.getHeaders() });
    };
    ClienteService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    ClienteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map