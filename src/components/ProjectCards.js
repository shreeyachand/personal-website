import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';

class ProjectCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: 'Hangman - Java',
                    link: 'https://repl.it/@ShreeyaChand/java-hangman-v2?lite=true',
                    additionalText: 'The player first decides whether they would like the word they are guessing to be easy or hard. The easy word list contains simple, everyday words. The hard word list is the SOWPODS Scrabble list, which contains a huge range of words. The player can then begin to guess letters or the whole word. They are penalized if their letter guesses are wrong. If they run out of tries, they lose. But if they can guess the whole word before they run out of tries, they win.',
                    id: 0
                },
                {
                    title: 'This site!',
                    additionalText: 'built with React.js',
                    id: 1
                }
            ] 
        }
    }

    makeItems = (projects) => {
        return projects.map(item => {
            return <Card title={item.title} url={item.link} add={item.additionalText} list={projects.length} id={item.id}/>
        })
    }
    render() {
        return (
                <Container fluid={true}>
                    {this.makeItems(this.state.projects)}
                </Container>
        );
    }
}

export default ProjectCards;