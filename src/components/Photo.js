import React, { Fragment } from "react";
import CameraInfo from './CameraInfo';

const Photo = (props) => {
  return (
    <Fragment>
        <section data-aos="fade" data-aos-delay="30">
          <CameraInfo handleRightSideBarClick={props.handleRightSideBarClick} currPhoto={props.currentPhoto} />
            <img src={ props.currentPhoto.imagePath ? props.currentPhoto.imagePath : './img/bonitaskies.jpg' } />
        </section>
    </Fragment>
  );
};

export default Photo;
