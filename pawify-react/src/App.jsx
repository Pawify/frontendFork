import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./app/components/registerUser/Register";
import Login from "./app/components/login/Login";
import Home from "./app/components/pages/Home";
import NotFound from "./app/errors/NotFound";
import NavBar from "./app/components/navBar/navBar";
import Footer from "./app/components/footer/Footer"; 
import Adoptions from "./app/components/pages/Adoption/Adoptions";
import Animal from "./app/components/pages/Adoption/Animal";
import "./App.css"; // Make sure to create this file for the styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <NavBar />
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adopciones" element={<Adoptions />} />
            <Route path="/animal/:id" element={<Animal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
