"use client"
import React from 'react'

function Job(props) {
  return (
   
    <div className="col-lg-6 col-12-sm">
    <div className="d-lg-flex text-lg-start text-center gap-3 secondary-bg p-3 rounded-4 h-100 w-100 box">
      <div title={props.title}>
        {props.icon}
      </div>
      <div>
        <h5 className="  white-color mt-2 mt-lg-0">{props.h5}</h5>
        <p className="light-gray-color line-height">
        {props.p}
        </p>
      </div>
    </div>
  </div>
 
  )
}

export default Job