import React, { Fragment } from "react";

const PhotoOne = ({ imageSrc }) => {
  return (
    <Fragment>
        <section data-aos="fade" data-aos-delay="200" id="one">
            <img src={ imageSrc } />
        </section>
    </Fragment>
  );
};

export default PhotoOne;
