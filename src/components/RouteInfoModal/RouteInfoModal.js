import React from 'react';
import classes from './RouteInfoModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RouteInfoModal = ({show, onHide}) => {

    return (
        <Modal className = {classes.RouteInfoModal} show={show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send to Driver
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className = {`row`}>
                    <div className = {`col-6`}>
                        <ul>
                            <li>
                                <span> Location 1 </span> - <span>Ref</span>
                            </li>
                            <li>
                                <span> Location 1 </span> - <span>Ref</span>
                            </li>
                            <li>
                                <span> Location 1 </span> - <span>Ref</span>
                            </li>
                            <li>
                                <span> Location 1 </span> - <span>Ref</span>
                            </li>
                            <li>
                                <span> Location 1 </span> - <span>Ref</span>
                            </li>
                        </ul>
                    </div>
                    <div className = {`col-6`}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Driver</Form.Label>
                            <Form.Control as="select">
                            <option>Driver 1</option>
                            <option>Driver 2</option>
                            <option>Driver 3</option>
                            <option>Driver 4</option>
                            <option>Driver 5</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <Button size="lg" className="col-12 mt-4 rsSendBtn" variant="primary" type="submit">
                    SEND
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default RouteInfoModal;
