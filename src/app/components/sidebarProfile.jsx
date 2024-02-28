import React from "react";

function SidebarProfile(props) {
  return (
    <div className={`d-flex gap-3 mt-5 align-items-center ${props.className}`}>
      <button
        disabled
        className="rounded-3 secondary-bg "
        style={{ width: "50px", height: "50px" }}
        title={props.title1}
      >
        {props.icon}
      </button>
      <div className="w-50 flex-grow-1">
        <h6 className="mb-1 white-color">{props.h6}</h6>
        <a
          className="light-gray-color "
          title={props.title2}
          href={props.href}
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "block",
          }}
        >
          {props.link}
        </a>
      </div>
    </div>
  );
}

export default SidebarProfile;
