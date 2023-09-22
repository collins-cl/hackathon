import React from "react";
import "../Privacy/Privacy.scss";
import Logo from "../../assets/PrivacyImages/lock.png";
import Lock from "../../assets/PrivacyImages/Vector.png";
import { motion } from "framer-motion";
import stargray from "../../assets/FaqImages/stargray.png";
import star1 from "../../assets/FaqImages/star-1.png";
import star from "../../assets/FaqImages/star.png";

const Privacy = () => {
  return (
    <div className="privacy">
      <img src={star} alt="" className="purple" />
      <img src={star} alt="" className="sec-purple" />
      <img src={star} alt="" className="third-purple" />
      <img src={stargray} alt="" className="white" />
      <img src={stargray} alt="" className="third-white" />
      <img src={star1} alt="" className="sec-white" />
      <div className="wrapper">
        <div className="left">
          <motion.div
            // animate={{ y: 50, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ delay: 0.5 }}
            className="head"
          >
            Privacy Policy and <span>Terms</span>
          </motion.div>

          <div className="update">Last updated on September 12, 2023</div>

          <motion.div
            // animate={{ y: 70, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ delay: 1 }}
            className="info"
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </motion.div>

          <motion.div
            // animate={{ x: 100, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ delay: 1 }}
            className="section"
          >
            <div className="top">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </div>

            <div className="title">Licensing Policy</div>

            <h4>Here are terms of our Standard License:</h4>

            <div className="list-items">
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>

              <li>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </div>

            <div className="read-more">Read More</div>
          </motion.div>
        </div>

        <div className="right">
          <img className="lock" src={Lock} alt="" />
          <motion.img
            animate={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={Logo}
            width={420}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
