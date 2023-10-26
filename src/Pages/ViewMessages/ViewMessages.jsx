import React, { useState, useEffect } from "react";
import "../ViewMessages/ViewMessages.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { MessagesDummy } from "./MessagesDummy";

const ViewMessages = () => {
  const data = MessagesDummy;
  const navigate = useNavigate();
  const param = useParams();

  const [dataset, setDataSet] = useState();
  const [text, setText] = useState(
    `http://getlinkedhack-collins-cl.vercel.app/sendanonyms/${param.username}`
  );

  const shareProfile = () => {
    let message = `Share your anonymous messages with ${param.username} and trust it to remain a secret 😜 /n ${text}`;

    let url = `https://wa.me/?text=${encodeURI(message)}&app_absent=0`;
    console.log(message);
    window.open(url).focus();
  };

  useEffect(() => {
    setTimeout(() => {
      setDataSet(data);
    }, 3000);
  }, []);

  return (
    <div className="view-messages">
      <Navbar />

      <div className="vm-wrapper">
        <div className="head">My Messages</div>
        <div className="messages">
          {!dataset ? (
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

        {!dataset && (
          <div className="profile-link">
            <FaWhatsapp className="icon" onClick={shareProfile} /> Share Link on
            Whatsapp
          </div>
        )}

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
          <div className="content" key={id}>
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
