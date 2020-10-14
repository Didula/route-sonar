import React from 'react';
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {Doughnut} from "react-chartjs-2";

import classes from './Settings.module.css';

const settings = () => {
    const data = {
        labels: [
            'Used',
            'Remaining'
        ],
        datasets: [{
            data: [3000, 2000],
            backgroundColor: [
                '#FF6384',
                '#36A2EB'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB'
            ]
        }]
    };

    return (
        <Container fluid>
            <Row>
                <h1>Settings</h1><br/>
            </Row>
            <Row className={classes.Contents}>
                <Col className={classes.Box}>
                    <Card className="text-center">
                        <Card.Header className={classes.Headers}>Change Password</Card.Header>
                        <Card.Body>
                            <InputGroup>
                                <FormControl type="password" placeholder="Current Password"/>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <FormControl type="password" placeholder="New Password"/>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <FormControl type="password" placeholder="Confirm New Password"/>
                            </InputGroup>
                            <br/>
                            <Button style={{float:"left"}}>Change Password</Button>&nbsp;
                            <Button variant="warning">Reset</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={classes.Box}>
                    <Card className="text-center">
                        <Card.Header className={classes.Headers}>Usage Meter</Card.Header>
                        <Card.Body>
                            <Doughnut data={data}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default settings;