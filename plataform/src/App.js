import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login.js";
import Home from './components/pages/home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
