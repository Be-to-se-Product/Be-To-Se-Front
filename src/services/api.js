import axios from "axios";
import { descriptografar } from "../utils/Autheticated";

const ips = {
  cesar: "10.18.6.54",
  local: "localhost",
};

const api = axios.create({
  baseURL: `http://${ips.local}:8080`,
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
