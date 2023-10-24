import React, { useState } from "react";
import "../ViewMessages/ViewMessages.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { MessagesDummy } from "./MessagesDummy";

const ViewMessages = () => {
  const data = MessagesDummy;

  const [dataset, setDataSet] = useState(data);
  const navigate = useNavigate();
  return (
    <div className="view-messages">
      <Navbar />

      <div className="vm-wrapper">
        <div className="head">My Messages</div>
        <div className="messages">
          {dataset.length <= 0 ? (
            <div className="no-replies">
              Opps!. No one has sent you a message in the last session. Share
              your profile link and check back later
            </div>
          ) : (
            <div className="replies">
              <Content data={dataset} />
            </div>
          )}
        </div>

        <div className="profile-link">
          <FaWhatsapp className="icon" /> Share on Whatsapp
        </div>

        <div className="back" onClick={() => navigate(-1)}>
          Go Back
        </div>
      </div>
    </div>
  );
};

export default ViewMessages;

export const Content = ({ data }) => {
  return data.map((item, id) => {
    switch (item.type) {
      case "text":
        return (
          <div className="content">
            <p>{item.message}</p>

            <div className="share-res">Share Response</div>
          </div>
        );

      case "image":
        return (
          <div className="content">
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <p>{item.message}</p>
            <div className="share-res">Share Response</div>
          </div>
        );

      default:
        return <></>;
    }
  });
};
