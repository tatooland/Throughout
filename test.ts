let foo: any = {}
foo['Hello'] = 'World'
console.log('hello')
console.log(foo['Hello'])

class Foo {
    constructor(public message: string) {}
    log() {
        console.log(this.message)
    }
}

let foo1: any = {};
foo1['Hello'] = new Foo('World')
foo1['Hello'].log()


let obj = {
    toString() {
        console.log('toString called')
        return 'Hello二人515xx'
    }
}

obj.toString()

let foo2: any = {}
foo2[obj.toString()] = 'World'
console.log(foo2[obj.toString()])
console.log(foo2['Hello'])

interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]
console.log(myStr)

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString)
    return result > -1
}

class Animal {
    name: string = ""

}

class Dog extends Animal {
    breed: string = ""
}
/*
TypeScript支持两种索引签名：字符串和数字。 
可以同时使用两种类型的索引，但是
数字索引的返回值
必须是
字符串索引返回值类型的子类型。
*/
interface NotOkay {
    [x: string]: Animal
    [y: number]: Dog
}

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

 let o = {
     a: "foo",
     b: 12,
     c: "bar"
 }

 let {a, ...spare} = o;
 console.log({a, spare})

 class Http {
    url: string
    constructor(url: string){
        this.url = url
    }
 }

 interface Protocol {
     post(data: string): string
     get(data: string): string
 }

 class Postman extends Http implements Protocol{
     constructor(url: string) {
         super(url)
     }
     post(data: string): string {
         throw new Error("Method not implemented.")
     }
     get(data: string): string {
         throw new Error("Method not implemented.")
     }
     echo(): void{
         console.log(this.url)
     }
 }



let poster: Postman = new Postman("http://app.yn.189.cn")     
poster.echo()


/*
抽象类作为其他派生类的基类使用，它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节，而接口却不能
 */

 abstract class DataModel implements Protocol {
    post(data: string): string {
        throw new Error("Method not implemented.")
    }
    get(data: string): string {
        throw new Error("Method not implemented.")
    }
    sync(): void {
        console.log("sync data ...")
    }
 }

 class UserInfo extends DataModel {
     constructor() {
         super()
         console.log("construct")
     }
 }

 let ui: UserInfo = new UserInfo()
 ui.sync()


 function sealed(target: Function) {
    console.log('sealed')
    Object.seal(target)
    Object.seal(target.prototype)
 }

 @sealed
 class Greeter {
     greeting: string
     constructor(message: string) {
         this.greeting = message
     }
     greet() {
         return "Hello, " + this.greeting
     }
 }

 let greeter: Greeter = new Greeter("World")
//  console.log(greeter.greet())

let temple

/*
target：如果修饰的是类的实例函数，那么target就是类的原型。如果修饰的是类的静态函数，那么target就是类本身。
key： 该函数的函数名。
descriptor：该函数的描述属性，比如 configurable、value、enumerable等。
 */
function log(target: any, key: any, descriptor: any) {
    console.log(`${key} was called!`)
    console.log(`${target} ...`)
    console.log(`${descriptor} ...`)
    console.log(target.val1)
}
class P {
    val1: string = "val1"
    val2: string = "val2"
    constructor() {
        console.log('object instance')
    }
    @log
    foo() {
        console.log('Do something')
    }
}
let p: P  = new P()
// p.foo()
// console.log(P.prototype === temple)



p.foo()

function f() {
  console.log("f(): evaluated");
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
      const original = descriptor.value
      descriptor.value = function(...args: any[]){
          console.log(`[f]before ${key} called`, args)
      }
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}

class c {
    @f()
    @g()
    method() {}
}
