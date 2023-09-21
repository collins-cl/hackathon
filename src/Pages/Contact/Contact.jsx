import React from "react";
import "../Contact/Contact.scss";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="box1">
          <div className="head">Get in touch</div>

          <div className="contact-us">
            <div className="title">Contact information</div>

            <div className="location">
              27,Alara Street Yaba 100012 Lagos State
            </div>

            <div className="call">Call Us : 08060015910</div>

            <div className="work-hours">
              we are open from Monday-Friday 08:00am - 05:00pm
            </div>
          </div>

          <div className="socials">
            <p>Share us on</p>

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

        <div className="box2">
          <div className="head">
            Questions or need assistance? <br /> Let us know about it!
          </div>

          <p>Email us below to any question related to our event</p>

          <form action="submit">
            <div className="input">
              <input type="text" placeholder="Team's Name" required />
              <input type="email" placeholder="Topic" required/>

              <input type="email" placeholder="Email" />
            </div>
            <textarea name="" id="" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
