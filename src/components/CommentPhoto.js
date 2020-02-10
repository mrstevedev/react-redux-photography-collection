import React, { Fragment } from "react";

const CommentPhoto = (props) => {
  return (
    <Fragment>
        <a href="#!" onClick={e => props.handleComment(e, "Comments")}>
      <li>
          <i className="fas fa-comments"></i>
      </li>
        </a>
    </Fragment>
  );
};
export default CommentPhoto;
