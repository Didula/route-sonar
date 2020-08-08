import React from 'react';
import MapContainer from '../components/map-container';
import AddressPanel from '../components/address-panel';

function FullCmp() {
  return (
    <section>
        <div style = {{height: '60px'}}>Header cmp goes here</div>
        <div className = "container-fluid p-0">
            <div className = "row no-gutters">
                <div className = "col-4">
                    <AddressPanel></AddressPanel>
                </div>
                <div className = "col-8">
                    <MapContainer></MapContainer>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FullCmp;
