import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="MainNav">
                <nav>
                    <p>Home</p>
                    <p>Portfolio</p>
                    <p>Skills</p>
                    <p>About</p>
                    <p>Contact</p>
                </nav>
            </div>
        );
    }
}
export default Nav