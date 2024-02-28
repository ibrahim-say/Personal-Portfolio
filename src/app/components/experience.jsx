import React from 'react'
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FewdModal from '../componentsOfModal/fewdModal';
import FewdiModal from '../componentsOfModal/fewdiModal';


function Experience({style}) {
   
  return (
    <div>
    <div className="d-flex gap-3 mt-5 align-items-center">
      <button
        className="secondary-bg rounded-3"
        title="Book"
        disabled
        style={{ width: "50px", height: "50px" }}
      >
        <MenuBookTwoToneIcon className="orange-color" />
      </button>
      <h4 className="white-color mb-0">Experience</h4>
    </div>
    <ul
      className="p-0 mb-0   position-relative bullet"
      style={{ listStyle: "none", marginLeft: "70px" }}
    >
      <li className=" position-relative mt-4">
     <FewdModal style={style}/>

      </li>
      <li className=" position-relative mt-4">
        <FewdiModal style={style}/>
      </li>
    </ul>
  </div>
  )
}

export default Experience