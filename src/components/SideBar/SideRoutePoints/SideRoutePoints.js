import React from "react";
import {connect} from 'react-redux';

import classes from './SideRoutePoint.module.css'
import LocInput from '../../UI/Input/LocInput/LocInput';
import * as actions from "../../../store/actions";
import Form from 'react-bootstrap/Form'

const sideRoutePoints = (props) => (
    <div className={classes.SideRoutePoints}>
        <div>
            {props.markers.map((point, i) => {
                    let locationInputArray = [];
                    // Remove 1st element from rendering because it is the starting point.
                    if (i !== 0) {
                        locationInputArray.push((
                            <div className="row mx-0 form-inline" key={i}>
                                <div className={"col-4 pl-0 pr-1"}>
                                    {point.reference}
                                </div>
                                <div className={"col-8 pl-0 pr-1"}>
                                    <LocInput
                                        className={classes}
                                        data-letter={point.id}
                                        value={point.address}
                                        onSelectPoint={(location) => {
                                            props.onSelectingLocation(location, i)
                                        }
                                        }
                                        text="Route point"/>
                                </div>

                            </div>

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
