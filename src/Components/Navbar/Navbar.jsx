import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import Logo from "../../assets/getlinked.png";
import { LiaAdobe } from "react-icons/lia";
import Hamburger from "../../assets/Vector.png";
import { Link } from "react-scroll";
import { Link as RegLink, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const openHamburger = () => setOpen(true);
  const closeHmaburger = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="section1">
          <div className="logo">
            <RegLink to="/">
              <LiaAdobe />
              <p>Anonyms</p>
            </RegLink>
          </div>
        </div>

        <div className={open ? "section2-inactive" : "section2"}>
          <div className="container">
            <ul>
              {location.pathname === "/contact" ? null : (
                <Link to="overview" smooth={true} onClick={closeHmaburger}>
                  About
                </Link>
              )}

              <RegLink to="/createtag" onClick={closeHmaburger}>
                Create Tag
              </RegLink>

              <RegLink to="/chat" onClick={closeHmaburger}>
                Chat
              </RegLink>

              {location.pathname === "/contact" ? null : (
                <Link to="faq" smooth={true} onClick={closeHmaburger}>
                  FAQs
                </Link>
              )}

              <RegLink to="/contact" onClick={closeHmaburger}>
                Contact
              </RegLink>
            </ul>

            <div className="reg-btn">
              {localStorage.getItem("registered", true) ? (
                <div className="registered">Get Started</div>
              ) : (
                <RegLink className="a" to="/register">
                  <div>Register</div>
                </RegLink>
              )}
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
