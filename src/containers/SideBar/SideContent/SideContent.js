import React from "react";

import classes from "./SideContent.module.css";
import LocInput from '../../../UI elements/LocInput/LocInput';

const sideContent = ({selectedStartPoint, onStartPointSelect, inputList, setInputList}) => (
    <div className={classes.SideContent}>
        {inputList.map((locInput) => (
            <span key = {locInput.id}>
                <LocInput locInput = {locInput} setInputList = {setInputList} inputList = {inputList} value={selectedStartPoint} onSelectStartPoint={onStartPointSelect} text="Starting point" />
            </span>
        ))}
    </div>
);

export default sideContent;