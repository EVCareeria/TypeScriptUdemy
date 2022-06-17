import { View } from "./View";
import { User, UserInterface } from "../models/User";

export class UserShow extends View<User, UserInterface> {
  template(): string {
    return`
    <div>
      <h1>User Details</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Name: ${this.model.get('age')}</div>
    </div>
    `
  }
}