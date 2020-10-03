import React from 'react';
import classes from './RouteToast.module.css';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import RouteInfoModal from '../RouteInfoModal/RouteInfoModal';

const RouteToast = () => {

    let [showRouteModal, setShowRouteModal] = React.useState(false);

    const togglePopup = () => {
        setShowRouteModal(
            showRouteModal = !showRouteModal
        );
    }

    const openRouteInfoModal = () => {
        togglePopup();
    };

    return (
        <div className = {classes.parentToast}>
            <Toast delay={3000} autohide>
                <Toast.Body>
                    <div className = {`d-flex align-items-center justify-content-between`}>
                    <h6>12 miles saved.</h6>
                    <Button variant="outline-primary" className="btn-fill" onClick={openRouteInfoModal}>SEND</Button>
                    </div>
                </Toast.Body>
            </Toast>
            <RouteInfoModal show={showRouteModal} onHide={() => setShowRouteModal(false)}/>
        </div>
    )
}

export default RouteToast;
