import React from 'react'

export default function CookiesNotification(props) {
    return (
        <div data-aos="fade-in" data-aos-delay="30" className="cookies__notification">
            <header><i class="fas fa-times close" onClick={props.handleCloseCookieModal}></i></header>
            <p>This site uses cookies to provide a great user experience. <br /> By using this site, you agree to our use of cookies.</p>
            <button className="cookies__notification-acceptBtn" onClick={props.handleCloseCookieModal}>Accept</button>
            <button className="cookies__notification-moreBtn" href="/about-cookies">More</button>
        </div>
    );
}
