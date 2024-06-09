// FUNÇÃO PARA CONVERTER OBJETO FILE EM BASE 64
export const converterInputImageToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const conversosMedidasDistancia = (distance) => {
  const distancias = ["m", "km"];
  let contadora = 0;
  let distanciaConvertida = distance;
  while (distanciaConvertida > 1000 && contadora < distancias.length) {
    distanciaConvertida /= 1000;
    contadora++;
  }
  return `${distanciaConvertida.toFixed(2)} ${distancias[contadora]}`;
};

export const converterDiaSemana = {
  Sunday: "Domingo",
  Monday: "Segunda-Feira",
  Tuesday: "Terça-Feira",
  Wednesday: "Quarta-Feira",
  Thursday: "Quinta-Feira",
  Friday: "Sexta-Feira",
  Saturday: "Sábado",
};

export const conversorTime = (segundos) => {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  return `${horas > 0 ? horas + " h " : ""} ${minutos} min`;
};

export const converterFileTOBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const converterImageToFile = (image, nome) => {
  const extensaoArquivo = image.slice(image.length - 3, image.length);
  const img = new Image();
  const nomeImagem = nome.match(/[^/]+$/)[0];
  const nomeImagemSemUuid = nomeImagem.replace(/^[0-9a-fA-F-]+/, "");
  const nomeImagemSemExtensao = nomeImagemSemUuid.replace(/\.[^.]+$/, "");

  img.setAttribute("crossorigin", "anonymous");
  img.src = image;
  return new Promise((resolve, reject) => {
    try {
      img.onload = () => {
        const elem = document.createElement("canvas");
        const { width } = img;
        const { height } = img;
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        ctx.canvas.toBlob(
          (blob) => {
            const file = new File([blob], nome || nomeImagemSemExtensao, {
              type: `image/${extensaoArquivo}`,
              lastModified: Date.now(),
            });
            resolve(file);
          },
          "image/png",
          1
        );
      };
    } catch (e) {
      reject(e);
    }
  });
};

export const converterBase64TOFile = (base64, filename) => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n > 0) {
    n -= 1;
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const converterBlobTOFile = (blob, filename) => {
  const file = new File([blob], filename, { type: blob.type });
  return file;
};

export const compressorImage = (fileImg, scale) =>
  new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(fileImg);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const elem = document.createElement("canvas");
          const width = img.width * scale;
          const height = img.height * scale;
          elem.width = width;
          elem.height = height;
          const ctx = elem.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            (blob) => {
              const file = new File([blob], fileImg.name, {
                type: fileImg.type,
                lastModified: Date.now(),
              });
              resolve(file);
            },
            fileImg.type,
            1
          );
        };
      };
    } catch (e) {
      reject(e);
    }
  });
