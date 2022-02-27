import React, {useState} from 'react';

//import components
import {TodoList} from '../src/todo/TodoList'
import  {Header} from '../src/Header/Header';
import {Footer} from "./Footer/Footer";


function App() {

    //useState
    const [isDark, setDark] = useState(false);

  return (
      <div className={`giphos__container ${isDark ? "dark" : ""}`}>
          <Header isDark={isDark} setDark={setDark}/>
          <TodoList />
          <Footer />
      </div>
  );
}

export default App;
