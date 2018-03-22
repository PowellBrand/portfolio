import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="MainNav">
                <nav>
                    <a href="#home"><p>Home</p></a>
                    <a href="#portfolio"><p>Portfolio</p></a>
                    <a href="#skills"><p>Skills</p></a>
                    <a href="#about"><p>About</p></a>
                    <a href="#contact"><p>Contact</p></a>
                </nav>
            </div>
        );
    }
}
export default Nav