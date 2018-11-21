import axios from 'axios';
const baseURL = `http://localhost:3000/`;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
  return response;
}, 
(err) => {
  return Promise.reject(err);
});

export default instance;