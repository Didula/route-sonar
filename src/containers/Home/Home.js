import React, {useState, useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {useLoadScript} from "@react-google-maps/api";

import FBox from "../../components/FloatingBox/FloatingBox";
import SideBar from "../../components/SideBar/SideBar";
import Auxi from "../../hoc/Auxi";
import Header from "../../components/UI/Header/Header";
import Map from "../../components/Map/Map";
import RouteToast from "../../components/RouteToast/RouteToast";
import * as actions from "../../store/actions";

const LIBRARIES = ["places"];

const Home = (props) => {

    const isOptimized = useSelector(state => state.map.isOptimized);

    useEffect(() => {
        if (isOptimized){
            setShowToast(true);
        }
    });

    // Toggle Route Toast Component
    const [showToast, setShowToast] = React.useState(false);
    const onClick = () => setShowToast(true);
    const [toggleBoxes, setToggleBoxes] = useState(false);
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES
    });
    if (loadError) return "Error Loading error";
    if (!isLoaded) return "Loading Maps";


    // todo this also has to be taken to state management
    const addLocationClickHandler = () => {
        if (props.startLocation) {
            setToggleBoxes(!toggleBoxes);
        }
    }

    let inputComponent;
    if (!toggleBoxes) {
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
            { !toggleBoxes && <Header/>}
            {inputComponent}
            <Map/>
            { showToast ? <RouteToast /> : null }
        </Auxi>
    );
}

const mapStateToProps = (state) => {
    return {
        startLocation: state.map.startLocation,
        markers: state.map.markers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingStartPoint: (startPoint) => {
            dispatch(actions.setStartPoint(startPoint));
            dispatch (actions.setCurrentLocationPoint(startPoint.coordinates));
        },
        onAddingBlankRoutePoint: () => dispatch(actions.addBlankWayPoint()),
        onOptimizeRoutes: () => dispatch(actions.prepareDirectionServiceOptions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
