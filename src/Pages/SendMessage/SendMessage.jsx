import React, { useState, useEffect } from "react";
import "../SendMessage/sendMessage.scss";
import { useNavigate } from "react-router-dom";

const SendMessage = () => {
  const navigate = useNavigate();
  const [send, setSend] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  //function for selecting images
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages((prev) => [
        ...prev,
        { data: URL.createObjectURL(file), type: "file" },
      ]);
      setOpen(false)
    }
  };

  const handleNavigation = (props) => {
    navigate(`/chat/readcomments/${props.text}`);
  };

  const handleChange = (e) => {
    setSend(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (send !== "") {
      setMessages((prev) => [...prev, { text: send, type: "message" }]);
      setSend(""); // Clear the input after sending
    }
  };

  return (
    <div className="message-cat">
      <div className="top">Name of group</div>
      <div className="contents">
        <ReturnMessages
          messages={messages}
          handleNavigation={handleNavigation}
        />
      </div>

      <form className="bottom" onSubmit={handleSubmit}>
        <div className="plus">
          {/* input for sending files */}
          <p onClick={() => setOpen(!open)}>+</p>
          {open && (
            <div className="input-type">
              <input
                type="file"
                name="image"
                className="file-upload"
                onChange={handleImage}
              />
              File
            </div>
          )}
        </div>

        {/* input for sending messages */}
        <input type="text" value={send} onChange={handleChange} />

        <button className="send">send</button>
      </form>
    </div>
  );
};

export default SendMessage;

//function to handle if either it is sent images or texts

export const ReturnMessages = ({ messages, handleNavigation }) => {
  return messages.map((msg, id) => {
    switch (msg.type) {
      case "file": {
        return (
          <div className="image-cont">
            <img
              onError={() => console.log("error")}
              accept="image/*"
              src={msg.data}
              alt=""
            />
          </div>
        );
      }

      case "message":
        return (
          <div className="message-sent">
            <div key={id} className="send-box">
              <div className="message">{msg.text}</div>
              <div className="comment" onClick={() => handleNavigation(msg)}>
                comment
              </div>
            </div>
          </div>
        );

      default:
        return <div></div>;
    }
  });
};
