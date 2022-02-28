import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskTodo = ({modal, toggle}) => {

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Todo</ModalHeader>
            <ModalBody>

                <div className = "form-group">
                    <label>Todo Name</label>
                    <input type="text" className = "form-control" />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary">Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export {EditTaskTodo};