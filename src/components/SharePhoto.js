import React, { Fragment } from "react";

const SharePhoto = (props) => {
  return (
    <Fragment>
        <a href="#!" onClick={(e) => props.handleShare(e)}>
      <li>
          <i className="fas fa-share-alt"></i>
      </li>
        </a>
    </Fragment>
  );
};

export default SharePhoto;
