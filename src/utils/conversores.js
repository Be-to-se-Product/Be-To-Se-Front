// FUNÇÃO PARA CONVERTER OBJETO FILE EM BASE 64
export function converterInputImageToBase64(file, callback) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const base64Result = e.target.result;
    callback({
      imagem: base64Result,
    });
  };

  reader.readAsDataURL(file);
}



export const conversosMedidasDistancia = (distance)=>{

const distancias = ["m","km"];
let contadora = 0;
let distanciaConvertida = distance;
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


export const conversorTime = (segundos) => {
  console.log(segundos);

  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);


  return `${horas>0 ? horas+"h":""} ${minutos}min`;
}