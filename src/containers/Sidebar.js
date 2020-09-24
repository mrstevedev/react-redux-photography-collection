import React, { useState, Fragment } from 'react';
import CameraInfo from '../components/CameraInfo';
import CommentPhoto from '../components/CommentPhoto';
import SharePhoto from '../components/SharePhoto';
import DownloadPhoto from '../components/DownloadPhoto';
import { store } from '../store';
import { setInfo } from '../actions';

const Sidebar = (props) => {

    const { photos } = props;

        return (
            <Fragment>
                 <aside className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">Photo Collection</h4>
                    {photos.map(photo => (
                        <a key={photo.id} className="nav-link" href={`#${ photo.href }`} onClick={(e) => props.handleSideBarClick(e, photo.id, photo.href)}>
                          <li className={ props.active === props.href ? 'active' : ''}>{photo.title}</li>
                        </a>
                    ))}                        
                    </ul>
                    <ul className="info-toggle-list">
                        {/* <li><a href="#!" onClick={(e) => props.handleSideBarClick(e, 'Camera Info')}><i className="fas fa-info-circle"></i></a></li> */}
                        {/* <CameraInfo 
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
                        /> */}
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
