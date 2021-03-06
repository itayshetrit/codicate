import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteModal = (props) => {

    const handleClose = () => { props.setBeerToDelete(null); };
    const runFunc = () => {
        props.func(props.id);
        handleClose();
    }
    return (
        <Modal show={true} onHide={handleClose} animation={true}>
            <Modal.Header style={{ background: "white", display: "flex", justifyContent: "center" }}>
                <Modal.Title>Delete Beer</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "white", textAlign: "center" }}>Are you sure?</Modal.Body>
            <Modal.Footer style={{ background: "white", justifyContent: "space-around" }}>
                <Button variant="dark" onClick={handleClose}>
                    No
                </Button>
                <Button variant="warning" onClick={() => runFunc()}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteModal;