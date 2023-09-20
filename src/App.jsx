import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview/Overview";
import Faq from "./Components/FAQs/Faq";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Overview />
        <Faq />
        <Timeline />
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
      </div>
    </Router>
  );
}

export default App;
