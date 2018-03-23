import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="MainNav">
                <nav className="navdiv">
                    <a href="#home" className="navlink"><p>Home</p></a>
                    <a href="#portfolio" className="navlink"><p>Portfolio</p></a>
                    <a href="#skills" className="navlink"><p>Skills</p></a>
                    <a href="#about" className="navlink"><p>About</p></a>
                    <a href="#contact" className="navlink"><p>Contact</p></a>
                </nav>
            </div>
        );
    }
}
export default Nav