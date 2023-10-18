
import React from "react";
import {useState} from "react";

import "./index.css";

    const TodoApp = () => {

        const [newTodo, setNewTodo] = useState("");
        const [todos, setTodos] = useState([]);

        const HandleSubmit = (e) => {
            e.preventDefault()

            setTodos(currentTodos => {
                return [
                    ...currentTodos,
                    {id: crypto.randomUUID(), title: newTodo},
                ]
            })


            setNewTodo("");
        }

        const ToggleTodo = (id) => {
            setTodos(currentTodos => {
                        return currentTodos.filter(todo => todo.id !== id)
                })
            }

        const DeleteTodo = (id) => {
            setTodos(currentTodos => {
                return currentTodos.filter(todo => todo.id !== id)
            })
        }


        return (
            <div className={"App"}>

                <h1>this is the todo application</h1>
                <a>FrontPage</a>

                <div className={"main"}>

                    <div className={"search"}>
                        <form onSubmit={HandleSubmit}>
                        <input
                            placeholder={"add new todo"}
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <button className={"btn-add-todo"}>add todo to todolist</button>
                        </form>
                    </div>


                    <div className={"todoDataContainer"}>
                        <div className={"todoData"}>
                            Todolist:
                            <ul>
                                    {todos.map(todo => {
                                        return (
                                            <li key={todo.id}>
                                                <label>
                                                    <input
                                                        type={"checkbox"}
                                                        onChange={() => ToggleTodo(todo.id)}/>
                                                        {todo.title}
                                                </label>
                                                <button className={"btn-delete-todo"} onClick={() => DeleteTodo(todo.id)}>delete item</button>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default TodoApp;