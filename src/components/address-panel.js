import React from 'react';
import { TextInput, Button } from 'grommet'

export default function AddressPanel() {
    const [value, setValue] = React.useState('');
    return (
        <div className="rs-addr-panel py-3">
            <div className="row mb-4" style = {{ color: '#FFF'}}>
                <div className = "offset-1 col-10">Where are you headed?</div>
            </div>
            <div className="row mb-5">
                <div className="offset-1 col-10">
                    <TextInput
                        placeholder="Starting Point"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        className="rs-input-bl"
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="offset-1 col-10">
                    <TextInput
                        placeholder="Ending Point"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        className="rs-input-bl"
                    />
                </div>
            </div>
            <div className="row">
                <div className="offset-1 col-10"><Button primary label="SEARCH" /></div>

            </div>
        </div>
    );
}
