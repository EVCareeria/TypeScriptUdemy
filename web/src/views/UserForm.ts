import { User, UserInterface } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserInterface>{
  eventsMap(): {[key:string]: () => void} {
    return {
      'click:.set-age':this.onSetAgeClick,
      'click:.set-name':this.onSetNameClick,
      'click:.save-model':this.onSaveClick,
    }
  }

  onSaveClick = ():void => {
    this.model.save()
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = ():void => {
    const input = this.parent.querySelector('input');

    if(input !== null) {
      const name = input.value;
      this.model.set({name});
    }

  }

  template():string {
    return`
      <div>
        <h1>User Form</h1>
        <p>${this.model.get('name')}</p>
        <p>${this.model.get('age')}</p>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="set-age" >Set Random Age</button>
        <button class="save-model" >Save User</button>
      </div>
    `;
  }

 
}
