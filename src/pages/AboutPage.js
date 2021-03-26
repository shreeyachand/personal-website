import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Helmet } from 'react-helmet';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>hello world</p>
            </Content>
            <Helmet><title>about</title></Helmet>
        </div>
    );

}

export default AboutPage;