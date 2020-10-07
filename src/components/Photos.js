import React, { Fragment } from "react";
import CameraInfo from "./CameraInfo";

const Photos = (props) => {
  //   const cameraInfo = JSON.parse(localStorage.getItem('cameraInfoContent'));
  let arr = Array.from(props.photos);
  console.log(arr, "arr in photos");
  return (
    <Fragment>
      {arr.map((photo) => (
        <section key={ photo.id } data-aos="fade" data-aos-delay="30">
            <img src={ photo.imagePath } />
        </section>
      ))}
    </Fragment>
  );
};

export default Photos;
