import React, {useContext, useState, useEffect} from 'react';

//import components
import {TodoList} from '../src/todo/TodoList'
import  {Header} from '../src/Header/Header';
import {Footer} from "./Footer/Footer";
import {TodoContext} from "./contexts/TodoContextProvider";
import {TaskContext} from "./contexts/TaskContextProvider";
import {URL_API} from "./utils/Data";


function App() {

    //useState
    const [isDark, setDark] = useState(false);

    const {todos, readTodos} = useContext(TodoContext)
    const {tasks, readTasks} = useContext(TaskContext)

    useEffect(() => {
        fetch(URL_API + "/todos")
            .then((response) => response.json())
            .then((list) => {
                readTodos(list)
            })
        fetch(URL_API + "/tasks/")
            .then((response) => response.json())
            .then((list) => {
                readTasks(list)
            })
    }, []);


  return (
      <div className={`giphos__container ${isDark ? "dark" : ""}`}>
          <Header isDark={isDark} setDark={setDark}/>
          <TodoList />
          <Footer />
      </div>
  );
}

export default App;
