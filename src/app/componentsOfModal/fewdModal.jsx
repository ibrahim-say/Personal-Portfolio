import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import linkedin from "/public/images//in.png";
import _555 from "/public/images//555.png";
import upwork from "/public/images//upwork.png";
import Image from "next/image";
import Title from "../components/title";
import style from "./styleformodal";  

 


export default function FewdModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  return (
    <div>
   <div>
          <Button
            onClick={handleOpen}
            className="p-0 white-color"
            style={{ textTransform: "none" }}
          >
            <h5 className='text-start'>
              Front End Web Developer{" "}
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
              <Title title="Front End Web Developer" />
              <div className="row mt-4 gx-3">
                <a
                  className="col-3"
                  href="https://www.linkedin.com"
                  title="Linked in Website"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="linked in"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    className="rounded-3 "
                  />
                </a>
                <a
                  className="col-3"
                  href="https://www.upwork.com/ab/account-security/login"
                  title="Upwork Website"
                  target="_blank"
                >
                  <Image
                    src={upwork}
                    alt="upwork"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    className="rounded-3 "
                  />
                </a>
                <a
                  className="col-3"
                  href="https://khamsat.com/freelance"
                  title="Khamsat Website"
                  target="_blank"
                >
                  <Image
                    src={_555}
                    alt="khamsat"
                    style={{
                      width: "100%",
                        height: "auto",
                    }}
                    className="rounded-3 "
                  />
                </a>
              
              </div>
              <div>
                <h5 className="white-color mt-4">Front End Web Developer </h5>
                <h6 className="orange-color">2022 May - present</h6>
              </div>
              <div>
                <p className="light-gray-color line-height">
                I work as a freelance web developer on various platforms such as LinkedIn, 555, and Upwork.
                </p>
                <p className="light-gray-color line-height">
                I have been contacted by multiple clients, some of whom want a small news website, others who need 2 or 3 pages for their existing website, and some who want me to join them in website development projects.
                </p>
              </div>
              <div>
                <h5 className="white-color">My works includes :-</h5>
                 <ol className="light-gray-color ">
                  <li className="mt-3">
                  Crafting the new user interface for the website according to the modern world.
                  </li>
                  <li className="mt-3">
                  Updating the content of the website According to the agreement with the clie.
                  </li>
                  <li className="mt-3">
                  Adding new tools and features in the website To attract users.
                  </li>
                  <li className="mt-3">
                 presenting the data provided in the website with colourful graphics (charts, tables, bars, etc.)
                  </li>
                 </ol>
              </div>
              <div className=" mt-4 text-center">
                <Button
                  href="https://www.linkedin.com/in/ibrahim-sayed-59abb1283/"
                  className="secondary-bg orange-color w-100 rounded"
                  target="_blank"
                >
                  Visit Linked in
                </Button>
                <Button
                  href="https://www.upwork.com/ab/account-security/login"
                  className="secondary-bg orange-color w-100 rounded mt-2"
                  target="_blank"
                >
                  Visit Upwork
                </Button>
                <Button
                  href="https://khamsat.com/freelance"
                  className="secondary-bg orange-color w-100 rounded mt-2"
                  target="_blank"
                >
                  Visit 555
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
        <h6 className="orange2-color">2022 May - present</h6>
        <p className="light-gray-color mb-0">
          {" "}
          I am currently working as a front end web developer on freelancing websites.  </p>
        <p className="m-0 p-0 orange2-color" style={{opacity:"0.5",fontSize:"12px"}}>Skills: html - css - css framework (bootstrap5) - javascript -  js framework (react with next.js) - version control </p>
    </div>
  )
}
