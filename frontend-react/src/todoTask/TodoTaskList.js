import {useContext, useEffect, useState} from "react";
import {URL_API} from "../utils/Data";
import {TodoTaskForm} from "./TodoTaskForm";
import {TaskContext} from "../contexts/TaskContextProvider";

const TodoTaskList = ({id}) => {

    const {tasks, addTask, deleteTaskByTodoId, deleteTask, editTask} = useContext(TaskContext)

    let a = tasks.taskList.filter((element) => {
        return element.todoId === id
    })


    useEffect(() => {

    }, [addTask, deleteTaskByTodoId, deleteTask, editTask])

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