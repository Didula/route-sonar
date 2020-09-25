import React from 'react';

import classes from './Btn.module.css';

const genericButton = (props) => (
    <button className={[classes.Btn, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default genericButton;