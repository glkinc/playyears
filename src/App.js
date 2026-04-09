import React from "react";

import './Reset.css';
import './Tokens.css';
import './Style.css';
import './Theme.css';
import './Components.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Landing from "./pages/Home";
import Shop from "./pages/Shop";
import Approach from "./pages/Approach";
import Ambassador from "./pages/Ambassador";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Giveaway from "./pages/Giveaway";

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/giveaway" element={<Giveaway />} />
      </Routes>

      <Footer />
    </Router>
  );
}