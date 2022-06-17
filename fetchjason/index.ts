import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(Response => {
  const todo = Response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(ID, title, finished);
});

const logTodo = (id:number, title:string, completed:boolean) => {
  console.log(`
  The todo with ID ${id}
  Has a title of: ${title}
  Is it finished? ${completed}`);
};
