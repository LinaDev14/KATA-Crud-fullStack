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

    const readTasks = (list) =>{
        setTasks({...tasks, taskList: list})
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, readTasks}}>
            {children}
        </TaskContext.Provider>
    )

}

export {TaskContext, TaskContextProvider}