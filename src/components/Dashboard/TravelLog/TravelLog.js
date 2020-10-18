import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Nav, Row, Table } from "react-bootstrap";

import classes from './TravelLog.module.css';
import TripModal from "../TripModal/TripModal";
import * as actions from "../../../store/actions";

const TravelLog = (props) => {

    // const customerId = useSelector(state => state.auth.customerId);
    let todayDate = new Date();
    let startDate = new Date(todayDate.setDate(todayDate.getDate()-1));
    let endDate = new Date();

    let [show, setShow] = React.useState(false);

    useEffect(() => {
        props.dispatchTravelLogRequest(props.customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
    }, []);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentMonth = todayDate.getMonth();
    const filteredMonths = month.slice(0,currentMonth+1);

    const getDateRange = (input) => {
        startDate = new Date();
        endDate = new Date();
        switch (input) {
            case 'today':
                startDate = new Date(startDate.setDate(startDate.getDate() - 1));
                break;
            case '7':
                startDate = new Date(startDate.setDate(startDate.getDate() - 7));
                break;
            case '28':
                startDate = new Date(startDate.setDate(startDate.getDate() - 28));
                break;
            case 'year':
                startDate = new Date(new Date().getFullYear() - 1, 0, 1);
                endDate = new Date(startDate.getFullYear(), 11, 31);
                break;
            default:
                break;
        }
        props.dispatchTravelLogRequest(props.customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
    }

    const getDateRangeForMonth = (monthIndex) => {
        const firstDay = new Date(todayDate.getFullYear(), monthIndex.index, 1);
        const lastDay = new Date(todayDate.getFullYear(), monthIndex.index + 1, 0);
        props.dispatchTravelLogRequest(props.customerId, firstDay.toLocaleDateString('en-CA'), lastDay.toLocaleDateString('en-CA'));
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
                    <Nav.Item onClick = {() => { getDateRange('7')}}>
                        <Nav.Link eventKey="7-days">Last 7 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick = {() => { getDateRange('28')}}>
                        <Nav.Link eventKey="28-days">Last 28 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick = {() => { getDateRange('year')}}>
                        <Nav.Link eventKey="year">Last Year</Nav.Link>
                    </Nav.Item>
                </Nav>
                <DropdownButton id="Select Month" title="Select Month">
                    {filteredMonths.map((month, index) => (
                        <Dropdown.Item href="#/action-2" key={index} onClick = {() => { getDateRangeForMonth({index})}}>{month}</Dropdown.Item>))}
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
                                <td>{logItem.date}</td>
                                <td>{logItem.time}</td>
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
        customerId: state.auth.customerId
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchTravelLogRequest: (customerId, startDate, endDate) => dispatch(actions.travelLogRequest(customerId, startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelLog);