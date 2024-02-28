import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from 'next/image'


import React from 'react'

function ProjectCard({link,src,name,type}) {
  return (
    <div className='col-12 col-sm-6 col-lg-4 text-center' >
    <div className='rounded-4  position-relative' style={{overflow:"hidden"}}>
    <a href={link} className='project' target="_blank" style={{height:"150px",display:"inline-block"}}>
   <Image src={src}
    className="rounded-4 w-100  h-100 "
   alt={name}
    />
     <button
    
    className="rounded-3 secondary-bg d-none btn-eye "
    style={{ width: "70px", height: "50px" ,position:"absolute" ,top:"calc(50% - 25px)",left:"calc(50% - 35px)",zIndex:"1" }}
    title="Eye"
  >
    <RemoveRedEyeOutlinedIcon className="orange-color" />
  </button>
   </a>

    </div>
  
    <h6 className='white-color mt-2 m-0'>{name}</h6>
    <p className='light-gray-color p-0 m-0 fs-7'>{type}</p>

</div>
  )
}

export default ProjectCard