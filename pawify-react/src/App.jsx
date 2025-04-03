import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./app/components/registerUser/Register";
import Login from "./app/components/login/Login";
import Home from "./app/components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
