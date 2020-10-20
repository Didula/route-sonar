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
                            
                                <Row key={i}>
                                    <Col sm={3} style={{
                                        lineHeight: "50px", overflow: "hidden",
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {point.reference}
                                    </Col>
                                    <Col sm={9}>
                                        <LocInput
                                            hoverClose
                                            onClose={() => props.onDeletePoint(point)}
                                            data-letter={point.id}
                                            value={point.address}
                                            onSelectPoint={(location) => {
                                                props.onSelectingLocation(location, i)
                                            }
                                            }
                                            text="Route point"/>
                                    </Col>
                                </Row>

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
        },
        onDeletePoint: (point) => dispatch(actions.removeWayPoint(point))
    }
}

export default connect(null, mapDispatchToProps)(sideRoutePoints);
