import React from "react";
import "../Hero/Hero.scss";
import Star from "../../assets/heroimages/star.png";
import { motion } from "framer-motion";
import Banner from "../../assets/secret3.svg";
import Secret1 from "../../assets/secret1.svg";
import { Link as RegLink } from "react-router-dom";
import blur from "../../assets/lens2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="patch">
        <img src={blur} alt="" />
      </div>
      <div className="intro">
        <div className="icon">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            width={20}
            src={Star}
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="box1">
          <div className="top">
            <p className="f-p">Send Confidential Anonymous Messages Online</p>
            <p className="light">
              <img src={Secret1} alt="" />
            </p>
          </div>

          <div className="middle">
            Anonyms is an interactive anonymous messaging app with a dare game.
            Create your Profile Link and Send it to all your contacts to check
            what do your friends think about you. With the help of Anonyms, you
            can send and recieve anonymous compliments easily for free!
          </div>

          <div className="reg-btn">
            {localStorage.getItem("registered", true) ? (
              <div className="registered">Get Started</div>
            ) : (
              <RegLink to="/register">Register</RegLink>
            )}
          </div>
        </div>

        <div className="box2">
          <img src={Banner} alt="" />
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Hero;
