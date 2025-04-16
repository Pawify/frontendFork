{/*
    Componente: Adoptions
    Fecha: 07/04/2025 
    Autor: PabloRM
    Descripción: Página de detalle de animal en adopción que muestra información completa, 
    galería de imágenes, características del animal y opciones para compartir o reportar el anuncio.
    
    Historial de modificaciones:
    - 07/04/2025 : Creación inicial del componente
    - 15/04/2025: Conexion con la api (PabloRM)
    - [Fecha]: [Descripción de la modificación]
*/}
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate, data } from "react-router-dom";
import { FaHeart, FaRegHeart, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaEye, FaFlag } from "react-icons/fa";
import "./Animal.css";
import api from "@/api/axios"; 

const Animal = () => {
// Estados para gestionar la información y comportamiento del componente
const { id } = useParams();
const location = useLocation();
const navigate = useNavigate();
const [animal, setAnimal] = useState(location.state?.animal || null);
const [isFavorite, setIsFavorite] = useState(false);
const [isLoading, setIsLoading] = useState(!animal);
const [mainImage, setMainImage] = useState(null);
const [visitCount, setVisitCount] = useState(0);
const [showReportModal, setShowReportModal] = useState(false);
const [reportForm, setReportForm] = useState({
reason: "",
message: ""
});

// Efecto para cargar datos del animal desde API o establecer imagen principal
useEffect(() => {
// Si no hay datos del animal pero sí un ID, cargamos desde API
if (!animal && id) {
    setIsLoading(true);
    // Simulación de llamada API - reemplazar en producción
    fetch(`/api/animals/${id}`)
    .then(response => response.json())
    .then(data => {
        setAnimal(data);
        setIsLoading(false);
    })
    console.log(id)
    .catch(error => {
        console.error("Error al cargar detalles del animal:", error);
        setIsLoading(false);
    });
}

// Establecer imagen principal si hay datos del animal
if (animal) {
    // Usar la misma lógica que en AnimalsOverwie.jsx para obtener la imagen
    const imageUrl = animal.image ? `${api.defaults.baseURL}${animal.image}` : "/placeholder-animal.jpg";
    setMainImage(imageUrl);
}
}, [animal, id]);

// Función auxiliar para formatear URLs de imágenes
const formatImageUrl = (url) => {
    // Si la URL ya comienza con http o es un placeholder, la dejamos como está
    if (url.startsWith('http') || url.startsWith('/')) {
        return url;
    }
    // Si no, añadimos el baseURL de la API
    return `${api.defaults.baseURL}${url}`;
};

// Efecto para simular contador de visitas
useEffect(() => {
if (animal && id) {
    // Simulación - reemplazar en producción con llamada real
    setVisitCount(Math.floor(Math.random() * 100) + 1);
}
}, [animal, id]);

// Funciones de interacción con el usuario
const toggleFavorite = () => setIsFavorite(!isFavorite);

const handleShare = (platform) => console.log(`Compartiendo en ${platform}`);

// Modificar la función handleThumbnailClick para manejar rutas correctamente
const handleThumbnailClick = (imageUrl) => {
    // Formatear URL y actualizar imagen principal
    setMainImage(formatImageUrl(imageUrl));
};

const handleReport = () => setShowReportModal(true);

const handleReportFormChange = (e) => {
const { name, value } = e.target;
setReportForm(prev => ({
    ...prev,
    [name]: value
}));
};

const submitReport = (e) => {
e.preventDefault();
console.log(`Reportando animal ${id}:`, reportForm);
// Aquí iría la lógica para enviar el reporte a la API
setShowReportModal(false);
// Resetear el formulario
setReportForm({
    reason: "",
    message: ""
});
};

// Renderizado condicional para estados de carga y error
if (isLoading) return <div className="loading-container">Cargando...</div>;

if (!animal) {
return (
    <div className="error-container">
    <p>No se encontró información del animal.</p>
    <button onClick={() => navigate(-1)}>Volver</button>
    </div>
);
}

// Renderizado principal del componente
return (
<div className="animal">
<div className="animal-detail-container">
    {/* Sección de imágenes y galería */}
    <div className="animal-detail-content">
    <div className="animal-images-section">
        <div className="images-container">
        <div className="image-gallery-container">
            {/* Imagen principal */}
            <div className="main-image-container">
            <img 
                src={mainImage || formatImageUrl(animal.imageUrl || "/placeholder-animal.jpg")} 
                alt={animal.name || "Animal sin nombre"} 
                className="main-image" 
            />
            </div>
            
            {/* Galería de miniaturas */}
            <div className="thumbnail-gallery">
            <div 
                className="thumbnail-container"
                onClick={() => handleThumbnailClick(animal.imageUrl || "/placeholder-animal.jpg")}
            >
                <img 
                src={formatImageUrl(animal.imageUrl || "/placeholder-animal.jpg")} 
                alt={`${animal.name} miniatura principal`} 
                className="thumbnail-image" 
                />
            </div>
            
            {/* Renderizado condicional de miniaturas adicionales */}
            {animal.images && animal.images.length > 0 ? (
                animal.images.map((image, index) => (
                <div 
                    key={index} 
                    className="thumbnail-container"
                    onClick={() => handleThumbnailClick(image.url)}
                >
                    <img 
                    src={formatImageUrl(image.url || "/placeholder-animal.jpg")} 
                    alt={`${animal.name} miniatura ${index + 1}`} 
                    className="thumbnail-image" 
                    />
                </div>
                ))
            ) : (
                // Miniaturas de placeholder cuando no hay imágenes disponibles
                [1, 2, 3].map((_, index) => (
                <div 
                    key={index} 
                    className="thumbnail-container"
                    onClick={() => handleThumbnailClick(`/placeholder-thumbnail-${index + 1}.jpg`)}
                >
                    <img 
                    src={`/placeholder-thumbnail-${index + 1}.jpg`} 
                    alt={`${animal.name} miniatura ${index + 1}`} 
                    className="thumbnail-image" 
                    />
                </div>
                ))
            )}
            </div>
        </div>
        </div>
    </div>
    </div>

    {/* Sección de información del animal */}
    <div className="animal-info-layout">
    {/* Columna izquierda - información principal */}
    <div className="animal-main-info">
        <h1 className="animal-detail-name">
        {animal.name || "Drako"}
        <button 
            className="name-favorite-button"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
            {isFavorite ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
        </button>
        </h1>
        <div className="animal-detail-description">
        {animal.description || "Información del animal..."}
        </div>

        <div className="animal-characteristics">
        <h2>Características</h2>
        <ul className="characteristics-list">
            {animal.characteristics?.map((characteristic, index) => (
            <li key={index}>{characteristic}</li>
            )) || 
            // Características de ejemplo cuando no hay datos reales
            [
            "Característica 1",
            "Característica 2",
            "Característica 3"
            ].map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    </div>

    {/* Columna derecha - resumen y compartir */}
    <div className="animal-side-info">
        {/* Sección de resumen */}
        <div className="animal-overview-section">
        <h2>Overview</h2>
        <div className="overview-details">                  
            <div className="overview-item">
            <span className="overview-value">
                <FaEye style={{ marginRight: '5px' }} /> {visitCount}
            </span>
            </div>
            
            <div className="overview-item overview-action-item">
            <button 
                className="overview-action-button"
                onClick={toggleFavorite}
                aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            >
                {isFavorite ? 
                <><FaHeart className="action-icon filled" /> Quitar de favoritos</> : 
                <><FaRegHeart className="action-icon" /> Añadir a favoritos</>
                }
            </button>
            </div>
            <div className="overview-item overview-action-item">
            <button 
                className="overview-action-button report-button"
                onClick={handleReport}
                aria-label="Reportar anuncio"
            >
                <FaFlag className="action-icon" /> Reportar anuncio
            </button>
            </div>
        </div>
        </div>

        {/* Sección de compartir en redes sociales */}
        <div className="share-section">
        <h3>Compartir</h3>
        <div className="share-buttons">
            {[
            { platform: 'facebook', icon: <FaFacebookF className="social-icon" /> },
            { platform: 'twitter', icon: <FaTwitter className="social-icon" /> },
            { platform: 'instagram', icon: <FaInstagram className="social-icon" /> },
            { platform: 'whatsapp', icon: <FaWhatsapp className="social-icon" /> }
            ].map(item => (
            <button 
                key={item.platform}
                className={`share-button ${item.platform}`}
                onClick={() => handleShare(item.platform)}
                aria-label={`Compartir en ${item.platform}`}
            >
                {item.icon}
            </button>
            ))}
        </div>
        </div>
    </div>
    </div>
    
    {/* Modal de reporte - solo se muestra cuando showReportModal es true */}
    {showReportModal && (
    <div className="report-modal-overlay">
        <div className="report-modal">
        <div className="report-modal-header">
            <h3>Reportar anuncio</h3>
            <button 
            className="close-modal-button"
            onClick={() => setShowReportModal(false)}
            aria-label="Cerrar"
            >
            ×
            </button>
        </div>
        
        {/* Formulario para reportar anuncios inapropiados */}
        <form onSubmit={submitReport} className="report-form">
            <div className="form-group">
            <label htmlFor="reason">Motivo del reporte:</label>
            <select 
                id="reason" 
                name="reason" 
                value={reportForm.reason}
                onChange={handleReportFormChange}
                required
            >
                <option value="">Seleccione un motivo</option>
                <option value="Información incorrecta">Información incorrecta</option>
                <option value="Contenido inapropiado">Contenido inapropiado</option>
                <option value="Animal ya adoptado">Animal ya adoptado</option>
                <option value="Otro">Otro</option>
            </select>
            </div>
            
            <div className="form-group">
            <label htmlFor="message">Mensaje (opcional):</label>
            <textarea 
                id="message" 
                name="message" 
                value={reportForm.message}
                onChange={handleReportFormChange}
                placeholder="Añada información adicional si lo desea"
                rows="3"
            ></textarea>
            </div>
            
            <div className="form-actions">
            <button 
                type="button" 
                className="cancel-button"
                onClick={() => setShowReportModal(false)}
            >
                Cancelar
            </button>
            <button 
                type="submit" 
                className="submit-button"
            >
                Enviar reporte
            </button>
            </div>
        </form>
        </div>
    </div>
    )}
</div>
</div>
);
};

export default Animal;