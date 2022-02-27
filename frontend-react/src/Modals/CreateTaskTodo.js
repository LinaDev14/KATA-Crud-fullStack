import React, {useState} from 'react'

//import components react modal
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const CreateTaskTodo = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }

    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Todo</ModalHeader>
            <ModalBody>

                <div className = "form-group">
                    <label>Todo Name</label>
                    <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export {CreateTaskTodo}