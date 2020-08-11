import React from 'react';

import classes from './FloatingBox.module.css';
import LocInput from '../../../UI elements/LocInput/LocInput';

const fBox = () => (
   <div className={classes.FBox}>
       <h4>Where are you <span style={{color:'#b60000'}}>headed?</span></h4>
       <LocInput text='Select Location'/>
   </div>
);

export default fBox;