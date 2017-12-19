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
var SetHeaderInterceptor = (function () {
    function SetHeaderInterceptor() {
    }
    SetHeaderInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('access_token');
        if (token) {
            // Clone the request to add the new header.
            var authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
        // Pass on the cloned request instead of the original request.
    };
    return SetHeaderInterceptor;
}());
SetHeaderInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SetHeaderInterceptor);
exports.SetHeaderInterceptor = SetHeaderInterceptor;
//# sourceMappingURL=header-config.js.map