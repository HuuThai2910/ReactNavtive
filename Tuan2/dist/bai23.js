"use strict";
const filterIncompleteTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const incomplete = todos.filter((todo) => !todo.completed);
    console.log("Incomplete todos:", incomplete);
};
filterIncompleteTodos();
