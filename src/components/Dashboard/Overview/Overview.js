import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Bar} from 'react-chartjs-2';
import CountUp from 'react-countup';
import {Card, CardGroup, Col, Container, Dropdown, DropdownButton, Nav, Row} from "react-bootstrap";
import * as actions from "../../../store/actions";

import Recent from '../Recent/Recent';

import classes from './Overview.module.css';

const Overview = (props) => {

    const customerId = useSelector(state => state.auth.customerId);

    useEffect(() => {
        props.dispatchGetDashboardSummart();
    }, []);

    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: 'Avg orders delivered',
            backgroundColor: 'rgba(23, 162, 184,0.5)',
            borderColor: 'rgba(23, 162, 184,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(23, 162, 184,1)',
            hoverBorderColor: 'rgba(23, 162, 184,0.5)',
            data: [65, 59, 80, 81, 56, 55, 40, 12]
        }, {
            label: 'Avg distance traveled (km)',
            backgroundColor: 'rgba(0, 123, 255,0.5)',
            borderColor: 'rgba(0, 123, 255,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 123, 255,1)',
            hoverBorderColor: 'rgba(0, 123, 255,0.5)',
            data: [135, 139, 60, 71, 142, 123, 67, 35]
        }]
    };

    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]


    return (
        <Container fluid className={classes.Overview}>
            <Row>
                <h1>Overview</h1><br/>
            </Row>
            <Row className={classes.Period}>
                <Nav variant="pills" defaultActiveKey="today" >
                    <Nav.Item>
                        <Nav.Link eventKey="today" href="/">Today</Nav.Link>
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
            </Row>
            <Row className={classes.Data}>
                <Col sm={4}>
                    <Row>
                        <CardGroup className={classes.DataItem}>
                            <Card border="info">
                                <Card.Title>Distance<br/>Covered</Card.Title>
                            </Card>
                            <Card bg='info' text='light'>
                                <Card.Title><strong><CountUp end={275}/></strong> &nbsp;km</Card.Title>
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>
                        <CardGroup className={classes.DataItem}>
                            <Card border="info">
                                <Card.Title>Number of<br/>Locations</Card.Title>
                            </Card>
                            <Card bg='info' text='light'>
                                <Card.Title><strong><CountUp end={Number(props.totalLocations)}/></strong></Card.Title>
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>
                        <CardGroup className={classes.DataItem}>
                            <Card border="info">
                                <Card.Title>Avg Locations<br/>per Route</Card.Title>
                            </Card>
                            <Card bg='info' text='light'>
                                <Card.Title><strong><CountUp end={Number(props.totalTrips)}/></strong></Card.Title>
                            </Card>
                        </CardGroup>
                    </Row>
                </Col>
                <Col>
                    <Bar data={data}/>
                </Col>
            </Row>
            <br/>
            <hr/>
            <br/>
            <Row>
                <h5>Recent Routes</h5>
            </Row>
            <Row>

            </Row>
            <Recent/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        totalLocations: state.dashboardSummary.totalLocations,
        totalTrips: state.dashboardSummary.totalTrips,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchGetDashboardSummart: () => dispatch(actions.dashboardSummaryRequest(props.customerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);