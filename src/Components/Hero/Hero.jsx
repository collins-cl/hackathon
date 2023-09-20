import React from "react";
import "../Hero/Hero.scss";
import Star from "../../assets/heroimages/star.png";
import Star1 from "../../assets/heroimages/star-1.png";
import Chain from "../../assets/heroimages/chain.png";
import Fire from "../../assets/heroimages/fire.png";
import Light from "../../assets/heroimages/lightbulb.png";
import Dude from "../../assets/heroimages/man.png";
import World from "../../assets/heroimages/world.png";
import { Link } from "react-router-dom";

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
            <Link>Register</Link>
          </div>

          <div className="countdown">
            00<sub>H</sub> 00<sub>M</sub> 00<sub>S</sub>
            <p className="float-star">
              <img src={Star1} width={20} alt="" />
            </p>
          </div>
        </div>

        <div className="box2">
          <img src={Dude} alt="" />
          <img className="abs-image" src={World} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
