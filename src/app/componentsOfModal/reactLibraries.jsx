import React from 'react'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import  reactImage from  "/public/images/reactImage.png"
import Title from "../components/title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import style from "../componentsOfModal/styleformodal"
import Image from "next/image";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

function ReactLibraries() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
  return (
    <div>
    <Button
      onClick={handleOpen}
      className="p-0 white-color"
      style={{ textTransform: "none" }}
    >
      <li>
        React Libraries{" "}
        <OpenInNewIcon className="white-color fs-6" />{" "}
      </li>
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal-scroll w-sm h-sm">
        <Title title="Reac Libraries" />
        <div className="text-center mt-4 ">
          <Image
            src={reactImage}
            alt="React Image"
           
            style={{
              width: "90%",
              height: "200px",
              marginLeft: "auto",
            }}
            className="rounded-3"
          />
        </div>
        <div className="d-flex  mt-5 align-items-center">
      <button
        className="secondary-bg rounded-3"
        title="Book"
        disabled
        style={{ width: "50px", height: "50px" }}
      >
        <DesktopWindowsOutlinedIcon className="orange-color " />
      </button>
      <h5 className="white-color mb-0 ms-3">React Libraries</h5>
    </div>
     <ul
      className="p-0 mb-0 mt-4 position-relative bullet "
      style={{ listStyle: "none", marginLeft: "68px" }}
     >
            <li className="position-relative mt-4 white-color">Material Ui</li>
            <li className="position-relative mt-4 white-color">Redux Toolkit</li>
            <li className="position-relative mt-4 white-color">Hotkeys</li>
            <li className="position-relative mt-4 white-color">Alertt Sweet</li>
            <li className="position-relative mt-4 white-color">Axios</li>

     </ul>
       
      </Box>
    </Modal>
           </div>
  )
}

export default ReactLibraries