


import Image from "next/image";
import React from "react";
import my_pic from "/public/images/my-pic.jpeg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SidebarProfile from "./sidebarProfile";
import AccountIcon from "./accountIcon";

function Sidebar() {


  return (
    <div className="d-none d-xl-block col-3 ps-0">
      <div className="section-bg p-5 px-4  rounded-4 main-border scroll ">
        <div
          className="pb-5 text-center "
          style={{ borderBottom: " #282829 4px solid" }}
        >
          <Image
            alt="my_pic"
            src={my_pic}
            width={200}
            style={{ height: "auto" }}
            className="rounded-3 mw-100"
          />
          <h3 className="my-3 white-color">Ibrahim Sayed</h3>
          <h6
            style={{ width: "fit-content", fontSize: "12px" }}
            className="p-2 rounded m-auto white-color secondary-bg"
          >
            Web Developer
          </h6>
        </div>
        <div>
          <SidebarProfile
            title1="Email"
            title2="ibrahimsayed7410@gmail.com"
            icon={<EmailOutlinedIcon className="orange-color" />}
            h6="Email"
            href="mailto:ibrahimsayed7410@gmail.com"
            link="  ibrahimsayed7410@gmail.com"
          />
          <SidebarProfile
            title1="Phone"
            title2="Contact with me about whatsapp or phone"
            icon={<PhoneAndroidOutlinedIcon className="orange-color" />}
            h6="Phone"
            href="tel:+20115776717"
            link="  01157767177"
          />
          <SidebarProfile
            title1="Calender"
            title2="I am currently 22 years old"
            icon={<CalendarMonthOutlinedIcon className="orange-color" />}
            h6="Birthday"
            link="Nov 1,2001"
          />
          <SidebarProfile
            title1="Location"
            title2="This is my address"
            icon={<LocationOnOutlinedIcon className="orange-color" />}
            h6="Location"
            link="Cairo,Egypt"
          />
        </div>
        <div className="mt-5 pt-5" style={{ borderTop: " #282829 4px solid" }}>
          <AccountIcon
            href="https://www.facebook.com/ibrahemsayed593"
            title="My account on facebook"
            icon={<FacebookIcon />}
          />
          <AccountIcon
            href="https://github.com/ibrahim-say"
            title="My account on github"
            icon={<GitHubIcon />}
          />
          <AccountIcon
            href="https://www.linkedin.com/in/ibrahim-sayed-59abb1283/"
            title="My account on linkedIn"
            icon={<LinkedInIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
