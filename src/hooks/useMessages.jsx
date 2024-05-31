const erros = {
  401: "Email ou senha inválidos",
  403: "Acesso negado",
  404: "Página não encontrada",
  500: "Erro interno do servidor",
};

const useMessages = () => {
  const showMessage = (response) => {
    if (response?.status) {
      return erros[response.status];
    }
    return "Houve um erro inesperado. Tente novamente mais tarde.";
  };


  return {
    showMessage,
  };
};


export default useMessages;