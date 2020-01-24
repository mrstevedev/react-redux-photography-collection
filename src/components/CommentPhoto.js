import React, { Fragment } from "react";

const CommentPhoto = (props) => {
  return (
    <Fragment>
      <li>
        <a href="#!" onClick={e => props.handleComment(e, "Comments")}>
          <i className="fas fa-comments"></i>
        </a>
      </li>
    </Fragment>
  );
};
export default CommentPhoto;
