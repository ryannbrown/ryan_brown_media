import { Container, Nav, Button, Card, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// import logo from './logo.svg';
import './style.css';


function Contact() {

    return (

        <div className="about-page">


            <div className="wrapper">
                <div><Row><Col><div className="headline">Need work done? </div></Col></Row></div>
                <Row><Col><p>Just throw me an email or give me a call and we can make a plan.</p></Col></Row>
                <Row>
                    <Col>
                        <a href="mailto:ryanbrownmedia@gmail.com?subject=Interested%20In%20Web%20Design">
                            <div style={{ fontSize: '32px' }}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </a>
                    </Col>
                    <Col>
                    <a href="tel:19198165074">
                        <div style={{ fontSize: '32px' }}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        </a>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Contact