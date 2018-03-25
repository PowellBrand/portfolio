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
                    <img src={drig} alt="landing page of drig" className="drigImage"/>
                    </div>
                <div className="portItem">
                <img src={stick} alt="landing page of stick to it" className="stickImage"/>

                    </div>
            </div>
        )
    }
}
export default Portfolio