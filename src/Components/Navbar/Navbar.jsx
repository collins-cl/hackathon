import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import Logo from "../../assets/getlinked.png";
import Hamburger from "../../assets/Vector.png";
import { Link } from "react-scroll";
import { Link as RegLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openHamburger = () => setOpen(true);
  const closeHmaburger = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="section1">
          <div className="logo">
            <RegLink to="/">
              <img src={Logo} width={125} alt="\" />
            </RegLink>
          </div>
        </div>

        <div className={open ? "section2-inactive" : "section2"}>
          <div className="container">
            <ul>
              <Link to="timeline" smooth={true} onClick={closeHmaburger}>
                Timeline
              </Link>
              <Link to="overview" smooth={true} onClick={closeHmaburger}>
                Overview
              </Link>
              <Link to="faq" smooth={true} onClick={closeHmaburger}>
                FAQs
              </Link>
              <RegLink to="/contact" onClick={closeHmaburger}>
                Contact
              </RegLink>
            </ul>

            <div className="reg-btn">
              <RegLink to="/register">Register</RegLink>
            </div>

            <div className="hamburger-close-menu" onClick={closeHmaburger}>
              <FaTimes />
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={openHamburger}>
          <img src={Hamburger} width={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
