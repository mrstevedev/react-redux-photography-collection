import React, { Component, Fragment } from "react";
import store from '../store';

const SideBarRight = (props) => {
    return (
      <aside className={`vertical right ` + (props.showSideBarRight === true ? 'show' : '' || localStorage.getItem('sidebarRight') !== null ? 'show' : '')}>
        <div className="camera-info-close"><i className="fas fa-times" onClick={props.handleClose}></i></div>
        <div className="camera-info">
          <div className="camera-info-header">
            {localStorage.getItem('sidebarRight') ? <h3><i className="fas fa-info-circle"></i>{localStorage.getItem('sidebarRight')}</h3> : null}
          </div>
          <div className="camera-info-info-body">
            {props.title === 'Camera Info' || localStorage.getItem('cameraInfoContent') !== null ? (
                  <div dangerouslySetInnerHTML={{__html: JSON.parse(localStorage.getItem('cameraInfoContent')) }}/>
              ) : (
                  props.title === 'Comments' || localStorage.getItem('commentInfoContent') !== null ?  (
                    <div dangerouslySetInnerHTML={{__html: JSON.parse(localStorage.getItem('commentInfoContent')) }}/>
              )
                : (
                  props.title === 'Share' || localStorage.getItem('shareInfoContent') !== null ? (
                    <div dangerouslySetInnerHTML={{__html: JSON.parse(localStorage.getItem('shareInfoContent')) }} />
              ) : null ))}
          </div>
        </div>
      </aside>
    );
}

export default SideBarRight;
