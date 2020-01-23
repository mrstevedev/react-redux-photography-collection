import React, { Component, Fragment } from 'react';

class DownloadPhotoIcon extends Component {
    render() {
        return (
            <Fragment>
                <li>
                    <a 
                    href="#!" 
                    // download={imageSrc} 
                    onClick={(e) => this.props.handlePhotoDownload(e)}>
                    <i className="fas fa-download"></i>
                    </a>
                    </li>
            </Fragment>
        );
    }
}
export default DownloadPhotoIcon;
