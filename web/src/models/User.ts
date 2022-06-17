import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserInterface {
  id?:number;
  name?:string;
  age?:number;
}

const userUrl = 'http://localhost:3000/users';

export class User extends Model<UserInterface> {
  
  static buildUser(attrs:UserInterface):User {
    return new User(
        new Attributes<UserInterface>(attrs),
        new Eventing(),
        new ApiSync<UserInterface>(userUrl)
    );
  }

  static BuildUserCollection():Collection<User, UserInterface>{
    return new Collection<User, UserInterface>(
      'http://localhost:3000/users',
      (json: UserInterface) => User.buildUser(json)
      );}

   setRandomAge():void {
    const age = Math.round(Math.random() * 100);
    this.set({age});
  }
}

