import React from "react";
import "../RegSuccess/RegSuccess.scss";
import { useNavigate } from "react-router-dom";
import congrats from "../../assets/congratulation.png";
import { motion } from "framer-motion";

const RegSuccess = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="reg"
    >
      <div className="container">
        <div className="img">
          <motion.img src={congrats} alt="" />
        </div>

        <div className="congrats">
          Congratulations <br />
          you have successfully Registered!
        </div>

        <div className="info">
          Yes, it was easy and you did it! check your mail box for next step 🥳
        </div>

        <div className="back" onClick={() => navigate(-1)}>
          Back
        </div>
      </div>
    </motion.div>
  );
};

export default RegSuccess;
