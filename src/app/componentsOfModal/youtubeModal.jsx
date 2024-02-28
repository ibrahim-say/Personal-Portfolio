import React from 'react'
import elzero from "/public/images//elzero.png";
import codzella from "/public/images//codezilla.png";
import hassouna from "/public/images//hassouna.jpeg";
import nouvil from "/public/images//nouvil.png"
import Title from "../components/title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import style from "./styleformodal";  
  
export default function YoutubeModal() {
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
              <h5>
                Youtube Channels <OpenInNewIcon className="white-color fs-6" />{" "}
              </h5>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="modal-scroll w-sm h-sm">
                <Title title="Youtube Channels" />
                <div className="row mt-4 gx-3">
                  <a
                    className="col-3"
                    href="https://www.youtube.com/@ElzeroWebSchool"
                    title="Elzero channel"
                    target="_blank"
                  >
                    <Image
                      src={elzero}
                      alt="elzero"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      className="rounded-3 "
                    />
                  </a>
                  <a
                    className="col-3"
                    href="https://www.youtube.com/@Codezilla"
                    title="Codzilla channel"
                    target="_blank"
                  >
                    <Image
                      src={codzella}
                      alt="codzella"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      className="rounded-3 "
                    />
                  </a>
                  <a
                    className="col-3"
                    href="https://www.youtube.com/@HassounaAcademy"
                    title="Hassouna academy channel"
                    target="_blank"
                  >
                    <Image
                      src={hassouna}
                      alt="hassouna"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      className="rounded-3 "
                    />
                  </a>
                  <a
                    className="col-3"
                    href="https://www.youtube.com/@AbdelrahmanGamal"
                    title="Nouvil channel"
                    target="_blank"
                  >
                    <Image
                      src={nouvil}
                      alt="nouvil"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      className="rounded-3 "
                    />
                  </a>
                </div>
                <div>
                  <h5 className="white-color mt-4">Youtube Channels </h5>
                  <h6 className="orange-color">2020-running</h6>
                </div>
                <div>
                  <p className="light-gray-color line-height">
                    There are many YouTube channels that I learned programming
                    from, especially web development programming. Among these
                    channels, the most famous one is{" "}
                    <span style={{ fontSize: "bold" }} className="white-color">
                      "El-Zero"
                    </span>{" "}
                    channel, which is considered the most popular channel in the
                    Arab world for learning web development from scratch to
                    advanced level, with its best instructor Osama Al-Zero.
                    There is also the channel{" "}
                    <span style={{ fontSize: "bold" }} className="white-color">
                      "Nouvil"
                    </span>{" "}
                    by instructor Abdulrahman Gamal, and the channel{" "}
                    <span style={{ fontSize: "bold" }} className="white-color">
                      "Codzilla"
                    </span>
                    , among others....
                  </p>
                </div>

                <div className="mx-auto mt-4 text-center row m-0 gy-2">
                  <Button
                    href="https://www.facebook.com/groups/492703297525406"
                    className="secondary-bg orange-color col-12 rounded"
                    target="_blank"
                  >
                    Visit Elzero
                  </Button>
                  <Button
                    href="https://www.facebook.com/groups/codezilla.channel/"
                    className="secondary-bg orange-color col-12 rounded"
                    target="_blank"
                  >
                    Visit Codezilla
                  </Button>
                  <Button
                    href="https://www.facebook.com/Hassouna.Academy"
                    className="secondary-bg orange-color col-12 rounded"
                    target="_blank"
                  >
                    Visit Hassouna Academy
                  </Button>
                  <Button
                    href="https://www.facebook.com/abdelrahman.g.nofal"
                    className="secondary-bg orange-color col-12 rounded"
                    target="_blank"
                  >
                    Visit Abdelrahman Gamal
                  </Button>
                </div>
              </Box>
            </Modal>
          </div>
          <h6 className="orange2-color">2020-running</h6>
          <p className="light-gray-color mb-0">
            {" "}
            Most of the web development courses I studied were from YouTube
            channels with the best instructors in the Arab world from Egypt,
            Syria, Kuwait, and others.
          </p>
    </div>
  )
}
