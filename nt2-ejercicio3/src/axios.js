import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;