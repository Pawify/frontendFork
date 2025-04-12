{/*
    Componente: Axios
    Creado: 01/04/2025
    Autor: PabloRM
    
    Descripción: Conexión con el backend.
    
    Historial de modificaciones:
    - 01/04/2025: Creación inicial de la conexión con el backend.
    - 05/04/2025: Conexion con el backend nuevo. 
    - 12/04/25: Modifiacion baseURL actualizado (Jhonny Bracho)
    - [Fecha]: [Descripción de la modificación] 
*/}
import axios from 'axios';

// Creamos una instancia de axios con la URL base de la API
const api = axios.create({
baseURL: 'http://ec2-56-228-22-175.eu-north-1.compute.amazonaws.com/',
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