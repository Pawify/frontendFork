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
import "./App.css"; 
import Voluntarios from "./app/components/pages/Voluntarios/Voluntarios";
import Blog from "./app/components/pages/Blog/Blog";
import Servicios from "./app/components/pages/Servicios/Servicios";
import Tienda from "./app/components/pages/Tienda/Tienda";

function App() {
  return (
    <Router basename="/frontend/">
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
            <Route path="/voluntarios" element={<Voluntarios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tienda" element={<Tienda />} />
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
