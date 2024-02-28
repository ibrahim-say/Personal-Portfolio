import React from "react";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Uhmodal from "../componentsOfModal/uhModal";
import YoutubeModal from "../componentsOfModal/youtubeModal";
import EducationItem from "./educationItem";

 

function Education() {
  return (
    <div>
      <div className="d-flex  mt-4 align-items-center">
        <button
          className="secondary-bg rounded-3"
          title="Book"
          disabled
          style={{ width: "50px", height: "50px" }}
        >
          <MenuBookTwoToneIcon className="orange-color" />
        </button>
        <h4 className="white-color mb-0 ms-3">Education</h4>
      </div>
      <ul
        className="p-0 mb-0  position-relative bullet"
        style={{ listStyle: "none", marginLeft: "68px" }}
      >
        <li className=" position-relative mt-4">
        <Uhmodal />
        </li>
        <li className=" position-relative mt-4">
        <YoutubeModal />
        </li>
        <EducationItem h5="Imbabah Secondary Military School " h6="2017-2020" p="I studied at Imbabah Secondary Military School for Boys for threeyears. During my time there, I learned the basics of computer science and also studied mathematics in all its branches."/>
        <EducationItem h5="El-Nahda Middle School " h6="2014-2017" p=" I studied at Al-Nahda Preparatory School for three years. During mytime there, I learned about hardware components and the structure ofcomputers. I also studied mathematics."/>
        <EducationItem h5="El-Fajr El-Jadeed Primary School " h6="2009-2014" p=" I spent my entire childhood at Al-Fajr Al-Jadeed School, and it was during this time that I developed a love for computers."/>
      </ul>
    </div>
  );
}

export default Education;
