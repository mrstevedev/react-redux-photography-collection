import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Logo from "./Logo";

const Contact = props => {
  const handleLink = () => {
    props.history.push("/");
  };
  return (
    <Fragment>
      <section
        className="contact"
        data-aos="fade"
        data-aos-delay="100"
        onSubmit={handleSubmit}
      >
        <div className="left"></div>
        <div className="right">
          <header>
            <div className="goBack">
              <Link className="goback" to="#!" onClick={handleLink}>
                <i className="fas fa-angle-double-left"></i>
              </Link>
            </div>
            <div className="logo">
              <Logo />
            </div>
          </header>

          <div className="contact-form">
            <form action="/success" method="POST">
              <label>
                <input type="text" name="name" required placeholder="Name" />
              </label>

              <label>
                <input type="text" name="email" required placeholder="Email" />
              </label>
              <label>
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Message"
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const handleSubmit = e => {
  console.log("Contact form submitted");
  // e.preventDefault();
};

export default Contact;
