import React, { Component } from 'react';
export default class AccountToggle extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div
            className="admin__dashboard-account-toggle" 
            onClick={this.props.handleAccountToggle} style={{
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                background: 'url("../public/img/rayrooftop.jpg") no-repeat center center',
                backgroundSize: 'cover'                
            }}>
            </div>
        )
    }
}