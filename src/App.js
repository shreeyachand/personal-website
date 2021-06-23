import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          page: 'home',
          type: 'site',
          title: 'home',
          el: HomePage,
          path: '/'
        },
        {
          page: 'about',
          type: 'site',
          title: 'about me',
          el: AboutPage,
          path: '/about'
        },
        {
          page: 'github',
          type: 'external',
          title: 'github',
          path: 'https://github.com/shreeyachand'
        },
        {
          page: 'contact',
          type: 'site',
          title: 'contact me!',
          el: Contact,
          path: '/contact'
        }
      ]
    }
  }
  makeItems = (pages) => {
    return pages.map(page => {
      var Comp = page.el;
      return <Route path={page.path} exact render={() => <Comp title={page.title} />} />
    })
  }
  makeLinks = (pages) => {
    return pages.map(page => {
      if (page.type == 'site') {
        return <Link class="nav-link" to={page.path}>{page.page}</Link>
      } else {
        return <a class="nav-link" href={page.path}>{page.page}</a>
      }
    }
  )}
 
  render() {
    return (
      <>
        <Router>
          <Container className="p-0" fluid={true}>
            <style>{'body { background-color: #f8f8ff; }'}</style>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <a id="navbar-brand" href="/">Shreeya Chand</a>
              <Navbar.Toggle class="nav-toggle" className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav id="nav-links" className="ml-auto">
                  {this.makeLinks(this.state.pages)}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {this.makeItems(this.state.pages)}
            <Footer />
          </Container>
       </Router>
      </>
    );
  }
}

export default App;