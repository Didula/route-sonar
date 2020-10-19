import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Button, Col, ListGroup, Modal, Row, Tab} from 'react-bootstrap';

import classes from './TripModal.module.css';
import * as actions from "../../../store/actions";

const TripModal = (props) => {

        useEffect(() => {
            props.onFetchRecentRoute(props.tripID);
        }, []);

        return (
                <Modal show={props.showing} onHide={props.close} dialogClassName={classes.Modal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trip ID : {props.tripID}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <a target="_blank" href="https://www.google.com/maps/dir/6.838563,80.0582147/Dehiwala,+Dehiwala-Mount+Lavinia/Ganelanda+Place,+Nugegoda/Savoy+Premier+-+Rajagiriya,+Sri+Jayawardenepura+Kotte/Hanwella+Rubber+Products+Ltd,+High+Level+Road/@6.8734384,79.9113153,12z/data=!3m1!4b1!4m28!4m27!1m1!4e1!1m5!1m1!1s0x3ae25b080140456d:0x2336ef2aa034913!2m2!1d79.8629683!2d6.8559485!1m5!1m1!1s0x3ae25a67c5bae4b7:0x14061e3a4db08854!2m2!1d79.899682!2d6.8665891!1m5!1m1!1s0x3ae259a496b92159:0xd7b691232433b962!2m2!1d79.8963072!2d6.9088535!1m5!1m1!1s0x3ae2534f069b6441:0x3c1de3da1dc8c0e3!2m2!1d80.0939978!2d6.8888295!3e0" >
                        <img src={modalMap} alt="Route" /></a><br/><br/> */}
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#route">
                        {props.specificRoute.map((route, index) => (
                            <Row key={index}>
                                <Col sm={3}>
                                    <ListGroup>
                                        <ListGroup.Item action href="#route">
                                            Route Details
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#delivery">
                                            Delivery Details
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#driver">
                                            Driver Details
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col sm={4}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#route">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Date</strong> {route.dateTime===null ? 'N/A' : route.dateTime }
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>Estimated Distance</strong> {route.estimatedDistance===null ? 'N/A' : route.estimatedDistance }
                                                </ListGroup.Item>
                                                {/*<ListGroup.Item>*/}
                                                {/*    <strong>Estimated Time</strong> 3 hr 57 min*/}
                                                {/*</ListGroup.Item>*/}
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#delivery">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Vehicle Type</strong> N/A
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong># of locations</strong> {route.locationsCount===null ? 'N/A' : route.locationsCount }
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#driver">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Name</strong> {route.driverName===null ? 'N/A' : route.driverName }
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>Phone</strong> {route.driverMobile===null ? 'N/A' : route.driverMobile }
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                                <Col sm={5}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#route">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Start Time</strong> {route.dateTime===null ? 'N/A' : route.dateTime }
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>Optimized Distance</strong> {route.optimizedDistance===null ? 'N/A' : route.optimizedDistance }
                                                </ListGroup.Item>
                                                {/*<ListGroup.Item>*/}
                                                {/*    <strong>Approx. Time Saved</strong> 1 hr 23 min*/}
                                                {/*</ListGroup.Item>*/}
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#delivery">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Vehicle Number</strong> {route.vehicleNo===null ? 'N/A' : route.vehicleNo }
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>Avg. distance per location</strong> N/A
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                        {/* <Tab.Pane eventKey="#driver">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <strong>Email</strong> siripala@routesonar.com
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>WhatsApp</strong> 0772 345 678
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane> */}
                                    </Tab.Content>
                                </Col>
                            </Row>
                            ))}
                        </Tab.Container>
                    </Modal.Body>
                    <br/>
                    <Modal.Footer>
                        {/* <Button variant="info">
                            Take this Route again
                        </Button> */}
                        <Button variant="danger" onClick={props.close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        )
}

const mapStateToProps = (state) => {
    return {
        specificRoute: state.dashboardSummary.specificRoute,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRecentRoute: (tripID) => dispatch(actions.fetchSpecificRouteRequest(tripID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripModal);