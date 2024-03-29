import React from 'react'
import SidebarInfoSection from './sidebarInfoSection'
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function SidebarInfo() {
  return (
    <>
    <SidebarInfoSection
      title1="Email"
      title2="ibrahimsayed7410@gmail.com"
      icon={<EmailOutlinedIcon className="orange-color" />}
      h6="Email"
      href="mailto:ibrahimsayed7410@gmail.com"
      link="  ibrahimsayed7410@gmail.com"
    />
    <SidebarInfoSection
      title1="Phone"
      title2="Contact with me about whatsapp or phone"
      icon={<PhoneAndroidOutlinedIcon className="orange-color" />}
      h6="Phone"
      href="tel:+20115776717"
      link="  01157767177"
    />
    <SidebarInfoSection
      title1="Calender"
      title2="I am currently 22 years old"
      icon={<CalendarMonthOutlinedIcon className="orange-color" />}
      h6="Birthday"
      link="Nov 1,2001"
    />
    <SidebarInfoSection
      title1="Location"
      title2="This is my address"
      icon={<LocationOnOutlinedIcon className="orange-color" />}
      h6="Location"
      link="Cairo,Egypt"
    />
  </>
  )
}

export default SidebarInfo