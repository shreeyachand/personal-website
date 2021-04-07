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
                    <Row><a href="https://shreeyachand.medium.com/">Medium</a></Row>
                    <Row><a href="https://github.com/shreeyachand/">GitHub</a></Row>
                    <Row><a href="mailto:hi@shreeyachand.me">hi@shreeyachand.me</a></Row>
                </Container>
            </Col>
        </footer>
    );

}

export default Footer;
