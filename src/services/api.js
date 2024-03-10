import axios from "axios";
import { descriptografar } from "../utils/Autheticated";


const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_EASYFIND_API}`,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const userDetailsCrypt = descriptografar(sessionStorage.getItem("USERDETAILS"));
  const token = JSON.parse(userDetailsCrypt)?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      sessionStorage.removeItem("USERDETAILS");
    } 
    return error;
  }
);

export default api;
