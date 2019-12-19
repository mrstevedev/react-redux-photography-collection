import React, { Component } from "react";

class BackToTop extends Component {  
  render() {
    return (
      <div>
        <div className="back-to-top" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="800">
          <a href="#!" className="back-to-top-btn" onClick={this.props.basicScrollTop}>
            <i className="fas fa-long-arrow-alt-up"></i>Back To Top
          </a>
        </div>
      </div>
    );
  }
}

export default BackToTop;
