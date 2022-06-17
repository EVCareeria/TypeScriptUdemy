const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [[]];


const oneCar = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string):string => {
  return car;
});

const importantDates: (Date | string)[] = [new Date(), '2030-5-5'];
importantDates.push('2010-1-7');
importantDates.push(new Date());
