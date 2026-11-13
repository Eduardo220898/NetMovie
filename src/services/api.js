import axios from 'axios';

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '35daccdfb854ede5f240daf644648671',
        language: 'pt-BR',
        page: 1
        
    }
})

export default api;