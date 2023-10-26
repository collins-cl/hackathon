import React, { useState } from "react";
import "../Tag/Tag.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Tag = () => {
  const navigate = useNavigate();
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const success = () =>
    toast.success("Tag Created Successfully", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    success();
    setTimeout(() => {
      navigate(`/shareprofile/${tag}`);
    }, 2500);
    localStorage.setItem("tag", tag);
  };
  return (
    <div className="tag">
      <Navbar />

      <div className="container">
        <div className="wrapper">
          <div className="head">Create your personalised Tag on Anonyms</div>

          <div className="desc">
            Your tag can be used as a means of identification and can be made
            private or public. Tap in to discover more of Anonyms secrecy!
          </div>

          <form onSubmit={handleSubmit}>
            <div className="tag-choice">
              <div className="name">
                <label htmlFor="tag-name">Tag Name</label>
                <input
                  type="text"
                  name="tag"
                  placeholder="input tag name e.g @name"
                  required
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>

              <div className="option">
                <label htmlFor="type">Tag Type</label>
                <input type="text" name="type" disabled value="Public" />
              </div>
            </div>

            <div className="tag-desc">
              <label htmlFor="desc">Tag Description</label>
              <textarea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tag  Description"
              ></textarea>
            </div>

            <button>Set Tag</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tag;
