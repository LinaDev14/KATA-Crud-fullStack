import React, {useEffect, useState} from "react";

// import components
import {URL_API} from '../utils/Data';
import {TodoTaskList} from '../todoTask/TodoTaskList';
import {TodoForm} from "./TodoForm";

const TodoList = () => {

    const listTodo = [];

    const [todoList, setTodoList] = useState({list: listTodo});

    // request
    const fetchData = () => {

        fetch(URL_API + "/todos")
            .then((response) => response.json())
            .then((list) => {
                setTodoList({...todoList, list: list})
                console.log(list)
            })

        /*
        try {
            const RESPONSE = await fetch(URL_API + "/todos");
            const DATA = await RESPONSE.json();

            setTodoList(DATA.data)
            console.log(DATA.data);

        } catch (err) {
            console.error(err)
        }
         */
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            <TodoForm />
            {
                todoList.list.map((todo) => {
                    //return <div key={todo.id}>{todo.name}</div>
                    return <TodoTaskList id={todo.id} name={todo.name} key={todo.id}/>

                })
            }
        </>
    )

}

export {TodoList}