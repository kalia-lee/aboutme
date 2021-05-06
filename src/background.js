import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Route, Switch, Link, Hash } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Background = () => {

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title class="text-primary">Background</Card.Title>
        <Card.Text class="text-primary">
            This is the background page.
        </Card.Text>
        </Card.Body>
    </Card>
    );
};


/*
class Background extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title class="text-primary">Background</Card.Title>
        <Card.Text class="text-primary">
            This is the background page.
        </Card.Text>
        </Card.Body>
    </Card>
        )
    }
}
*/
export default Background;