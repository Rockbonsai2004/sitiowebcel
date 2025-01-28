import axios from 'axios';

// Base URL del backend
const API_URL = 'http://localhost:5000';  // Ajusta según la URL de tu backend

// Configuración básica de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Peticiones a la API
export const getMultas = async () => {
  try {
    const response = await api.get('/multas');
    return response.data;
  } catch (error) {
    console.error('Error al obtener multas:', error);
    throw error;
  }
};

export const postMulta = async (multa) => {
  try {
    const response = await api.post('/multas', multa);
    return response.data;
  } catch (error) {
    console.error('Error al registrar multa:', error);
    throw error;
  }
};

export const postPermiso = async (permiso) => {
  try {
    const response = await api.post('/permisos', permiso);
    return response.data;
  } catch (error) {
    console.error('Error al registrar permiso:', error);
    throw error;
  }
};
