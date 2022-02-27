import {useEffect, useState} from "react";
import {URL_API} from "../utils/Data";
import {TodoTaskForm} from "./TodoTaskForm";

const TodoTaskList = ({id, name}) => {

    const tasksList = [];
    const [taskList, setTaskList] = useState({list: tasksList});

    // request
    const fetchData = () => {

        // http://localhost:8080/api/tasks/todoId/{id}
        fetch(URL_API + "/tasks/todoId/" + id)
            .then((response) => response.json())
            .then((list) => {
                setTaskList({...taskList, list: list})
                //console.log(list)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <>

            {
                taskList.list.map((task) => {
                    return <TodoTaskForm key={task.id} task={task} />
                })
            }
        </>
    )
}

export {TodoTaskList}