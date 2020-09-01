import React from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

import classes from './Btn.module.css';

const btn = (props) => (
    <Button size = "md" className={[classes.Btn,classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </Button>
);

export default btn;