import React, { Component, useEffect } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Row, Table } from "react-bootstrap";

import classes from './TravelLog.module.css';
import TripModal from "../TripModal/TripModal";
import * as actions from "../../../store/actions";

const TravelLog = (props) => {

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

    return (
        <Container fluid>
            <Row>
                <h1>Travel Log</h1><br />
            </Row>
            <Row className={classes.Period}>
                <Nav variant="pills" defaultActiveKey="today" >
                    <Nav.Item>
                        <Nav.Link eventKey="today" href="#">Today</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="7-days">Last 7 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="28-days">Last 28 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
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
                        {props.logList.map((oneEntry, index) => (
                            <tr key={index} onClick={handleShow}>
                                <td>{oneEntry.ref}</td>
                                <td>{oneEntry.date}</td>
                                <td>{oneEntry.sTime}</td>
                                <td>{oneEntry.driver}</td>
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
        dispatchTravelLogRequest: () => dispatch(actions.travelLogRequest(5))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelLog);