// FUNÇÃO PARA CONVERTER OBJETO FILE EM BASE 64
export function converterInputImageToBase64(event, callback) {
  const reader = new FileReader();
  const copy = { ...event };

  console.log(event);
  reader.onload = function (e) {
    const base64Result = e.target.result;
    callback({
      evento: copy,
      imagem: base64Result,
    });
  };

  reader.readAsDataURL(event.target.files[0]);
}



export const conversosMedidasDistancia = (distance)=>{

const distancias = ["m","km"];
let contadora = 0;
let distanciaConvertida = distance;

600 % 1000
while(distanciaConvertida > 1000 && contadora < distancias.length){
  distanciaConvertida /= 1000;
  contadora++;
}
return `${distanciaConvertida.toFixed(2)} ${distancias[contadora]}`;
}


export const converterDiaSemana = {
  Sunday: "Domingo",
  Monday: "Segunda-Feira",
  Tuesday: "Terça-Feira",
  Wednesday: "Quarta-Feira",
  Thursday: "Quinta-Feira",
  Friday: "Sexta-Feira",
  Saturday: "Sábado",
};