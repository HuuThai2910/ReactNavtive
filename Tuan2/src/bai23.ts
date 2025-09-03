interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const filterIncompleteTodos = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await response.json();
    const incomplete = todos.filter((todo) => !todo.completed);
    console.log("Incomplete todos:", incomplete);
};
filterIncompleteTodos();
