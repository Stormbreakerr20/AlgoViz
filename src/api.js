import axios from 'axios';

const api = axios.create({
    baseURL: 'https://algoviz-api.onrender.com',
});

export default api;