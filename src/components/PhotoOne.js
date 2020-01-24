import React, { Fragment } from "react";

const PhotoOne = ({ imageName, imagePath }) => {
  return (
    <Fragment>
        <section data-aos="fade" data-aos-delay="200" id="one">
            <img src={ imagePath } />
        </section>
    </Fragment>
  );
};

export default PhotoOne;
