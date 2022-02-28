import React, {useState, useEffect, useContext} from "react";

// import styles
import styles from './TodoForm.module.css';
// import image
import task from '../images/task.svg';
//import components
import {CreateTaskTodo} from '../Modals/CreateTaskTodo'
import {CardTodo} from '../Card/CardTodo';
import {URL_API} from "../utils/Data";
import {TodoContext} from "../contexts/TodoContextProvider";

const TodoForm = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const { addTodo } = useContext(TodoContext)

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (todoObject) => {
        fetch(URL_API + "/todo/create", {
            method: "POST",
            body: JSON.stringify({name: todoObject.Name}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((t) => addTodo(t))
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
        </div>
            <CreateTaskTodo toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    )

}

export {TodoForm}
