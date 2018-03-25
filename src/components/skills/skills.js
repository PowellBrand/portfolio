import React, { Component } from 'react';
import './skills.css';
import cssimg from './cssimg.png';
import expressimg from './expressimg.png';
import gitimg from './gitimg.png';
import htmlimg from './htmlimg.png';
import javascriptimg from './javascriptimg.png';
import nodeimg from './nodeimg.png';
import postgresimg from './postgresimg.png';
import reactimg from'./reactimg.png';
import reduximg from './reduximg.png';

class Skills extends Component {

    render() {
        return (
            <div className="skillcons">
                <h1>Skills</h1>
                <img src={cssimg} alt="CSS Image"/>
                <img src={expressimg} alt="Express Image"/>
                <img src={gitimg} alt="Git Image"/>
                <img src={htmlimg} alt="HTML Image"/>
                <img src={javascriptimg} alt="JavaScript Image"/>
                <img src={nodeimg} alt="NodeJS Image"/>
                <img src={postgresimg} alt="PostgreSQL Image"/>
                <img src={reactimg} alt="React Image"/>
                <img src={reduximg} alt="Redux Image"/>

            </div>
        )
    }

}
export default Skills;