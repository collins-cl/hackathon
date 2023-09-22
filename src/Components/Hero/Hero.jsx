import React from "react";
import "../Hero/Hero.scss";
import Star from "../../assets/heroimages/star.png";
import { motion } from "framer-motion";
import Chain from "../../assets/heroimages/chain.png";
import Fire from "../../assets/heroimages/fire.png";
import Light from "../../assets/heroimages/lightbulb.png";
import Dude from "../../assets/heroimages/man.png";
import World from "../../assets/heroimages/world.png";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <div className="icon">
          <img width={20} src={Star} alt="" />
        </div>

        <p>Igniting a Revolution in HR Innovation</p>
      </div>

      <div className="container">
        <div className="box1">
          <div className="top">
            <p>getlinked Tech</p>
            <p className="f-p">
              Hackathon <span>1.0</span> <img src={Chain} alt="" />
              <img src={Fire} alt="" />
            </p>
            <p className="light">
              <img src={Light} alt="" />
            </p>
          </div>

          <div className="middle">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </div>

          <div className="reg-btn">
            <Link to="/register">Register</Link>
          </div>

          <Timer />
        </div>

        <div className="box2">
          <img src={Dude} alt="" />
          <motion.img
            animate={{ scale: [0.3, 0.4, 0.8, 0.71, 0.3, 0.7, 0.9] }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="abs-image"
            src={World}
            alt=""
          />
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Hero;
