import React from 'react';

import classes from './LocInput.module.css';
import locPin from '../../assets/pin_icon.png';
import InputField from '../../components/UI/Input/LocationSearchInput/LocationSearchInput';

const locInput = ({locInput, setInputList, inputList, text, value, onSelectStartPoint}) => (
    <div className={classes.LocInput}>
        <img src={locPin} alt='+'/>
        <InputField locInput = {locInput} setInputList = {setInputList} inputList = {inputList} text={text} value={value} onLocationSelect={onSelectStartPoint} />
    </div>
);

export default locInput;