import React from "react";
import frontendbook from "/public/images//frontendbook.png";
import Image from "next/image";
import Title from "../components/title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import style from "./styleformodal";  
 
export default function FewdiModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  return (
    <div>
      <div>
        <Button 
          onClick={handleOpen }
          className="p-0 white-color"
          style={{ textTransform: "none" }} 
        >
          <h5 className='text-start'>
            Front End Web Development Instructor{" "}
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
            <Title title=" Front End Web Development Instructor" />

            <div className="text-center mt-3">
              <Image
                src={frontendbook}
                alt="front end book"
                style={{
                  width: "90%",
                  height: "200px",
                }}
                className="rounded-3 "
              />
            </div>

            <div>
              <h5 className="white-color mt-4">
                Front End Web Development Instructor{" "}
              </h5>
              <h6 className="orange-color">2022 Aug - 2022 Nov</h6>
            </div>
            <div>
              <p className="light-gray-color line-height">
                I have worked as a front-end web instructor at my universiy for
                three months. By mentoring more than 40 students in those three
                months, I have gained communication skills, presentation skills,
                leadership skills, etc.
              </p>
              <p className="light-gray-color line-height">
                This was my first experience as an instructor, teaching others
                the basics of front end web development. For the first few days,
                I felt it was difficult to run teach students, but some days
                later, I learned how to control students.
              </p>
            </div>
            <div>
              <h5 className="white-color">My works includes :-</h5>
              <ol className="light-gray-color ">
                <li className="mt-3">
                  Creating the syllabus for three month bootcamp{" "}
                </li>
                <li className="mt-3">
                  Designing the certificates for the bootcamp.
                </li>
                <li className="mt-3">
                  Spend most of my time solving the students doubts.
                </li>
                <li className="mt-3">
                  Stay positive and respond to the student positively etc.
                </li>
                <li className="mt-3">
                  Teach three tutorial{" "}
                  <span style={{ fontWeight: "bold" }}>
                    HTML CSS JAVASCRIPT
                  </span>
                  .
                </li>
              </ol>
            </div>
            <div className="mx-auto mt-4 text-center row m-0 gy-2">
              <Button
                href="https://www.w3schools.com/html/default.asp"
                className="secondary-bg orange-color col-12 rounded"
                target="_blank"
              >
                Visit html tutorial
              </Button>
              <Button
                href="https://www.w3schools.com/css/default.asp"
                className="secondary-bg orange-color col-12 rounded"
                target="_blank"
              >
                Visit css tutorial
              </Button>
              <Button
                href="https://www.w3schools.com/js/default.asp"
                className="secondary-bg orange-color col-12 rounded"
                target="_blank"
              >
                Visit js tutorial
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <h6 className="orange2-color">2022 Aug - 2022 Nov</h6>
      <p className="light-gray-color mb-0">
        {" "}
        I have taught three month (90 days) Front End Web Development Bootcamp
        at my faculty (Computers And Arificial Inellegence) more than 30
        students. I have taught the basics to intermidiate level of front end
        web development.
      </p>
      <p
        className="m-0 p-0 orange2-color"
        style={{ opacity: "0.5", fontSize: "12px" }}
      >
        Skills: html - css - javascript - researching - collabrating -
        leadership - coaching.
      </p>
    </div>
  );
}
