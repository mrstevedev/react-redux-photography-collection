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
                  this.props.title === 'Comments' ?  <form>
                  <textarea placeholder="Enter your comments"></textarea>
                  <div>
                      <button>Post</button>
                      <span className="rating-title">
                          Rate It
                      </span>
                      <span className="star-rating">
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>
                          <a href="#!" className="stars"><i className="far fa-star"></i></a>                       
                      </span>
                  </div>
                </form>
            : (
                this.props.title === 'Share' ? 
                <div className="photo-sharing">
                    <div className="photo-sharing-tabs">
                    <ul role="tablist">
                        <li role="presentation" data-tabkey="photo-tab">
                            <a aria-selected="true" role="tab" tabIndex="0" data-key="photo-tab" onClick={this.props.handleTabClick}>Photo</a>
                        </li>
                        <li role="presentation" data-tabkey="gallery-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="gallery-tab" onClick={this.props.handleTabClick}>Gallery</a>
                        </li>
                        <li role="presentation" data-tabkey="social-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="social-tab" onClick={this.props.handleTabClick}>Social</a>
                        </li>
                        <li role="presentation" data-tabkey="buy-tab">
                            <a aria-selected="false" role="tab" tabIndex="-1" data-key="buy-tab" onClick={this.props.handleTabClick}>Cart</a>
                        </li>
                    </ul>
                        <div role="tabpanel" label="Photo">
                            <div className="share-content">
                                <h3>Photo Link</h3>
                                <input className="photo-sharing-tabs-input" type="text" readOnly tabIndex="1" value="https://stevenpulidophotography.com/p/5kKdm344" />

                                <div>
                                  <h3>Embed Photo</h3>
                                  <div className="sp-form-field-underline sp-share-size-dropdown">
                                    <label class="sp-label">Size</label>
                                      <div>
                                        <div>
                                          <select>
                                            <option value="">Choose a size</option>
                                          </select>
                                        </div>
                                      </div>
                                  </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            : null ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarRight;
