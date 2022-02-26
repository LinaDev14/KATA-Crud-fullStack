import {useEffect, useState} from "react";
import {URL_API} from "../utils/Data";

const TodoTaskList = ({id, name}) => {

    const tasksList = [];
    const [taskList, setTaskList] = useState({list: tasksList});

    // request
    const fetchData = () => {

        // http://localhost:8080/api/tasks/todoId/{id}
        fetch(URL_API + "/tasks/todoId/" + id)
            .then((response) => response.json())
            .then((list) => {
                setTaskList({...taskList, list: list})
                //console.log(list)
            })

        /*
        try {
            const RESPONSE = await fetch(URL_API + "/todos");
            const DATA = await RESPONSE.json();

            setTodoList(DATA.data)
            console.log(DATA.data);

        } catch (err) {
            console.error(err)
        }
         */
    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <>
            <div>{name}</div>
            {
                taskList.list.map((task) => {
                    return <div key={task.id}>{task.name}</div>
                })
            }
        </>
    )
}

export {TodoTaskList}