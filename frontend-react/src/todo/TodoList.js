import React, {useContext, useEffect} from "react";

// import components
import {URL_API} from '../utils/Data';
import {Store} from '../utils/initialState';

const TodoList = (props) => {

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

    const onEditComplete = (e, item) => {
        const request = {
            name: item.name,
            id: item.id,
            idList: item.idList,
            completed: e.target.checked
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

return <div>
    <table>
        <thead>
            <tr>
                <td></td>
                <td>ID</td>
                <td>Tarea</td>
                <td>¿Completado?</td>
            </tr>
        </thead>

        <tbody>
                {currentList.map((item) => {
                    return <tr key={item.id}>
                        <td>
                            <input
                            type = "checkbox"
                            defaultChecked={item.completed}
                            onChange={(e) => onEditComplete(e, item)}/>
                        </td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><button type="button" onClick={() => onEdit(item)}>Editar</button></td>
                        <td><button type="button" onClick={() => onEdit(item.id)}>Eliminar</button></td>
                    </tr>
                })}
        </tbody>
    </table>
</div>
}


export {TodoList}