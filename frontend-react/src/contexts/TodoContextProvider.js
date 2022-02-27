import React, {useState, createContext} from "react"

const TodoContext = createContext(undefined)

const TodoContextProvider = ({children}) =>{

    const initialState = {
        todoList : [],
        loading: false
    }

    const [todos, setTodos] = useState(initialState)

    const addTodo = (todo) =>{
        let list = todos.todoList
        list.push(todo)
        setTodos({...todos, todoList: list })
    }

    const readTodos = (list) =>{
        setTodos({...todos, todoList: list })
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, readTodos}}>
            {children}
        </TodoContext.Provider>
    )

}

export {TodoContext, TodoContextProvider}