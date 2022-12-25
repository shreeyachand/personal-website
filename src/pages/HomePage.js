import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import Contact from '../components/Contact'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import './HomePage.css'

function HomePage(props) {
    return(
        <>
            <Hero title='shreeya chand' subTitle={props.subTitle} text={props.text} />
                <Content>
                    <Row>
                    <Col>
                    <p id="hometext"> hi! i'm a high schooler in maryland who's interested in tech, politics, music, and more.
                    </p>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                        <ul>
                            <li><a href="https://github.com/shreeyachand">github</a></li>
                            <li><a href="https://www.goodreads.com/user/show/131382685-shreeya">goodreads</a></li>
                            <li><a href="https://www.linkedin.com/in/shreeya-chand/">linkedin</a></li>
                            <br></br>
                            {/*<li><Contact></Contact></li> */}

                        </ul>
                    </Row>
                </Content>
            <Helmet>
                <title>Shreeya Chand</title>
            </Helmet>
        </>
    );
}

export default HomePage;
