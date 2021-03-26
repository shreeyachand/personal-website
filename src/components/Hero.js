import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';
function Hero(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    { props.title && <h1 className="display-10">{props.title}</h1> }
                    { props.subTitle && <h3>{props.subTitle}</h3> }
                    { props.text && <h3 >{props.text}</h3> }
                </Col>
            </Row>
        </Container>
    );

}
//className="display-19 font-weight-bolder"
//className="lead font-weight-light"
// className="display-4 font-weight-light"
export default Hero;