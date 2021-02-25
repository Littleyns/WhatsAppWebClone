import axios from 'axios';
const instance = axios.create({
    baseURL:'https://webwhatsappserver.herokuapp.com',
});
export default instance;
