//NavBar creado por Jhonny Bracho
import React from "react";
import "./navBar.css";
import theme from "@/constants/themes";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { profileSvg, searchSvg } from "./svg";

const NavBar = () => {
  const navigate = useNavigate(); // hook para redirigir

  const handleProfileClick = () => {
    navigate('login'); // Aquí pones la ruta a la que quieres redirigir
  };

  return (
    <nav id="nav" style={{ backgroundColor: theme.colors.secondary }}>
      <div className="section-one">
        <Link to="/" id="logo-link">
          <img src="/LogoPaw.png" alt="Logo PawPaw" className="logo" />
        </Link>
      </div>
      <div className="section-two">
        <form className="form">
          <input type="text" className="search-bar" placeholder="Search..." />
          <button
            id="search-btn"
            style={{ backgroundColor: theme.colors.accent }}
          >
            {searchSvg}
          </button>
        </form>
        <ul className="nav-links">
          <li id="li"><a href="/">Home</a></li>
          <li id="li"><a href="/adopciones">Adopciones</a></li>
          <li id="li"><a href="/voluntarios">Voluntarios</a></li>
          <li id="li"><a href="/blog">Blog</a></li>
          <li id="li"><a href="/servicios">Servicios</a></li>
          <li id="li"><a href="/tienda">Tienda</a></li>
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
        <p className="hashtag">#AdoptDontShop</p>
      </div>
    </nav>
  );
};

export default NavBar;
