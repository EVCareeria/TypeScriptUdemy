@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor():string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk!')
  pilot():void {
    throw new Error();
  }
}


function testDecorator(target:any, propertyKey:string) {
  console.log(target)
  console.log(propertyKey)
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
};

testDecorator(Boat.prototype, 'pilot')

function logError(errorMessage:string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
    const method = descriptor.value;
  
    descriptor.value = function() {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    }
  }
}



function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}


 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}
 
@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}
 
const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
 
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
// bug.reportingURL;
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

console.log(new Greeter('Jonne'))
