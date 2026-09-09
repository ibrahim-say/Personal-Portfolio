import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import linkedin from "/public/images/in.png";
import _555 from "/public/images/555.png";
import upwork from "/public/images/upwork.png";
import Image from "next/image";
import Title from "../../ui/Title";
import style from "../styleformodal";

export default function BackendModal() {
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
          <h5 className="text-start">
            Back End Developer{" "}
            <OpenInNewIcon className="white-color fs-6" />
          </h5>
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-scroll w-sm h-sm">
            <Title title="Back End Developer" />

            <div className="row mt-4 gx-3">
              <a
                className="col-3"
                href="https://www.linkedin.com"
                title="LinkedIn Website"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-3"
                />
              </a>

              <a
                className="col-3"
                href="https://www.upwork.com/ab/account-security/login"
                title="Upwork Website"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={upwork}
                  alt="Upwork"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-3"
                />
              </a>

              <a
                className="col-3"
                href="https://khamsat.com/freelance"
                title="Khamsat Website"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={_555}
                  alt="Khamsat"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-3"
                />
              </a>
            </div>

            <div>
              <h5 className="white-color mt-4">Back End Developer</h5>
              <h6 className="orange-color">2023 - Present</h6>
            </div>

            <div>
              <p className="light-gray-color line-height">
                I work as a freelance back end developer on various platforms
                such as LinkedIn, Khamsat, and Upwork.
              </p>

              <p className="light-gray-color line-height">
                I build server-side applications and APIs for different web
                projects, helping clients manage data, application logic,
                databases, and communication between the front end and back end.
              </p>
            </div>

            <div>
              <h5 className="white-color">My work includes :-</h5>

              <ol className="light-gray-color">
                <li className="mt-3">
                  Building server-side applications and REST APIs.
                </li>

                <li className="mt-3">
                  Designing and managing databases and data models.
                </li>

                <li className="mt-3">
                  Implementing authentication, authorization, and application
                  logic.
                </li>

                <li className="mt-3">
                  Connecting front end applications with back end services and
                  APIs.
                </li>

                <li className="mt-3">
                  Integrating third-party services and APIs.
                </li>

                <li className="mt-3">
                  Improving application performance, scalability, and
                  maintainability.
                </li>
              </ol>
            </div>

            <div className="mt-4 text-center">
              <Button
                href="https://www.linkedin.com/in/ibrahim-sayed-59abb1283/"
                className="secondary-bg orange-color w-100 rounded"
                target="_blank"
              >
                Visit LinkedIn
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
                Visit Khamsat
              </Button>
            </div>
          </Box>
        </Modal>
      </div>

      <h6 className="orange2-color">2023 - Present</h6>

      <p className="light-gray-color mb-0">
        I work as a freelance back end developer, building APIs, databases, and
        server-side solutions for web applications.
      </p>

      <p
        className="m-0 p-0 orange2-color"
        style={{ opacity: "0.5", fontSize: "12px" }}
      >
        Skills: Node.js - Express.js - Java - Spring Boot - REST API - MongoDB -
        Mongoose - Prisma - SQL - Git - Docker
      </p>
    </div>
  );
}