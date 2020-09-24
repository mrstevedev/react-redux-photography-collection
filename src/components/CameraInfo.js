import React, { Fragment } from "react";

const CameraInfo = (props) => {
  return (
    <Fragment>
        <a href="#!" onClick={e => props.handleCameraInfo(e, "Camera Info")} className="camera__info--icon">
          <li><i className="fas fa-info-circle"></i></li>
        </a>
    </Fragment>
  );
};
export default CameraInfo;
