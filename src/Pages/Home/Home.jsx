import React from "react";
import Hero from "../../Components/Hero/Hero";
import Overview from "../../Components/Overview/Overview";
import Faq from "../../Components/FAQs/Faq";
import Timeline from "../../Components/Timeline/Timeline";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { FaAngleUp } from "react-icons/fa";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Hero />
        <Overview />
        <Faq />
        <Footer />

        <div className="up" onClick={() => window.scrollTo(0, 0)}>
          <FaAngleUp className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
