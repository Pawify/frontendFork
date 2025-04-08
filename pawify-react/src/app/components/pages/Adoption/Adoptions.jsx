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

// Sample data for testing
const animalsList = [
  {
    id: 1,
    name: "Luna",
    type: "Perro",
    age: "2 años",
    descriptionOverview:"Hola, mi nombre es DRAKO Soy el compañero perfectossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssdsfjskhudisahnvudfiñshnvudsijñnvhjidñfsvnjidñsfvbidfjsñbvfdj..." ,
    description: "Hola, mi nombre es DRAKO\n\nSoy el compañero perfecto si buscas un amigo tranquilo pero lleno de vitalidad. Con mi carácter equilibrado y leal, solo quiero disfrutar de paseos relajados, momentos de juego y mucho amor. 🏡 ❤️\n\nTengo un corazón lleno de bondad y una energía que contagia alegría. Sería ideal para un hogar que valore la estabilidad y el tiempo de calidad juntos. 🌟\n\nSoy único y estoy listo para conquistar a mi futura familia. 🐕 Eso sí, necesitarás la correspondiente licencia PPP para adoptarme.\n\nSi buscas un amigo leal, dinámico y dispuesto a ser parte de tu vida, ¡ven a conocerme!",
    location: "Madrid",
    imageUrl: "/public/dog1.png"
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
      <section className="logo">
        <img 
          src="/Hero.png" 
          alt="Adoptar es amar - #DontShop" 
          className="hero-image"
        />
      </section>

      {/* Filtro de busqueda */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-filters">
            <div className="filter-group location">
              <select 
                id="location" 
                className="filter-input"
              >
                {/* Aqui pienso que deberiamos rellenar el campo a traves de una consulata a la ciudades que existe en la bbdd */}
                <option value="" disabled selected>Selecciona una ubicación</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="sevilla">Sevilla</option>
              </select>
            </div>
            
            <div className="filter-group category">
              <select 
                id="category" 
                className="filter-input"
              >
                <option value="" disabled selected>Selecciona una categoría</option>
                <option value="dog">Perros</option>
                <option value="cat">Gatos</option>
                <option value="bird">Aves</option>
                <option value="other">Otros</option>
              </select>
            </div>
            
            <button className="search-button">Buscar</button>
          </div>
        </div>
      </section>

      {/* Animals Overview Section */}
      <section className="animals-section">
        <AnimalsOverview animals={animalsList} />
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        {/* Call to action content will go here */}
      </section>

      {/* Other Sections Access */}
      <section className="other-sections">
        {/* Links to other sections will go here */}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        {/* FAQ content will go here */}
      </section>
    </div>
  );
};

export default Adoptions;
