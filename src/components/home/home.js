import React, { Component } from 'react';
import axios from 'axios';
import Skills from '../skills/skills';
import Nav from '../nav/nav';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            from: '',
            topic: '',
            message: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        axios.post('/contact/send', {
            name: this.refs.name.value,
            from: this.refs.email.value,
            to: 'brandoTestMail@gmail.com',
            subject: this.refs.topic.value,
            message: this.refs.message.value

        })
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.message.value = '';
        this.refs.topic.valu = '';
        alert("Email sent");

    }

    render() {
        return (
            <div className="App">
                <Nav />

                {/* Welcome */}
                <div className="Welcome" id="home">
                    <div className="wlcmTxt"><p>Welcome! I'm Brandon and I'm a developer</p> </div>
                    <div>placeholder for image</div>
                </div>
                {/* End Welcome */}

                {/* Portfolio */}
                <div className="Portfolio" id="portfolio">
                    <div className="drig">
                        Placeholder for Drig
                    </div>
                    <div className="sticktoit">
                        Placeholder for stick to it
                    </div>
                </div>
                {/* End Portfolio */}

                {/* Skills */}
                <Skills />
                {/* End Skills */}

                {/* About */}
                <div className="About" id="about">
                    <p>Hello, I’m Brandon Powell and i’m a web developer.
                        I am always looking to further my development knowledge.  I enjoy any outdoor activity, especially long walks through the woods. If you are looking for a new site, contact me below.
                    </p>
                </div>
                {/* End About */}

                {/* Contact  */}
                <div className='contact'>
                    <h3 className='email'>Contact</h3><br />
                    <form className='contForm' onSubmit={this.handleClick}>
                        <p>
                            <label>Name:</label>
                            <input className='contIn' type='text' ref="name" />
                        </p>
                        <p>
                            <label>Email Address:</label>
                            <input className='contIn' type="email" ref="email" />
                        </p>
                        <p>
                            <label>Subject:</label>
                            <input className='contIn' type="topic" ref="topic" />
                        </p>
                        <p>
                            <label>Message:</label>
                            <textarea className='contMes' ref="message" rows="7"></textarea>
                        </p>
                        <button type="submit">Submit</button>

                    </form>
                </div>
                {/* End Contact */}

            </div>
        );
    }
}

export default Home;