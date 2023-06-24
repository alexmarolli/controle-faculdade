import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // Insira a URL da sua API aqui
});

export default api;