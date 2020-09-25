import React from 'react';

import classes from './AddRoute.module.css';
import locPin from '../../../../assets/add.png';

const addRoute = ({ addPointClick }) => {

    return (
        <div className={classes.AddRoute} onClick={addPointClick}>
            <img src={locPin} alt='+'/>
            <label>Add New Point</label>
        </div>
    );
};

export default addRoute;
