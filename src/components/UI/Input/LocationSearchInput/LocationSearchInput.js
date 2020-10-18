import React, {useEffect} from "react";
import {connect} from 'react-redux';

import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover,} from "@reach/combobox";

import locClasses from './LocationSearchInputs.css';
import * as actions from "../../../../store/actions/index";

const PlacesAutocomplete = (props) => {
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => props.currentLocation.lat, lng: () => props.currentLocation.lng},
            radius: 100 * 1000
        },
        debounce: 500
    });

    useEffect(() => {
        if(ready && props.isAuthenticated)
        props.savePlacesApiUsage(props.customerId)
    },[data])

    useEffect(() => {
        setValue(props.value, false);
        clearSuggestions();
    }, [])

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        setValue(val, false);
        // Get latitude and longitude via utility functions
        clearSuggestions();
        getGeocode({address: val})
            .then((results) => {
                const resultReceived = results[0];
                getLatLng(resultReceived).then(({lat, lng}) => {
                    props.onLocationSelect({
                        coordinates:
                            {
                                lat: lat,
                                lng: lng
                            },
                        placeId: resultReceived.place_id,
                        address: val
                    })
                })
            })

            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    return (
        <Combobox onSelect={handleSelect} aria-labelledby="demo" className = {locClasses.locInput}>
            <ComboboxInput placeholder={props.text} value={value} onChange={handleInput} disabled={!ready}/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({place_id, description}) => (
                        <ComboboxOption key={place_id} value={description}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

const mapStateToProps = (state) => {
    return {
        currentLocation: state.map.currentLocation,
        isAuthenticated: state.auth.userId !== null,
        customerId: state.auth.customerId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePlacesApiUsage: (customerId) => dispatch(actions.savePlacesApiUsage(customerId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlacesAutocomplete);
