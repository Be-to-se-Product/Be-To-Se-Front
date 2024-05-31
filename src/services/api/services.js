import axios from "axios";
import { descriptografar } from "@/utils/Autheticated";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 20000,
});

api.interceptors.request.use((requestConfig) => {
  const user = descriptografar(sessionStorage.getItem("USERDETAILS"));
  const { token } = JSON.parse(user);
  if (token && window.location.pathname !== "/login") {
    const modifiedConfig = {
      ...requestConfig,
      headers: {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    return modifiedConfig;
  }
  return requestConfig;
});

api.interceptors.response.use((response) => {
  const erros = [401, 403];

  if (!erros.includes(response.status)) {
    return response;
  }

  if (response.status === 401) {
    sessionStorage.removeItem("USERDETAILS");
    window.location = "/login";
  } else if (response.status === 403) {
    window.location = "/not-found";
  }
  return Promise.reject(response);
});

export default api;
