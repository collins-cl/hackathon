import React, { useState, useRef, useEffect } from "react";
import "../Register/Register.scss";
import Logo from "../../assets/register-img.png";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const initialValues = {
    email: "",
    phone_number: "",
    team_name: "",
    project_topic: "",
  };

  // Define available options for group size and category
  const groupSizeOptions = [1, 2, 3, 4, 5, 6, 7];
  const categoryOptions = [
    {
      id: 1,
      name: "MOBILE",
    },
    {
      id: 2,
      name: "WEB",
    },
    {
      id: 3,
      name: "BACKEND",
    },
  ];

  const sizeref = useRef();
  const catref = useRef();

  const [opensize, setOpensize] = useState(false);
  const [group_size, setGroup_size] = useState("");
  const [opencategory, setOpencategory] = useState(false);
  const [category, setCategory] = useState("");
  const [state, setState] = useState(initialValues);
  const [privacy_policy_accepted, setPrivacy_policy_accepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setPrivacy_policy_accepted(event.target.checked);
  };

  // Handle change in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSize = (value) => {
    setGroup_size(value);
    setOpensize(false);
  };

  const handleCategory = (props) => {
    setCategory(props);
    setOpencategory(false);
  };

  // Create references for clicking outside dropdown menus
  const handleClickOutside = (e) => {
    if (sizeref.current && !sizeref.current.contains(e.target)) {
      setOpensize(false);
    }
  };
  const handleClickCategoryOutside = (e) => {
    if (catref.current && !catref.current.contains(e.target)) {
      setOpencategory(false);
    }
  };

  const baseUrl = "https://backend.getlinked.ai";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedCategoryId = categoryOptions.find(
      (item) => item.name === category
    )?.id;
    try {
      const response = await axios.post(`${baseUrl}/hackathon/registration`, {
        ...state,
        privacy_policy_accepted,
        group_size,
        category: selectedCategoryId, // Send the category ID
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Add and remove event listeners for the dropdown menus
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickCategoryOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickCategoryOutside);
    };
  }, []);

  return (
    <div className="register">
      <div className="wrapper">
        <div className="box1">
          <img src={Logo} alt="" />
        </div>

        <div className="box2">
          <div className="head">Register</div>

          <div className="neck">
            <p>Be part of this movement!</p>
            <div>
              <img src={man} alt="" />
              <img src={woman} alt="" />
            </div>
          </div>

          <div className="create">CREATE YOUR ACCOUNT</div>

          <form action="" onSubmit={handleSubmit}>
            <div className="sect1">
              <div className="name">
                <label htmlFor="team_name">Team's Name</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  required
                  onChange={handleChange}
                  value={state.team_name}
                  name="team_name"
                />
              </div>

              <div className="phone">
                <label htmlFor="phone_number">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  onChange={handleChange}
                  value={state.phone_number}
                  name="phone_number"
                />
              </div>
            </div>

            <div className="sect1">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  onChange={handleChange}
                  value={state.email}
                  name="email"
                />
              </div>

              <div className="project">
                <label htmlFor="project_topic">Project Topic</label>
                <input
                  type="text"
                  placeholder="What's your project topic"
                  required
                  onChange={handleChange}
                  value={state.project_topic}
                  name="project_topic"
                />
              </div>
            </div>

            <div className="sect2">
              <div className="category" ref={catref}>
                <label htmlFor="category">Category</label>
                <div className="container">
                  <div className="box" onClick={() => setOpencategory(true)}>
                    {category ? category : "Select your category"}
                    <p>
                      <FaAngleDown />
                    </p>
                  </div>

                  {opencategory && (
                    <div className="group_size">
                      {categoryOptions.map((item, id) => (
                        <div
                          key={id}
                          className="content"
                          onClick={() => handleCategory(item.name)}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="group" ref={sizeref}>
                <label htmlFor="group_size">Group Size</label>
                <div className="container">
                  <div className="box" onClick={() => setOpensize(true)}>
                    {group_size ? group_size : "Select your group size"}
                    <p>
                      <FaAngleDown />
                    </p>
                  </div>

                  {opensize && (
                    <div className="group_size">
                      {groupSizeOptions.map((item, id) => (
                        <div
                          key={id}
                          className="content"
                          onClick={() => handleSize(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="attention">
              Please review your registration details before submitting
            </p>

            <div className="check">
              <input
                type="checkbox"
                checked={privacy_policy_accepted}
                onChange={handleCheckboxChange}
                required
              />
              <span>
                I agree with the event terms and conditions and privacy policy
              </span>
            </div>

            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
