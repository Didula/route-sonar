import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {useLoadScript} from "@react-google-maps/api";
import {Spinner} from 'react-bootstrap';

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
        return () => {
            // on component destroy.
            props.clearDriverState()
        }
    },[])

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

    const handleOptimizationClick = () => {
        props.onOptimizeRoutes();
        if (props.isAuthenticated)
            props.onSaveApiConsumption(props.customerId, props.markers.length - 1, props.markers.length, 1);
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
            onOptimizeRoutes={handleOptimizationClick}
            showToast={showToast}
            setShowToast={setShowToast}
            markers={props.markers}/>
    }

    return (
        <Auxi>
            {!props.isMapLoading && inputComponent}
            {props.isMapLoading && <Spinner style={{position:'absolute',display:'block',top:'50%',left:'50%'}} animation="border" variant="danger"/>}
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
        markers: state.map.markers,
        customerId: state.auth.customerId,
        isAuthenticated: state.auth.userId !== null,
        isMapLoading: state.map.loading
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
        onSaveApiConsumption: (customerId, placesNumber, geoCodeNumber, directionsNumber) => dispatch(actions.saveApiConsumption(customerId, placesNumber, geoCodeNumber, directionsNumber)),
        onClickingAddLocations: (value) => dispatch(actions.setSidePanelOpen(value)),
        clearDriverState:() => dispatch(actions.clearDriverState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
