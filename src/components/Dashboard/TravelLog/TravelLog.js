import React, {Component} from 'react';
import {
    Container, Row, Table, DropdownButton, Dropdown, Nav, InputGroup, FormControl, Button
} from "react-bootstrap";

import classes from './TravelLog.module.css';
import TripModal from "../TripModal/TripModal";

class TravelLog extends Component {
    state = {
        show:false,
        title:null
    }

    handleShow = () => {
        this.setState({show:true});
    }

    handleClose = () => {
        this.setState({show:false});
    }

    render() {
        const oneEntry = [
            {ref: "Trip Reference #1",
                date: "03rd Dec 2020",
                sTime: "03:45 PM",
                driver: "Siripala"},
            {ref: "Trip Reference #2",
                date: "03rd Dec 2020",
                sTime: "06:45 PM",
                driver: "Sirisena"},
            {ref: "Trip Reference #3",
                date: "13rd Dec 2020",
                sTime: "08:45 PM",
                driver: "Gunapala"},
            {ref: "Trip Reference #4",
                date: "23rd Dec 2020",
                sTime: "10:45 PM",
                driver: "Senapala"}
        ]

        const month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]

        return (
            <Container fluid>
                <Row>
                    <h1>Travel Log</h1><br/>
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
                        <thead style={{backgroundColor:"rgb(23, 162, 184)", color:"#FFFFFF"}}>
                        <tr>
                            <th>Reference</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Driver Name</th>
                        </tr>
                        </thead>
                        <tbody className={classes.Entry}>
                        {oneEntry.map((oneEntry,index) => (
                                <tr key={index} onClick={this.handleShow}>
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
                <TripModal showing={this.state.show} close={this.handleClose}/>
            </Container>
        )
    }
}

export default TravelLog;