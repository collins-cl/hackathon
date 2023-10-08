import React, { useState } from "react";
import "../Register/Register.scss";
import axios from "axios";
import RegSuccess from "../../Components/RegSuccess/RegSuccess";
import Navbar from "../../Components/Navbar/Navbar";
import right from "../../assets/ContactFlares/rightflare.png";
import star from "../../assets/OverviewImages/star.png";
import white from "../../assets/OverviewImages/star-1.png";
import gray from "../../assets/OverviewImages/stargray.png";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const initialValues = {
    email: "",
    nickname: "",
    team_name: "",
    password: "",
  };

  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState(initialValues);

  // Handle change in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    localStorage.setItem("registered", true);
    setModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="register">
        <img src={right} alt="" className="right" />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          src={star}
          alt=""
          className="star"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
          src={star}
          alt=""
          className="sec-star"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
          src={white}
          alt=""
          className="white"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
          src={gray}
          alt=""
          className="gray"
        />

        <div className="wrapper">
          <div className="box2">
            <div className="head">Register</div>

            <div className="create">CREATE YOUR ACCOUNT</div>

            <form action="" onSubmit={handleSubmit}>
              <div className="sect1">
                <div className="name">
                  <label htmlFor="team_name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                    value={state.team_name}
                    name="team_name"
                  />
                </div>

                <div className="phone">
                  <label htmlFor="nickname">Nick Name</label>
                  <input
                    type="text"
                    placeholder="Enter your nick name"
                    required
                    onChange={handleChange}
                    value={state.nickname}
                    name="nickname"
                  />
                </div>
              </div>

              <div className="sect1">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    onChange={handleChange}
                    value={state.email}
                    name="email"
                  />
                </div>

                <div className="project">
                  <label htmlFor="password">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    onChange={handleChange}
                    value={state.password}
                    name="password"
                  />

                  {show ? (
                    <FaEyeSlash
                      className="icon"
                      onClick={() => setShow(false)}
                    />
                  ) : (
                    <FaEye className="icon" onClick={() => setShow(true)} />
                  )}
                </div>
              </div>

              <p className="attention">
                Please review your registration details before submitting
              </p>

              <button type="submit">Register Now</button>
            </form>
          </div>
        </div>
      </div>

      {modal ? <RegSuccess /> : null}
      <Footer />
    </>
  );
};

export default Register;
