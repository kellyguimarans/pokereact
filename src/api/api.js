import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
});

export default api;
