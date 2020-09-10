class Point {
    private _x: number = 0
    private _y: number = 0
    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }
    @configurable(false)
    get x() {
        console.log("configurable decorator " + this._x)
        return this._x
    }
    @configurable(false)
    get y() {
        console.log("configurable decorator " + this._y)
        return this._y
    }
}

function configurable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor 
    ) {
        descriptor.configurable = value
    }
}

let p: Point = new Point(15, 15)
console.log(p.x)
console.log(p.y)