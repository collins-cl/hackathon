import React from "react";
import "../Prizes/Prize.scss";
import logo from "../../assets/PrizeImage/prize.png";
import first from "../../assets/PrizeImage/gold_medal.png";
import second from "../../assets/PrizeImage/silver_medal.png";
import third from "../../assets/PrizeImage/bronze_medal.png";

const Prize = () => {
  return (
    <div className="prize">
      <div className="box">
        <div className="div">
          <div className="title">
            <div className="head">
              Prizes and <br />
              <span>Rewards</span>
            </div>

            <div className="info">
              Highlight of the prizes or rewards for winners and for
              participants.
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="image">
            <img src={logo} width={400} alt="" />
          </div>

          <div className="details">
            <div className="ranks">
              <div className="container">
                <img src={second} alt="" />
                <p>2nd Runner</p>
                <div>N300,000</div>
              </div>
              <div className="container2">
                <img src={first} alt="" />
                <p>1st Runner</p>
                <div>N400,000</div>
              </div>
              <div className="container">
                <img src={third} alt="" />
                <p>3rd Runner</p>
                <div>N150,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
