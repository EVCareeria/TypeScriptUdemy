const add = (a:number,b:number): number => {
  return a+b;
};

const subtract = (a:number,b:number): number => {
  return a -b;
};

function divide(a:number,b:number): number {
  return a/b;
};

const logger = (message: string):void => {
  console.log(message)
  return undefined
}

const throwError = (message:string):never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (RandomWather: {date: Date, weather: string}):void  => {
  console.log(RandomWather.date);
  console.log(RandomWather.weather);
};

logWeather(todaysWeather)
