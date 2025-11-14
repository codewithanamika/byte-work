import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/Facilities";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
