import React, { useState, useEffect } from "react";
import "../Timer/Timer.scss";
import Star1 from "../../assets/heroimages/star-1.png";

const Timer = () => {
  const initialCountdown =
    parseInt(localStorage.getItem("countdown")) || 80 * 60 * 60;
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
      localStorage.setItem("countdown", countdown.toString());
    }, [1000]);

    return () => clearInterval(interval);
  }, [countdown]);

  const hours = Math.floor((countdown % (80 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div className="countdown">
      {hours}
      <sub>H</sub> {minutes}
      <sub>M</sub> {seconds}
      <sub>S</sub>
      <p className="float-star">
        <img src={Star1} width={20} alt="" />
      </p>
    </div>
  );
};

export default Timer;
