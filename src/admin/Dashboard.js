import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./components/Header";

export default class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      title: '',
      location: '',
      camera: '',
      imagePath: '',
      errorTitle: false,
      errorLocation: false,
      errorCamera: false,
      fileName: ''
    }
  }
  
  handleUpload = (e) => {
    e.preventDefault();

    if(this.state.title === '') {
      this.setState({ errorTitle: true });
    }

    if(this.state.location === '') {
      this.setState({ errorLocation: true });
    }

    if(this.state.camera === '') {
      this.setState({ errorCamera: true });
    }
  }

  handleFileChange = (e) => {
    const file_input = document.getElementById('fileInput');
    const file_name = file_input.files[0].name;

    console.log(file_name);
    this.setState({ fileName: file_name })
  }

  handleChange = (e) => {

    if(this.state.title !== '') {
      this.setState({ errorTitle: false })
    }
    if(this.state.location !== '') {
      this.setState({ errorLocation: false })
    }
    if(this.state.camera !== '') {
      this.setState({ errorCamera: false })
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogout = (e) => {
    e.preventDefault();
    console.log("logout user");
    sessionStorage.removeItem("token");
    this.props.history.push("/admin");
  };

  handleAccountToggle = (e) => {
    console.log('handleAccountToggle() Ran');
    const dropdownToggler = document.querySelector('.admin__dashboard-account-toggle');
    const dropdownMenu = document.querySelector('.admin__dashboard-account-dropdown');
    dropdownToggler.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
    dropdownMenu.classList.toggle('fadeInUp');

  }
  render() {
    const { user } = this.props.location.state;
    return (
      <div style={{ height: '100vh' }}>
        <div className="admin__page-container" style={{ background: '#fff', height: '100vh', width: '100%', margin: '0 auto', textTransform: 'none', fontFamily: 'helveticaneue', fontSize: '0.8rem' }}>
        <Header user={ user } handleAccountToggle={ this.handleAccountToggle } handleLogout={ this.handleLogout } />
        <main>
            <form>
                <h4 style={{ textTransform: 'uppercase', fontSize: '0.7rem', margin: '1rem 0' }}>Add a new photo</h4>
                <label>Title
                <input type="text" placeholder="ex. Bonita Thoughts" autoFocus onChange={this.handleChange} name="title" className={this.state.errorTitle === true ? "error" : ""} />
                </label>                
                <label>Location
                  <input type="text" placeholder="ex. Barrio Logan, CA" onChange={this.handleChange} name="location" className={this.state.errorLocation === true ? "error" : ""} />
                </label>
                <label>Camera
                  <input type="text" placeholder="ex. Nikon D3300" onChange={this.handleChange} name="camera" className={this.state.errorCamera === true ? "error" : ""} />
                </label>
                <label>Add Photo <i className="fas fa-folder-plus"></i>
                  <input type="file" id="fileInput" onChange={this.handleFileChange} />
                  <span>{ this.state.fileName }</span>
                </label>
                <button onClick={this.handleUpload}>Upload <i className="fas fa-cloud-upload-alt" style={{ fontSize: '0.85rem' }}></i></button>
            </form>
        </main>
        </div>
      </div>
    );
  }
}
