import React, { useState } from "react";
import "../Contact/Contact.scss";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const success = () =>
    toast.success("Email sent successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const error = () =>
    toast.error("Something went wrong", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // i used first_name in place of team's name as a result of contradicting var names in api.

  const intialValue = {
    first_name: "",
    topic: " ",
    email: "",
    message: "",
  };

  const [state, setState] = useState(intialValue);

  const { first_name, topic, email, message } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const baseURL = "https://backend.getlinked.ai";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/hackathon/contact-form`, {
        first_name,
        topic,
        email,
        message,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("success");
          success();
          setState(intialValue);
        }
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <div className="box1">
          <div className="head">Get in touch</div>

          <div className="contact-us">
            <div className="title">Contact information</div>

            <div className="location">
              27,Alara Street Yaba 100012 Lagos State
            </div>

            <div className="call">Call Us : 08060015910</div>

            <div className="work-hours">
              we are open from Monday-Friday 08:00am - 05:00pm
            </div>
          </div>

          <div className="socials">
            <p>Share us on</p>

            <div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="icon" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="icon" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="box2">
          <div className="head">
            Questions or need assistance? <br /> Let us know about it!
          </div>

          <p>Email us below to any question related to our event</p>

          <form action="submit" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                placeholder="Team's Name"
                name="first_name"
                value={first_name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Topic"
                name="topic"
                value={topic}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
