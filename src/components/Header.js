import React, { Component, Fragment } from "react";
import Logo from './Logo';
import NavBar from './Navbar';

const Header = () => (
  <header className="header">
    <Logo />
    <NavBar />
  </header>
);

export default Header;
