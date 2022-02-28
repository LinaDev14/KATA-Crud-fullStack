import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, edit}) => {

    const [taskName, setTaskName] = useState('');

    const handleChange = (e) => {

        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        edit(tempObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>

                <div className = "form-group">
                    <label>Task Name</label>
                    <input input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export {EditTask};