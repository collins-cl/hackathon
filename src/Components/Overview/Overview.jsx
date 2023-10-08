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
import blur from "../../assets/spotlight.png";

const Overview = () => {
  return (
    <div className="overview">
      <div className="intro">Why Choose Anonyms</div>
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
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              src={star}
              alt=""
              className="left"
            />
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
              <span>Anonymity</span>
              <p>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
                  src={star}
                  className="right"
                  alt=""
                />
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="info"
            >
              At our core, we value privacy, making sure that your confidential
              messages are sent with complete anonymity. Until you decide to
              unveil it, your identity remains hidden. Our dedication to
              safeguarding your data creates a secure space for discreet
              communication, free from concerns of exposure. Our cutting-edge
              encryption ensures that your messages remain private and for your
              eyes only. You're in control of when and if you choose to disclose
              your identity, providing the freedom to engage openly, with
              confidence in your online interactions. Your privacy is our
              priority.
            </motion.div>
          </div>
        </div>
      </div>

      <div className="rules">
        <div className="patchs">
          <img src={blur} width={400} alt="" />
        </div>
        <div className="wrapper">
          <div className="details">
            <motion.div
              animate={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="head"
            >
              Safe and Secure
            </motion.div>

            <motion.div
              animate={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="info"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
                src={stargray}
                className="top"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
                src={starwhite}
                className="bottom"
                alt=""
              />
              At the heart of our mission lies a steadfast commitment to the
              safety and well-being of every user on our anonymous messaging
              platform. Our dedication to security extends to the implementation
              of comprehensive reporting systems, providing you with the means
              to address any content that may not align with your preferences or
              comfort. Your peace of mind is our top priority, and we spare no
              effort in maintaining a secure and welcoming atmosphere for
              everyone. With your active participation through reporting, we
              collectively ensure that our platform remains a place where you
              can engage with confidence and without hesitation. Your safety is
              our shared responsibility, and together, we make it a reality.
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
        <div className="patch">
          <img src={blur} alt="" />
        </div>
        <div className="wrapper">
          <div className="image">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
              src={star}
              className="top"
              alt=""
            />
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
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
              src={stargray}
              className="middle"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              src={starwhite}
              className="bottom"
              alt=""
            />
          </div>

          <div className="details">
            <motion.div
              animate={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="head"
            >
              24/7 Support and
              <span> Images and VIdeo Integration</span>
            </motion.div>

            <motion.div
              animate={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="info"
            >
              At the core of our platform is the seamless integration of
              multimedia content, enabling you to effortlessly share text,
              images, and videos all in one place. This versatility empowers you
              to express yourself creatively and authentically. Beyond the
              features, our commitment to your satisfaction is unwavering. If
              you ever find yourself in need of assistance or have any questions
              related to our anonymous messaging and feedback platform, know
              that we're here for you 24 hours a day, 7 days a week. Our
              dedicated support team is just a message away, ready to provide
              guidance, resolve issues, or address any concerns you may have. We
              understand that your experience matters, and we continually strive
              to make our platform a welcoming space where you can interact with
              confidence. Your feedback and needs are essential to us, and we
              value the opportunity to serve you at any time, day or night.
            </motion.div>

            <div className="read-btn">Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
