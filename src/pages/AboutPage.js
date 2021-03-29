import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Helmet } from 'react-helmet';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>
            I love programming, both competitive and project-based. I have been programming in Python, Java, and JavaScript, and I would love to expand the applications of my programs to make a tangible impact. I'm interested in exploring how programming can be applied to real-world issues through concepts like AI and ML. For the same reasons, I am also captivated by data science and I am currently expanding my knowledge in the field. I find its applications to politics and social-media patterns enthralling. Lately, I have been reading about Twitter interaction models related to elections. I want to create similar models and answer questions about humans using data and programming. 
            </p>
            <br></br>
            <p>
            I also love music! It's one of my favorite things in the world, and has made me a confident and dedicated person. I play the piano, trombone, and sing! I love listening to music as well - Tame Impala is one of my favorite artists.
            </p>
            </Content>
            <Helmet><title>about</title></Helmet>
        </div>
    );

}

export default AboutPage;