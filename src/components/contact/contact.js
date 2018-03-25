import React, { Component } from 'react';
import axios from 'axios';
import './contact.css';

class Contact extends Component {
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
        )
    }

}
export default Contact