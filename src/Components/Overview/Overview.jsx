import React from "react";
import "../Overview/Overview.scss";
import BigIdea from "../../assets/OverviewImages/bigidea.png";
import girl from "../../assets/OverviewImages/girl.png";
import star from "../../assets/OverviewImages/star.png";
import stargray from "../../assets/OverviewImages/stargray.png";
import starwhite from "../../assets/OverviewImages/star-1.png";
import arrow from "../../assets/OverviewImages/arrow.png";
import duo from "../../assets/OverviewImages/duo.png";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div className="overview">
      <div className="introduction">
        <div className="wrapper">
          <div className="img">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              src={BigIdea}
              alt=""
            />
            <img src={star} alt="" className="left" />
            <img src={arrow} className="right" alt="" />
          </div>

          <div className="details">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="head"
            >
              Introduction to getlinked
              <span> tech Hackathon 1.0</span>
              <p>
                <img src={star} className="right" alt="" />
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="info"
            >
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.div>
          </div>
        </div>
      </div>

      <div className="rules">
        <div className="wrapper">
          <div className="details">
            <motion.div
              animate={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="head"
            >
              Rules and{"  "}
              <motion.span
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Guidelines
              </motion.span>
            </motion.div>

            <motion.div
              animate={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="info"
            >
              <img src={stargray} className="top" alt="" />
              <img src={starwhite} className="bottom" alt="" />
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.div>
          </div>

          <div className="girl">
            <motion.img
              className="box"
              animate={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={girl}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="criteria">
        <div className="wrapper">
          <div className="image">
            <img src={star} className="top" alt="" />
            <motion.img
              animate={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={duo}
              width={550}
              alt=""
            />
            <img src={stargray} className="middle" alt="" />
            <img src={starwhite} className="bottom" alt="" />
          </div>

          <div className="details">
            <motion.div
              animate={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="head"
            >
              Judging Criteria
              <span> Key attributes</span>
            </motion.div>

            <motion.div
              animate={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="info"
            >
              <div>
                <span>Innovation and Creativity:</span> Evaluate the uniqueness
                and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative
                features.
              </div>

              <div>
                <span>Functionality:</span> Assess how well the solution works.
                Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and
                robustness of the solution.
              </div>

              <div>
                <span>Impact and Relevance:</span> Determine the potential
                impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience?
                Judges would assess the potential social, economic, or
                environmental benefits.
              </div>

              <div>
                <span>Technical Complexity:</span> Evaluate the technical
                sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </div>

              <div>
                <span>Adherence to Hackathon Rules:</span> udges will Ensure
                that the team adhered to the rules and guidelines of the
                hackathon, including deadlines, use of specific technologies or
                APIs, and any other competition-specific requirements.
              </div>
            </motion.div>

            <div className="read-btn">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
