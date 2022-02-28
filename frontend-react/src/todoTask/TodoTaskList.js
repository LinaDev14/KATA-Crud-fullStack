import {useContext, useEffect, useState} from "react";
import {URL_API} from "../utils/Data";
import {TodoTaskForm} from "./TodoTaskForm";
import {TaskContext} from "../contexts/TaskContextProvider";

const TodoTaskList = ({id, name}) => {

    let tasksList = [];
    let [taskList, setTaskList] = useState({list: tasksList});

    const {tasks, addTask} = useContext(TaskContext)

    let a = tasks.taskList.filter((element) => {
        return element.todoId === id
    })

    // request
    const fetchData = () => {
        /*// http://localhost:8080/api/tasks/todoId/{id}
        fetch(URL_API + "/tasks/todoId/" + id)
            .then((response) => response.json())
            .then((list) => {
                setTaskList(list)
            })*/
    }

    useEffect(() => {

    }, [addTask])

    return(
        <>
            {
                a.map((task) => {
                    return <TodoTaskForm key={task.id} task={task} />
                })
            }
        </>
    )
}

export {TodoTaskList}