import React, { Component } from 'react';
import Nav from '../nav/nav';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="Welcome">
                    <div className="wlcmTxt"><p>Welcome! I'm Brandon and I'm a developer</p> </div>
                    <div>placeholder for image</div>
                </div>
                <div className="Portfolio">
                    <div className="drig">
                        Placeholder for Drig
                    </div>
                    <div className="sticktoit">
                        Placeholder for stick to it
                    </div>
                </div>
                <div className="skills">
                    Placeholderfor skills
                </div>
                <div className="about">
                    Placeholder for about
                </div>
                <div className="contact">
                    Placeholder for contact
                </div>
            </div>
        );
    }
}

export default Home;