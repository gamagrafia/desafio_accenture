import axios from "axios";

const api= axios.create({
    baseURL:'https://http://accenture-java-desafio.herokuapp.com/'
});

export default api;