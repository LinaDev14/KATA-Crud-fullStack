import {useContext, useEffect, useState} from "react";
import {URL_API} from "../utils/Data";
import {TodoTaskForm} from "./TodoTaskForm";
import {TaskContext} from "../contexts/TaskContextProvider";

const TodoTaskList = ({id, name}) => {

    let tasksList = [];
    let [taskList, setTaskList] = useState({list: tasksList});

    const {tasks, addTask, deleteTaskByTodoId, deleteTask} = useContext(TaskContext)

    let a = tasks.taskList.filter((element) => {
        return element.todoId === id
    })


    useEffect(() => {

    }, [addTask, deleteTaskByTodoId, deleteTask])

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