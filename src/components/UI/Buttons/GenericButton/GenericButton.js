import React from 'react';

import classes from './GenericButton.module.css';

const genericButton = (props) => (
    <button disabled={props.disabled} className={[classes.Btn, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default genericButton;
