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



