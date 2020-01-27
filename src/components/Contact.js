import React, { Fragment } from 'react';

const Contact = (props) => {
    return (
        <Fragment>
            <section className="contact" data-aos="fade" data-aos-delay="100" onSubmit={handleSubmit}>
            <div className="left"></div>
                <div className="right">
                    <h4>Contact</h4>
                    <form action="/success" method="POST">
                        <label>Name:
                            <input type="text" name="name" required />
                        </label>
                        
                        <label>Email:
                            <input type="text" name="name" required />
                        </label>
                        <label>Message:
                            <input type="text" name="name" required />
                        </label>              
                        <input type="submit" value="Submit" />          
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

const handleSubmit = (e) => {
    console.log('Contact form submitted');
    // e.preventDefault();
    
}

export default Contact;