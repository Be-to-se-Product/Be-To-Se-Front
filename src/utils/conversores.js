
// FUNÇÃO PARA CONVERTER OBJETO FILE EM BASE 64
export function converterInputImageToBase64 (event,callback) {
    const reader = new FileReader();
    const copy = {...event};

    console.log(event);
    reader.onload = function (e) {
      
      const base64Result = e.target.result;
       callback(
        {
          evento:copy,
          imagem:base64Result}
          )
    };
    
    reader.readAsDataURL(event.target.files[0]);
    
}