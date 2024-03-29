import Image from "next/image";
import React from "react";
import my_pic from "/public/images/my-pic.jpeg";
import MyAccounts from "./myAccounts";
import SidebarInfo from "./sidebarInfo";

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
            placeholder="blur"
          />
          <h3 className="my-3 white-color">Ibrahim Sayed</h3>
          <h6
            style={{ width: "fit-content", fontSize: "12px" }}
            className="p-2 rounded m-auto white-color secondary-bg"
          >
            Front End Developer
          </h6>
        </div>
   
    <SidebarInfo/>
    <MyAccounts/>
      </div>
    </div>
  );
}

export default Sidebar;
