//NavBar creado por Jhonny Bracho
import React from "react";
import './navBar.css'
import theme from "@/constants/themes";
import { profileSvg, searchSvg } from "./svg"; 

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: theme.colors.secondary }}>
      <div className="section-one">
        <img src="/public/LogoPaw.png" alt="Logo PawPaw" />
      </div>
      <div className="section-two">
        <form>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
          <button id='search-btn' style={{ backgroundColor: theme.colors.softOrange }}>
            {searchSvg}
          </button>
        </form>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/adopciones">Adopciones</a></li>
          <li><a href="/voluntarios">Voluntarios</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/tienda">Tienda</a></li>
        </ul>
      </div>
      <div className="section-three">
        <button id='profile-btn' style={{ backgroundColor: theme.colors.softOrange }}>
          {profileSvg}
        </button>
        <p className="hashtag">#AdoptDontShop</p>
      </div>
    </nav>
  );
};

export default NavBar;