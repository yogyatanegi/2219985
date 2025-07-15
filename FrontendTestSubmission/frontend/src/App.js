// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestLog from "./pages/TestLog"; // Optional: remove if not testing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestLog />} />
        {/* You can add StatsPage route later */}
      </Routes>
    </Router>
  );
}

export default App;
