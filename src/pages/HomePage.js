import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';

function HomePage(props) {

    return(
        <>
            <Hero title='Shreeya Chand' subTitle={props.subTitle} text={props.text} />
            <Content>
                <Row>
                    <Col>
                    <p>my site</p>
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