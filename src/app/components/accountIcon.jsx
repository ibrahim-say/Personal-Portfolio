
import React from "react";

function AccountIcon(props) {
  return (
    <a
      href={props.href}
      title={props.title}
      className=" light-gray-color  col text-center"
      style={{ width: "33.33%", display: "inline-block" }}
    >
      {props.icon}
    </a>
  );
}

export default AccountIcon;
