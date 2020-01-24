import React, { Fragment } from 'react';

const DownloadPhotoIcon = (props) => {
    return (
        <Fragment>
            <li>
                <a 
                href={props.imagePath} 
                download={props.imageName} 
                onClick={(e) => props.handlePhotoDownload(e)}>
                <i className="fas fa-download"></i>
                </a>
            </li>
        </Fragment>
    );
    
}
export default DownloadPhotoIcon;
