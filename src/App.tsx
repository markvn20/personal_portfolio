import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import LayoutWrap from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <LayoutWrap maxWidth="lg">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LayoutWrap>
  );
};

export default App;
