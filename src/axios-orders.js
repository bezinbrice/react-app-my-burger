import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1b59d.firebaseio.com/'
});

export default instance;