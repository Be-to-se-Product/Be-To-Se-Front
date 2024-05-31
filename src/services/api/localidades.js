import axios from "axios";


const localidades = axios.create({
  baseURL: "https://brasilapi.com.br/api/ibge/municipios/v1",
  timeout: 1000,
});


export default localidades;