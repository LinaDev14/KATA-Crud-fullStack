import React, {useContext, useEffect, useState} from "react";

// import components
import {URL_API} from '../utils/Data';
import {TodoTaskList} from '../todoTask/TodoTaskList';
import {TodoForm} from "./TodoForm";
import {TodoContext} from "../contexts/TodoContextProvider";
import {CardTodo} from "../Card/CardTodo";
import styles from './TodoList.module.css';

const TodoList = () => {

    const listTodo = [];

    const [todoList, setTodoList] = useState({list: listTodo});

    const {todos, readTodos} = useContext(TodoContext)

    // request
    const fetchData = () => {

        fetch(URL_API + "/todos")
            .then((response) => response.json())
            .then((list) => {
                readTodos(list)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            <TodoForm />
            {
                todos.todoList.map((todo) => {
                    //return <div key={todo.id}>{todo.name}</div>

                    return (
                        <>
                            <div className={styles.task_container}>
                                <CardTodo  index = {todo.id} todo={todo}/>
                            </div>
                    </>
                    )
                })
            }
        </>
    )

}

export {TodoList}