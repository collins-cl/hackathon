import React from "react";
import "../Timeline/Timeline.scss";
import { motion } from "framer-motion";
import star from "../../assets/FaqImages/star.png";
import star1 from "../../assets/FaqImages/star-1.png";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="wrapper">
        <motion.div
          animate={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="head"
        >
          Timeline
        </motion.div>

        <motion.div
          animate={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .7 }}
          className="info"
        >
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </motion.div>

        <div className="content">
          <div className="first">
            <div className="right-container">
              <h4>Hackathon Announcement</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .8 }}
              >
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </motion.p>
              <img src={star} alt="" className="right" />
            </div>

            <div className="one">1</div>

            <div className="date">November 18, 2023</div>
          </div>

          <div className="second">
            <div className="date">November 18, 2023</div>

            <div className="two">2</div>

            <div className="left-container">
              <h4>Teams Registration begins</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .9 }}
              >
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </motion.p>
            </div>
          </div>

          <div className="first third">
            <div className="right-container">
              <h4>Teams Registration ends</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                Interested Participants are no longer Allowed to register
              </motion.p>
            </div>

            <div className="one">3</div>

            <div className="date">November 18, 2023</div>
              <img src={star1} alt="" className="left" />
          </div>

          <div className="second fourth">
            <div className="date">November 18, 2023</div>

            <div className="two">4</div>

            <div className="left-container">
              <h4>Announcement of the accepted teams</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </motion.p>
            </div>
          </div>

          <div className="first fifth">
            <div className="right-container">
              <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </motion.p>
            </div>

            <div className="one">5</div>

            <div className="date">November 18, 2023</div>
          </div>

          <div className="second sixth">
            <div className="date">November 18, 2023</div>

            <div className="two">6</div>

            <div className="left-container">
              <h4>Demo Day</h4>
              <motion.p
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              >
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
