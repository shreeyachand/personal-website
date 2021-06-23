import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {

    return(
        <footer className="mt-5">
            <Col id="bottomText">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                    </Row>
                </Container>
            </Col>
        </footer>
    );

}

export default Footer;
