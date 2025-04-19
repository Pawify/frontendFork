/*Componente creado por Jhonny Bracho*/

import React from 'react';
import Checklist from "/Checklist.png";
import "./CardVoluntarios.css";

const CardVoluntarios = ({ titulo, descripcion, tareas }) => {
  return (
    <div id="voluntarios-card">
      <h3 id='card-title'>{titulo}</h3>
      <p id='card-desc'>{descripcion}</p>
      <ul id='tareas-list'>
        {tareas.map((tarea, index) => (
            <div id='tareas-item'>
                <img 
                    src={Checklist}
                    alt="Speaker" 
                    id="checklist-img"
                />
                <li id='li-card' key={index}>{tarea}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CardVoluntarios;