import React, { Component, Fragment } from "react";
import About from "./About";
import Header from './Header';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles


export class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    console.log('AOS Init');
  }

  componentDidCatch() {
    console.log("//-----------ComponentDidCatch Ran");
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <Header />                  
        </header>

        <nav className="vertical" data-aos="fade-right" data-aos-delay="600">
           <ul>
               <li><a className="nav-link" href="#">Bonita Misty Morning</a></li>
               <li><a className="nav-link" href="#">Bonita Early Morning</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Sun</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Reflection</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Trolly</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Bridge</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Wonder</a></li>
               <li><a className="nav-link disabled" href="#">Bonita Thoughts</a></li>
               <li><a className="nav-link disabled" href="#">DJ Tech Set</a></li>
               <li><a className="nav-link disabled" href="#">DJ Tech Set II</a></li>
               <li className="active"><a className="nav-link disabled" href="#">DJ Tech Set III</a></li>
               <li><a className="nav-link disabled" href="#">Loft Couple</a></li>
           </ul>
           <ul className="info-toggle-list">
               <li><a href=""><i className="fas fa-info-circle"></i></a></li>
               <li><a href=""><i className="fas fa-comments"></i></a></li>
               <li><a href=""><i className="fas fa-share-alt"></i></a></li>
               <li><a href=""><i className="fas fa-download"></i></a></li>
           </ul>
          </nav>
          
        <nav className="nav-right horizontal">
           <ul>
               <li><Link className="nav-link active" to="/">Home</Link></li>
               <li><Link className="nav-link" to="/about">Archives</Link></li>
               <li><Link className="nav-link disabled" to="#">Speaking</Link></li>
               <li><Link className="nav-link disabled" to="#">RSS Feed</Link></li>
           </ul>
          </nav>
        <div className="container">
          <div><img src="/img/bonitaskies.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitaskies2.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitasun.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitasunreflection.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitatrolly.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitabridge1.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitabridge.jpg" /></div>
          <div data-aos="fade"><img src="/img/bonitaclose.jpg" /></div>
          <div data-aos="fade"><img src="/img/djtech.jpg" /></div>
          <div data-aos="fade"><img src="/img/djtech2.jpg" /></div>
          <div data-aos="fade"><img src="/img/djtech3.jpg" /></div>
          <div data-aos="fade"><img src="/img/loftcouple.jpg" /></div>
          <div data-aos="fade"><img src="/img/rayrooftop.jpg" /></div>
        </div>
        {/* <Footer /> */}
        <div className="back-to-top" data-aos="fade-up" data-aos-offset="800">
            <a href="#!" className="back-to-top"><i className="fas fa-long-arrow-alt-up"></i>Back To Top</a>
        </div>
      </Fragment>
    );
  }
}

export default Index;
