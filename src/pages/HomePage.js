import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import './HomePage.css'

function HomePage(props) {

    return(
        <>
            <Hero title='Shreeya Chand' subTitle={props.subTitle} text={props.text} />
            <Content>
                <Row>
                    <Col>
                    <p id="hometext"> Hi! My name is Shreeya and I'm a high schooler in Maryland. 
                        I'm very interested in data and computer science and their real-world applications.
                    </p>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Content>
            <Helmet>
                <title>Shreeya Chand</title>
            </Helmet>
        </>
    );

}

export default HomePage;