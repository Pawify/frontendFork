{/*
    Componente: Adoptions
    Fecha: 07/04/2025 
    Autor: PabloRM
    
    Descripción: Pagina con la funcionalidad principal de la pagina, tiene la imagen hero, un buscador para filtar los animales, por su
    especie, localización y el nombre del animal. despues los overwies de los anmales, una llamada a la accion, el acceso a otros apartados de la pagina 
    y unas preguntas frecuentes.
    Historial de modificaciones:
    - 07/04/2025 : Creación inicial del componente
    - [Fecha]: [Descripción de la modificación]
    - [Fecha]: [Descripción de la modificación]
*/}
import React from "react";
import "./Adoptions.css";
import AnimalsOverview from "./AnimalsOverwie";

// Datos de muestra para pruebas
const animalsList = [
  {
    id: 1,
    name: "Luna",
    type: "Perro",
    age: "2 años",
    descriptionOverview:"Hola, mi nombre es DRAKO Soy el compañero perfectossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssdsfjskhudisahnvudfiñshnvudsijñnvhjidñfsvnjidñsfvbidfjsñbvfdj..." ,
    description: "Hola, mi nombre es DRAKO\n\nSoy el compañero perfecto si buscas un amigo tranquilo pero lleno de vitalidad. Con mi carácter equilibrado y leal, solo quiero disfrutar de paseos relajados, momentos de juego y mucho amor. 🏡 ❤️\n\nTengo un corazón lleno de bondad y una energía que contagia alegría. Sería ideal para un hogar que valore la estabilidad y el tiempo de calidad juntos. 🌟\n\nSoy único y estoy listo para conquistar a mi futura familia. 🐕 Eso sí, necesitarás la correspondiente licencia PPP para adoptarme.\n\nSi buscas un amigo leal, dinámico y dispuesto a ser parte de tu vida, ¡ven a conocerme!",
    location: "Madrid",
    imageUrl: "/public/dog1.png",
    images: [
      { url: "/public/why-us-img.png" },
      { url: "/public/Hero.png" },
    ]
  },
  {
    id: 2,
    name: "Simba",
    type: "Gato",
    age: "1 año",
    location: "Barcelona",
    imageUrl: "/animals/cat1.jpg"
  },
  {
    id: 3,
    name: "Rocky",
    type: "Perro",
    age: "3 años",
    location: "Valencia",
    imageUrl: "/animals/dog2.jpg"
  }
];

const Adoptions = () => {
  return (
    <div className="adoptions-container">
      {/* Sección de imagen principal (Hero) */}
      <section className="logo" id="hero-logo-section">
        <img 
          src="/Hero.png" 
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
        <AnimalsOverview animals={animalsList} />
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
