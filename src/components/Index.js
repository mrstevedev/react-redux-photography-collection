import React, { Component, Fragment } from "react";
import About from "./About";
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SideBarRight from "./SideBarRight";


export class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      active: true,
      showSideBarRight: false
    }
  }
  componentDidMount() {
    console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    console.log('AOS Init');
    const activeState = localStorage.getItem('active');
    this.setState({ active: activeState });
    let scrollpos = window.scrollY;
    const list = document.querySelector(".photo-list");
    
    const listItem = document.querySelector(".photo-list li");

    function add_class_on_scroll() {
      list.classList.add("active");
    }

    function remove_class_on_scroll() {
      list.classList.remove("active");
    }

    // window.addEventListener("scroll", function() {
    //   //Here you forgot to update the value
    //   scrollpos = window.scrollY;

    //   if (scrollpos > 10) {
    //     add_class_on_scroll();
    //   } else {
    //     remove_class_on_scroll();
    //   }
    // });
  }

  handleClick = (e, val) => {
    console.log(val);
    const activeState = localStorage.setItem('active', val);
    this.setState({ active: activeState });
    const active = document.querySelector('.active');
    if(active){
      active.classList.remove('active');
    }
    e.currentTarget.parentNode.classList.add('active');
  }

  handleSideBarClick = (e, val) => {
    e.preventDefault();
    console.log('handleInfoClick Ran');
    console.log(val);
    const sideBarRight = document.querySelector('.right');
    sideBarRight.classList.toggle('show');
    this.setState({
      title: val,
    });
  }

  handleClose = e => {
    console.log('handleClose Ran');
    const sideBarRight = document.querySelector('.right');
    sideBarRight.classList.remove('show');
    this.setState({
      close: true
    });
  }

   // Scroll to top
   basicScrollTop = e => {
    // The button
    let backToTopBtn = document.querySelector(".back-to-top-btn");
    // Smooth scroll top
    let topScrollTo = function() {
      if (window.scrollY != 0) {
        setTimeout(function() {
          window.scrollTo(0, window.scrollY - 30);
          topScrollTo();
        }, 5);
      }
    };
    // Listeners
    backToTopBtn.addEventListener("click", topScrollTo);
  };

  componentDidCatch() {
    console.log("//-----------ComponentDidCatch Ran");
  }

  render() {
    return (
      <Fragment>
          <Header />
            <Sidebar 
              active={this.state.active} 
              handleSideBarClick={this.handleSideBarClick} 
              handleClick={this.handleClick} 
            />

            {this.state.close !== true ? (
                <SideBarRight
                  handleClose={this.handleClose}
                  title={this.state.title}
                  showSideBarRight={this.state.showSideBarRight}   
              />
            ) : (
              <SideBarRight
                  handleClose={this.handleClose}
                  title={this.state.title}
                  showSideBarRight={this.state.showSideBarRight}   
              />
            )}
          
        <div className="container">
          <section data-aos="fade" data-aos-delay="100" id="one"><img src="/img/bonitaskies.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="two"><img src="/img/bonitaskies2.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="three"><img src="/img/bonitasun.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="four"><img src="/img/bonitasunreflection.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="five"><img src="/img/bonitatrolly.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="six"><img src="/img/bonitabridge1.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="seven"><img src="/img/bonitabridge.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="eight"><img src="/img/bonitaclose.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="nine"><img src="/img/djtech.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="ten"><img src="/img/djtech2.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="eleven"><img src="/img/djtech3.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="twelve"><img src="/img/loftcouple.jpg" /></section>
          <section data-aos="fade" data-aos-delay="100" id="thirteen"><img src="/img/rayrooftop.jpg" /></section>
        </div>
        {/* <Footer /> */}
       <BackToTop basicScrollTop={this.basicScrollTop} />
      </Fragment>
    );
  }
}

export default Index;
