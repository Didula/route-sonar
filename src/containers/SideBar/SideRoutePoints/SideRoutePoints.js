import React from "react";
import classes from './SideRoutePoint.module.css'
import LocInput from '../../../UI elements/LocInput/LocInput';
import AddRoute from "../../../UI elements/AddRoute/AddRoute";

const sideRoutePoints = (props) => (
    <div>
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
                            onSelectPoint={(location) =>
                                props.onSelectLocation(prevMarkers => {
                                    // updating respective element.
                                    let markers = [...prevMarkers];
                                    markers[i] = {address: location.address, coordinates:location.coordinates, placeId: location.placeId };
                                    return markers;
                                })
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

export default sideRoutePoints;