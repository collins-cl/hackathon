import React from "react";
import "../FAQs/Faq.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import _ from "../../assets/FaqImages/_.png";
import faq from "../../assets/FaqImages/faq.png";
import star1 from "../../assets/FaqImages/star-1.png";
import star from "../../assets/FaqImages/star.png";
import stargray from "../../assets/FaqImages/stargray.png";
import { motion } from "framer-motion";
import halfblur from "../../assets/halfspot.png";

const Faq = () => {
  return (
    <div className="faq">
      <div className="patch">
        <img src={halfblur} alt="" />
      </div>
      <div className="wrapper">
        <div className="details">
          <motion.div
            animate={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="head"
          >
            Frequently Asked
            <span> Question</span>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              src={star}
              alt=""
              className="right"
            />
          </motion.div>

          <motion.div
            animate={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="paragraph"
          >
            We got answers to the questions that you might want to ask about
            Anonyms
          </motion.div>

          <motion.div
            animate={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="accordion"
          >
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={
                  <div style={{ color: "#D434FE", fontSize: "23px" }}>+</div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Is our website secure?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Indeed, our platform is more secure than ever before. We are
                relentlessly enhancing the user experience to amplify the
                enjoyment of the game. Your safety is paramount to us.
              </AccordionDetails>
            </Accordion>

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={
                  <div style={{ color: "#D434FE", fontSize: "23px" }}>+</div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Curious About the Message Sender?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Engaging with a service like anonymous messages necessitates
                understanding that user identities remain undisclosed.
                Consequently, determining the sender of the messages you receive
                is beyond possibility.
              </AccordionDetails>
            </Accordion>

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={
                  <div style={{ color: "#D434FE", fontSize: "23px" }}>+</div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>What happens if I forgot my pin?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                In case your Login PIN slips your mind, kindly proceed to create
                a new account. Without the PIN, the authenticity of the User ID
                holder cannot be verified, and hence, we are unable to provide
                the PIN to anyone.
              </AccordionDetails>
            </Accordion>

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={
                  <div style={{ color: "#D434FE", fontSize: "23px" }}>+</div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Can I be traced from my messages?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Nope. Anonyms guarantees your anonymity when sending messages on
                our platform
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </div>

        <div className="image">
          <img src={_} alt="" className="one" />
          <img src={_} alt="" className="two" />
          <img src={_} alt="" className="three" />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            src={star}
            alt=""
            className="star"
          />

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
            src={star}
            alt=""
            className="right"
          />

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            src={stargray}
            alt=""
            className="left"
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
            src={faq}
            width={450}
            alt=""
            className="main"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
            src={star1}
            alt=""
            className="star3"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
