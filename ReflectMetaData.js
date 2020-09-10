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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.doGet = function () {
        return 'get callback';
    };
    Test.prototype.doPost = function () {
        return "post callback";
    };
    __decorate([
        Reflect.metadata("HttpRequest", "get"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Test.prototype, "doGet", null);
    __decorate([
        Reflect.metadata("HttpRequest", "post"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Test.prototype, "doPost", null);
    Test = __decorate([
        Reflect.metadata('service', 'Entry')
    ], Test);
    return Test;
}());
console.log(Reflect.getMetadata('service', Test));
console.log(Reflect.getMetadata('HttpRequest', new Test(), 'doGet'));
console.log(Reflect.getMetadata('HttpRequest', new Test(), 'doPost'));
/*
function metadata(
  metadataKey: any,
  metadataValue: any
): {
  (target: Function): void;
  (target: Object, propertyKey: string | symbol): void;
};
 */ 
