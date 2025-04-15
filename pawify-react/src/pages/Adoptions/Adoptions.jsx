{/*
    Componente: Adoptions
    Fecha: 07/04/2025 
    Autor: PabloRM
    
    Descripción: Pagina con la funcionalidad principal de la pagina, tiene la imagen hero, un buscador para filtar los animales, por su
    especie, localización y el nombre del animal. despues los overwies de los anmales, una llamada a la accion, el acceso a otros apartados de la pagina 
    y unas preguntas frecuentes.
    Historial de modificaciones:
    - 07/04/2025 : Creación inicial del componente
    - 12/04/2025: Conexion con la api (Jhonny Bracho)
    - [Fecha]: [Descripción de la modificación]
*/}
import React, { useState, useEffect } from "react";
import "./Adoptions.css";
import AnimalsOverview from "../../app/components/pages/Adoption/AnimalsOverwie";
import Hero from "/Hero.png";
import { getAllPets } from "@/api/api"; //Funcion que obtiene las mascotas de la base de datos

const Adoptions = () => {
  const [pets, setPets] = useState([]);

  const cargarMascotas = async () => {
    const data = await getAllPets();
    setPets(data);
  };

  useEffect(() => {
    cargarMascotas();
  }, []);

  return (
    <div className="adoptions-container">
      {/* Sección de imagen principal (Hero) */}
      <section className="logo" id="hero-logo-section">
        <img 
          src={Hero}
          alt="Adoptar es amar - #DontShop" 
          className="hero-image"
        />
      </section>

      {/* Sección de filtros de búsqueda */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-filters">
            {/* Filtro por ubicación */}
            <div className="filter-group location">
              <select 
                id="location" 
                className="filter-input"
                defaultValue=""
              >
                {/* Aqui pienso que deberiamos rellenar el campo a traves de una consulata a la ciudades que existe en la bbdd */}
                <option value="" disabled>Selecciona una ubicación</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="sevilla">Sevilla</option>
              </select>
            </div>
            
            {/* Filtro por categoría de animal */}
            <div className="filter-group category">
              <select 
                id="category" 
                className="filter-input"
                defaultValue=""
              >
                <option value="" disabled>Selecciona una categoría</option>
                <option value="dog">Perros</option>
                <option value="cat">Gatos</option>
                <option value="bird">Aves</option>
                <option value="other">Otros</option>
              </select>
            </div>
            
            {/* Botón para iniciar la búsqueda */}
            <button className="search-button">Buscar</button>
          </div>
        </div>
      </section>

      {/* Sección de visualización de animales */}
      <section className="animals-section">
        <AnimalsOverview animals={pets} />
      </section>

      {/* Sección de llamada a la acción */}
      <section className="cta-section">
        {/* Aquí irá el contenido de llamada a la acción */}
      </section>

      {/* Sección de acceso a otras partes de la aplicación */}
      <section className="other-sections">
        {/* Aquí irán los enlaces a otras secciones */}
      </section>

      {/* Sección de preguntas frecuentes */}
      <section className="faq-section">
        {/* Aquí irá el contenido de preguntas frecuentes */}
      </section>
    </div>
  );
};

export default Adoptions;