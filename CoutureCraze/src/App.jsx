import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact";
import Features from "./Component/Features";
import Signup from "./Login/Signup";
import Signin from "./Login/Signin";
import Girls from "./Component/Products/Girls/Girls";
import Cart from "./Component/Cart/Cart";
import Dashboard from "./Component/Products/Girls/Dashboard";

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
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
