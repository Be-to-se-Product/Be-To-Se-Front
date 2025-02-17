export const isPermited = (usuario) => {
  const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
  if (userDetailsCrypt == "{}") return false;
  const tipoUsuario = JSON.parse(userDetailsCrypt)?.tipoUsuario.toLowerCase();

  if (!tipoUsuario || !usuario) return false;
  
  return tipoUsuario.toLowerCase() === usuario.toLowerCase();
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
