import api from "./axios";

//Funcion para ver todos los animales
export const getAllPets = async () => {
    try {
      const res = await api.get('/pets/api/pets');
      return res.data;
    } catch (err) {
      console.error('No se pudieron cargar las mascotas', err);
      return [];
    }
};

//Funcion para ver un animal en especifico
export const getPet = async (id) => {
    try {
      const res = await api.get(`/pets/api/pets/${id}`);
      return res.data;
    } catch (err) {
      console.error('No se pudo cargar la mascota', err);
      return [];
    }
};