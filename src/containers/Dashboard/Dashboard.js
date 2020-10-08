import React from 'react';
import {Container , Row , Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import SidePanel from '../../components/Dashboard/SidePanel/SidePanel';
import AccIcon from '../../components/Dashboard/AccIcon/AccIcon';
import Overview from '../../components/Dashboard/Overview/Overview';
import TravelLog from '../../components/Dashboard/TravelLog/TravelLog';
import Settings from '../../components/Dashboard/Settings/Settings';

import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3} className={classes.SidePanel} fixed='top'><SidePanel /></Col>
                <Col className={classes.Content}>
                    <Switch>
                        <Route path="/dashboard" exact component={Overview}/>
                        <Route path="/dashboard/travel-log" component={TravelLog}/>
                        <Route path="/dashboard/settings" component={Settings}/>
                    </Switch>
                </Col>
            </Row>
            <AccIcon/>
        </Container>
    )
}


export default dashboard;