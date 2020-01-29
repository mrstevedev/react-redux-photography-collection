import React, { useState, Fragment } from 'react';
import CameraInfo from './CameraInfo';
import CommentPhoto from './CommentPhoto';
import SharePhoto from './SharePhoto';
import DownloadPhoto from './DownloadPhoto';
import { store } from '../store';
import { setInfo } from '../actions';

const Sidebar = (props) => {

    // const[active, setActive] = useState(props);
    
    const dispatchAction = (e, val) => {
        const activeState = localStorage.setItem('active', val);
        const active = document.querySelector('.active');
        // setActive({ active: activeState });
        if(active){
          active.classList.remove('active');
        }
        e.currentTarget.querySelector('.nav-link li').classList.add('active');
        store.dispatch(setInfo(val))
      }
        return (
            <Fragment>
                 <aside className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">My Photos <i className="far fa-images"></i></h4>
                        <a className="nav-link" href="#one" onClick={(e) => dispatchAction(e, 'one')}><li className={props.active === 'one' ? 'active' : ''}>Bonita Misty Morning</li></a>
                        <a className="nav-link" href="#two" onClick={(e) => dispatchAction(e, 'two')}><li className={props.active === 'two' ? 'active' : ''}>Bonita Early Morning</li></a>
                        <a className="nav-link" href="#three" onClick={(e) => dispatchAction(e, 'three')}><li className={props.active === 'three' ? 'active' : ''}>Bonita Sun</li></a>
                        <a className="nav-link" href="#four" onClick={(e) => dispatchAction(e, 'four')}><li className={props.active === 'four' ? 'active' : ''}>Bonita Reflection</li></a>
                        <a className="nav-link" href="#five" onClick={(e) => dispatchAction(e, 'five')}><li className={props.active === 'five' ? 'active' : ''}>Bonita Trolly</li></a>
                        <a className="nav-link" href="#six" onClick={(e) => dispatchAction(e, 'six')}><li className={props.active === 'six' ? 'active' : ''}>Bonita Bridge</li></a>
                        <a className="nav-link" href="#seven" onClick={(e) => dispatchAction(e, 'seven')}><li className={props.active === 'seven' ? 'active' : ''}>Bonita Wonder</li></a>
                        <a className="nav-link" href="#eight" onClick={(e) => dispatchAction(e, 'eight')}><li className={props.active === 'eight' ? 'active' : ''}>Bonita Thoughts</li></a>
                        <a className="nav-link" href="#nine" onClick={(e) => dispatchAction(e, 'nine')}><li className={props.active === 'nine' ? 'active' : ''}>DJ Tech Set</li></a>
                        <a className="nav-link" href="#ten" onClick={(e) => dispatchAction(e, 'ten')}><li className={props.active === 'ten' ? 'active' : ''}>DJ Tech Set II</li></a>
                        <a className="nav-link" href="#eleven" onClick={(e) => dispatchAction(e, 'eleven')}><li className={props.active === 'eleven' ? 'active' : ''}>DJ Tech Set III</li></a>
                        <a className="nav-link" href="#twelve" onClick={(e) => dispatchAction(e, 'twelve')}> <li className={props.active === 'twelve' ? 'active' : ''}>Loft Couple</li></a>
                    </ul>
                    <ul className="info-toggle-list">
                        {/* <li><a href="#!" onClick={(e) => props.handleSideBarClick(e, 'Camera Info')}><i className="fas fa-info-circle"></i></a></li> */}
                        <CameraInfo 
                          handleCameraInfo={(e) => props.handleSideBarClick(e, 'Camera Info')} />

                        <CommentPhoto
                          handleComment={(e) => props.handleSideBarClick(e, 'Comments')} />

                        <SharePhoto 
                          handleShare={(e) => props.handleSideBarClick(e, 'Share')} 
                        />
                        <DownloadPhoto
                          imageName={store.getState().imageName}
                          imagePath={store.getState().imagePath}
                          handlePhotoDownload={(e) => dispatchAction(e, 'Download_Photo')}
                        />
                    </ul>
                    <ul className="copyright-list">
                      <li>
                        <p className="copyright">Steven Pulido | &copy; 2020</p>                        
                        </li>
                        <li>
                        <p className="copyright">Built with React & Redux</p>
                      </li>
                    </ul>
                    </aside>
            </Fragment>
        ); 
}

export default Sidebar;
