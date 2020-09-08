import React from 'react';

import classes from './FloatingBox.module.css';
import locPin from '../../../assets/pin_icon.png';

import LocInput from '../../../UI elements/LocInput/LocInput';
import Btn from '../../../UI elements/Button/Btn';

const fBox = (props) => (
   <div className={classes.FBox}>
       <h2>Where are you <span style={{color:'#b60000'}}>headed?</span></h2>
       <LocInput onSelectPoint={props.onStartPointSelect}  text='Starting Location'/>
       <hr/>
       <div>
            <img src={locPin} alt='+'/>
            <p>Route Details</p>
       </div>
       <div>
            <Btn clicked={props.onAddLocationClick} btnType='Main'>Add Locations</Btn>
            <Btn clicked={() => {}} btnType='Secondary'>Upload Locations</Btn>
       </div>
       <div>
           <p>Need any assistance? <a href='#'>Visit F&Q Section</a></p>
       </div>
   </div>
);

export default fBox;