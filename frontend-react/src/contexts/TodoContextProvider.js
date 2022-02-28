import React, {useState, createContext} from "react"

const TodoContext = createContext(undefined)

const TodoContextProvider = ({children}) =>{

    const initialState = {
        todoList : [],
        loading: false
    }

    const [todos, setTodos] = useState(initialState)

    // agregar
    const addTodo = (todo) => {
        let list = todos.todoList
        list.push(todo)
        setTodos({...todos, todoList: list })
    }

    // eliminar
    const deleteTodo = (todoId) => {
        let list = todos.todoList;
        //console.log(list)
        const listDelete = list.filter((todo) => {
            return todo.id !== todoId
        })
        setTodos({...todos, todoList: listDelete })
    }

    // actualizar
    const editTodo = (todo) => {
        let list = todos.todoList;
        let todoEdit= [];
        list.forEach((item) => {
            if(item.id === todo.id){
                todoEdit.push(todo)
            }else{
                todoEdit.push(item)
            }
        })
        setTodos({...todos, todoList: todoEdit })
        console.log(todoEdit);
    }

    const readTodos = (list) =>{
        setTodos({...todos, todoList: list })
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, readTodos, deleteTodo, editTodo}}>
            {children}
        </TodoContext.Provider>
    )

}

export {TodoContext, TodoContextProvider}