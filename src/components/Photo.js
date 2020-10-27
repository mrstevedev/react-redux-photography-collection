import React, { Fragment } from "react";
import CameraInfo from './CameraInfo';
import { useSelector } from 'react-redux';

const Photo = (props) => {
  const photo = useSelector((state) => state.currentPhoto);
  const cameraInfo = JSON.parse(localStorage.getItem('cameraInfoContent'));
  return (
    <Fragment>
        <section data-aos="fade" data-aos-delay="30">
          <CameraInfo handleRightSideBarClick={props.handleRightSideBarClick} currPhoto={props.currentPhoto} />
            <img src={ photo.currentPhoto.imagePath ? photo.currentPhoto.imagePath : JSON.parse(localStorage.getItem('cameraInfoContent')) != null ? cameraInfo.imagePath : './img/bonitaskies.jpg'} />
        </section>
    </Fragment>
  );
};

export default Photo;
