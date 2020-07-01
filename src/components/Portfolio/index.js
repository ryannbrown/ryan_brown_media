import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import './style.css';


function Portfolio() {

    return (
        <div className="portfolio-page">

            <div className="wrapper">
                <div><Row><Col><div className="headline">RECENT WORK</div></Col></Row></div>
                <Row>
                    <Col sm={12} md={4}>
                        <Card>
                            <a target="_blank" href="https://www.colemandefense.com"><Card.Img variant="top" src="https://i.ibb.co/TrbHm0S/cds.png" /></a>
                            <Card.Body>

                                <Card.Text>
                                    A home defense and military supply distributor
                                    website with a live inventory being fed from multiple
                                    sources. Also the client has a custom CMS built in
                                    the backend to manage their own custom inventory
                                    shown on the site.
    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <a target="_blank" href="https://capitalford.com/2021-mustang-mach-e"><Card.Img variant="top" src="https://i.ibb.co/8gwgZKf/mache.png" /></a>
                            <Card.Body>

                                <Card.Text>
                                    A landing page built to promote the new
                                    Mustang Mach-E.
    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <a target="_blank" href="https://www.bobkingauto.com/royal-customer-prog"><Card.Img variant="top" src="https://i.ibb.co/VSvzMDq/Bob-King-Royalty.png" /></a>
                            <Card.Body>

                                <Card.Text>
                                    A tribute page for Bob King Automotive.
    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Portfolio