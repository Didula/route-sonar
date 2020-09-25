import React from "react";
import {connect} from 'react-redux';

import classes from './SideRoutePoint.module.css'
import LocInput from '../../../components/UI/Input/LocInput/LocInput';
import AddRoute from "../../../components/UI/Buttons/AddRoute/AddRoute";
import * as actions from "../../../store/actions";

const sideRoutePoints = (props) => (
    <div className={classes.SideRoutePoints}>
        <div>
            {props.markers.map((point,i) => {
                let locationInputArray = [];
                // Remove 1st element from rendering because it is the starting point.
                if(i !== 0){
                    locationInputArray.push((
                        <LocInput
                            className={classes}
                            key={i}
                            data-letter={point.id}
                            value={point.value}
                            onSelectPoint={(location) => {
                                props.onSelectingLocation(location,i)
                            }
                            }
                            text="Route point"/>
                    ))
                }
                return locationInputArray;
            }
            )}
        </div>
        <AddRoute addPointClick={props.onAddAnotherPoint}/>
    </div>
);


const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingLocation: (point, index) => {
            dispatch (actions.updateWayPoint(point, index));
            dispatch (actions.setCurrentLocationPoint(point.coordinates));
        }
    }
}

export default connect(null, mapDispatchToProps)(sideRoutePoints);
