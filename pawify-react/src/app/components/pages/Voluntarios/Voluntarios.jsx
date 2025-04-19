/*Componente creado por Jhonny Bracho*/

import React from "react";
import "./Voluntarios.css";
import Hero from "/Hero.png";
import Speaker from "/Speaker.png";
import Mail from "/Mail.png";
import CardVoluntarios from "./CardVoluntarios";
import voluntariosData from "./info";

const Voluntarios = () => {
    return (
        <div id="voluntarios-container">
            {/*Seccion de head (imagen provisional)*/}
            <div id="voluntarios-logo">
                <img 
                    src={Hero}
                    alt="Voluntarios" 
                />
            </div>
            <div id="voluntarios-esl">
                <img 
                    src={Speaker}
                    alt="Speaker" 
                    id="speaker-img"
                />
                <h2 id="voluntarios-talento">Buscamos Talento que Quiera Marcar la Diferencia.</h2>
            </div>
            <div id="voluntarios-cards">
                {voluntariosData.map((card, index) => (
                    <CardVoluntarios
                        key={index}
                        titulo={card.titulo}
                        descripcion={card.descripcion}
                        tareas={card.tareas}
                    />
                ))}
            </div>
            <div id="voluntarios-mail">
                <img 
                    src={Mail}
                    alt="Mail" 
                    id="mail-img"
                />
                <h2 id="voluntarios-talento">Envía tu candidatura a info@pawify.org y cuéntanos en qué área te gustaría colaborar.</h2>
            </div>
        </div>
    )
}

export default Voluntarios;