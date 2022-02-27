import {useState} from "react";
import { useForm } from "react-hook-form";

const TodoTaskForm = ({task}) =>{

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
            <button onClick={onEdit}>editar</button>
            <button onClick={onDelete}>Borrar</button>
        </form>
    )
}

export {TodoTaskForm}