import React, {useState} from "react";

// import styles
import styles from './TodoForm.module.css';
// import image
import task from '../images/task.svg';
//import componets
import {CreateTaskTodo} from '../Modals/CreateTaskTodo'

const TodoForm = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])


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
        <>
        <div className={styles.search__container}>
            <h1 className={styles.search__title}>
                 <span className={styles.title}>Todo App Sofka 📝</span>
            </h1>
            <img className={styles.search__img} src={task} alt="imagen gifs" />
        </div>
        <div className={styles.search__container}>
                <button className ={styles.buttom_input} onClick = {() => setModal(true)} >New Todo</button>
                <CreateTaskTodo toggle = {toggle} modal = {modal} save = {saveTask}/>
        </div>
        </>
    )

}

export {TodoForm}
