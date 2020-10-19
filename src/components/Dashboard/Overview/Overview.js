import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import CountUp from 'react-countup';
import { Card, CardGroup, Col, Container, Dropdown, DropdownButton, Nav, Row } from "react-bootstrap";
import * as actions from "../../../store/actions";

import Recent from '../Recent/Recent';

import classes from './Overview.module.css';

const Overview = (props) => {

    let todayDate = new Date();
    let startDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
    let endDate = new Date();

    useEffect(() => {
        props.dispatchGetDashboardSummart(props.customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
        props.dispatchWeeklyOrders(props.customerId);
    }, []);

    

    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const currentMonth = todayDate.getMonth();
    const filteredMonths = month.slice(0, currentMonth + 1);

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
        props.dispatchGetDashboardSummart(props.customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
    }

    const getDateRangeForMonth = (monthIndex) => {
        const firstDay = new Date(todayDate.getFullYear(), monthIndex.index, 1);
        const lastDay = new Date(todayDate.getFullYear(), monthIndex.index + 1, 0);
        props.dispatchGetDashboardSummart(props.customerId, firstDay.toLocaleDateString('en-CA'), lastDay.toLocaleDateString('en-CA'));
    }

    return (
        <Container fluid className={classes.Overview}>
            <Row>
                <h1>Overview</h1><br />
            </Row>
            <Row className={classes.Period}>
                <Nav variant="pills" defaultActiveKey="today" >
                    <Nav.Item onClick={() => { getDateRange('today') }}>
                        <Nav.Link eventKey="today">Today</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => { getDateRange('7') }}>
                        <Nav.Link eventKey="7-days">Last 7 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => { getDateRange('28') }}>
                        <Nav.Link eventKey="28-days">Last 28 days</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => { getDateRange('year') }}>
                        <Nav.Link eventKey="year">Last Year</Nav.Link>
                    </Nav.Item>
                </Nav>
                <DropdownButton id="Select Month" title="Select Month">
                    {filteredMonths.map((month, index) => (
                        <Dropdown.Item href="#/action-2" key={index} onClick={() => { getDateRangeForMonth({ index }) }}>{month}</Dropdown.Item>))}
                </DropdownButton>
            </Row>
            <Row className={classes.Data}>
                <Col sm={4}>
                    <CardGroup className={classes.DataItem}>
                        <Card border="info">
                            <Card.Title>Distance<br />Covered</Card.Title>
                        </Card>
                        <Card bg='info' text='light'>
                            <Card.Title><strong><CountUp end={Number(props.distanceCovered)} /></strong> &nbsp;km</Card.Title>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={4}>
                    <CardGroup className={classes.DataItem}>
                        <Card border="info">
                            <Card.Title>Number of<br />Locations</Card.Title>
                        </Card>
                        <Card bg='info' text='light'>
                            <Card.Title><strong><CountUp end={Number(props.totalLocations)} /></strong></Card.Title>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={4}>
                    <CardGroup className={classes.DataItem}>
                        <Card border="info">
                            <Card.Title>Avg Locations<br />per Route</Card.Title>
                        </Card>
                        <Card bg='info' text='light'>
                            <Card.Title><strong><CountUp end={Number(props.totalTrips)} /></strong></Card.Title>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <Bar data={props.weeklyOrders}/>
                </Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row>
                <h5>Recent Routes</h5>
            </Row>
            <Row>

            </Row>
            <Recent />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        totalLocations: state.dashboardSummary.totalLocations,
        totalTrips: state.dashboardSummary.totalTrips,
        distanceCovered: state.dashboardSummary.distanceCovered,
        customerId: state.auth.customerId,
        weeklyOrders: state.dashboardSummary.weeklySummary
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchGetDashboardSummart: (customerId, startDate, endDate) => dispatch(actions.dashboardSummaryRequest(customerId, startDate, endDate)),
        dispatchWeeklyOrders: (customerId) => dispatch(actions.fetchWeeklySummaryRequest(customerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);