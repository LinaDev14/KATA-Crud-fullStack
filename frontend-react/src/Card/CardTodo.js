import React, {useState} from "react";

// import component

import {TodoTaskList} from "../todoTask/TodoTaskList";

//import styles
import styles from './Card.module.css';

const CardTodo = ({index, todo}) => {

    const [modal, setModal] = useState(false);


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


    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_top} style={{"backgroundColor": colors[index % 5].primaryColor}}/>
            <div className={styles.task_holder}>
                <span className={styles.card_header} style={{
                    "backgroundColor": colors[index % 5].secondaryColor,
                    "borderRadius": "10px"
                }}>
                    <div>{todo.name}</div>
                </span>

                <div>
                <input
                    type="text"
                    className={styles.card_input}
                    placeholder="tarea"
                />
                <a className={styles.card_btn} style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}>Crear</a>
                </div>
                <div>
                    <TodoTaskList id={todo.id} name={todo.name}/>
                </div>
                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    <a className={styles.card_btn} style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
                            onClick={() => setModal(true)}>Editar
                    </a>
                    <a className={styles.card_btn} style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
                            >Borrar
                    </a>
                </div>
            </div>

        </div>
    )

}

export {CardTodo}