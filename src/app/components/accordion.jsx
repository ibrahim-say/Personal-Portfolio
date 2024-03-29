"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import my_pic from "/public/images/my-pic.jpeg";
import MyAccounts from "./myAccounts";
import SidebarInfo from "./sidebarInfo";
function AccordionC() {
  return (
    <Accordion className="section-bg rounded-4 p-3 p-sm-4 main-border d-xl-none">
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon className="orange-color MuiAccordionSummary-expandIconWrapper " />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        className="white-color p-0"
      >
        <div className=" d-flex justify-content-centent align-items-center ">
          <Image
            alt="my_pic"
            src={my_pic}
            placeholder="blur"
            className="rounded-3 mw-100 me-4 accordion-img"
          />
          <div>
            <h3 className=" white-color">Ibrahim Sayed</h3>
            <h6
              style={{ width: "fit-content", fontSize: "12px" }}
              className="p-2 rounded m-auto white-color secondary-bg mt-3"
            >
              Front End Developer
            </h6>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="light-gray-color">
        <div
          className="row ms-0 py-3"
          style={{ borderTop: " #282829 2px solid" }}
        >
          <SidebarInfo />
        </div>
        <MyAccounts />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionC;
