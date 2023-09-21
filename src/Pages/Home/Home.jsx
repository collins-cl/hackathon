import React from "react";
import Hero from "../../Components/Hero/Hero";
import Overview from "../../Components/Overview/Overview";
import Faq from "../../Components/FAQs/Faq";
import Timeline from "../../Components/Timeline/Timeline";
import Prize from "../../Components/Prizes/Prize";
import Sponsors from "../../Components/Sponsors/Sponsors";
import Privacy from "../../Components/Privacy/Privacy";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Overview />
      <Faq />
      <Timeline />
      <Prize />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Home;
