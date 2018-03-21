import React, { Component } from 'react';
import Nav from '../nav/nav';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="Welcome" id="home">
                    <div className="wlcmTxt"><p>Welcome! I'm Brandon and I'm a developer</p> </div>
                    <div>placeholder for image</div>
                </div>
                <div className="Portfolio" id="portfolio">
                    <div className="drig">
                        Placeholder for Drig
                    </div>
                    <div className="sticktoit">
                        Placeholder for stick to it
                    </div>
                </div>
                <div className="Skills" id="skills">
                    Placeholderfor skills
                </div>
                <div className="About" id="about">
                    Placeholder for about
                </div>
                <div className="Contact" id="contact">
                    Placeholder for contact
                </div>
            </div>
        );
    }
}

export default Home;