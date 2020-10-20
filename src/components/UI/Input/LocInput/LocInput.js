import React from 'react';

import classes from './LocInput.module.css';
import locPin from '../../../../assets/pin_icon.png';
import close from '../../../../assets/close.png';
import InputField from '../LocationSearchInput/LocationSearchInput';

const locInput = (props) => (
    <div className={classes.LocInput}>
        <img src={locPin} alt='+'/>
        <InputField text={props.text} value={props.value} onLocationSelect={props.onSelectPoint} />
        {props.hoverClose ? <img src={close} alt='x' className={classes.Close} onClick={props.onClose}/> : null}
    </div>
);

export default locInput;
