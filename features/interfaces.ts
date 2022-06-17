interface Printer {
  summary(): string;
};

const oldCivic = {
  name:'civic',
  year:new Date(),
  broken:true,
  summary():string{
    return 'Some text right here';
  }
};

const carbDrink = {
  color:'brown',
  carbonated:true,
  sugar:40,
  summary():string {
    return 'This is sugary drink!';
  }
};


const printSummary = (item:Printer):void => {
 console.log(item.summary())
};



printSummary(oldCivic);
printSummary(carbDrink);
