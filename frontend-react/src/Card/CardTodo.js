import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
// import component
import {TodoTaskList} from "../todoTask/TodoTaskList";

//import styles
import styles from './Card.module.css';
import {URL_API} from "../utils/Data";
import {TaskContext} from "../contexts/TaskContextProvider";

const CardTodo = ({index, todo}) => {

    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState("")
    const [task, setTask] = useState("");
    const {addTask} = useContext(TaskContext)


    // colores de las cards
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //e.target.reset();
        console.log(e.target[0].value);

        fetch(URL_API + "/task/create", {
            method: "POST",
            body: JSON.stringify({name: e.target[0].value, todoId: todo.id, completed: false}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((t) => addTask(t))
    }

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_top} style={{"backgroundColor": colors[0].primaryColor}}/>
            <div className={styles.task_holder}>
                <span className={styles.card_header} style={{
                    "backgroundColor": colors[0].secondaryColor,
                    "borderRadius": "10px"
                }}>
                    <div>{todo.name}</div>
                </span>
                <div className={styles.position_btn}>
                    <a className={styles.card_btn_Edit} style={{"color": colors[0].primaryColor, "cursor": "pointer"}}
                       onClick={() => setModal(true)}>Editar 📝
                    </a>
                    <a className={styles.card_btn_Borrar} style={{"color": colors[0].primaryColor, "cursor": "pointer"}}
                    >Borrar 🗑
                    </a>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name=""
                    placeholder="Tarea"
                    className={styles.card_input}
                    />

                    <input
                    type="submit"
                    value="enviar"
                    className={styles.card_btn}
                    />
                </form>

                <div>
                    <TodoTaskList id={todo.id} name={todo.name}/>
                </div>

            </div>

        </div>
    )

}

export {CardTodo}