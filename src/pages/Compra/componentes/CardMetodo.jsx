import React, { useEffect, useState } from "react";
import cartao from "../../../assets/cartao.png";
import dinheiro from "../../../assets/dinheiro.png";
import pix from "../../../assets/pix.png";
import picpay from "../../../assets/picpay.png";
import paypal from "../../../assets/paypal.png";
import alimentacao from "../../../assets/alimentacao.png";
import refeicao from "../../../assets/refeicao.png";

function CardMetodo(props){
    const [imagem, setImagem] = useState(null);
    const [title, setTitle] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        props.onSelect();
      };

    useEffect(() => {
      if (props.metodo === 1) {
        setImagem(cartao);
        setTitle("Cartão de crédito");
      } else if (props.metodo === 2) {
        setImagem(dinheiro);
        setTitle("Dinheiro");
      } else if (props.metodo === 3) {
        setImagem(pix);
        setTitle("PIX");
      } else if (props.metodo === 6) {
        setImagem(picpay);
        setTitle("PicPay");
      } else if (props.metodo === 7) {
        setImagem(paypal);
        setTitle("PayPal");
      } else if (props.metodo === 8) {
        setImagem(alimentacao);
        setTitle("Vale Alimentação");
      } else if (props.metodo === 9) {
        setImagem(refeicao);
        setTitle("Vale Refeição");
      }
    }, [props.metodo]);

    return(
        <div className='flex flex-row drop-shadow-lg'>
            <div className='flex flex-row bg-black-100 w-20 h-20 border-solid border-2 border-stroke-principal items-center justify-center'>
                <img src={imagem} alt="" className="h-14" />
            </div>
            <div className='flex flex-row px-8 py-6 bg-black-100 w-72 rounded-e-lg border-solid border-2 border-stroke-principal border-l-0'>
            <label className="flex flex-row items-center justify-between w-full">
                <p>{title}</p>
                <input
                type="checkbox"
                checked={props.isSelected}
                onChange={handleCheckboxChange}
                />
            </label>
            </div>
        </div>
    )
}
export default CardMetodo;