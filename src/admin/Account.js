import React, { Component } from 'react';
import Header from './components/Header';
import axios from 'axios';

export default class Account extends Component {
    constructor(props) {
        super()

        this.state = {
            email: '',
            location: '',
            errorEmail: false,
            errorLocation: false,
        }
    }

    handleFileChange = (e) => {
        const file_input = document.getElementById('fileInput');
        const file_name = file_input.files[0].name;
    
        console.log(file_name);
        this.setState({ fileName: file_name })
      }

    handleChange = (e) => {
        if(this.state.email !== '') {
            this.setState({ errorEmail: false });
        }

        if(this.state.location !== '') {
            this.setState({ errorLocation: false });
        }

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { REACT_APP_API_URL } = process.env;

        if(this.state.email === '') {
            this.setState({ errorEmail: true });
        }

        if(this.state.location === '') {
            this.setState({ errorLocation: true });
        }
        else {
            axios({
                method: 'POST',
                url: `${ REACT_APP_API_URL }/user`,
                data: {
                    email: this.state.email,
                    location: this.state.location
                },
                headers: {
                    "Authorization": `Bearer ${ sessionStorage.getItem('token') }`
                }
            }).then(res => {
                console.log(res)
                this.setState({ 
                    email: res.data.email, 
                    location: res.data.location 
                })
            })
            .catch(err => console.log(err))
        }
    }
    
    // move this to Index along with the same f() from Dashboard.js
    handleLogout = (e) => {
        e.preventDefault();
        console.log("logout user");
        sessionStorage.removeItem("token");
        this.props.history.push("/admin");
      };
    
      handleAccountToggle = (e) => {
        console.log('handleAccountToggle() Ran');
        const dropdownToggler = document.querySelector('.admin__dashboard-account-toggle');
        const dropdownMenu = document.querySelector('.admin__dashboard-account-dropdown');
        dropdownToggler.classList.toggle('active');
        dropdownMenu.classList.toggle('show');
        dropdownMenu.classList.toggle('fadeInUp');
      }
    render() {
        console.log(this.props, 'props in account')
        return (
            <div style={{ height: '100vh' }}>
                <div className="admin__page-container" style={{ background: '#fff', height: '100vh', width: '100%', margin: '0 auto', textTransform: 'none', fontFamily: 'helveticaneue', fontSize: '0.8rem' }}>
                <Header user={ this.props.location.state.user ? this.props.location.state.user : '' } handleAccountToggle={ this.handleAccountToggle } handleLogout={ this.handleLogout } />
                <main>
                    <form>
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.7rem', margin: '1rem 0' }}>My Account</h4>
                        <label>Username
                        <input type="text"
                            disabled
                            placeholder={ this.props.location.state.user.username }
                            autoFocus
                            name="username" />
                        </label>
                        <label>Email
                        <input type="text"
                            placeholder={ this.props.location.state.user.email } 
                            onChange={this.handleChange} 
                            name="email" 
                            className={this.state.errorEmail === true ? "error" : ""} />
                        </label>
                        <label>Location
                        <input type="text" 
                            placeholder={ this.props.location.state.user.location } 
                            onChange={this.handleChange} 
                            name="location" 
                            className={this.state.errorLocation === true ? "error" : ""} />
                        </label>
                        <label>Update avatar <i className="fas fa-folder-plus"></i>
                            <input type="file" id="fileInput" onChange={this.handleFileChange} />
                            <span>{ this.state.fileName }</span>
                        </label>                    
                        <button onClick={this.handleSubmit}>Submit <i className="fas fa-paper-plane" style={{ fontSize: '0.81rem' }}></i></button>
                    </form>
                </main>
                </div>
            </div>
        );
    }
}
