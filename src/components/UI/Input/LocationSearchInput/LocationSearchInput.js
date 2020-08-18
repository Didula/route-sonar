import React from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

// todo we will replace this css with our own in the future.
import "@reach/combobox/styles.css";

const PlacesAutocomplete = (props) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        setValue(val, false);
        // Get latitude and longitude via utility functions
        clearSuggestions();
        getGeocode({ address: val })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                props.onLocationSelect({ lat, lng })
            })
            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    return (
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default PlacesAutocomplete;