import React, { useState } from "react";
import "../ShareProfile/ShareProfile.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const ShareProfile = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [text, setText] = useState(
    `http://getlinkedhack-collins-cl.vercel.app/sendanonyms/${localStorage.getItem(
      "tag"
    )}`
  );

  const success = () =>
    toast.success("Link Copied successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const shareProfile = () => {
    let message = `Share your anonymous messages with ${localStorage.getItem(
      "tag"
    )} and trust it to remain a secret 😜 /n ${text}`;

    let url = `https://wa.me/?text=${encodeURI(message)}&app_absent=0`;
    console.log(message);
    // window.open(url).focus();
  };
  return (
    <div className="s-profile">
      <Navbar />
      <div className="s-p-wrapper">
        <div
          className="head"
          onClick={() => {
            navigator.clipboard.writeText(text);
            success();
          }}
        >{`${param.tag}'s Profile`}</div>

        <div className="link">
          {text} <FaCopy />
        </div>

        <div className="view-m" onClick={() => navigate("/viewmessages")}>
          View Messages
        </div>
        <div className="share-p" onClick={shareProfile}>
          Share Profile on WhatsApp
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ShareProfile;
