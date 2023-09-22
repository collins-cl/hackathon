import React, { useState, useEffect } from "react";
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
import blur from "../../assets/spotlight.svg";

const Hero = () => {
  const [text, setText] = useState("Igniting a Revolution in HR Innovation");
  const [currentIndex, setCurrentIndex] = useState(9);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (!reverse) {
        if (currentIndex < text.length) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setReverse(true);
        }
      } else {
        if (currentIndex > 9) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setReverse(false);
        }
      }
    }, 100); // Adjust typing speed as needed

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [currentIndex, text, reverse]);

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

        <p>{text.slice(0, currentIndex)}</p>
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
