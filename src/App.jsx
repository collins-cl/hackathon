import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview/Overview";
import Faq from "./Components/FAQs/Faq";
import Timeline from "./Components/Timeline/Timeline";
import Prize from "./Components/Prizes/Prize";
import Sponsors from "./Components/Sponsors/Sponsors";
import Privacy from "./Components/Privacy/Privacy";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Overview />
        <Faq />
        <Timeline />
        <Prize />
        <Sponsors />
        <Privacy />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
