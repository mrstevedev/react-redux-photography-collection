import React, { Component, Fragment } from "react";
import Header from './Header';
import Sidebar from '../containers/Sidebar';
import BackToTop from './BackToTop';
import AOS from "aos";
import SideBarRight from "./SideBarRight";
import { store } from '../store';
import Photo from './Photo';
import 'aos/dist/aos.css'; // You can also use <link> for styles


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
    const listItem = document.querySelector(".photo-list li");

    if(localStorage.getItem('active') === null ){
      listItem.classList.add("active");
    }
  }

  handlePhotoDownload = e => {
    console.log(e);
  }

  handleInputSelect = (e) => {
    console.log(e)
  }

  handleSideBarClick = (e, val) => {
    e.preventDefault();
   
    this.setState({
      showSideBarRight: true,
      title: val
    }, () => {
      localStorage.setItem('sidebarRight', this.state.title );
        if(this.state.title === 'Camera Info') {
          localStorage.removeItem('commentInfoContent');
          localStorage.removeItem('shareInfoContent');
          this.setState({
            cameraInfoContent: 
            localStorage.setItem('cameraInfoContent', JSON.stringify(`
              <table style="width: 100%">
                <tbody>                    
                <tr>
                    <th>Transmission <br /> Reference</th>
                    <td>Bill Gates</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>555 77 854</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>555 77 855</td>
                </tr>
                </tbody>                 
              </table>`))
        })
      } else if(this.state.title === 'Comments'){
        localStorage.removeItem('cameraInfoContent');
        localStorage.removeItem('shareInfoContent');
        this.setState({
          commentInfoContent:
            localStorage.setItem('commentInfoContent', JSON.stringify(`
                <form>
                  <textarea placeholder="Enter your comments"></textarea>
                  <div>
                      <button>Post</button>
                      <span className="rating-title">
                          Rate It
                      </span>
                      <span className="star-rating">
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>                       
                      </span>
                  </div>
                </form>
          `))
        })
      } else if(this.state.title === 'Share') {
        localStorage.removeItem('commentInfoContent');
        localStorage.removeItem('cameraInfoContent');
        
        this.setState({
          shareInfoContent:
            localStorage.setItem('shareInfoContent', JSON.stringify(`
                <div id="photo-sharing" class="photo-sharing">
                    <div class="photo-sharing-tabs">
                    <ul role="tablist">
                        <li role="presentation" data-tabkey="photo-tab">
                            <a aria-selected="true" role="tab" tabIndex="0" data-key="photo-tab" onClick={props.handleTabClick}>Photo</a>
                        </li>
                        <li role="presentation" data-tabkey="gallery-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="gallery-tab" onClick={props.handleTabClick}>Gallery</a>
                        </li>
                        <li role="presentation" data-tabkey="social-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="social-tab" onClick={props.handleTabClick}>Social</a>
                        </li>
                        <li role="presentation" data-tabkey="buy-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="buy-tab" onClick={props.handleTabClick}>Cart</a>
                        </li>
                    </ul>
                        <div role="tabpanel" label="Photo">
                            <div class="share-content">
                                <h3>Photo Link</h3>
                                <input class="photo-sharing-tabs-input" type="text" readOnly tabIndex="1" value="https://stevenpulidophotography.com/p/5kKdm344" />

                                <div>
                                  <h3>Embed Photo</h3>
                                  <div class="sp-form-field-underline sp-share-size-dropdown">
                                    <label class="sp-label">Size</label>
                                      <div>
                                        <div>
                                          <select>
                                            <option value="">Choose a size</option>
                                          </select>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `))
         }, () => {
           // Append event handler to input dynamically
         })
      }
    }); 
  }

  handleClose = e => {
    console.log('handleClose Ran');
    localStorage.removeItem('sidebarRight');
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
          <Photo imageSrc={store.getState().imageName} imagePath={store.getState().imagePath} />
          <section data-aos="fade" data-aos-delay="30" id="two"><img src="/img/bonitaskies2.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="three"><img src="/img/bonitasun.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="four"><img src="/img/bonitasunreflection.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="five"><img src="/img/bonitatrolly.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="six"><img src="/img/bonitabridge1.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="seven"><img src="/img/bonitabridge.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="eight"><img src="/img/bonitaclose.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="nine"><img src="/img/djtech.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="ten"><img src="/img/djtech2.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="eleven"><img src="/img/djtech3.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="twelve"><img src="/img/loftcouple.jpg" /></section>
          <section data-aos="fade" data-aos-delay="30" id="thirteen"><img src="/img/rayrooftop.jpg" /></section>
        </div>
        {/* <Footer /> */}
       <BackToTop />
      </Fragment>
    );
  }
}

export default Index;
