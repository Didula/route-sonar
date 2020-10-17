import React, { Component, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Row, Table } from "react-bootstrap";

import classes from './TravelLog.module.css';
import TripModal from "../TripModal/TripModal";
import * as actions from "../../../store/actions";

const TravelLog = (props) => {

    const customerId = useSelector(state => state.auth.customerId);
    let todayDate = new Date();
    let startDate = new Date(todayDate.setDate(todayDate.getDate()-1));
    let endDate = new Date();

    let [show, setShow] = React.useState(false);

    useEffect(() => {
        props.dispatchTravelLogRequest();
    }, []);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    const getDateRange = (input) => {
        const currentDate = new Date();
        switch (input) {
            case 'today':
                startDate = new Date();
                startDate = new Date(startDate.setDate(startDate.getDate() - 1));
                endDate = currentDate;
                props.dispatchTravelLogRequest(customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
                break;
            case '7':
                startDate = new Date();
                startDate = new Date(startDate.setDate(startDate.getDate() - 7));
                endDate = currentDate;
                props.dispatchTravelLogRequest(customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
                break;
            case '28':
                startDate = new Date();
                startDate = new Date(startDate.setDate(startDate.getDate() - 28));
                endDate = currentDate;
                props.dispatchTravelLogRequest(customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
                break;
            case 'year':
                startDate = new Date(new Date().getFullYear() - 1, 0, 1);
                endDate = new Date(startDate.getFullYear(), 11, 31);
                props.dispatchTravelLogRequest(customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
                break;
            default:
                break;
        }
    }

    return (
        <Container fluid>
            <Row>
                <h1>Travel Log</h1><br />
            </Row>
            <Row className={classes.Period}>
                <Nav variant="pills" defaultActiveKey="today" >
                    <Nav.Item onClick = {() => { getDateRange('today')}}>
                        <Nav.Link eventKey="today" href="#">Today</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick = {() => { getDateRange('today')}}>
                        <Nav.Link eventKey="7-days">Last 7 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick = {() => { getDateRange('today')}}>
                        <Nav.Link eventKey="28-days">Last 28 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick = {() => { getDateRange('today')}}>
                        <Nav.Link eventKey="year">Last Year</Nav.Link>
                    </Nav.Item>
                </Nav>
                <DropdownButton id="Select Month" title="Select Month">
                    {month.map((month, index) => (
                        <Dropdown.Item href="#/action-2" key={index}>{month}</Dropdown.Item>))}
                </DropdownButton>
                <InputGroup className={classes.Search}>
                    <FormControl
                        placeholder="Search"
                    />
                    <InputGroup.Append>
                        <Button variant="info">Go</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            <Row>
                <Table striped responsive hover>
                    <thead style={{ backgroundColor: "rgb(23, 162, 184)", color: "#FFFFFF" }}>
                        <tr>
                            <th>Reference</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Driver Name</th>
                        </tr>
                    </thead>
                    <tbody className={classes.Entry}>
                        {props.logList.map((logItem, index) => (
                            <tr key={index} onClick={handleShow}>
                                <td>{logItem.tripID}</td>
                                <td>{logItem.dateTime}</td>
                                <td>{logItem.driver_id}</td>
                                <td>{logItem.name}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </Row>
            <TripModal showing={show} close={handleClose} />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        logList: state.travelLog.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchTravelLogRequest: (customerId, startDate, endDate) => dispatch(actions.travelLogRequest(customerId, startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelLog);