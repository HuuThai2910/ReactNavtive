"use strict";
const fetchTodos = async () => {
    const ids = [1, 2, 3, 4, 5];
    const todos = await Promise.all(ids.map((id) => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json())));
    console.log(todos);
};
fetchTodos();
