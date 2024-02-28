import React from 'react'
import Title from '../components/title'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import AllProjects from '../components/allProjects';

function Projects() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (  
    <div>
        <Title title="Projects"/>
        <Box className="p-3 px-0" >
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              // sx={{marginLeft:"-55px"}}
             
            >
              <Tab label="All" value="1"  className= {`${value === "1"? "orange2-color":"white-color"} ps-0`} style={{textTransform:"none"}} />
              <Tab label="Templates" value="2" className={value === "2"? "orange2-color":"white-color"} style={{textTransform:"none"}} />
              <Tab label="Games" value="3" className={value === "3"? "orange2-color":"white-color"} style={{textTransform:"none"}}/>
            </TabList>
          </Box>
          <TabPanel value="1"  className="p-0" >
          <AllProjects type="all"/>

          </TabPanel>
          <TabPanel value="2" className="p-0">
         <AllProjects type="template"/>
            
          </TabPanel>
          <TabPanel value="3" className="p-0" >
          <AllProjects type="game"/>

          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default Projects