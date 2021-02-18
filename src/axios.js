import axios from 'axios';
const instance = axios.create({
    baseURL:'https://webwhatsappserver.herokuapp.com:9000',
});
export default instance;
