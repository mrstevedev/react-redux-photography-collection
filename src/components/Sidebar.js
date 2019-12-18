import React, { Component, Fragment } from 'react';
import {useSpring, animated} from 'react-spring'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        console.log('props in sidebar: ', props);
    }
    
    render() {
        return (
            <Fragment>
                 <nav className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">My Photos <i className="far fa-images"></i></h4>
                        <li className={this.props.active === 'one' ? 'active' : ''}><a className="nav-link" href="#one" onClick={(e) => this.props.handleClick(e, 'one')}>Bonita Misty Morning</a></li>
                        <li className={this.props.active === 'two' ? 'active' : ''}><a className="nav-link" href="#two" onClick={(e) => this.props.handleClick(e, 'two')}>Bonita Early Morning</a></li>
                        <li className={this.props.active === 'three' ? 'active' : ''}><a className="nav-link" href="#three" onClick={(e) => this.props.handleClick(e, 'three')}>Bonita Sun</a></li>
                        <li className={this.props.active === 'four' ? 'active' : ''}><a className="nav-link" href="#four" onClick={this.props.handleClick}>Bonita Reflection</a></li>
                        <li className={this.props.active === 'five' ? 'active' : ''}><a className="nav-link" href="#five" onClick={this.props.handleClick}>Bonita Trolly</a></li>
                        <li className={this.props.active === 'six' ? 'active' : ''}><a className="nav-link" href="#six" onClick={this.props.handleClick}>Bonita Bridge</a></li>
                        <li className={this.props.active === 'seven' ? 'active' : ''}><a className="nav-link" href="#seven" onClick={this.props.handleClick}>Bonita Wonder</a></li>
                        <li className={this.props.active === 'eight' ? 'active' : ''}><a className="nav-link" href="#eight" onClick={this.props.handleClick}>Bonita Thoughts</a></li>
                        <li className={this.props.active === 'nine' ? 'active' : ''}><a className="nav-link" href="#nine" onClick={this.props.handleClick}>DJ Tech Set</a></li>
                        <li className={this.props.active === 'ten' ? 'active' : ''}><a className="nav-link" href="#ten" onClick={this.props.handleClick}>DJ Tech Set II</a></li>
                        <li className={this.props.active === 'eleven' ? 'active' : ''}><a className="nav-link" href="#eleven" onClick={this.props.handleClick}>DJ Tech Set III</a></li>
                        <li className={this.props.active === 'twelve' ? 'active' : ''}><a className="nav-link" href="#twelve" onClick={this.props.handleClick}>Loft Couple</a></li>
                    </ul>
                    <ul className="info-toggle-list">
                        <li><a href="" onClick={(e) => this.props.handleSideBarClick(e, 'Camera Info')}><i className="fas fa-info-circle"></i></a></li>
                        <li><a href="#!" onClick={(e) => this.props.handleSideBarClick(e, 'Comments')}><i className="fas fa-comments"></i></a></li>
                        <li><a href="#!" onClick={(e) => this.props.handleSideBarClick(e, 'Share')}><i className="fas fa-share-alt"></i></a></li>
                        <li><a href="#!"><i className="fas fa-download"></i></a></li>
                    </ul>
                    <animated.h1 style={this.props}>I will fade in</animated.h1>
                    </nav>
            </Fragment>
        )
    }
}

export default Sidebar;
