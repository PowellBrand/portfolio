import React, { Component } from 'react';
import Skills from '../skills/skills';
import Nav from '../nav/nav';
import Welcome from '../welcome/welcome';
import Portfolio from '../portfolio/portfolio';
import About from '../about/about';
import Contact from '../contact/contact';

class Home extends Component {
    
    render() {
        return (
            <div className="App">
                <Nav />
                <Welcome />
                <Portfolio />
                <Skills />
                <About />
                <Contact />
            </div>
        );
    }
}

export default Home;