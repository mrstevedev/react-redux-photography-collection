import React, { Fragment } from "react";

const SharePhoto = (props) => {
  return (
    <Fragment>
      <li>
        <a href="#!" onClick={(e) => props.handleShare(e)}>
          <i className="fas fa-share-alt"></i>
        </a>
      </li>
    </Fragment>
  );
};

export default SharePhoto;
