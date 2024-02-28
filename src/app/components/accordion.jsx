"use client"

import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import my_pic from "/public/images/my-pic.jpeg";
import SidebarProfile from './sidebarProfile';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountIcon from './accountIcon';
function AccordionC() {
  return (
    <Accordion className='section-bg rounded-4 p-3 p-sm-4 main-border d-xl-none'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon className='orange-color MuiAccordionSummary-expandIconWrapper '/>}
      aria-controls="panel1-content"
      id="panel1-header"
      className='white-color p-0'
    >
       <div
          className=" d-flex justify-content-centent align-items-center "
        >
          <Image
            alt="my_pic"
            src={my_pic}
           
            className="rounded-3 mw-100 me-4 accordion-img"
          />
          <div>
          <h3 className=" white-color">Ibrahim Sayed</h3>
          <h6
            style={{ width: "fit-content", fontSize: "12px" }}
            className="p-2 rounded m-auto white-color secondary-bg mt-3"
          >
            Web Developer
          </h6>
          </div>
        </div>
    </AccordionSummary>
    <AccordionDetails className='light-gray-color'>
    <div className='row ms-0 py-3'style={{ borderTop: " #282829 2px solid"  }}>
          <SidebarProfile
            title1="Email"
            title2="ibrahimsayed7410@gmail.com"
            icon={<EmailOutlinedIcon className="orange-color" />}
            h6="Email"
            href="mailto:ibrahimsayed7410@gmail.com"
            link="  ibrahimsayed7410@gmail.com"
            className="col-12 col-md-6"
          />
          <SidebarProfile
            title1="Phone"
            title2="Contact with me about whatsapp or phone"
            icon={<PhoneAndroidOutlinedIcon className="orange-color" />}
            h6="Phone"
            href="tel:+20115776717"
            link="  01157767177"
            className="col-12 col-md-6"

          />
          <SidebarProfile
            title1="Calender"
            title2="I am currently 22 years old"
            icon={<CalendarMonthOutlinedIcon className="orange-color" />}
            h6="Birthday"
            link="Nov 1,2001"
            className="col-12 col-md-6"

          />
          <SidebarProfile
            title1="Location"
            title2="This is my address"
            icon={<LocationOnOutlinedIcon className="orange-color" />}
            h6="Location"
            link="Cairo,Egypt"
            className="col-12 col-md-6"

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
    </AccordionDetails>
  </Accordion>
  )
}

export default AccordionC