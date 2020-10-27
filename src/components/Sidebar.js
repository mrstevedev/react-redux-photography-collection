import React, { Fragment } from "react";
import { setPhoto } from '../actions/index';
import { useSelector, useDispatch } from "react-redux";

const Sidebar = (props) => {
  const photos = useSelector((state) => Array.from(state.photos.photos));
  const activeState = useSelector((state) => state.currentPhoto.currentPhoto.href);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <aside className="vertical" data-aos="fade-right" data-aos-delay="800">
        <ul className="photo-list">
          <h4 className="photo-list-header">Photo Collection</h4>
          {photos.map((photo) => (
            <a
              key={photo.id}
              className="nav-link"
              href={`#${photo.href}`}
              onClick={(e) => dispatch(setPhoto(e, photo.id, photo.href))}
            >
              <li className={activeState === photo.href ? "active" : localStorage.getItem('active') === photo.href ? 'active' : ''}>
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
