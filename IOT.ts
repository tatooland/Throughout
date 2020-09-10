import 'reflect-metadata';
type Constructor<T=any> = new (...args: any[]) => T;
const Injectable = (): ClassDecorator => target => {};
class OtherService {
    a = 1;
}

@Injectable()
class TestService {
    constructor(public readonly otherService: OtherService) {

    }
    testMethod() {
        console.log(this.otherService);
    }
}

const Factory = <T>(target: Constructor<T>): T => {
    const providers = Reflect.getMetadata('design:paramtypes', target);
    const args = providers.map((provider: Constructor)=>new provider());
    return new target(...args);
}

Factory(TestService).testMethod();