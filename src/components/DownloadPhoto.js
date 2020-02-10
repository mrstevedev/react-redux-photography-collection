import React, { Fragment } from "react";

const DownloadPhoto = props => {
  return (
    <Fragment>
      <a
        className="nav-link"
        href={props.imagePath}
        download={props.imageName}
        onClick={e => props.handlePhotoDownload(e)}>
        <li>
          <i className="fas fa-download"></i>
        </li>
      </a>
    </Fragment>
  );
};
export default DownloadPhoto;
