import React, {useState} from "react";
import { useForm } from "react-hook-form";
// import styles
import styles from './TodoForm.module.css';
// import image
import task from '../images/task.svg';
import Alert from '@mui/material/Alert'
import { Fade } from "react-awesome-reveal";
//import componets
import {CreateTaskTodo} from '../Modals/CreateTaskTodo'

const TodoForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const onSubmit = (data, e) => {
        // limipiar campos
        e.target.reset();
        console.log(data);
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <div className={styles.search__container}>
            <Fade left>
            <h1 className={styles.search__title}>
                 <span className={styles.title}>Todo App Sofka 📝</span>
            </h1>
            </Fade>
            <img className={styles.search__img} src={task} alt="imagen gifs" />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.search__user}>
                <button className ={styles.buttom_input} onClick = {() => setModal(true)} >Create Task</button>
                <br/>
                <span>
                {errors.todo?.type === 'required' && <Alert severity="error">"The todo is required"</Alert>}
                </span>
                <CreateTaskTodo toggle = {toggle} modal = {modal} save = {saveTask}/>

            </form>

        </div>
    )

}

export {TodoForm}
