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
import Footer from "../../Components/Footer/Footer";

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

  const intialValue = {
    first_name: "",
    subject: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(intialValue);

  const { first_name, subject, email, message } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    success();
    setState(intialValue);
  };

  return (
    <>
      <Navbar />
      <div className="contact">
        <img src={right} alt="" className="right" />
        

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
              Email us below to any question related to our platform
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
                  placeholder="Name"
                  name="first_name"
                  value={first_name}
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

                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">LET'S TALK</button>
            </motion.form>
          </div>
        </div>

        <ToastContainer />
      </div>
        <Footer/>
    </>
  );
};

export default Contact;
