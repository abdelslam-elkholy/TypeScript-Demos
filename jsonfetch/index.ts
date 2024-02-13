import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos/2";

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
    `);
});
