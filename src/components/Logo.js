import React, { Fragment } from "react";

export default function Logo() {
  return (
    <Fragment>
      <div data-aos="fade" data-aos-delay="800">
        <img src="/img/logo.svg" className="logo" />
        <h4 className="logo-sub-txt">Photography</h4>
      </div>
    </Fragment>
  );
}
