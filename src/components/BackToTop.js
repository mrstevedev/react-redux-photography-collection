import React, { Fragment } from "react";

const BackToTop = (props) => {  
    return (
      <Fragment>
        <div className="back-to-top" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="800">
          <a className="back-to-top-btn" onClick={topScrollTo}>
            <i className="fas fa-long-arrow-alt-up"></i>Back To Top
          </a>
        </div>
      </Fragment>
    );
}


   // Scroll to top
   // Smooth scroll top
   let topScrollTo = function() {
     if (window.scrollY != 0) {
       setTimeout(function() {
         window.scrollTo(0, window.scrollY - 30);
         topScrollTo();
       }, 5);
     }
   };


export default BackToTop;
