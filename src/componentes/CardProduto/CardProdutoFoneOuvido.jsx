import imgProduto from "@assets/FoneDeOuvido.png";
import { Rating } from "@mui/material";
import Carro from "@assets/carro.svg";
import Pe from "@assets/pe.svg";
import Bike from "@assets/bike.svg";
import Shop from "@assets/shop.svg";

const CardProdutoFoneOuvido = (props) => {
  return (
    <div className="w-[250px] h-[539px] gap-20 p-4 border-2 rounded-md bg-white-principal flex-start flex-colrounded-md">
      <div className="h-[150px] rounded-md ">
        <div className="rounded-full bg-orange-principal w-7 h-7 text-center flex items-center justify-center ">
          <img src={Shop} alt="" />
        </div>
        <div className=" flex flex-col justify-content align-center gap-[20px] self-stretch">
          <img src={imgProduto} alt="imagem" className="flex w-full h-full" />

          <div className="flex w-full justify-between items-center ">
            <div className="flex w-[147px] items-start">
              <p className="text-sm font-normal leading-[15px] tracking-tight uppercase">
                ELETRÔNICOS
              </p>
            </div>

            <div className="flex items-center ">
              <p className="text-base font-normal leading-[15px] tracking-tight uppercase">
                5.0
              </p>

              <Rating nome="text-feedback" value={5} readOnly size="small" />
            </div>
          </div>

          <div className="flex gap-auto flex-col justify-between items-start">
            <div className="">
              <p className="line-through">R$ 329,40</p>
            </div>

            <div className="">
              <p className="text-4xl font-medium">R$ 255,99</p>
            </div>

            <div className="">
              <p className="">JBL Tune 720BT</p>
            </div>
          </div>

          <div className=" scroll-px-5 gap-9 flex justify-center align-center">
            <img src={Carro} alt="imagem" className="h-10 " />
            <img src={Pe} alt="imagem" className="h-10" />
            <img src={Bike} alt="imagem" className="h-10" />
          </div>

          <div className="text-sm size-8 gap-8 flex justify-center align-center">
            <p className="">30 min</p>

            <p>15 min</p>

            <p>10 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProdutoFoneOuvido;
