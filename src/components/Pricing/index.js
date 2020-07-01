import { Container, Nav, Button, Card, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import './style.css';


function Pricing() {

    return (

        <div className="page">

            <div className="wrapper">
                <div><Row><Col><div className="headline"> PRICING</div></Col></Row></div>
                <Row>
                    <Col sm={12} md={12} lg={4}>
                        <Card className="pricing-card">
                            <Card.Body className="pricing-body">
                                <p className="prices">$500<sup> +</sup></p>
                                <h2>Starter</h2>
                                <ul>
                                    <li>Landing Page/ Portfolio</li>
                                    <li>Basic SEO Implementation</li>
                                    <li>Basic Lead Forms</li>
                                    <li>1-3 Pages</li>
                                </ul>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={4}>
                        <Card className="pricing-card">
                            <Card.Body className="pricing-body">
                                <p className="prices">$1,000<sup> +</sup></p>
                                <h2>Power</h2>
                                <ul>
                                    <li>Businesses/ Blogs</li>
                                    <li>Enhanced SEO</li>
                                    <li>Customized Lead Forms</li>
                                    <li>4+ Pages</li>
                                </ul>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={4}>
                        <Card className="pricing-card">
                            <Card.Body className="pricing-body">
                                <p className="prices">$3,000<sup> +</sup></p>
                                <h2>Ecommerce</h2>
                                <ul>
                                    <li>Sell your product online</li>
                                    <li>Secure Database Solutions</li>
                                    <li>Regular Inventory Updates</li>
                                    <li>(Optional) Built in CMS/ CRM</li>
                                </ul>

                            </Card.Body>
                        </Card>
                    </Col>
                 
                   <Row className="price-text">
                   <Col sm={12} md={12}>

<div className="text-box center">
    <p className="mt-5">*The prices above give a rough estimate of what you can expect your project to cost. These will vary based on 
        your needs and there could be some overlap in package prices depending on your needs.
    </p>
</div>
</Col>
                   </Row>
                    


                </Row>

            </div>
        </div>
    )
}
export default Pricing