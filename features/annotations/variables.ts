let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();


let colors: string[] = ['one', 'two', 'three'];
let myNumbers: number[] = [1,2,3,4];
let truths: boolean[] = [true,false, true];

class Car {

}
let car: Car = new Car();

let point:{x:number; y:number} = {
  x:10,
  y:20
};


const logNumber: (i: number) => void = (i:number) => {
  console.log(i);
};


const json = '{"x":10, "y":20}';
const coordinates:{x:number;y:number} = JSON.parse(json);
console.log(coordinates);

