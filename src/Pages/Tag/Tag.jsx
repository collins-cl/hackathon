import React, { useState } from "react";
import "../Tag/Tag.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Tag = () => {
  const initilaVal = {
    tag: "",
    description: "",
  };
  const [state, setState] = useState(initilaVal);

  const { tag, type, description } = state;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(state);
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

          <form onClick={handleSubmit}>
            <div className="tag-choice">
              <div className="name">
                <label htmlFor="tag-name">Tag Name</label>
                <input
                  type="text"
                  name="tag"
                  placeholder="input tag name e.g @name"
                  required
                  value={tag}
                  onChange={handleChange}
                />
              </div>

              <div className="option">
                <label htmlFor="type">Tag Type</label>
                <input
                  type="text"
                  name="type"
                  disabled
                  value="Public"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="tag-desc">
              <label htmlFor="desc">Tag Description</label>
              <textarea
                name="description"
                value={description}
                onChange={handleChange}
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
