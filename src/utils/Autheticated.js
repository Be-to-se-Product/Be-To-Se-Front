import api from "../services/api";



export const isPermited = (usuario) => {
  const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
  console.log(userDetailsCrypt);
  if (userDetailsCrypt == "{}") return false;
  
  const tipoUsuario = JSON.parse(userDetailsCrypt)?.tipoUsuario.toLowerCase();
  console.log(tipoUsuario);
  return tipoUsuario === usuario;
};

export const criptografar = (infoUser) => {
  const infoUserCriptografada = btoa(infoUser);
  return infoUserCriptografada;
};

export const descriptografar = (infoUser) => {
  if (!infoUser) return JSON.stringify({});
  const infoUserDescriptografada = atob(infoUser);
  return infoUserDescriptografada;
};
