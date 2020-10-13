import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import classes from './SideRoutePoints.module.css'
import LocInput from '../../UI/Input/LocInput/LocInput';
import * as actions from "../../../store/actions";

const sideRoutePoints = (props) => (
    <div className={classes.SideRoutePoints}>
        <div>
            {props.markers.map((point, i) => {
                    let locationInputArray = [];
                    // Remove 1st element from rendering because it is the starting point.
                    if (i !== 0) {
                        locationInputArray.push((
                            <Container fluid key={i}>
                                <Row>
                                    <Col sm={3} style={{
                                        lineHeight: "50px", overflow: "hidden",
                                        'white-space': 'nowrap'
                                    }}>
                                        {point.reference}
                                    </Col>
                                    <Col sm={9}>
                                        <LocInput
                                            hoverClose
                                            data-letter={point.id}
                                            value={point.address}
                                            onSelectPoint={(location) => {
                                                props.onSelectingLocation(location, i)
                                            }
                                            }
                                            text="Route point"/>
                                    </Col>
                                </Row>
                            </Container>

                        ))
                    }
                    return locationInputArray;
                }
            )}
        </div>
        {/*        <AddRoute addPointClick={props.onAddAnotherPoint}/>*/}
    </div>
);


const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingLocation: (point, index) => {
            dispatch(actions.updateWayPoint(point, index));
            dispatch(actions.setCurrentLocationPoint(point.coordinates));
        }
    }
}

export default connect(null, mapDispatchToProps)(sideRoutePoints);
