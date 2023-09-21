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
            <a href="/">
              <img src={Logo} width={125} alt="\" />
            </a>
          </div>
        </div>

        <div className={open ? "section2-inactive" : "section2"}>
          <div className="container">
            <ul>
              <Link to="timeline">Timeline</Link>
              <Link to="overview">Overview</Link>
              <Link to="faq" smooth={true}>
                FAQs
              </Link>
              <RegLink to="/contact">Contact</RegLink>
            </ul>

            <div className="reg-btn">
              <RegLink>Register</RegLink>
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
