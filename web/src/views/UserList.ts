import { CollectionView } from "./CollectionView";
import { User, UserInterface } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserInterface> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render(); 
  }

}
