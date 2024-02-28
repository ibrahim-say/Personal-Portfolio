import React, { useEffect, useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import emailjs from "emailjs-com";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
function ContactForm() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [disabled, setDisabled] = useState(true);
  let [formSubmit, setFormSubmit] = useState({
    result: false,
    err: false,
    loading: false,
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit({ ...formSubmit, loading: true });

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_gci4mg9",
        "template_ng55mux",
        templateParams,
        "DSyrVev6GhgFTxw-y"
      )
      .then((response) => {
        setFormSubmit({ result: response, loading: false, err: false });
      })
      .catch((error) => {
        setFormSubmit({ ...formSubmit, err: error, loading: false });
      });
  };

  function checkBtnDisabled(e) {
    if (e.target.type === "text") {
      setName(e.target.value);
    } else if (e.target.type === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }
  function changeBorderForForm(e) {
    if (e.target.value !== "") {
      if (e.target.type === "email") {
        console.log(emailRegex.test(e.target.value));
        if (emailRegex.test(e.target.value)) {
          e.target.classList.add("border-orange");
        }
      } else {
        e.target.classList.add("border-orange");
      }
    } else {
      e.target.classList.remove("border-orange");
    }
    checkBtnDisabled(e);
  }

  useEffect(() => {
    if (name !== "" && email !== "" && message !== "") {
      document
        .getElementsByClassName("form-btn")[0]
        .classList.remove("form-btn-not-allowed", "border-0");
      setDisabled(false);
    } else {
      document
        .getElementsByClassName("form-btn")[0]
        .classList.add("form-btn-not-allowed", "border-0");
      setDisabled(true);
    }
  }, [name, email, message]);

  return (
    <div className="position-relative">
      <h4 className="white-color mt-4">Contact Form</h4>
      {formSubmit.loading && (
        <div className=" text-center position-absolute top-50 start-50">
          <div className="spinner-border orange-color">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {formSubmit.result && (
        <div className="orange-color text-center mt-4">
          <CheckCircleIcon style={{ color: "green" }} /> Form submitted
          successfully! I will be in contact with you within 48 hours
        </div>
      )}

      {!formSubmit.result && (
        <form className=" mt-4 text-end   " onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="rounded-4 main-border  section-bg w-100 ps-3"
                onChange={changeBorderForForm}
                style={{ height: "50px", cursor: "" }}
                placeholder="Full name"
                required
              />
            </div>
            <div className="col-12 col-sm-6 mt-4 mt-sm-0">
              <input
                type="email"
                className="rounded-4 main-border section-bg w-100 ps-3"
                onChange={changeBorderForForm}
                style={{ height: "50px" }}
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <textarea
            type="text"
            className="rounded-4 main-border section-bg w-100 ps-3 mt-4 pt-3"
            onChange={changeBorderForForm}
            style={{ height: "200px", resize: "none" }}
            placeholder="Email address"
            required
          />
          {formSubmit.err && (
            <div className=" text-center mt-4">
              <div className="alert alert-danger">
                <CloseIcon style={{ color: "red" }} />
                oops,something wrong, try again later
              </div>
            </div>
          )}
          <button
            className=" rounded-3 form-btn-not-allowed  secondary-bg orange-color p-3 mt-4 form-btn border-0"
            type="submit"
            disabled={disabled}
          >
            <SendOutlinedIcon className="me-2" />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
