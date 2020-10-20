import React, {useState} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {connect} from 'react-redux';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import * as actions from "../../../../store/actions";

const LocationAutoCompleteInput = (props) => {
    const [state, setState] = useState({address: ''})

    const handleChange = address => {
        let matchResult = address.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g);
        if (matchResult && matchResult.length === 0) {
            setState({address});
        }

    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    return (
        <PlacesAutocomplete
            value={state.address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: 'Search Places ...'
                        })}
                    />
                    <div>
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                : {backgroundColor: '#ffffff', cursor: 'pointer'};
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                    key={suggestion.placeId}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingLocation: (point) => {
            dispatch(actions.addWayPoint(point));
            dispatch(actions.setCurrentLocationPoint(point.coordinates));
        }
    }
}

export default connect(null, mapDispatchToProps)(LocationAutoCompleteInput);
