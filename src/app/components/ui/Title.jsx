import React from 'react'

function Title(props) {
  return (
    <div>
    <h3 className='mb-3 white-color'>{props.title}</h3>
    <span style={{width:"50px",height:"5px",display:"block",backgroundColor:"hsl(45deg 100% 72%)"}} className="rounded-pill "></span>
    </div>
  )
}

export default Title