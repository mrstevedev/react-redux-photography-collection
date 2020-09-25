import React, { Component, Fragment } from "react";
import store from '../store';

const SideBarRight = (props) => {
  const cameraInfo = JSON.parse(localStorage.getItem('cameraInfoContent'));
    return (
      <aside className={`vertical right ` + (props.showSideBarRight === true ? 'show' : '' || localStorage.getItem('sidebarRight') !== null ? 'show' : '')}>
        <div className="camera-info-close"><i className="fas fa-times" onClick={props.handleClose}></i></div>
        <div className="camera-info">
          <div className="camera-info-header">
            <h3><i className="fas fa-info-circle"></i>Camera Info</h3>
          </div>
          <div className="camera-info-info-body">
              <table style={{ width: '100%' }}>
                <tbody>                    
                <tr>
                    <th>Photo Title</th>
                    <td><i class="fas fa-heading" style={{ fontSize: '0.7rem' }}></i> { props.currentPhoto.title ? props.currentPhoto.title : JSON.parse(localStorage.getItem('cameraInfoContent')) !== null ? cameraInfo.title : '' }</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td><i class="fas fa-map-marker-alt" style={{ fontSize: '0.7rem' }}></i> { props.currentPhoto.location ? props.currentPhoto.location : JSON.parse(localStorage.getItem('cameraInfoContent')) !== null ? cameraInfo.location : '' }</td>
                </tr>
                <tr>
                    <th>Camera</th>
                    <td><i class="fas fa-camera" style={{ fontSize: '0.7rem' }}></i> { props.currentPhoto.camera ? props.currentPhoto.camera : JSON.parse(localStorage.getItem('cameraInfoContent')) !== null ? cameraInfo.camera : '' }</td>
                </tr>
                <tr>
                    <th>Download</th>
                    <td><a style={{ color: '#a9a9ff' }} href={ cameraInfo.imagePath } download={ cameraInfo.title }><i class="fas fa-cloud-download-alt" style={{ fontSize: '0.7rem' }}></i> { cameraInfo.title }</a></td>
                </tr>
                </tbody>     
              </table>
          </div>
        </div>
      </aside>
    );
}

export default SideBarRight;
