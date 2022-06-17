import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div> 
      <h1>Company name ${this.name}</h1>
      <h3>Company catchphrase is as follows: ${this.catchPhrase} </h3>
    </div>`

    
  };
}
