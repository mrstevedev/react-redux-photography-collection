import React, { Fragment } from 'react';

const DownloadPhotoIcon = (props) => {
    return (
        <Fragment>
            <li>
                <a 
                href="#!" 
                // download={imageSrc} 
                onClick={(e) => props.handlePhotoDownload(e)}>
                <i className="fas fa-download"></i>
                </a>
            </li>
        </Fragment>
    );
    
}
export default DownloadPhotoIcon;
