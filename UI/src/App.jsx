import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "../src/pages/Home.jsx";
import Contact from "../src/pages/Contact.jsx";
import Features from "../src/pages/Features.jsx";
import Signup from "../src/component/Signup.jsx";
import Signin from "../src/component/Signin.jsx";
import Girls from "../src/component/Girls.jsx";
import Boys from "../src/component/Boys.jsx";
import Kids from "../src/component/Kids.jsx";
import Cart from "../src/pages/Cart.jsx";
import Dashboard from "../src/component/Signin.jsx";
import "../src/styles/App.css";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Girls" element={<Girls />} />
          <Route path="/Boys" element={<Boys />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
