import React from 'react';
import classes from './RouteInfoModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RouteInfoModal = ({ show, onHide }) => {

    let [driverDetails, setDriverDetails] = React.useState({
        name: '',
        vehicleNo: '',
        mobileNo: ''
    });

    const handleChange = e => {
        setDriverDetails({
          ...driverDetails,
          [e.target.name]: e.target.value
        });
      };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('submitted', driverDetails);
        return false;
    }

    return (
        <Modal className={classes.RouteInfoModal} show={show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send to Driver
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={onSubmit}>
                    <div className={`row`}>
                        <div className={`col-6`}>
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
                        <div className={`col-6`}>
                            <Form.Group controlId="frmDriverName">
                                <Form.Label>Driver address</Form.Label>
                                <Form.Control type="input" placeholder="Enter name" name = "name" value={driverDetails.name} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="frmVehicleNo">
                                <Form.Label>Vehicle No.</Form.Label>
                                <Form.Control type="input" placeholder="Enter vehicle no." name = "vehicleNo" value={driverDetails.vehicleNo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="frmDriverVontact">
                                <Form.Label>Driver Mobile No.</Form.Label>
                                <Form.Control type="input" placeholder="Enter mobile no." name = "mobileNo" value={driverDetails.mobileNo} onChange={handleChange} />
                            </Form.Group>
                        </div>
                    </div>
                    <Button size="lg" className="col-12 mt-4 rsSendBtn" variant="primary" type="submit" disabled={!driverDetails}>
                        SEND
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default RouteInfoModal;
