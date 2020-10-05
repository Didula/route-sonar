import React, {useEffect, useState} from "react";

import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover,} from "@reach/combobox";

import locClasses from './LocationSearchInputs.css';

const PlacesAutocomplete = (props) => {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0)
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => lat, lng: () => lng},
            radius: 100 * 1000
        }
    });

    useEffect(() => {
        const geolocationOptions = {
            enableHighAccuracy: false,
            timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
            maximumAge: 1000 * 3600 * 24 // 24 hour
        };
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {lat: 0, lng: 0};
                    currentLocation.lat = position.coords.latitude;
                    currentLocation.lng = position.coords.longitude;
                    setLat(currentLocation.lat);
                    setLng(currentLocation.lng);
                },
                () => {
                    console.log("Geolocation fetching error")
                },
                geolocationOptions)
        }
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

export default PlacesAutocomplete;
