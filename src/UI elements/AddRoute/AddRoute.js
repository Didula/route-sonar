import React from 'react';

import classes from './AddRoute.module.css';
import locPin from '../../assets/add.png';

const addRoute = ({setInputList, inputList}) => {
    const addRouteClickHandler = () => {
        setInputList([
            ...inputList,
            { id: Math.random()*1000, location: ''}
        ]);
    };

    return (
        <div onClick = {addRouteClickHandler} className={classes.AddRoute}>
            <img src={locPin} alt='+'/>
            <label>Add destination</label>
        </div>
    );
};

export default addRoute;