import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/getlinked.png";
import { Link as RegLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import stargray from "../../assets/FaqImages/stargray.png";
import star1 from "../../assets/FaqImages/star-1.png";
import star from "../../assets/FaqImages/star.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={star} alt="" className="purple" />
      <img src={star1} alt="" className="white" />
      <img src={stargray} alt="" className="third-white" />
      <img src={star1} alt="" className="sec-white" /> */}
      <div className="wrapper">
        <div className="container">
          <div className="container1">
            <div className="logo">
              <RegLink to="/">
                <img src={Logo} alt="" />
              </RegLink>
            </div>

            <div className="info">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </div>

            <div className="tou">
              <p>Terms of Use</p>
              <div></div>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="container2">
            <div className="head">Useful Links</div>

            <div className="links">
              <Link to="overview">Overview</Link>
              <Link to="timeline">TimeLine</Link>
              <Link to="faq">FAQs</Link>
              <RegLink to="/register">Register</RegLink>
            </div>

            <div className="socials">
              <p>Follow us</p>

              <div>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="http://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="icon" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="http://www.faecbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="icon" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="http://www.linkedln.come"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="container3">
            <div className="head">Contact Us</div>
            <div className="call">
              <FaPhoneVolume /> <p>+2348060015910</p>
            </div>

            <div className="location">
              <FaLocationDot className="loc" />{" "}
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>

        <div className="rights">All rights reserved. © getlinked Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;
