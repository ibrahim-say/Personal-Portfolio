import React from 'react'
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

function SkillList(props) {
  return (
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
<h5 className="white-color mb-0 ms-3">{props.h5}</h5>
</div>
      
     
     <ul
      className="p-0 mb-0 mt-4 position-relative bullet "
      style={{ listStyle: "none", marginLeft: "68px" }}
     >
        {
           props.items.map((item,index)=>(
                <li className="position-relative mt-4 white-color" key={index}>{item}</li>
           ))
        }
     
     </ul>
   
  </div>
  )
}

export default SkillList