import React, { Component } from 'react';
import './portfolio.css'
import drig from './drigHome.png';
import stick from './stickHome.png';

class Portfolio extends Component {

    render() {
        return (
            <div className="portfolio" id="portfolioId">
                <h1>Portfolio</h1>
                <div className="portItem">
                    <img src={drig} alt="landing page of drig" className="drigImage" />
                    <h2>Author Website</h2>
                    <h3>React</h3>
                </div>
                <div className="portItem">
                    <img src={stick} alt="landing page of stick to it" className="stickImage" />
                    <h2>Stick To It</h2>
                    <h3>React</h3>
                </div>
            </div>
        )
    }
}
export default Portfolio