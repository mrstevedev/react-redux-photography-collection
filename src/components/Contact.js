import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Logo from "./Logo";
import axios from 'axios';

const Contact = props => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
    console.log(`Submitting name ${name}`);
    console.log(`Submitting email ${email}`);
    console.log(`Submitting message ${message}`);
    axios({
      method: 'POST',
      url: 'http://localhost:4000/success',
      data: {
        name,
        email,
        message
      }
    }).then((res) => {
      if(res.data === 'success') {
        console.log('Message Sent');
        setSuccess('Success');
        resetForm();
      } else if(res.data === 'fail') {
        console.log('Message Fail');
      }
    }).catch(err => console.log(err))
  };

  const resetForm = () => {
    document.getElementById('contact-form').reset();
  }

  const handleLink = () => {
    props.history.push("/");
  };
  return (
    <Fragment>
      <section
        className="contact"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="left"></div>
        <div className="right">
          <header>
            <div className="goBack">
              <Link className="goback" to="#!" onClick={handleLink}>
                <i className="fas fa-angle-double-left"></i>
              </Link>
            </div>
            <div className="logo-container">
              <Logo />
            </div>
          </header>

          <div className="contact-form">
           {!success ? (
 <form id="contact-form" onSubmit={handleSubmit} method="POST">
 <label>
   <input 
     type="text" 
     name="name" 
     required 
     placeholder="Name" 
     onChange={event => setName(event.target.value)} />
 </label>

 <label>
   <input type="text" 
     name="email" 
     required 
     placeholder="Email" 
     onChange={event => setEmail(event.target.value)}  
     />
 </label>
 <label>
   <input
     type="text"
     name="message"
     required
     placeholder="Message"
     onChange={event => setMessage(event.target.value)}  
   />
 </label>
 <input type="submit" value="Submit" />
</form>
           ) : 'Message Sent'}
          </div>
        </div>
      </section>
    </Fragment>
  );
};



export default Contact;
