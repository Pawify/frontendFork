import React from "react";
import Home from './app/components/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./app/components/registerUser/Register";
import Login from "./app/components/login/Login";
import Home from "./app/components/pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Register/>
    </>
  );
}

export default App;
