import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Register/Register";
import Tag from "./Pages/Tag/Tag";
import SendMessage from "./Pages/SendMessage/SendMessage";
import ReadComments from "./Pages/ReadComments/ReadComments";
import ViewMessages from "./Pages/ViewMessages/ViewMessages";
import SendAnonyms from "./Pages/SendAnons/SendAnonyms";
import ShareProfile from "./Pages/ShareProfile/ShareProfile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createtag" element={<Tag />} />
          <Route path="/chat" element={<SendMessage />} />
          <Route
            path="/chat/readcomments/:message"
            element={<ReadComments />}
          />
          <Route path="/viewmessages" element={<ViewMessages />} />
          <Route path="/sendanonyms/:username" element={<SendAnonyms />} />
          <Route path="/shareprofile/:tag" element={<ShareProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
