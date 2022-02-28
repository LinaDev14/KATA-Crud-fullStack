import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TodoContextProvider} from "./contexts/TodoContextProvider";
import {TaskContextProvider} from "./contexts/TaskContextProvider";


ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


