import React, { Component, Fragment } from "react";
import Header from './Header';
import Sidebar from '../containers/Sidebar';
import BackToTop from './BackToTop';
import AOS from "aos";
import SideBarRight from "./SideBarRight";
import { store } from '../store';
import Photo from './Photo';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import photos from "../../api/photos";
import CameraInfo from './CameraInfo';


export class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      active: '',
      showSideBarRight: false,
      photos: [],
      currentPhoto: {}
    }
  }
  componentDidMount() {
    const { REACT_APP_API_URL } = process.env;
    console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    console.log('AOS Init');
    console.log('call store.getState(): ', store.getState().photos);
    fetch(`${ REACT_APP_API_URL }/photo`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data })
      })

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

  handleRightSideBarClick = (e, curr, val) => {
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
            localStorage.setItem('cameraInfoContent', 
            JSON.stringify({
              title: curr.title,
              location: curr.location,
              camera: curr.camera,
              imagePath: curr.imagePath
            }))
          })
        }
    }); 
  }

  handleSideBarClick = (e, id, val) => {
    const activeState = localStorage.setItem('active', val);
    const activeNode = document.querySelector('.active');
    const getActiveState = localStorage.getItem('active');
    if(id) {
      const currPhoto = photos.find((photo) => photo.id === id)
      this.setState({ currentPhoto: currPhoto }, () => {
        cameraInfoContent: 
        localStorage.setItem('cameraInfoContent', 
        JSON.stringify({
          title: currPhoto.title,
          location: currPhoto.location,
          camera: currPhoto.camera,
          imagePath: currPhoto.imagePath
        }))
      })
    }
    this.setState({ active: getActiveState });
    console.log('id: ', id)
    if(activeNode){
      activeNode.classList.remove('active');
    }
    e.currentTarget.querySelector('.nav-link li').classList.add('active');
    // store.dispatch(setInfo(val))
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
              currentPhoto={this.props.currentPhoto}
              photos={this.state.photos}
              imageSrc={store.getState().imageSrc}
              active={this.state.active} 
              handleSideBarClick={this.handleSideBarClick} 
              handlePhotoDownload={this.handlePhotoDownload}
              handleClick={this.handleClick} 
            />

            {this.state.close !== true ? (
              <SideBarRight
                currentPhoto={this.state.currentPhoto}
                handleTabClick={this.handleTabClick}
                handleClose={this.handleClose}
                title={this.state.title}
                showSideBarRight={this.state.showSideBarRight}   
            />
          ): null}
          
        <div className="container">         
          <Photo handleRightSideBarClick={this.handleRightSideBarClick} currentPhoto={this.state.currentPhoto} />
          {/* <Photo currentPhoto={currentPhoto} imageSrc={store.getState().imageName} imagePath={store.getState().imagePath} /> */}
        </div>
        {/* <Footer /> */}
       <BackToTop />
      </Fragment>
    );
  }
}

export default Index;
