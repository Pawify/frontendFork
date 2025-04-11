//NavBar creado por Jhonny Bracho
import React, { useState } from "react";
import "./navBar.css";
import theme from "@/constants/themes";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { profileSvg } from "./svg";

const NavBar = () => {
  const navigate = useNavigate(); // hook para redirigir
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    navigate('login'); // Aquí pones la ruta a la que quieres redirigir
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="nav" style={{ backgroundColor: theme.colors.secondary, height: '64px' }}>
      <div className="section-one">
        <Link to="/" id="logo-link">
          <img 
            src={`${process.env.PUBLIC_URL}/LogoPaw.png`} 
            alt="Logo PawPaw"
            className="logo" 
            style={{ 
              maxWidth: '197px', 
              maxHeight: '64px', 
              width: 'auto', 
              height: 'auto', 
              objectFit: 'contain' 
            }}
          />
        </Link>
      </div>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      <div className={`section-two ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/adopciones">Adopciones</Link></li>
          <li className="nav-item"><Link to="/voluntarios">Voluntarios</Link></li>
          <li className="nav-item"><Link to="/blog">Blog</Link></li>
          <li className="nav-item"><Link to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link to="/tienda">Tienda</Link></li>
        </ul>
      </div>
      
      <div className="section-three">
        <button
          id="profile-btn"
          style={{ backgroundColor: theme.colors.accent }}
          onClick={handleProfileClick}
        >
          {profileSvg}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
