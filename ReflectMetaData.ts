import "reflect-metadata"
@Reflect.metadata('service', 'Entry')
class Test {
    @Reflect.metadata("HttpRequest", "get")
    public doGet(): string {
        return 'get callback'
    }
    @Reflect.metadata("HttpRequest", "post")
    public  doPost(): string {
        return "post callback"
    }
}

console.log(Reflect.getMetadata('service', Test))
console.log(Reflect.getMetadata('HttpRequest', new Test(), 'doGet'))
console.log(Reflect.getMetadata('HttpRequest', new Test(), 'doPost'))

/*
function metadata(
  metadataKey: any,
  metadataValue: any
): {
  (target: Function): void;
  (target: Object, propertyKey: string | symbol): void;
};
 */