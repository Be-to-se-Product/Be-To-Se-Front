import axios from "axios";

const correios = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});



export default correios;
