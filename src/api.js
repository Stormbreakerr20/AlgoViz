import axios from 'axios';

const api = axios.create({
    baseURL: 'https://algoviz-api-2.onrender.com',
});

export default api;