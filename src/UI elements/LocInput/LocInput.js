import React from 'react';

import classes from './LocInput.module.css';
import locPin from '../../assets/pin_icon.png';
import InputField from '../../components/UI/Input/LocationSearchInput/LocationSearchInput';

const locInput = (props) => (
    <div className={classes.LocInput}>
        <img src={locPin} alt='+'/>
        <InputField text={props.text} value={props.value} onLocationSelect={props.onSelectPoint} />
    </div>
);

export default locInput;