import React from "react";
import { useForm } from "react-hook-form";
// import styles
import styles from './TodoForm.module.css';
// import image
import task from '../images/task.svg';
import Alert from '@mui/material/Alert'

const TodoForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        // limipiar campos
        e.target.reset();
        console.log(data);
    }

    return (
        <div className={styles.search__container}>
            <h1 className={styles.search__title}>
                 <span className={styles.title}>Todo App </span>
            </h1>
            <img className={styles.search__img} src={task} alt="imagen gifs" />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.search__user}>
                <input
                    type="text"
                    name="todo"
                    placeholder="ingresa una tarea"
                    className={styles.search__input}
                    {...register("todo", {
                        required: true,
                    })}
                />
                <div>
                <span>
                {errors.todo?.type === 'required' && <Alert severity="error">"The todo is required"</Alert>}
                </span>
                </div>
                <button className={styles.buttom_input}>Crear</button>

            </form>

        </div>
    )

}

export {TodoForm}
