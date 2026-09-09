import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import Job from "../ui/Job";
export default function MyWork() {
  return (
    <div>
      <div className="mt-4">
      <p className="light-gray-color line-height">
  I'm a Full-Stack Developer passionate about building modern, scalable, and
  user-friendly web applications. I enjoy turning ideas into complete digital
  products and solving complex problems with clean and efficient solutions.
</p>

<p className="light-gray-color line-height">
  I build web applications from end to end, from designing responsive and
  intuitive user interfaces to developing robust back-end systems, databases,
  APIs, and deployment. I focus on creating high-quality, reliable, and
  maintainable solutions that deliver a great user experience.
</p>

      </div>
      <div className="mt-5">
        <h4 className=" white-color mb-0">What i’m doing</h4>
        <div className="row justify-content-center mt-3 gy-3">
          {/* <Job title="Desktop" icon={<DesktopWindowsOutlinedIcon className="orange-color fs-2" />} h5="Ui & Ux Designer" p=" The most modern and high-quality design made at a professional level."/> */}
          <Job title="Code" icon={<CodeOutlinedIcon className="orange-color fs-2" />} h5="Front End Developer" p="High-quality front end development of sites at the professional level."/>
          <Job
title="Code"
icon={<CodeOutlinedIcon className="orange-color fs-2" />}
h5="Back End Developer"
p="Building robust back-end systems, REST APIs, databases, and server-side applications with a focus on performance and scalability."
/>

<Job
title="Full Stack"
icon={<CodeOutlinedIcon className="orange-color fs-2" />}
h5="Full Stack Developer"
p="Building complete web applications from front end to back end, including responsive interfaces, APIs, databases, and deployment."
/>
          <Job title="Color" icon={<EditOutlinedIcon className="orange-color fs-2" />} h5="Instructor" p="I have the ability to teach programming for people ."/>
          {/* <Job title="PermMedia" icon={<CodeOffOutlinedIcon className="orange-color fs-2" />} h5="Back End Developer" p="  High-quality back end development of sites at the professional level."/> */}
        </div>
      </div>
    </div>
  );
}
