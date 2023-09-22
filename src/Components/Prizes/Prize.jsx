import React from "react";
import "../Prizes/Prize.scss";
import logo from "../../assets/PrizeImage/prize.png";
import first from "../../assets/PrizeImage/gold_medal.png";
import second from "../../assets/PrizeImage/silver_medal.png";
import third from "../../assets/PrizeImage/bronze_medal.png";
import { motion } from "framer-motion";
import star1 from "../../assets/FaqImages/star-1.png";
import star from "../../assets/FaqImages/star.png";
import stargray from "../../assets/FaqImages/stargray.png";

const Prize = () => {
  return (
    <div className="prize">
      <div className="box">
        <div className="div">
          <div className="title">
            <motion.div
              animate={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="head"
            >
              Prizes and <br />
              <span>Rewards</span>
            </motion.div>

            <motion.div
              animate={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="info"
            >
              Highlight of the prizes or rewards for winners and for
              participants.
            </motion.div>
          </div>
        </div>

        <div className="wrapper">
          <div className="image">
            <motion.img
              animate={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={logo}
              width={400}
              alt=""
            />

            <img src={star} alt="" className="purple" />
            <img src={star1} alt="" className="white" />
            <img src={star1} alt="" className="sec-white" />
          </div>

          <div className="details">
            <div className="ranks">
              <motion.div whileHover={{ scale: 1.1 }} className="container">
                <img src={second} alt="" />
                <p>2nd Runner</p>
                <div>N300,000</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="container2">
                <img src={first} alt="" />
                <p>1st Runner</p>
                <div>N400,000</div>
                <img src={stargray} alt="" className="sec-white" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="container">
                <img src={third} alt="" />
                <p>3rd Runner</p>
                <div>N150,000</div>
                <img src={star1} alt="" className="sec-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
