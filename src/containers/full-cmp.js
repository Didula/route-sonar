import React from 'react';
import MapContainer from '../components/map-container';
import AddressPanel from '../components/address-panel';
import Header from './LayoutGeneral/Header/Header';
import Auxi from '../hoc/Auxi';

function FullCmp() {
  return (
    <Auxi>
        <Header />
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
    </Auxi>
  );
}

export default FullCmp;
