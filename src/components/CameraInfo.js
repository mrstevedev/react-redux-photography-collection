import React, { Fragment } from "react";
import { useDispatch } from 'react-redux';
import { showSidebar } from '../actions';

const CameraInfo = (props) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <a
        data-aos="fade-in"
        data-aos-delay="1500"
        flow="right"
        tooltip="Current Photo Info"
        href="#!"
        onClick={(e) => dispatch(showSidebar(e, 'Camera Info'))}
        // onClick={(e) =>
        //   props.handleRightSideBarClick(e, props.currPhoto, "Camera Info")
        // }
        className="camera__info--icon"
      >
        <i className="fas fa-info-circle"></i>
      </a>
    </Fragment>
  );
};
export default CameraInfo;
