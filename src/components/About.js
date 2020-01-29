import React, { Fragment } from 'react'
import Header from './Header';
import { Link } from "react-router-dom";

const About = (props) => {
    const handleLink = () => {
        props.history.push("/");    
    }
    return (
        <Fragment>
            <Header />
        <div className="container">           
            <div class="demo image above"> 
                <section class="vert">
                    <header></header>
                    <div class="separator"></div>
                    <footer></footer>
                </section>
                <section className="about"> 
                <Link className="goback" to="#!" onClick={handleLink}>
            <i className="fas fa-angle-double-left"></i>
            </Link>           
                <p className="about-text">
                    Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, 
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. 
                    Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. 
                    Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.
                </p>
            </section>
            </div>        
        </div>
        </Fragment>
    )
}

export default About;