import React, { Fragment } from "react";

const CameraInfo = (props) => {
  return (
    <Fragment>
      <li>
        <a href="#!" onClick={e => props.handleCameraInfo(e, "Camera Info")}>
          <i className="fas fa-comments"></i>
        </a>
      </li>
    </Fragment>
  );
};
export default CameraInfo;
