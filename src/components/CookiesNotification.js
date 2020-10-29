import React from 'react';
import { closeNotification } from '../actions';
import { useDispatch } from 'react-redux';

export default function CookiesNotification(props) {
    const dispatch = useDispatch();
    return (
        <div data-aos="fade-in" data-aos-delay="30" className="cookies__notification">
            <header><i className="fas fa-times close" onClick={() => dispatch(closeNotification()) }></i></header>
            <p>This site uses cookies to provide a great user experience. <br /> By using this site, you agree to our use of cookies.</p>
            <button className="cookies__notification-acceptBtn" onClick={() => dispatch(closeNotification())}>Accept</button>
            <button className="cookies__notification-moreBtn" href="/about-cookies">Read More</button>
        </div>
    );
}
