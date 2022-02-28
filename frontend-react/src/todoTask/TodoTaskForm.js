import React, {useContext, useState} from "react";
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

    const {deleteTask} = useContext(TaskContext);

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

    const onEdit = () =>{
        console.log("editing")
    }

    const onDelete = () =>{
        fetch(URL_API + "/task/delete/" + task.id,{
            method: "DELETE"
        } )
            .then((t) => {
                deleteTask(task.id)
            })
    }

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
            <EditTask modal = {modal} toggle = {toggle}/>
        </form>
            </>
    )
}

export {TodoTaskForm}