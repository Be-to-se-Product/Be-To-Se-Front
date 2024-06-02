export const inputSomenteTexto = (e) => {
  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú\s]/g, "");
};

export const inputSomenteNumero = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export const inputSemCaracteresEspeciais = (e) => {
  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú0-9\s]/g, "");
};

export const inputDataFormatoInterface = (value) => {
  return value.split("-").reverse().join("/");
};

export const inputFormatoTelefone = (value) => {
  const numeroLimpo = removerMascaraTelefone(value);
  let numeroFormatado = numeroLimpo.replace(/(\d{2})/, "($1)");
  if (numeroLimpo.length >= 7) {
    numeroFormatado = numeroLimpo.replace(/(\d{2})(\d{5})/, "($1) $2-");
  }

  if (numeroLimpo.length >= 11) {
    numeroFormatado = numeroLimpo.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
  }

  return numeroFormatado;
};

export const removerMascaraTelefone = (value) => {
  return value.replace(/\D/g, "");
};

export const removerMascaraCpf = (value) => {
  return value?.replace(/[^\d]/g, "");
};

export const mascaraFormatoCpf = (value) => {
  let valueLimpo = value.replace(/[^0-9]/g, "");
  let valueFormatado = valueLimpo.replace(/(\d{3})/, "$1.");
  if (valueLimpo.length >= 6) {
    valueFormatado = valueLimpo.replace(/(\d{3})(\d{3})/, "$1.$2.");
  }

  if (valueLimpo.length >= 9) {
    valueFormatado = valueLimpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d)$/,
      "$1.$2.$3-$4"
    );
  }

  if (valueLimpo.length == 11) {
    valueFormatado = valueLimpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
  }

  return valueFormatado;
};
