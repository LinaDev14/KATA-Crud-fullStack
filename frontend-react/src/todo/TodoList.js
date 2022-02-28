import React, {useContext, useEffect, useState} from "react";

// import components
import {URL_API} from '../utils/Data';
import {TodoTaskList} from '../todoTask/TodoTaskList';
import {TodoForm} from "./TodoForm";
import {TodoContext} from "../contexts/TodoContextProvider";
import {CardTodo} from "../Card/CardTodo";
import styles from './TodoList.module.css';

const TodoList = () => {

    const {todos, deleteTodo} = useContext(TodoContext)

    useEffect(() => {
    }, [deleteTodo])

    return(
        <>
            <TodoForm />
            {
                todos.todoList.map((todo) => {

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