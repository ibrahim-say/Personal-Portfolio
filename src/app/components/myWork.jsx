import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import Job from "./job";
export default function MyWork() {
  return (
    <div>
      <div className="mt-4">
        <p className="light-gray-color line-height">
          I'm Web Master, working in web development and design media. I enjoy
          simplifying complex problems into simple, beautiful, and intuitive
          creations.
        </p>
        <p className="light-gray-color line-height">
          My goal is to design your website so that it is functional and
          user-friendly while also being eye-catching. On top of that, I
          personalize your product and ensure that it is appealing and simple to
          use. My goal is to convey your message and identity in the most
          creative way possible. I designed websites for a number of projects.
        </p>
      </div>
      <div className="mt-5">
        <h4 className=" white-color mb-0">What i’m doing</h4>
        <div className="d-flex  row  mt-3 gy-3">
          <Job title="Desktop" icon={<DesktopWindowsOutlinedIcon className="orange-color fs-2" />} h5="Ui & Ux Designer" p=" The most modern and high-quality design made at a professional level."/>
          <Job title="Code" icon={<CodeOutlinedIcon className="orange-color fs-2" />} h5="Front End Developer" p="  High-quality front end development of sites at theprofessional level."/>
          <Job title="Color" icon={<EditOutlinedIcon className="orange-color fs-2" />} h5="Instructor" p=" I have ability to learn programming for sudents and children ."/>
          <Job title="PermMedia" icon={<CodeOffOutlinedIcon className="orange-color fs-2" />} h5="Back End Developer" p="  High-quality back end development of sites at the professional level."/>
        </div>
      </div>
    </div>
  );
}
