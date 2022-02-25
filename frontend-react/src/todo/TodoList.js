import React, {useContext, useEffect} from "react";

// import components
import {URL_API} from '../utils/Data';
import {Store} from '../utils/initialState';

const TodoList = (TaskListId) => {
    const {dispatch, state: {
        todo
    }} = useContext(Store);
    const currentList = todo.todoList.filter(todo => {
        return todo.idList === TaskListId.TaskListId;
    });

    useEffect(() => {
        fetch(URL_API + "/todos")
            .then(response => response.json())
            .then((todos) =>{
                dispatch({
                    type: "update-list", todos
                })
            })
    }, [dispatch]);

    const onDelete = (id) => {
        fetch(URL_API + "/delete/" + id, {
            method: "DELETE"
        })
            .then((todo) => {
                dispatch ({
                    type: "delete-item", id
                })
            })
    }

    const onEdit = (todo) => {
        dispatch({
            type: "edit-item",
            item: todo
        })
    }

    const onEditComplete = (event, item) => {
        const request = {
            name: item.name,
            id: item.id,
            idList: item.idList,
            completed: event.target.checked
        }

        fetch(URL_API + "/todo/update", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({
                    type: "update-item", item: todo
                })
            })
    }

}

export {TodoList}