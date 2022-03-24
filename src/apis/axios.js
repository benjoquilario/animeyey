import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://api.jikan.moe/v4',
});

export default instance;
