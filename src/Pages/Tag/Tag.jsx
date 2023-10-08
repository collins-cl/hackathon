import React from "react";
import "../Tag/Tag.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Tag = () => {
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

          <form action="">
            <div className="tag-choice">
              <div className="name">
                <label htmlFor="tag-name">Tag Name</label>
                <input
                  type="text"
                  placeholder="input tag name e.g @name"
                  required
                />
              </div>

              <div className="option">
                <label htmlFor="type">Tag Type</label>
                <input type="text" disabled value="Public" />
              </div>
            </div>

            <div className="tag-desc">
              <label htmlFor="desc">Tag Description</label>
              <textarea name="" id="" placeholder="Tag Description"></textarea>
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
