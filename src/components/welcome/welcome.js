import React, { Component } from 'react'
import uintas from './uintas.png';
import './welcome.css';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome" id="home">
                <div className="wlcmTxt">
                    <p>Welcome! <br /> I'm Brandon and I'm a developer</p>
                </div>
                <img src={uintas} alt="Branon in the Uintas" className="uintaimg" />
            </div>
        )
    }

}
export default Welcome