import React, { Fragment } from "react";

const Photo = ({ imageName, imagePath }) => {
  return (
    <Fragment>
        <section data-aos="fade" data-aos-delay="30" id="one">
            <img src={ imagePath } />
        </section>
    </Fragment>
  );
};

export default Photo;
