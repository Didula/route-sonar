import React from "react";
import LocInput from '../../../UI elements/LocInput/LocInput';
import AddRoute from "../../../UI elements/AddRoute/AddRoute";

const sideRoutePoints = (props) => (
    <div>
        <div>
            {props.routePointInputFields.map(point => (
                <LocInput
                    key={point.id}
                    data-letter={point.id}
                    value={point.value}
                    onSelectPoint={props.onLocationSelect}
                    text="Route point"/>
            ))}
        </div>
        <AddRoute addPointClick={props.onAddAnotherPoint}/>
    </div>
);

export default sideRoutePoints;