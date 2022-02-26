import React, {useRef, useState, useContext} from "react";

// import components
import {URL_API} from '../utils/Data';
import {Store} from '../utils/initialState';

const TodoForm = () =>{
    const formRef = useRef(null);
    const {dispatch, state: {
        todo
    }} = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (e) => {
        // e.preventDefault() -> no se recargue la pagina
        e.preventDefault();

        const request = {
            name: state.name,
            id: null,
            idList: TaskListId.TaskListId,
            completed: false
        }


    }
}