import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/getlinked.png";
import { Link as RegLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="container">
          <div className="container1">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
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
              <Link>Overview</Link>
              <Link>TimeLine</Link>
              <Link>FAQs</Link>
              <RegLink to="">Register</RegLink>
            </div>

            <div className="socials">
              <p>Follow us</p>

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
            </div>
          </div>
          <div className="container3">
            <div className="head">Contact Us</div>
            <div className="call">
              <FaPhoneVolume /> <p>+2348060015910</p>
            </div>

            <div className="location">
              <FaLocationDot  className="loc"/>{" "}
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
