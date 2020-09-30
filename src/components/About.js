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
            <div className="demo image above"> 
                <section className="vert">
                    <header></header>
                    <div className="separator"></div>
                    <footer></footer>
                </section>
                <section className="about"> 
                       
                <p className="about-text">
                    Personal showcase of photos I have taken over the years. Some of the photos were taken with a smartphone that I had that was branded and sold at a 
                    communications company I had worked at as a Full Stack Developer in addition to a Nikon D3300.
                </p>
            </section>
            </div>        
        </div>
        </Fragment>
    )
}

export default About;