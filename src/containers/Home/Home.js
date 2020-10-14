import React, {useEffect, useState} from "react";
import {connect, useSelector} from "react-redux";
import {useLoadScript} from "@react-google-maps/api";

import FBox from "../../components/FloatingBox/FloatingBox";
import SideBar from "../../components/SideBar/SideBar";
import Auxi from "../../hoc/Auxi";
import Map from "../../components/Map/Map";
import Notification from "../../components/Notification/Notification";
import * as actions from "../../store/actions";

const LIBRARIES = ["places"];

const Home = (props) => {

    const isOptimized = useSelector(state => state.map.isOptimized);
    const driverDetailsSent = useSelector(state => state.driver.list);

    useEffect(() => {
        setShowNotification(false);
        if (isOptimized) {
            setShowToast(true);
        }
        if (driverDetailsSent === 200) {
            setShowNotification(true);
        }
    });

    // Show hide notification after interacting with driver details pop-up
    let [showNotification, setShowNotification] = React.useState(false);

    // Toggle Route Toast Component
    const [showToast, setShowToast] = React.useState(false);
    const onClick = () => setShowToast(true);
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDgHbb7ppWaPN3CoPq6zEUjy7TGX0d3QpY',
        libraries: LIBRARIES
    });
    if (loadError) return "Error Loading error";
    if (!isLoaded) return "Loading Maps";


    // todo this also has to be taken to state management
    const addLocationClickHandler = () => {
        if (props.startLocation) {
            props.onClickingAddLocations(!props.isSidePanelOpen);
        }
    }

    let inputComponent;
    if (!props.isSidePanelOpen) {
        inputComponent = <FBox
            onStartPointSelect={props.onSelectingStartPoint}
            onAddLocationClick={addLocationClickHandler}/>
    } else {
        inputComponent = <SideBar
            selectedStartPoint={props.startLocation.address}
            onStartPointSelect={props.onSelectingStartPoint}
            onAddRoutePoint={props.onAddingBlankRoutePoint}
            onOptimizeRoutes={props.onOptimizeRoutes}
            showToast={showToast}
            setShowToast={setShowToast}
            markers={props.markers}/>
    }

    return (
        <Auxi>
            {inputComponent}
            <Map/>
            {/* { showToast ? <RouteToast /> : null } */}
            {showNotification ? <Notification/> : ''}
        </Auxi>
    );
}

const mapStateToProps = (state) => {
    return {
        isSidePanelOpen: state.home.isSidePanelOpen,
        startLocation: state.map.startLocation,
        markers: state.map.markers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingStartPoint: (startPoint) => {
            dispatch(actions.setStartPoint(startPoint));
            dispatch(actions.setCurrentLocationPoint(startPoint.coordinates));
        },
        onAddingBlankRoutePoint: () => dispatch(actions.addBlankWayPoint()),
        onOptimizeRoutes: () => dispatch(actions.prepareDirectionServiceOptions()),
        onClickingAddLocations: (value) => dispatch(actions.setSidePanelOpen(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
