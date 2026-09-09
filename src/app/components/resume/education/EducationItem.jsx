import React from 'react'

function EducationItem(props) {
  return (
    <li className=" position-relative mt-4">
    <h5 className="white-color">{props.h5} </h5>
    <h6 className="orange2-color">{props.h6}</h6>
    <p className="light-gray-color mb-0">
      {" "}
     {props.p}
    </p>
  </li>
  )
}

export default EducationItem