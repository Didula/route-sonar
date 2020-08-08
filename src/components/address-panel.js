import React from 'react';
import { TextInput, Button } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

// const counter = useSelector(state => state.counter);
// const isLogged = useSelector(state => state.isLogged);
// const dispatch = useDispatch();

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="rs-addr-panel py-3">
                <div className="row mb-4" style={{ color: '#FFF' }}>
                    <div className="offset-1 col-10">Where are you headed?</div>
                </div>
                <div className="row mb-5">
                    <div className="offset-1 col-10">
                        <TextInput
                            placeholder="Starting Point"
                            value=""
                            className="rs-input-bl"
                        />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="offset-1 col-10">
                        <TextInput
                            placeholder="Ending Point"
                            value=""
                            className="rs-input-bl"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-1 col-10"><Button primary label="SEARCH" /></div>
                </div>
                
                {/* <h1>Counter {counter}</h1>
                <button onClick={ () => dispatch(increment()) }> + </button>
                <button onClick={ () => dispatch(decrement()) }> - </button>

                {isLogged? <h3>Valuable Info you shouldn't see</h3> : ''} */}
            </div>
        );
    }
}
 export default Header;