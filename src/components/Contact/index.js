import { Container, Nav, Button, Card, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import './style.css';


function Contact() {

    return (

        <div className="about-page">

            
            <div className="wrapper">
                <Row>
                    <Col>
                    <div>
                        <h1>Do you need a website for your business?</h1>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div>
                        <h1>Email</h1>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <h1>Call</h1>
                    </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Contact