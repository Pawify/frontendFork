import axios from 'axios';

// Creamos una instancia de axios con la URL base de la API
const api = axios.create({
baseURL: 'https://4400-90-74-219-163.ngrok-free.app',
headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
},
  // Añadimos configuración para CORS
withCredentials: false
});

// Interceptor para manejar errores
api.interceptors.response.use(
response => response,
error => {
    console.error('Error en la petición:', error);
    return Promise.reject(error);
}
);

export default api;