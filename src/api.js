import axios from 'axios';

const api = axios.create({
    baseURL: 'https://algoviz-api-1.onrender.com',
});

export default api;