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
            I am incredibly interested in all things data science, computer science, machine learning, AI, and statistics.
            I really want to apply my knowledge in all of these fields to real-world problems, from politics to genetic risks for diseases.
            </p>
            <br></br>
            <p>
            I also like to play <a href="https://www.geoguessr.com/user/603ab68ef8dabd0001f98f76">GeoGuessr</a>, read, and listen and play to music. Music one of my favorite things in the world, and has made me a confident and dedicated person. I play the piano, trombone, and sing! 
            I love listening to music as well, some of my favorite artists include Tame Impala, Taylor Swift, and HAIM.
            </p>
            </Content>
            <Helmet><title>about</title></Helmet>
        </div>
    );

}

export default AboutPage;