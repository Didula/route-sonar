import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {clearDriverState, sendDriverDetails} from '../../store/actions/driverActions';
import classes from './RouteInfoModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RouteInfoModal = (props) => {

    useEffect(() => {
        props.onLoadClearDriverState();
    }, [])

    // form state
    let [driverDetails, setDriverDetails] = React.useState({
        name: '',
        vehicleNo: '',
        mobileNo: '',
        errors: []
    });

    // submit button state
    let [submitBtnEnabled, setSubmitBtnEnabled] = React.useState(true);

    // On change form inputs
    const handleChange = e => {
        setDriverDetails({
            ...driverDetails,
            [e.target.name]: e.target.value
        });
    };

    // On submit the form
    const handleSubmit = (event) => {
        setSubmitBtnEnabled(false);
        event.preventDefault();

        //VALIDATE
        var errors = [];
        setDriverDetails({
            ...driverDetails,
            errors: []
        });

        //firstname
        if (driverDetails.name === "" || driverDetails.name === undefined) {
            errors.push("name");
        }

        //vehicle no
        const exprVehicleNo = /[0-9a-zA-Z]{2,3}-[0-9]{4}/;
        var validVehicleNo = exprVehicleNo.test(String(driverDetails.vehicleNo).toLowerCase());
        if (!validVehicleNo) {
            errors.push("vehicleNo");
        }

        //mobile no
        const exprMobileNo = /[0-9]{9}/;
        var validMobileNo = exprMobileNo.test(String(driverDetails.mobileNo).toLowerCase());
        if (!validMobileNo) {
            errors.push("mobileNo");
        }

        setDriverDetails({
            ...driverDetails,
            errors: errors
        });

        if (errors.length > 0) {
            setSubmitBtnEnabled(true);
            return false;
        } else {
            props.onClickingSendButton(driverDetails, props.customerId);
            props.onHide(true);
        }
        
    }

    const hasError = (key) => {
        return driverDetails.errors.indexOf(key) !== -1;
    }

    return (
        <Modal className={classes.RouteInfoModal} show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send to Driver
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className={`row`}>
                        <div className={`col-4`}>
                            <Form.Group controlId="frmDriverName">
                                <Form.Label>Driver Name</Form.Label>
                                <Form.Control type="input" placeholder="Enter name" name = "name" value={driverDetails.name} onChange={handleChange} />
                                <Form.Control.Feedback className={ hasError("name") ? "inline-errormsg" : "hidden"} type="invalid">Please provide a valid name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="frmVehicleNo">
                                <Form.Label>Vehicle No.</Form.Label>
                                <Form.Control type="input" placeholder="Enter vehicle no." name = "vehicleNo" value={driverDetails.vehicleNo} onChange={handleChange} />
                                <Form.Control.Feedback className={ hasError("vehicleNo") ? "inline-errormsg" : "hidden"} type="invalid">Please provide a valid vehicle no.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="frmDriverVontact">
                                <Form.Label>Driver Mobile No.</Form.Label>
                                <Form.Control type="number" placeholder="Enter mobile no." name = "mobileNo" value={driverDetails.mobileNo} onChange={handleChange} />
                                <Form.Control.Feedback className={ hasError("mobileNo") ? "inline-errormsg" : "hidden"} type="invalid">Please provide a valid contact no.</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className={`col-1`}></div>
                        <div className={`col-7`}>
                            <span>Start: {props.originPoint.address}</span>
                            <ul>
                                {props.wayPointTraversalOrder.map((location, index) =>
                                    <li key={index}>
                                        <span> {location.address} </span> - <span>{location.reference}</span>
                                    </li>
                                )}
                            </ul>
                            <span>End: {props.destinationPoint.address}</span>
                        </div>
                    </div>
                    <Button size="md" className="col-2 mt-4 rsSendBtn" variant="primary" type="submit" disabled={!submitBtnEnabled}>
                        SEND
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        locationArray: ownProps.show ? state.map.markers : '',
        wayPointTraversalOrder: state.map.wayPointTraversalOrder,
        originPoint: state.map.startLocation,
        destinationPoint: state.map.endLocation,
        customerId: state.auth.customerId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickingSendButton: (driverDetails, customerId) => dispatch(sendDriverDetails(driverDetails, customerId)),
        onLoadClearDriverState: () => dispatch(clearDriverState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoModal);
