import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID db44f1f0d30f6ccc96a165072f8f76293fd856dd7ebe5c1c216819ab3889537d'
    }
});