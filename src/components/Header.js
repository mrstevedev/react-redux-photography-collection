import React, { Component, Fragment } from "react";
import Logo from './Logo';
import NavBar from './Navbar';

const Header = () => (
  <header className="header" data-aos="fade" data-aos-delay="100">
    <Logo />
    <NavBar />
  </header>
);

export default Header;
