import React, { Component } from "react";
import Header from "./components/Header";

export default class DashboardMain extends Component {
  handleAccountToggle = (e) => {
    console.log("handleAccountToggle() Ran");
    const dropdownToggler = document.querySelector(
      ".admin__dashboard-account-toggle"
    );
    const dropdownMenu = document.querySelector(
      ".admin__dashboard-account-dropdown"
    );
    dropdownToggler.classList.toggle("active");
    dropdownMenu.classList.toggle("show");
    dropdownMenu.classList.toggle("fadeInUp");
  };
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div
          className="admin__page-container"
          style={{
            background: "#fff",
            height: "100vh",
            width: "100%",
            margin: "0 auto",
            textTransform: "none",
            fontFamily: "helveticaneue",
            fontSize: "0.8rem",
          }}
        >
          <Header
            user={
              this.props.location.state.user
                ? this.props.location.state.user
                : ""
            }
            handleAccountToggle={this.handleAccountToggle}
            handleLogout={this.handleLogout}
          />

          <div
            className="admin__page-secondary-header"
            style={{
              background: `url(${this.props.location.state.user.avatarIcon}) no-repeat center -380px`,
              backgroundSize: "cover",
              height: "310px",
              position: "relative",
            }}
          >
            {/* <div
              className="admin__page-header-avatar"
              style={{
                position: "absolute",
                borderRadius: "100%",
                background: `url(${ this.props.location.state.user.avatarIcon }) no-repeat center center`,
                backgroundSize: "cover",
                border: '6px solid',
                left: "0",
                right: "0",
                width: "130px",
                height: "130px",
                margin: "0 auto",
                bottom: "-3rem",
              }}
            ></div> */}
          </div>
        </div>
      </div>
    );
  }
}
