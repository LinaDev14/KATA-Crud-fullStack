import React, {createContext, useReducer} from "react";

// import components

const initialState = {
    todo :{
        todoList: [],
        item: {}
    },
    tasks : {
        taskList : [],
        item: {}
    }
}

// crear contexto
const Store = createContext(initialState);

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch}}>
        {children}
    </Store.Provider>
}


export {Store, StoreProvider}

