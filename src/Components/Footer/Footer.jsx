import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/getlinked.png";
import { LiaAdobe } from "react-icons/lia";
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
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
        src={star}
        alt=""
        className="purple"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        src={star1}
        alt=""
        className="white"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
        src={stargray}
        alt=""
        className="third-white"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
        src={star1}
        alt=""
        className="sec-white"
      />
      <div className="wrapper">
        <div className="container">
          <div className="container1">
            <div className="logo">
              <RegLink to="/">
                <LiaAdobe />
                <p>Anonyms</p>
              </RegLink>
            </div>

            <div className="info">
              Anonyms is an interactive anonymous messaging app with a dare
              game. Create your Profile Link and Send it to all your contacts to
              check what do your friends think about you. With the help of
              Anonyms, you can send and recieve anonymous compliments easily for
              free!
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
              <Link to="overview">About</Link>
              <RegLink to="/createtag">Create Tag</RegLink>
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
        
        </div>

        <div className="rights">All rights reserved. © Anonyms.</div>
      </div>
    </div>
  );
};

export default Footer;
