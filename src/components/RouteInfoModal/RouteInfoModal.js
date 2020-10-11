import React from 'react';
import {useDispatch} from 'react-redux';
import {sendDriverDetails} from '../../store/actions/driverActions';
import classes from './RouteInfoModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";

const RouteInfoModal = (props) => {

    const dispatch = useDispatch();

    // dispatching action
    const submitData = () => {
        dispatch(sendDriverDetails(driverDetails));
    }

    // form state
    let [driverDetails, setDriverDetails] = React.useState({
        name: '',
        vehicleNo: '',
        mobileNo: '',
        errors: []
    });

    const hasError = (key) => {
        return driverDetails.errors.indexOf(key) !== -1;
      }

    // On change form inputs
    const handleChange = e => {
        
            setDriverDetails({
                ...driverDetails,
                [e.target.name]: e.target.value
              });
    };

    // On submit the form
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('submitted', driverDetails);
        return false;
    }

    return (
        <Modal className={classes.RouteInfoModal} show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
                                {props.locationArray.map((location, index) => 
                                    <li key={index}>
                                        <span> {location.address} </span> - <span>Ref</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={`col-6`}>
                            <Form.Group controlId="frmDriverName">
                                <Form.Label>Driver Name</Form.Label>
                                <Form.Control required type="input" placeholder="Enter name" name = "name" value={driverDetails.name} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="frmVehicleNo">
                                <Form.Label>Vehicle No.</Form.Label>
                                <Form.Control required type="input" placeholder="Enter vehicle no." name = "vehicleNo" value={driverDetails.vehicleNo} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a valid vehicle no.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="frmDriverVontact">
                                <Form.Label>Driver Mobile No.</Form.Label>
                                <Form.Control required type="number" placeholder="Enter mobile no." name = "mobileNo" value={driverDetails.mobileNo} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a valid contact no.</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <Button size="lg" className="col-12 mt-4 rsSendBtn" variant="primary" type="submit" disabled={!driverDetails} onClick = {submitData}>
                        SEND
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        locationArray: ownProps.show ? state.map.markers : ''
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickingSendButton: () => dispatch(actions.addBlankWayPoint())
    }
}

export default connect(mapStateToProps)(RouteInfoModal);
