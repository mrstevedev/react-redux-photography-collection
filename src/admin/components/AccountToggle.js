import React from "react";
export default function AccountToggle(props) {
  return (
    <div
      className="admin__dashboard-account-toggle"
      onClick={props.handleAccountToggle}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        background: `url(${props.user.avatarIcon}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}
