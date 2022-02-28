import React, {useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import styles from './todoTaskForm.module.css'
import {URL_API} from "../utils/Data";
import {TaskContext} from "../contexts/TaskContextProvider";
import {EditTask} from '../Modals/EditTask';

const TodoTaskForm = ({task}) =>{

    const { register, handleSubmit, formState: { errors }} = useForm();

    const [taskData, setTaskData] = useState({task: task})
    const [modal, setModal] = useState(false);
    const [completed, setCompleted] = useState(task.completed)

    const {deleteTask, editTask} = useContext(TaskContext);

    const toggle = () => {
        setModal(!modal)
    }

    const onSubmit = (data, e) =>{
        e.preventDefault()
        e.target.reset()
    }

    const onToggleCompleted = () =>{
        setCompleted(!taskData.task.completed)
    }

    // editar tarea
    const handleEditTask = (todoObject) => {
        fetch(URL_API + "/task/updateTask",{
            method: "PUT",
            body: JSON.stringify({name: todoObject.Name, id: task.id, todoId: task.todoId, completed: task.completed}),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
            .then((response) => response.json())
            .then((t) => {
                editTask(t)
                console.log(t)
            })
        setModal(false)
    }

    // eliminar tarea
    const onDelete = () =>{
        fetch(URL_API + "/task/delete/" + task.id,{
            method: "DELETE"
        } )
            .then((t) => {
                deleteTask(task.id)
            })
    }

    useEffect(()=>{

    },[editTask])

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                value = {taskData.task.name}
                disabled
                className={styles.card_inputTask}
            />
            <input
                type="checkbox"
            />
            <a className={styles.card_btnEditar}  onClick={() => setModal(true)}>editar ✏</a>
            <a className={styles.card_btnBorrar}  onClick={onDelete}>Borrar 🗑</a>
            <EditTask modal = {modal} toggle = {toggle} edit={handleEditTask}/>
        </form>
            </>
    )
}

export {TodoTaskForm}