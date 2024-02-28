import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SkillList from "./skillList";
import ReactLibraries from "../componentsOfModal/reactLibraries";


function Skills() {
  
  return (
    <div>
      <h4 className="white-color mb-0 mt-5">My Skills</h4>
      <div className="row mt-4">
        <SkillList h5="Programming Skills" items={["C Langauege","Java Langauege","Algorithm","Data Structure","Problem Solving","oop"]}/> 
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="d-flex  mt-5 align-items-center">
      <button
        className="secondary-bg rounded-3"
        title="desktop"
        disabled
        style={{ width: "50px", height: "50px" }}
      >
        <DesktopWindowsOutlinedIcon className="orange-color " />
      </button>
      <h5 className="white-color mb-0 ms-3">Front End Skills</h5>
    </div>
            
           
           <ul
            className="p-0 mb-0 mt-4 position-relative bullet "
            style={{ listStyle: "none", marginLeft: "68px" }}
           >
            <li className="position-relative mt-4 white-color">Html</li>
            <li className="position-relative mt-4 white-color">Css</li>
        <p className="m-0 p-0 orange2-color" style={{opacity:"0.5",fontSize:"12px"}}>  (bootstrap5)  </p>
            <li className="position-relative mt-4 white-color">Javascript</li>
        <p className="m-0 p-0 orange2-color" style={{opacity:"0.5",fontSize:"12px"}}>  (reactjs with nextjs)  </p>
            <li className="position-relative mt-4 white-color">
          
<ReactLibraries/>
            </li>

            
            <li className="position-relative mt-4 white-color">Git & Github</li>
           </ul>
         
        </div>
        <SkillList h5="Other Skills" items={["Creative Thinking","researching","Leadership","Instructor","Collabrating","Coaching"]}/>

      </div>
    </div>
  );
}

export default Skills;
