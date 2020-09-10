class G{
    greeting: string = ''
    constructor(message: string) {
        this.greeting = message
    }
    @enumerable(false)
    greet() {
        return `hello, ${this.greeting}`
    }
}

function enumerable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("invoke decorator")
        descriptor.enumerable = value
    }
}

let g_val: G = new G("world")
console.log("object instance")
console.log(g_val.greet())
console.log("==================")
console.log(g_val.greet())
console.log("==================")
console.log(g_val.greet())
console.log("==================")
console.log(g_val.greet())
console.log("==================")
console.log(g_val.greet())
console.log("==================")
console.log(g_val.greet())
