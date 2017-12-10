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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MenuServiceQuery = (function () {
    function MenuServiceQuery() {
    }
    return MenuServiceQuery;
}());
exports.MenuServiceQuery = MenuServiceQuery;
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.menusUrl = 'http://localhost:8080/rest/menus'; // URL del backend
    }
    MenuService.prototype.getMenus = function (query) {
        console.log(Object.keys(query));
        var acumulado = Object.keys(query).reduce(function (accumulator, currentValue, currentIndex, array) { return query[currentValue] !== '' ? accumulator + currentValue + '=' + query[currentValue] + '&' : accumulator; }, '?');
        console.log(this.menusUrl + "/search/" + acumulado);
        return this.http.get(this.menusUrl + "/search/" + acumulado)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MenuService.prototype.getMenusByName = function (nombre) {
        return this.http.get(this.menusUrl + "/getByNombre/" + nombre + '/1')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MenuService.prototype.getMenu = function (id) {
        return this.http.get(this.menusUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MenuService.prototype.save = function (menu) {
        console.log('Saving menu ' + JSON.stringify(menu));
        console.log(this.menusUrl + "/create");
        return this.http.post(this.menusUrl + "/create", JSON.stringify(menu), { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    MenuService.prototype.update = function (menu) {
        menu.fechaVigenciaDesde = new Date().toISOString();
        menu.fechaVigenciaHasta = new Date().toISOString();
        console.log('updating menu ' + JSON.stringify(menu));
        console.log(this.menusUrl + "/edit");
        return this.http.put(this.menusUrl + "/edit", JSON.stringify(menu), { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
        ;
    };
    MenuService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    MenuService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map