import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function MyAccounts(props) {
  return (
    <div
      className="mt-5 pt-5 d-flex justify-content-center"
      style={{ borderTop: " #282829 4px solid" }}
    >
      <a
        href="https://github.com/ibrahim-say"
        title="My account on github"
        className=" light-gray-color  col text-center me-2"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ibrahim-sayed-59abb1283/"
        title="My account on linkedIn"
        className=" light-gray-color  col text-center me-2"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default MyAccounts;
