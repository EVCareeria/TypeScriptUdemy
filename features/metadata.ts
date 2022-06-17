import 'reflect-metadata';

@controller
class Plane {
  color:string = 'red';

  @markFunction('Not working')
  test():void {
    console.log('why aint it working?')
  }

  @markFunction('Hi there')
  fly():void {
    console.log('vrrr')
  };

  @getPath('/login')
  getName():void {
    console.log('Muh name!')
  }
}

function getPath(path: string) {
  return function(target:Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
} 

function markFunction(secretInfo:string) {
  return function(target: Plane, key: string) {
      Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

function controller(target: typeof Plane) {
  for(let key in target.prototype) {
    let secret = Reflect.getMetadata('secret', target.prototype, key);
    let path = Reflect.getMetadata('path', target.prototype, key);
    secret ? console.log('This is the secret ', secret) : null
    path ? console.log(`Url path ${path}`) : null
  }
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret)

const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'Hello', plane, 'color')

const note = Reflect.getMetadata('note', plane, 'color')
console.log(note)



Reflect.defineMetadata('secondColor', 'blue', plane)
Reflect.defineMetadata('thirdColor', 'green', plane)
Reflect.defineMetadata('speed', 500, plane)

const propArr = []

let prop = Reflect.getMetadata('secondColor', plane)
propArr.push(prop)
prop = Reflect.getMetadata('thirdColor', plane)
propArr.push(prop)
prop = Reflect.getMetadata('speed', plane)
propArr.push(prop)

console.log(propArr)
