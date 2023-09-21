import React from "react";
import "../Privacy/Privacy.scss";
import Logo from "../../assets/PrivacyImages/lock.png";
import Lock from "../../assets/PrivacyImages/Vector.png";

const Privacy = () => {
  return (
    <div className="privacy">
      <div className="wrapper">
        <div className="left">
          <div className="head">
            Privacy Policy and <span>Terms</span>
          </div>

          <div className="update">Last updated on September 12, 2023</div>

          <div className="info">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </div>

          <div className="section">
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
          </div>
        </div>

        <div className="right">
          <img className="lock" src={Lock} alt="" />
          <img src={Logo} width={420} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
