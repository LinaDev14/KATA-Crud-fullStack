import React from "react";
import { useForm } from "react-hook-form";

// import components
import {URL_API} from '../utils/Data';
import {Store} from '../utils/initialState';

const TodoForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        // limipiar campos
        e.target.reset();
        console.log(data);
    }

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="todo"
                    placeholder="ingresa una tarea"
                    className="form-control my-2"
                    {...register("todo", {
                        required: true,
                    })}
                />
                <div>
                <span className="text-danger text-small d-block mb-2">
        {errors.todo?.type === 'required' && "The todo is required"}
        </span>
                </div>
                <button className="btn btn-primary">Crear</button>
            </form>

        </>
    )

}

export {TodoForm}
