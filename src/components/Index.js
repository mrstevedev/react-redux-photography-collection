import React, { Component, Fragment } from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import AOS from "aos";
import SideBarRight from "./SideBarRight";
import CookiesNotification from './CookiesNotification';
import store from '../store';
import Photo from './Photo';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import photos from "../../api/photos.json";
import { session } from "passport";
import Photos from "./Photos";
import { fetchPhotos } from '../actions';

export class Index extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      active: '',
      showSideBarRight: false,
      photos: [],
      currentPhoto: {},
      showCookieNotification: false,
      windowWidth: undefined
    }
  }
  componentDidMount() {
    store.dispatch(fetchPhotos());
    store.subscribe(() => {
      // console.log(store.getState().photos.photos);
      const { photos } = store.getState().photos;
      this.setState({ photos: photos });
      const activeState = localStorage.getItem('active');
      this.setState({ active: activeState });
      const listItem = document.querySelector(".photo-list li");
      if(localStorage.getItem('active') === null ){
            listItem.classList.add("active");
      }
    });
    this.handleResize();
    window.addEventListener('resize', this.handleResize)

    // const { REACT_APP_API_URL } = process.env;
    // console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    // console.log('AOS Init');
    // console.log('call store.getState(): ', store.getState().photos);
    // axios.get( `${ REACT_APP_API_URL }/photos`, {
    //   headers: {
    //     'requestapi': "123",
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(data => {
    //     this.setState({ photos: data.data })
    //     const activeState = localStorage.getItem('active');
    //     this.setState({ active: activeState });
    //     const listItem = document.querySelector(".photo-list li");
    
    //     if(localStorage.getItem('active') === null ){
    //       listItem.classList.add("active");
    //     }
    // }).catch(err => console.log(err))
   

    if (!document.cookie.split(';').some((item) => item.includes('spp_notification_accept=true'))) {
      // console.log('The cookie "spp_notification_accept" has "true" for value')
      setTimeout(() => {
        this.setState({ showCookieNotification: true });
      }, 5000);
    }
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  handlePhotoDownload = e => {
    // console.log(e);
  }

  handleInputSelect = (e) => {
    // console.log(e)
  }

  handleRightSideBarClick = (e, curr, val) => {
    e.preventDefault();
   
    this.setState({
      showSideBarRight: true,
      title: val
    }, () => {
      localStorage.setItem('sidebarRight', this.state.title );
      }); 
    }

  // handleSideBarClick = (e, id, val) => {
  //   localStorage.setItem('active', val);
  //   const activeNode = document.querySelector('.active');
  //   const getActiveState = localStorage.getItem('active');
  //   if(id) {
  //     const currPhoto = this.state.photos.find((photo) => photo.id === id)
  //     this.setState({ currentPhoto: currPhoto }, () => {
  //       cameraInfoContent: 
  //       localStorage.setItem('cameraInfoContent', 
  //       JSON.stringify({
  //         title: currPhoto.title,
  //         location: currPhoto.location,
  //         camera: currPhoto.camera,
  //         imagePath: currPhoto.imagePath
  //       }))
  //     })
  //   }
  //   this.setState({ active: getActiveState });
  //   // console.log('id: ', id)
  //   if(activeNode){
  //     activeNode.classList.remove('active');
  //   }
  //   e.currentTarget.querySelector('.nav-link li').classList.add('active');
  //   // store.dispatch(setInfo(val))
  // }

  handleClose = e => {
    // console.log('handleClose Ran');
    localStorage.removeItem('sidebarRight');
    this.setState({
      showSideBarRight: false
    });
  }

  handleCloseInfoOverlay = (e) => {
    e.preventDefault();
    
    e.target.parentNode.parentNode.parentNode.classList.remove('show')
  }

  handleCloseCookieModal = (e) => {
    // console.log('Close cookie notification modal');
    this.setState({ showCookieNotification: false }, () => {
      // Set a cookie when the 'accept' button is clicked
      // https://www.npmjs.com/package/react-cookie
      document.cookie="spp_notification_accept=true;";
    });
  }

  handleTouchStart = (e) => {
    e.target.parentNode.previousSibling.classList.add('show')
  }

  componentWillUnmount() {
    this.setState = (state,callback) => {
      return;
    };
  }

  componentDidCatch() {
    // console.log("//-----------ComponentDidCatch Ran");
  }

  render() {
    return (
      <Fragment>
          <Header />
          { this.state.windowWidth >= 1420 ? (
              <Sidebar
              currentPhoto={this.props.currentPhoto}
              photos={this.state.photos}
              // imageSrc={store.getState().imageSrc}
              active={this.state.active} 
              handleSideBarClick={this.handleSideBarClick} 
              handlePhotoDownload={this.handlePhotoDownload}
            />
          ) : null }
          
            {this.state.windowWidth >= 1420 ? (
              <SideBarRight
                currentPhoto={this.state.currentPhoto}
                handleClose={this.handleClose}
                title={this.state.title}
                showSideBarRight={this.state.showSideBarRight}   
            />
          ): null}
          
        { this.state.windowWidth >= 1420 ? (
          <div className="container desktop">         
            <Photo handleRightSideBarClick={this.handleRightSideBarClick} currentPhoto={this.state.currentPhoto} />
            {/* <Photo currentPhoto={currentPhoto} imageSrc={store.getState().imageName} imagePath={store.getState().imagePath} /> */}
          </div>
        ) : null }
       { this.state.windowWidth <= 1420 ? (
          <div className="container mobile">
            <div className="mobile__info-legend" style={{ padding: '6rem 0 0 1.3rem' }}>
              <h4 style={{ fontWeight: '100', fontSize: '0.72rem' }}>Touch photo for details</h4>
            </div>
            <Photos handleCloseInfoOverlay={this.handleCloseInfoOverlay} handleTouchStart={this.handleTouchStart} photos={this.state.photos} />
          </div>
       ) : null }
        { this.state.showCookieNotification === true ? (
          <CookiesNotification handleCloseCookieModal={this.handleCloseCookieModal} />
        ) : null }
        { this.state.windowWidth <= 1420 ? (
          <BackToTop />
        ) : null }
      </Fragment>
    );
  }
}

export default Index;
