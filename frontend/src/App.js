import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Ocr from "./pages/Ocr";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/extractor" element={<Ocr />} />
      </Routes>
    </Router>
  );
};

export default App;
