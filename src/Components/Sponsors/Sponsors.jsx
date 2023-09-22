import React from "react";
import "../Sponsors/Sponsors.scss";
import spons1 from "../../assets/SponsorsImages/spons1.png";
import spons2 from "../../assets/SponsorsImages/spons2.png";
import spons3 from "../../assets/SponsorsImages/spons3.png";
import spons4 from "../../assets/SponsorsImages/spons4.png";
import spons5 from "../../assets/SponsorsImages/spons5.png";
import spons6 from "../../assets/SponsorsImages/Paybox.png";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="wrapper">
        <div className="head">Partners and Sponsors</div>

        <div className="info">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </div>

        <motion.div
          animate={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="section"
        >
          <div className="container">
            <div className="row">
              <div className="one">
                <img src={spons1} alt="" />
              </div>
              <div className="two">
                <img src={spons2} alt="" />
              </div>
              <div className="four">
                <img src={spons4} alt="" />
              </div>
            </div>
            <div className="row1">
              <div className="five">
                <img src={spons5} alt="" />
              </div>
              <div className="six">
                <img src={spons6} alt="" />
              </div>
              <div className="three">
                <img src={spons3} alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
