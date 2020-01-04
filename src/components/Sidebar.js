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
                        <li className={this.props.active === 'four' ? 'active' : ''}><a className="nav-link" href="#four" onClick={(e) => this.props.handleClick(e, 'four')}>Bonita Reflection</a></li>
                        <li className={this.props.active === 'five' ? 'active' : ''}><a className="nav-link" href="#five" onClick={(e) => this.props.handleClick(e, 'five')}>Bonita Trolly</a></li>
                        <li className={this.props.active === 'six' ? 'active' : ''}><a className="nav-link" href="#six" onClick={(e) => this.props.handleClick(e, 'six')}>Bonita Bridge</a></li>
                        <li className={this.props.active === 'seven' ? 'active' : ''}><a className="nav-link" href="#seven" onClick={(e) => this.props.handleClick(e, 'seven')}>Bonita Wonder</a></li>
                        <li className={this.props.active === 'eight' ? 'active' : ''}><a className="nav-link" href="#eight" onClick={(e) => this.props.handleClick(e, 'eight')}>Bonita Thoughts</a></li>
                        <li className={this.props.active === 'nine' ? 'active' : ''}><a className="nav-link" href="#nine" onClick={(e) => this.props.handleClick(e, 'nine')}>DJ Tech Set</a></li>
                        <li className={this.props.active === 'ten' ? 'active' : ''}><a className="nav-link" href="#ten" onClick={(e) => this.props.handleClick(e, 'ten')}>DJ Tech Set II</a></li>
                        <li className={this.props.active === 'eleven' ? 'active' : ''}><a className="nav-link" href="#eleven" onClick={(e) => this.props.handleClick(e, 'eleven')}>DJ Tech Set III</a></li>
                        <li className={this.props.active === 'twelve' ? 'active' : ''}><a className="nav-link" href="#twelve" onClick={(e) => this.props.handleClick(e, 'twelve')}>Loft Couple</a></li>
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
