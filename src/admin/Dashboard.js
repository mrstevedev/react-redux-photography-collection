import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./components/Header";

export default class Dashboard extends Component {
  constructor(props) {
    super();
  }
  handleLogout = (e) => {
    e.preventDefault();
    console.log("logout user");
    sessionStorage.removeItem("token");
    this.props.history.push("/admin");
  };
  render() {
    return (
      <div style={{ background: 'rgb(239 239 239)', height: '100vh' }}>
        <div className="admin__dashboard-container" style={{ background: '#fff', height: '100vh', width: '95%', margin: '0 auto', padding: '3rem 5rem', textTransform: 'none', fontFamily: 'helveticaneue', fontSize: '0.8rem' }}>
        <Header handleLogout={this.handleLogout} />
        <main>
            <form>
                <h4 style={{ textTransform: 'uppercase', fontSize: '0.7rem', margin: '1rem 0' }}>Add a new photo</h4>
                <label>Photo Name</label>
                <input type="text" />
                <label>Photo Location</label>
                <input type="text" />
                <label>Camera</label>
                <input type="text" />
                <label>Upload Photo</label>
                <input type="file" />
                <button>Submit</button>
            </form>
        </main>
        </div>
      </div>
    );
  }
}
