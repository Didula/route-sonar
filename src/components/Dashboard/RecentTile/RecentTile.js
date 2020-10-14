import React, {Component} from 'react';
import {Button, Card, Container} from 'react-bootstrap';

import tileImage from '../../../assets/tile-sample.jpg';
import classes from './RecentTile.module.css';
import TripModal from "../TripModal/TripModal";

class RecentTile extends Component {
    state = {
        show:false
    }

    handleShow = () => {
        this.setState({show:true});
    }

    handleClose = () => {
        this.setState({show:false});
    }

    render() {
        return (
            <Container fluid className={classes.OVContainer}>
                <Card className={classes.OVTile}>
                    <Card.Img variant="top" src={tileImage}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            on <strong>08th Dec 2020</strong> at 1.30PM
                        </Card.Text>
                            <Button variant="primary" onClick={this.handleShow}>Route Details</Button>&nbsp;
                            <Button variant="info">Use Again</Button>
                    </Card.Body>
                </Card>

                <TripModal showing={this.state.show} close={this.handleClose} title={this.props.title}/>

            </Container>
        )
    }

}

export default RecentTile;