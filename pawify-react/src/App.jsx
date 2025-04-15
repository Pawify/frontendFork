import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/features/Auth/RegisterUser/Register";
import Login from "./components/features/Auth/Login/Login";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import "./App.css"; 
import { 
  Adoptions, 
  Animal, 
  BlogArticle, 
  BlogHome, 
  Home, 
  NotFound 
} from "./pages";


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
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<BlogArticle/>} />
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
