import { Container, Nav, Button, Card, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import './style.css';


function Pricing() {

    return (

        <div className="about-page">

            
            <div className="wrapper">
                <div><Row><Col sm={12} md={12}><div className="avatar-container">
                <img
                    src="https://i.ibb.co/2SbrdkP/Ryan1-b39c770b.jpg" alt="Ryan Brown"
                    className="avatar"
                />
            </div></Col></Row></div>
                <div><Row><Col sm={12} md={12}><div className="headline">ABOUT ME</div></Col></Row></div>
                {/* <div><Row><Col><div className="headline"> PRICING</div></Col></Row></div> */}
                <Row>
                    <Col sm={12} md={12}>
                        <div className="text-box center">
                            <p><span>Hello! My name is Ryan Brown</span> and my passion in life is to bring others joy.
Professionally that means giving my clients a finished product they can get excited about.</p>
                            <p><span>For those curious.</span> I code my sites from scratch, with love. My commonly used technologies are
NodeJS, React, and PostgreSQL when working on my projects.
</p>
                            <p><span>A little more abut me.</span> Based in Raleigh, NC.. I am an outdoor enthusiast who loves a
good adventure out west. I've roadtripped to Alaska and back more than once and have
traveled to ~25 countries around the world. Lately my adventures have been
 making memories with my wife and 1 year old baby girl, Haven. </p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Pricing