"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About from "../componentsOfTabs.js/about";
import { useState } from "react";
import Resume from "../componentsOfTabs.js/resume";
import Projects from "../componentsOfTabs.js/projects";
import Contact from "../componentsOfTabs.js/contact";

function Content() {

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className="col-xl-9 px-0  mt-2 mt-xl-0 position-r">
      <Box className="p-3 p-sm-4 rounded-4 section-bg main-border min-vh-100">
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              // sx={{
              //   position: "absolute",
              //   top: "0px" ,
              //   right: "0px",
              // }}
              className="border-radius-tabs border-radius-tabs2 secondary-bg p-2  tabs-sm tabs  "
            >
              <Tab
                label="About"
                value="1"
                className={value === "1" ? "orange2-color" : "white-color"}
                style={{textTransform:"none"}}
              />
              <Tab
                label="Resume"
                value="2"
                className={value === "2" ? "orange2-color" : "white-color"}
                style={{textTransform:"none"}}

              />
              <Tab
                label="Projects"
                value="3"
                className={value === "3" ? "orange2-color" : "white-color"}
                style={{textTransform:"none"}}

              />
              <Tab
                label="Contact"
                value="4"
                className={value === "4" ? "orange2-color" : "white-color"}
                style={{textTransform:"none"}}

              />
            </TabList>
          </Box>
          <TabPanel value="1" className="p-0">
            <About />
          </TabPanel>
          <TabPanel value="2" className="p-0">
            <Resume />
          </TabPanel>
          <TabPanel value="3" className="p-0">
            <Projects />
          </TabPanel>
          <TabPanel value="4" className="p-0">
            <Contact />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Content;
