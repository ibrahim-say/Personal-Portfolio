import React from 'react'
import helwanImage from "/public/images/hu.jpg";
import Title from "../components/title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import ministry from "/public/images//ministry.jpeg";
import style from "./styleformodal";  
 
 


export default function Uhmodal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
  return (
    <div>    <div>
    <Button
      onClick={handleOpen}
      className="p-0 white-color"    
      style={{ textTransform: "none" }}
    >
      <h5>
        University Of Helwan{" "}
        <OpenInNewIcon className="white-color fs-6" />{" "}
      </h5>
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal-scroll w-sm h-sm">
        <Title title="Helwan University" />
        <div className="text-center mt-4 ">
          <Image
            src={helwanImage}
            alt="Helwan University"
            style={{
              width: "90%",
              height: "200px",
              marginLeft: "auto",
            }}
            className="rounded-3"
          />
        </div>
        <div>
          <h5 className="white-color mt-4">University of Helwan </h5>
          <h6 className="orange-color">2020-running</h6>
        </div>
        <div>
          <p className="light-gray-color line-height">
            Helwan University is one of the top universities in Egypt,
            and it includes the Faculty of Computers and Artificial
            Intelligence. It comprises a large number of the best
            professors in computer science throughout Egypt.
          </p>
          <p className="light-gray-color line-height">
            Moreover, it offers various courses that qualify students to
            work directly in many fields, including web development from
            the beginning.
          </p>
        </div>
        <div>
          <h5 className="white-color">Approved and Accredited by</h5>
          <a href="/images/ministry.jpeg" target="_blank">
            <Image
              src={ministry}
              alt="ministry"
              width={100}
              height={100}
              className="rounded mt-4"
            />
          </a>
        </div>
        <div className=" mt-4 text-center">
          <Button
            href="https://www.facebook.com/groups/1974050562816636"
            className="secondary-bg orange-color w-100 rounded"
            target="_blank"
          >
            Visit FCAI-HU
          </Button>
        </div>
      </Box>
    </Modal>
  </div>
  <h6 className="orange2-color">2020-running</h6>
  <p className="light-gray-color mb-0">
    {" "}
    I have joined the University of Helwan, as an BCS (Bachelor's of
    Computer Scinece) student.
  </p>
  </div>
  )
}
