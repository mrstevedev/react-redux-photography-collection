import React, { Component } from "react";

class SideBarRight extends Component {
  constructor(props) {
    super(props);
    console.log('props in sidebarRight: ', props);
  }
  render() {
    return (
      <div className={`vertical right ` + (this.props.showSideBarRight === true ? ' show' : '')}>
        <div className="camera-info-close"><i className="fas fa-times" onClick={this.props.handleClose}></i></div>
        <div className="camera-info">
          <div className="camera-info-header">
            {this.props.title ? <h3><i className="fas fa-info-circle"></i>{this.props.title}</h3> : null}
          </div>
          <div className="camera-info-info-body">
              {this.props.title === 'Camera Info' ? (
                  <table style={{"width": "100%"}}>
                  <tbody>                    
                  <tr>
                      <th>Transmission <br /> Reference</th>
                      <td>Bill Gates</td>
                  </tr>
                  <tr>
                      <th>Name</th>
                      <td>555 77 854</td>
                  </tr>
                  <tr>
                      <th>Size</th>
                      <td>555 77 855</td>
                  </tr>
                  </tbody>                 
                </table>
              ) : (
                  <form>
                    <textarea placeholder="Enter your comments"></textarea>
                    <div>
                        <button>Post</button>
                        <span className="star-rating">
                            Rate It
                        </span>
                        <span>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </span>
                    </div>
                  </form>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarRight;
