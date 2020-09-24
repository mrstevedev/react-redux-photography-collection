import React, { Fragment } from "react";

const CameraInfo = (props) => {
  console.log('props:::::',props)
  return (
    <Fragment>
        <a title="See Current Photo Info" href="#!" onClick={e => props.handleRightSideBarClick(e, props.currPhoto, "Camera Info")} className="camera__info--icon">
          <li><i className="fas fa-info-circle"></i></li>
        </a>
    </Fragment>
  );
};
export default CameraInfo;
