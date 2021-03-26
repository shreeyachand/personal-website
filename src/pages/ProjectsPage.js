import React from 'react';
//import Button from 'react-bootstrap/Button';
import ProjectCards from '../components/ProjectCards';
import Hero from '../components/Hero';
//import Content from '../components/Content';
import { Helmet } from 'react-helmet';

function ProjectsPage (props) {
    var ghlink = <a href="https://github.com/shreeyachand">github</a>
    return(
        <>
            <title>about me</title>
            <Hero title={props.title} text={ghlink}/>
            <ProjectCards />
            <Helmet><title>projects</title></Helmet>
        </>
    );
}

export default ProjectsPage;