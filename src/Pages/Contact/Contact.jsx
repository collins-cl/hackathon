import React, { useState } from "react";
import "../Contact/Contact.scss";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import right from "../../assets/ContactFlares/right.png";
import left from "../../assets/ContactFlares/left.png";
import star from "../../assets/OverviewImages/star.png";
import star1 from "../../assets/OverviewImages/star-1.png";
import stargray from "../../assets/OverviewImages/stargray.png";

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
    topic: "",
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
    <>
      <Navbar />
      <div className="contact">
        <img src={right} alt="" className="right" />
        <img src={left} alt="" className="left" />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          src={star}
          alt=""
          className="star"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          src={star}
          alt=""
          className="sec-star"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
          src={star1}
          alt=""
          className="white"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
          src={stargray}
          alt=""
          className="gray"
        />

        <div className="wrapper">
          <div className="box1">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="head"
            >
              Get in touch
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="contact-us"
            >
              <div className="title">Contact information</div>

              <div className="location">
                27,Alara Street Yaba 100012 Lagos State
              </div>

              <div className="call">Call Us : 08060015910</div>

              <div className="work-hours">
                we are open from Monday-Friday 08:00am - 05:00pm
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="socials"
            >
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
            </motion.div>
          </div>

          <div className="box2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="head"
            >
              Questions or need assistance? <br /> Let us know about it!
            </motion.div>

            <motion.p
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Email us below to any question related to our event
            </motion.p>

            <motion.form
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              action="submit"
              onSubmit={handleSubmit}
            >
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
            </motion.form>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
