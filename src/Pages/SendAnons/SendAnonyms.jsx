import React, { useState } from "react";
import "../SendAnons/SendAnonyms.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFileDownload, FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

const SendAnonyms = () => {
  const params = useParams();
  const [image, setImage] = useState({});
  const [messages, setMessages] = useState("");
  const [open, setOpen] = useState(false);

  //function for selecting images
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({ data: URL.createObjectURL(file), type: "file" });
      setOpen(true);
    }
    console.log(image);
  };

  //func for handling input text
  const handleChange = (e) => {
    const val = e.target.value;
    setMessages({ text: val, type: "message" });
  };

  const success = () =>
    toast.success("Anonyms sent successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      success();
      location.reload();
    }, 2000);
    console.log(image, messages);
  };

  return (
    <div className="sendanons">
      <Navbar />

      <div className="s-a-wrapper">
        <div className="head">Send Your Anonyms Message...</div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="text">
              Say Something About Me <sup>*</sup>
            </label>
            <textarea
              name="text"
              className="message-input"
              onChange={handleChange}
              placeholder={`Enter your message for ${params.username}`}
              required
            ></textarea>
          </div>

          {open && (
            <div className="image">
              <img src={image.data} alt="selected image to upload" />
            </div>
          )}
          <span className="add-file">
            <input
              type="file"
              accept="image/*"
              className="file-upload"
              onChange={handleImage}
            />
            Add File <FaFileDownload />
          </span>

          <button type="submit">
            Send Message <FaTelegramPlane />
          </button>

          <p>
            By using this service, you agree to our privacy policy. Terms of
            Service and any related products.
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};
export default SendAnonyms;
