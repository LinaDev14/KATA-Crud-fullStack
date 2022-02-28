import React, {useState, createContext} from "react"

const TaskContext = createContext(undefined)

const TaskContextProvider = ({children}) =>{

    const initialState = {
        taskList : [],
        loading: false
    }

    const [tasks, setTasks] = useState(initialState)

    const addTask = (task) =>{
        let list = tasks.taskList
        list.push(task)
        setTasks({...tasks, taskList: list })
    }

    const deleteTaskByTodoId = (todoId) => {
        let list = tasks.taskList
        const listTaskDelete = list.filter((task) => {
            return task.todoId !== todoId
        })
        setTasks({...tasks, taskList: listTaskDelete })
    }

    const deleteTask = (taskId) => {
        let list = tasks.taskList
        const listTaskDelete = list.filter((task) => {
            return task.id !== taskId
        })
        setTasks({...tasks, taskList: listTaskDelete })
    }

    const readTasks = (list) =>{
        setTasks({...tasks, taskList: list})
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, readTasks, deleteTaskByTodoId, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )

}

export {TaskContext, TaskContextProvider}