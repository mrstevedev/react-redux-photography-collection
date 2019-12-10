import React, { Component, Fragment } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <Fragment>
                 <nav className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">My Photos <i className="far fa-images"></i></h4>
                        <li className={this.props.active ? 'active' : ''}><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Misty Morning</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Early Morning</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Sun</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Reflection</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Trolly</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Bridge</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Wonder</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Bonita Thoughts</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>DJ Tech Set</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>DJ Tech Set II</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>DJ Tech Set III</a></li>
                        <li><a className="nav-link" href="#" onClick={this.props.handleClick}>Loft Couple</a></li>
                    </ul>
                    <ul className="info-toggle-list">
                        <li><a href=""><i className="fas fa-info-circle"></i></a></li>
                        <li><a href=""><i className="fas fa-comments"></i></a></li>
                        <li><a href=""><i className="fas fa-share-alt"></i></a></li>
                        <li><a href=""><i className="fas fa-download"></i></a></li>
                    </ul>
                    </nav>
            </Fragment>
        )
    }
}

export default Sidebar;
