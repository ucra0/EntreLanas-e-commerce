import axios from 'axios';

// La URL base de tu Backend (Spring Boot corre en el puerto 8080 por defecto)
const API_URL = 'http://localhost:8080/api/productos';

export const obtenerProductos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
};