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
import { store } from '../store';
import PhotoOne from './PhotoOne';


export class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      active: '',
      showSideBarRight: false
    }
  }
  componentDidMount() {
    console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    console.log('AOS Init');
    console.log('call store.getState(): ', store.getState().photos);

    const activeState = localStorage.getItem('active');
    this.setState({ active: activeState });
    let scrollpos = window.scrollY;
    const list = document.querySelector(".photo-list");    
    const listItem = document.querySelector(".photo-list li");

    if(localStorage.getItem('active') === null ){
      listItem.classList.add("active");
    }

    // function add_class_on_scroll() {
    //   list.classList.add("active");
    // }

    // function remove_class_on_scroll() {
    //   list.classList.remove("active");
    // }

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

  handlePhotoDownload = e => {
    console.log(e);
  }

  handleSideBarClick = (e, val) => {
    e.preventDefault();
    console.log('handleInfoClick Ran');
    console.log(val);
    this.setState({
      showSideBarRight: true,
      title: val
    });
  }

  handleClose = e => {
    console.log('handleClose Ran');
    this.setState({
      showSideBarRight: false
    });
  }


  handleTabClick = e => {
    console.log('handle tab click');
  }

  componentDidCatch() {
    console.log("//-----------ComponentDidCatch Ran");
  }

  render() {
    return (
      <Fragment>
          <Header />
            <Sidebar
              imageSrc={store.getState().imageSrc}
              active={this.state.active} 
              handleSideBarClick={this.handleSideBarClick} 
              handlePhotoDownload={this.handlePhotoDownload}
              handleClick={this.handleClick} 
            />

            {this.state.close !== true ? (
                <SideBarRight
                  handleTabClick={this.handleTabClick}
                  handleClose={this.handleClose}
                  title={this.state.title}
                  showSideBarRight={this.state.showSideBarRight}   
              />
            ): null}
          
        <div className="container">
          <PhotoOne imageSrc={store.getState().imageName} imagePath={store.getState().imagePath} />
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
       <BackToTop />
      </Fragment>
    );
  }
}

export default Index;
