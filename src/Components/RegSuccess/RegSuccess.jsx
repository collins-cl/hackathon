import React from "react";
import "../RegSuccess/RegSuccess.scss";
import { useNavigate } from "react-router-dom";
import congrats from "../../assets/congratulation.png";

const RegSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="reg">
      <div className="container">
        <div className="img">
          <img src={congrats} alt="" />
        </div>

        <div className="congrats">
          Congratulations <br />
          you have successfully Registered!
        </div>

        <div className="info">
          Yes, it was easy and you did it! check your mail box for next step 🥳
        </div>

        <div className="back" onClick={() => navigate( -1)}>
          Back
        </div>
      </div>
    </div>
  );
};

export default RegSuccess;
