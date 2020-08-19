import React from 'react';

import classes from './LocInput.module.css';
import locPin from '../../assets/pin_icon.png';

const locInput = (props) => (
    <div className={classes.LocInput}>
        <img src={locPin} alt='+'/>
        <input type='text' name={props.text} placeholder={props.text} />
    </div>
);

export default locInput;