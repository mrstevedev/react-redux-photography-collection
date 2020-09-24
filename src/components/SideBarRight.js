import React, { Component, Fragment } from "react";
import store from '../store';

const SideBarRight = (props) => {
  const cameraInfo = JSON.parse(localStorage.getItem('cameraInfoContent') !== null);
    return (
      <aside className={`vertical right ` + (props.showSideBarRight === true ? 'show' : '' || localStorage.getItem('sidebarRight') !== null ? 'show' : '')}>
        <div className="camera-info-close"><i className="fas fa-times" onClick={props.handleClose}></i></div>
        <div className="camera-info">
          <div className="camera-info-header">
            {localStorage.getItem('sidebarRight') ? <h3><i className="fas fa-info-circle"></i>{localStorage.getItem('sidebarRight')}</h3> : null}
          </div>
          <div className="camera-info-info-body">
              <table style={{ width: '100%' }}>
                <tbody>                    
                <tr>
                    <th>Title</th>
                    <td>{ props.currentPhoto.title ? props.currentPhoto.title : cameraInfo.title }</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>{ props.currentPhoto.location ? props.currentPhoto.location : cameraInfo.location }</td>
                </tr>
                <tr>
                    <th>Camera</th>
                    <td>{ props.currentPhoto.camera ? props.currentPhoto.camera : cameraInfo.camera }</td>
                </tr>
                </tbody>     
              </table>
          </div>
        </div>
      </aside>
    );
}

export default SideBarRight;
