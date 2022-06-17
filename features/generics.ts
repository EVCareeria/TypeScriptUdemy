interface ArrayOfAnythingInterface {
  name: string;
  id:number;
}

class ArrayOfNumbers {
  constructor(public collection:number[]) {}

  get(index:number):number{
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection:string[]){}
  
   get(index:number):string{
    return this.collection[index];
  }
}


class ArrayOfAnything<T> {
  constructor(public collection:T[]){}

  protected get(index:number):T{
    this.print()
    return this.collection[index];
  }
  private print():void {
    console.log(this.collection)
  }
}

class ArrayOfAnythingChild<T> extends ArrayOfAnything<T>  {
  constructor(public data:T[]) {
    super(data);
  }
  printByIndex(index:number) {
    return this.get(index)
  }
}

function printString(arr:string[]):void{
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

function printNumbers(arr:number[]):void{
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]):void {
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

printAnything<string>(['a','v','c'])
printAnything<number>([1,2,3,4])




const childArr = new ArrayOfAnythingChild([{name:'john', id:1},{name:'Emilia', id:2},{name:'Jack', id:3}])
const Arr = new ArrayOfAnything([{name:'john', id:1},{name:'Emilia', id:2},{name:'Jack', id:3}])

console.log(childArr.printByIndex(0))
console.log(Arr.collection)

