import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Animal.css";

const Animal = () => {
const { id } = useParams();
const location = useLocation();
const navigate = useNavigate();
const [animal, setAnimal] = useState(location.state?.animal || null);
const [isFavorite, setIsFavorite] = useState(false);
const [isLoading, setIsLoading] = useState(!animal);
const [mainImage, setMainImage] = useState(null);

useEffect(() => {
// If animal data wasn't passed through location state, fetch it
if (!animal && id) {
    setIsLoading(true);
    // Replace with your actual API call
    fetch(`/api/animals/${id}`)
    .then(response => response.json())
    .then(data => {
        setAnimal(data);
        setIsLoading(false);
    })
    .catch(error => {
        console.error("Error fetching animal details:", error);
        setIsLoading(false);
    });
}

// Set the main image when animal data is available
if (animal) {
    setMainImage(animal.imageUrl || "/placeholder-animal.jpg");
}
}, [animal, id]);

const toggleFavorite = () => {
setIsFavorite(!isFavorite);
// Add logic to save to favorites in backend or localStorage
};

const handleShare = (platform) => {
// Implement sharing functionality for different platforms
console.log(`Sharing to ${platform}`);
};

// Function to handle thumbnail click
const handleThumbnailClick = (imageUrl) => {
// Swap the main image with the clicked thumbnail
setMainImage(imageUrl);
};

if (isLoading) {
return <div className="loading-container">Cargando...</div>;
}

if (!animal) {
return (
    <div className="error-container">
    <p>No se encontró información del animal.</p>
    <button onClick={() => navigate(-1)}>Volver</button>
    </div>
);
}

return (
<div className="animal-detail-container">
    <div className="animal-detail-content">
        {/* Images section with heart button aligned */}
        <div className="animal-images-section">
            <div className="images-header">
                <button 
                    className="favorite-button-detail"
                    onClick={toggleFavorite}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    {isFavorite ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                </button>
            </div>
            
            <div className="images-container">
                <div className="image-gallery-container">
                    <div className="main-image-container">
                        <img 
                            src={mainImage || animal.imageUrl || "/placeholder-animal.jpg"} 
                            alt={animal.name || "Animal sin nombre"} 
                            className="main-image" 
                        />
                    </div>
                    <div className="thumbnail-gallery">
                        <div 
                            className="thumbnail-container"
                            onClick={() => handleThumbnailClick(animal.imageUrl || "/placeholder-animal.jpg")}
                        >
                            <img 
                                src={animal.imageUrl || "/placeholder-animal.jpg"} 
                                alt={`${animal.name} thumbnail main`} 
                                className="thumbnail-image" 
                            />
                        </div>
                        
                        {/* Additional thumbnails */}
                        {[1, 2, 3].map((_, index) => (
                            <div 
                                key={index} 
                                className="thumbnail-container"
                                onClick={() => handleThumbnailClick(animal.images?.[index]?.url || `/placeholder-thumbnail-${index + 1}.jpg`)}
                            >
                                <img 
                                    src={animal.images?.[index]?.url || `/placeholder-thumbnail-${index + 1}.jpg`} 
                                    alt={`${animal.name} thumbnail ${index + 1}`} 
                                    className="thumbnail-image" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    className="favorite-button-detail"
                    onClick={toggleFavorite}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    {isFavorite ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                </button>
            </div>
        </div>
    </div>

    <div className="animal-info-layout">
        <div className="animal-main-info">
            <h1 className="animal-detail-name">{animal.name || "Drako"}</h1>
            <div className="animal-detail-description">
                {animal.description || "Información del animal..."}
            </div>

            <div className="animal-characteristics">
                <h2>Características</h2>
                <ul className="characteristics-list">
                    {animal.characteristics?.map((characteristic, index) => (
                        <li key={index}>{characteristic}</li>
                    )) || 
                    [
                        "Característica 1",
                        "Característica 2",
                        "Característica 3",
                        "Característica 4",
                        "Característica 5"
                    ].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Right column - narrower - for overview and share */}
        <div className="animal-side-info">
            {/* Overview section */}
            <div className="animal-overview-section">
                <h2>Overview</h2>
                <div className="overview-details">
                    <div className="overview-item">
                        <span className="overview-label">Edad:</span>
                        <span className="overview-value">{animal.age || "Desconocida"}</span>
                    </div>
                    <div className="overview-item">
                        <span className="overview-label">Tamaño:</span>
                        <span className="overview-value">{animal.size || "Mediano"}</span>
                    </div>
                    {/* Add more overview items as needed */}
                </div>
            </div>

            {/* Share section */}
            <div className="share-section">
                <h3>Compartir</h3>
                <div className="share-buttons">
                    <button 
                        className="share-button facebook"
                        onClick={() => handleShare('facebook')}
                        aria-label="Compartir en Facebook"
                    >
                        <FaFacebookF className="social-icon" />
                    </button>
                    <button 
                        className="share-button twitter"
                        onClick={() => handleShare('twitter')}
                        aria-label="Compartir en Twitter"
                    >
                        <FaTwitter className="social-icon" />
                    </button>
                    <button 
                        className="share-button instagram"
                        onClick={() => handleShare('instagram')}
                        aria-label="Compartir en Instagram"
                    >
                        <FaInstagram className="social-icon" />
                    </button>
                    <button 
                        className="share-button whatsapp"
                        onClick={() => handleShare('whatsapp')}
                        aria-label="Compartir en WhatsApp"
                    >
                        <FaWhatsapp className="social-icon" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Animal;