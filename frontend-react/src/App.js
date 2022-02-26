import React, {useState} from 'react';

//import components
import {TodoList} from '../src/todo/TodoList'
import {FooterPagePro} from "./Footer/FooterPagePro";
import  {Header} from '../src/Header/Header';


function App() {

    //useState
    const [isDark, setDark] = useState(false);

  return (
      <div className={`giphos__container ${isDark ? "dark" : ""}`}>
          <Header isDark={isDark} setDark={setDark}/>
        <TodoList />
      </div>
  );
}

export default App;
