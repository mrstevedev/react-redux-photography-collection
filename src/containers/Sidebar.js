import React, { useState, Fragment } from "react";
import { store } from "../store";
import { setPhoto } from "../actions";

const Sidebar = (props) => {
  let arr = Array.from(props.photos);
  // console.log("props in sidebar::::", props);
  return (
    <Fragment>
      <aside className="vertical" data-aos="fade-right" data-aos-delay="800">
        <ul className="photo-list">
          <h4 className="photo-list-header">Photo Collection</h4>
          {arr.map((photo) => (
            <a
              key={photo.id}
              className="nav-link"
              href={`#${photo.href}`}
              onClick={(e) => props.handleSideBarClick(e, photo.id, photo.href)}
            >
              <li className={props.active === photo.href ? "active" : ""}>
                {photo.title}
              </li>
            </a>
          ))}
        </ul>
        <ul className="copyright-list">
          <li>
            <p className="copyright">
              <a href="https://mrstevedev.io/">Steven Pulido</a> | &copy; 2020
            </p>
          </li>
          <li>
            <p className="copyright">Built with React & Redux</p>
          </li>
        </ul>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
