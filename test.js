"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var foo = {};
foo['Hello'] = 'World';
console.log('hello');
console.log(foo['Hello']);
var Foo = /** @class */ (function () {
    function Foo(message) {
        this.message = message;
    }
    Foo.prototype.log = function () {
        console.log(this.message);
    };
    return Foo;
}());
var foo1 = {};
foo1['Hello'] = new Foo('World');
foo1['Hello'].log();
var obj = {
    toString: function () {
        console.log('toString called');
        return 'Hello二人515xx';
    }
};
obj.toString();
var foo2 = {};
foo2[obj.toString()] = 'World';
console.log(foo2[obj.toString()]);
console.log(foo2['Hello']);
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "";
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breed = "";
        return _this;
    }
    return Dog;
}(Animal));
// interface NumberDictionary {
//     [index: string]: number
//     length: number
//     name: string
// }
/*
let 声明一个变量， 它使用的是词法作用域或块作用域。
不同于使用var声明的变量可以在包含它们的函数外访问，
块作用域变量再包含它们的块或for循环外是不能访问的
 */
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, spare = __rest(o, ["a"]);
console.log({ a: a, spare: spare });
var Http = /** @class */ (function () {
    function Http(url) {
        this.url = url;
    }
    return Http;
}());
var Postman = /** @class */ (function (_super) {
    __extends(Postman, _super);
    function Postman(url) {
        return _super.call(this, url) || this;
    }
    Postman.prototype.post = function (data) {
        throw new Error("Method not implemented.");
    };
    Postman.prototype.get = function (data) {
        throw new Error("Method not implemented.");
    };
    Postman.prototype.echo = function () {
        console.log(this.url);
    };
    return Postman;
}(Http));
var poster = new Postman("http://app.yn.189.cn");
poster.echo();
/*
抽象类作为其他派生类的基类使用，它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节，而接口却不能
 */
var DataModel = /** @class */ (function () {
    function DataModel() {
    }
    DataModel.prototype.post = function (data) {
        throw new Error("Method not implemented.");
    };
    DataModel.prototype.get = function (data) {
        throw new Error("Method not implemented.");
    };
    DataModel.prototype.sync = function () {
        console.log("sync data ...");
    };
    return DataModel;
}());
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        var _this = _super.call(this) || this;
        console.log("construct");
        return _this;
    }
    return UserInfo;
}(DataModel));
var ui = new UserInfo();
ui.sync();
function sealed(target) {
    console.log('sealed');
    Object.seal(target);
    Object.seal(target.prototype);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
var greeter = new Greeter("World");
//  console.log(greeter.greet())
var temple;
/*
target：如果修饰的是类的实例函数，那么target就是类的原型。如果修饰的是类的静态函数，那么target就是类本身。
key： 该函数的函数名。
descriptor：该函数的描述属性，比如 configurable、value、enumerable等。
 */
function log(target, key, descriptor) {
    console.log(key + " was called!");
    console.log(target + " ...");
    console.log(descriptor + " ...");
    console.log(target.val1);
}
// class P {
//     val1: string = "val1"
//     val2: string = "val2"
//     constructor() {
//         console.log('object instance')
//     }
//     @log
//     foo() {
//         console.log('Do something')
//     }
// }
// let p: P  = new P()
// p.foo()
function f() {
    console.log("f(): evaluated");
    return function (target, key, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("[f]before " + key + " called", args);
        };
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
// class c {
//     @f()
//     @g()
//     method() {}
// }
