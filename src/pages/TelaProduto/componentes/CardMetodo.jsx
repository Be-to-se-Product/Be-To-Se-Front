import React, { useEffect, useState } from "react";
import cartao from "../../../assets/cartao.png";
import dinheiro from "../../../assets/dinheiro.png";
import pix from "../../../assets/pix.png";
import picpay from "../../../assets/picpay.png";
import paypal from "../../../assets/paypal.png";
import alimentacao from "../../../assets/alimentacao.png";
import refeicao from "../../../assets/refeicao.png";

function CardMetodo(props) {
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    if (props.metodo === 1) {
      setImagem(cartao);
    } else if (props.metodo === 2) {
      setImagem(dinheiro);
    } else if (props.metodo === 3) {
      setImagem(pix);
    } else if (props.metodo === 6) {
      setImagem(picpay);
    } else if (props.metodo === 7) {
      setImagem(paypal);
    } else if (props.metodo === 8) {
      setImagem(alimentacao);
    } else if (props.metodo === 9) {
      setImagem(refeicao);
    }
  }, [props.metodo]);

  return (
    <div className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg">
      <img src={imagem} alt="" className="h-8" />
    </div>
  );
}

export default CardMetodo;
