import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import classes from './FloatingBox.module.css';
import locPin from '../../assets/pin_icon.png';

import LocInput from '../UI/Input/LocInput/LocInput';
import Btn from '../UI/Buttons/GenericButton/GenericButton';

const fBox = (props) => (
   <div className={classes.FBox}>
       <h2>Where are you <span style={{color:'#b60000'}}>headed?</span></h2>
       <LocInput onSelectPoint={props.onStartPointSelect}  text='Starting Location'/>
       <hr/>
       <div>
            <img src={locPin} alt='+'/>
            <p>Route Details</p>
       </div>
       <div className='row'>
           <div className='col-6 pr-0 mx-0'>
               <Button onClick={props.onAddLocationClick} variant="danger" size="md">Add Locations</Button>
           </div>
           <div className='col-6 pl-0 mx-0'>
               <Button disabled={true} clicked={() => {}} variant="outline-danger" size="md">Upload Locations</Button>
           </div>
           {/*<Button clicked={props.onAddLocationClick} variant={"danger"}>Add Locations</Button>
           <Button disabled={true} clicked={() => {}} variant={"outline-danger"}>Upload Locations</Button>*/}
       </div>
       <div>
           <p>Need any assistance? <Link to={'/FAQ'}>Visit FAQ Section</Link></p>
       </div>
   </div>
);

export default fBox;
