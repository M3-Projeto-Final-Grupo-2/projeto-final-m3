import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://m3-projeto-final-grupo-2.onrender.com',
  timeout: 5000,
});
