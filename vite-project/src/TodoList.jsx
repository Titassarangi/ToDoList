import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => ({
            ...todo,
            task: todo.task.toUpperCase()
        })));
    };

    let markAllDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => ({
            ...todo,
            isDone: true
        })));
    };
    

    return (
        <div>
            <input placeholder="Add A Task" value={newTodo} onChange={updateTodoValue} />
            <hr />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h4>Tasks To Do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    );
}
