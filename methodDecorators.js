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
var G = /** @class */ (function () {
    function G(message) {
        this.greeting = '';
        this.greeting = message;
    }
    G.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    __decorate([
        enumerable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], G.prototype, "greet", null);
    return G;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log("invoke decorator");
        descriptor.enumerable = value;
    };
}
var g_val = new G("world");
console.log("object instance");
console.log(g_val.greet());
console.log("==================");
console.log(g_val.greet());
console.log("==================");
console.log(g_val.greet());
console.log("==================");
console.log(g_val.greet());
console.log("==================");
console.log(g_val.greet());
console.log("==================");
console.log(g_val.greet());
