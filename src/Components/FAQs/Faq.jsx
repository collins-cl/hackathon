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

const Faq = () => {
  return (
    <div className="faq">
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
            <img src={star} alt="" className="right" />
          </motion.div>

          <motion.div
            animate={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="paragraph"
          >
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </motion.div>

          <motion.div
            animate={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
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
                <p>Can I work on a project I started before the hackathon?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
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
                <p>What happens if I need help during the hackathon?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
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
                <p>What happens if I don't have an idea for a project?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
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
                <p>Can I join a team or do I have to come with one?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
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
                <p>What happens after the hackathon ends</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
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
                <p>Can I work on a project I started before the hackathon?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                deserunt deleniti vel, quas placeat neque sequi.
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </div>

        <div className="image">
          <img src={_} alt="" className="one" />
          <img src={_} alt="" className="two" />
          <img src={_} alt="" className="three" />
          <img src={star} alt="" className="star" />
          <img src={star} alt="" className="right" />
          <img src={stargray} alt="" className="left" />
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
            width={550}
            alt=""
            className="main"
          />
          <img src={star1} alt="" className="star3" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
