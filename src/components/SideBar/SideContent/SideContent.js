import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";

import classes from "./SideContent.module.css";
import LocInput from '../../UI/Input/LocInput/LocInput';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from "../../../store/actions";


let autoComplete;
const latLngRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g

const FREE_LOCATIONS_NUMBER = 6;
const SideContent = (props) => {

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    const handleLocationInput = (event) => {
        setQuery(event.target.value);
    }

    const handleReferenceInput = (event) => {
        props.setCurrentReference(event.target.value);
    }

    function handleScriptLoad(updateQuery, autoCompleteRef) {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            {componentRestrictions: {country: "lk"}}
        );
        autoComplete.setFields(["formatted_address", "place_id", "geometry"]);
        autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(updateQuery)
        );
    }

    async function handlePlaceSelect(updateQuery) {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        if (!query) {
            let matchResult = addressObject.name.match(latLngRegex);
            if (matchResult && matchResult.length > 0) {
                // POST call to get place_id
                // todo Find a way to minimize cost by fetching only the place_id
                props.onLatitudeLongitudeEntry(matchResult[0])
                // try to separate latitude and longitude from DD string.
                let degreeDecimalLatLng = matchResult[0].split(',');
                let location = {
                    lat: degreeDecimalLatLng[0],
                    lng: degreeDecimalLatLng[1]
                }
                props.setCurrentWayPoint(location);
                updateQuery(matchResult[0]);
            } else {
                // if location is not selected from suggestions, reset the input.
                updateQuery('');
            }
        } else {
            // successful google suggestion selection.
            updateSideContentStore(addressObject.place_id, addressObject.geometry.location.toJSON(), query);
            updateQuery(query);
        }
    }

    const updateSideContentStore = (placeId, location, address) => {
        props.setCurrentPlaceId(placeId);
        props.setCurrentWayPoint(location);
        props.setCurrentAddress(address);
    }

    function addPoint() {
        let wayPoint = {
            placeId: props.currentPlaceId,
            coordinates: props.currentWayPoint,
            address: props.currentAddress,
            reference: props.currentReference
        }
        props.onAddingRoutePoint(wayPoint)
        props.resetForm();
        // setting query also empty separately since it is not managed through the store. will be moved in the future.
        setQuery('');
    }

    const addPointHandler = (event) => {
        event.preventDefault();
        if (props.markers.length <= FREE_LOCATIONS_NUMBER) {
            addPoint();
        } else if (props.markers.length > FREE_LOCATIONS_NUMBER && props.isAuthenticated) {
            addPoint();
        } else {
            props.setLoginModalOpen(true);
        }
    }


    useEffect(() => {
        handleScriptLoad(setQuery, autoCompleteRef);
    }, []);

    return (
        <div>
            <div className={classes.inputForm}>
                <Form className="py-2" onSubmit={addPointHandler}>
                    <span>Enter next destination and reference point</span>
                    <div className="row mx-0 form-inline">
                        <Form.Group className="col-3 pl-0 pr-1" controlId="fromDestinationReference">
                            <Form.Control
                                onChange={handleReferenceInput}
                                value={props.currentReference}
                                type="input"
                                placeholder="Ref"
                                className="col-12"/>
                        </Form.Group>
                        <Form.Group className="col-8 pl-0 pr-1" controlId="formDestination">
                            <Form.Control
                                ref={autoCompleteRef}
                                onChange={handleLocationInput}
                                value={query}
                                type="input"
                                placeholder="Enter destination"
                                className="col-12"/>
                        </Form.Group>
                        <Button
                            className="col-1 pl-0 pr-1"
                            variant="danger"
                            type="submit"
                            disabled={props.currentReference === '' || props.currentPlaceId === ''}
                        >+</Button>
                    </div>
                    {(!props.isAuthenticated && props.markers.length > FREE_LOCATIONS_NUMBER) && <span>Please Log in to enter more locations</span>}
                    {props.markers.length === 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} location added.
                    </Form.Text>}
                    {props.markers.length > 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} locations added.
                    </Form.Text>}
                </Form>
            </div>
            <div className={classes.SideContent}>
                <LocInput value={props.selectedStartPoint} onSelectPoint={props.onStartPointSelect}
                          text="Starting point"/>
            </div>
            <hr/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers,
        currentPlaceId: state.sideContent.placeId,
        currentReference: state.sideContent.reference,
        currentWayPoint: state.sideContent.wayPoint,
        currentAddress: state.sideContent.address,
        wayPointForm: state.sideContent.wayPointForm,
        isAuthenticated: state.auth.userId !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddingRoutePoint: (point) => {
            dispatch(actions.addWayPoint(point));
            dispatch(actions.setCurrentLocationPoint(point.coordinates))
        },
        onLatitudeLongitudeEntry: (pointAsString) => dispatch(actions.fetchPlaceId(pointAsString)),
        onFormSubmit: (payload) => dispatch(actions.wayPointFormSubmit(payload)),
        setCurrentPlaceId: (placeId) => dispatch(actions.setPlaceId(placeId)),
        setCurrentWayPoint: (point) => dispatch(actions.setWayPoint(point)),
        setCurrentAddress: (address) => dispatch(actions.setAddress(address)),
        setCurrentReference: (reference) => dispatch(actions.setReference(reference)),
        resetForm: () => dispatch(actions.resetForm()),
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideContent);
