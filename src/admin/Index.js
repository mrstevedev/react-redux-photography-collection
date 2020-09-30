import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Admin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            errorUsername: false,
            errorPassword: false,
            user: {},
            jwt: ''
        }
    }

    handleChange = (e) => {
        if(this.state.username !== '') {
            this.setState({ errorUsername: false });
        }
        if(this.state.password !== '') {
          this.setState({ errorPassword: false });
        }
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignIn = (e) => {
        e.preventDefault();

        if (this.state.username === '') {
            this.setState({ errorUsername: true });
        }

        if(this.state.password === '') {
            this.setState({ errorPassword: true });
        }

        axios({
            method: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            },
            withCredentials: true,
            url: 'http://localhost:4000/signin'
        }).then(res => {
            console.log(res)
            if(res.data.message) {
                this.setState({ error: res.data.message })
            }
            if(res.data.user) {
                this.setState({ user: res.data.user, jwt: res.data.jwt }, () => {
                    sessionStorage.setItem('token', this.state.jwt)
                    this.props.history.push('/admin/dashboard', { 
                        message: 'You are now logged in',
                        user: this.state.user
                    });
                })
            }
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="admin-container">
                <div className="admin-signIn__error-container" className={ this.state.error ? 'show' : 'hide' }>
                <p>Error</p>
                <p className="admin-signIn__error">{ this.state.error ? this.state.error : '' }</p>
                </div>
                <h4>Admin Sign In</h4>
                <form className="admin-signIn__form">
                    <input type="text" autoFocus className={ `admin-signIn__input ${ this.state.errorUsername ? 'error' : '' }` } name="username" onChange={e => this.handleChange(e)} />
                    <input type="password" className={ `admin-signIn__input ${ this.state.errorPassword ? 'error' : '' }` } name="password" onChange={e => this.handleChange(e)} />
                    <button onClick={this.handleSignIn}>Sign-In</button>
                </form>

                <div className="admin-signIn__description">
                    <p>Backend developed with <u>Express</u>. User authentication <br/> with <u>Passport</u> and authorization with <u>JWT</u>.</p>
                </div>
            </div>
        )
    }
}

export default Admin;