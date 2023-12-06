import { removerMascaraCpf } from "./formatadores";

export const validarCpf = (value) => {
  let cpf = removerMascaraCpf(value);
  if (cpf.length !== 11) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digito1 = 11 - (soma % 11);

  digito1 = digito1 > 9 ? 0 : digito1;

  if (parseInt(cpf.charAt(9)) !== digito1) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let digito2 = 11 - (soma % 11);

  digito2 = digito2 > 9 ? 0 : digito2;

  if (parseInt(cpf.charAt(10)) !== digito2) {
    return false;
  }

  return true;
};

export const validarEmail = (value) => {
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  return emailRegex.test(value);
}
