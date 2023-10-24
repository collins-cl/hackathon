import React, { useState, useEffect } from "react";
import "../ReadComments/ReadComments.scss";
import { useParams } from "react-router-dom";

const ReadComments = () => {
  const param = useParams();
  const [send, setSend] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setSend(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (send !== "") {
      setMessages([...messages, { text: send, sender: "me" }]);
      setSend(""); // Clear the input after sending
    }
    console.log(messages);
  };

  const postTopic = param;

  useEffect(() => {
    // Simulate received messages with a timeout
    const receiveMessage = () => {
      const receivedMessages = [
        { text: "Hello", sender: "other" },
        { text: "How are you?", sender: "other" },
      ];

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, ...receivedMessages]);
      }, 2000);
    };

    if (messages.length === 1) {
      receiveMessage();
    }
  }, [messages]);
  return (
    <div
      className="read-comments
    "
    >
      <div className="top">Comments</div>
      <div className="topic">Topic : {param.message}</div>
      <div className="contents">
        <div className="message-sent">
          {messages.map((msg, id) => (
            <div className="send-box" key={id}>
              <div className="message">
                <div className={msg.sender === "me" ? "me" : "other"}>
                  {" "}
                  <p>{msg.text}</p>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="bottom" onSubmit={handleSubmit}>
        <div className="plus">
          <p>+</p>

          <div className="input-type"></div>
        </div>
        <input type="text" value={send} required onChange={handleChange} />
        <button className="send">send</button>
      </form>
    </div>
  );
};

export default ReadComments;
