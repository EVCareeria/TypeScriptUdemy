import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserInterface } from "./models/User";

const users = new Collection('http://localhost:3000/users', (json:UserInterface) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if(root) {
    const test = new UserList(root, users);
    console.log(users)
    console.log(root)
    console.log(test)
    test.render()
  }
});

users.fetch();
