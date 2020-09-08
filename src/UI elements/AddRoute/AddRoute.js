import React from 'react';

import classes from './AddRoute.module.css';
import locPin from '../../assets/add.png';

const addRoute = (props) => (
    <div className={classes.AddRoute} onClick={props.addPointClick}>
        <img src={locPin} alt='+'/>
        <label>Add another Route point</label>
    </div>
);

export default addRoute;