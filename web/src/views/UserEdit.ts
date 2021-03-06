import { View } from "./View";
import { User, UserInterface } from "../models/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserInterface> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  onRender():void {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }
  
  template(): string {
    return `
      <div>
          <div class="user-show"> </div>
          <div class="user-form"> </div>
      </div>
    `;
  }
}
