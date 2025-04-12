import React, { useState } from "react";
import "./Animalsoverwie.css";
import { FaPaw, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";

const AnimalsOverview = ({ animals }) => {
    const [favorites, setFavorites] = useState({});
    const navigate = useNavigate();

const toggleFavorite = (animalId) => {
setFavorites(prev => ({
...prev,
[animalId]: !prev[animalId]
}));
};

// Add a function to handle clicking on an animal card
const handleAnimalClick = (animal) => {
// Navigate to animal details page
navigate(`/animal/${animal.id || 'details'}`, { state: { animal } });
};

const limitedAnimals = animals?.slice(0, 30) || [];

if (limitedAnimals.length === 0) {
return (
<div className="animals-overview-container">
<div className="no-animals-message">
    No hay animales disponibles en este momento.
</div>
</div>
);
}

return (
<div className="animals-overview-container">
<div className="animals-grid">
{limitedAnimals.map((animal, index) => (
    <div key={animal.id || index} className="animal-card">
        <div 
        className="animal-card-clickable"
        onClick={() => handleAnimalClick(animal)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
            handleAnimalClick(animal);
            }
        }}
        >
        <div className="animal-image-container">
            <img 
            src={`${api.defaults.baseURL}${animal.image}`} 
            alt={animal.name || "Animal sin nombre"} 
            className="animal-image" 
            />
        </div>
        <div className="animal-info">
            <div className="name-favorite-container">
                <h3 className="animal-name">{animal.name || "Sin nombre"}</h3>
                <button 
                className="favorite-button"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking the favorite button
                    toggleFavorite(animal.id || index);
                }}
                aria-label={favorites[animal.id || index] ? "Remove from favorites" : "Add to favorites"}
                >
                {favorites[animal.id || index] ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                </button>
            </div>
            <p className="animal-location">
            <FaPaw className="paw-icon" /> {animal.location || "Ubicación desconocida"}
            </p>
            <p className="animal-description">{animal.descriptionOverview || "No tiene descripción"}</p>
        </div>
        </div>
    </div>
))}
</div>
</div>
);
};

export default AnimalsOverview;