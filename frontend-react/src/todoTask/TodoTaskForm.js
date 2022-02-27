import {useState} from "react";
import { useForm } from "react-hook-form";
import styles from './todoTaskForm.module.css'

const TodoTaskForm = ({task, index}) =>{

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
    const { register, handleSubmit, formState: { errors }} = useForm();

    const [taskData, setTaskData] = useState({task: task})
    const [completed, setCompleted] = useState(task.completed)

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
        console.log("deleting")
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                value = {taskData.task.name}
                disabled
            />
            <input
                type="checkbox"
            />
            <a className={styles.card_btn} style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}} onClick={onEdit}>editar</a>
            <a className={styles.card_btn} style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}} onClick={onDelete}>Borrar</a>
        </form>
    )
}

export {TodoTaskForm}