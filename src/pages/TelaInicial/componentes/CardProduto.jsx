import React from "react";
import { Rating } from "@mui/material";
import Carro from "@assets/carro.svg";
import Pe from "@assets/pe.svg";
import Bike from "@assets/bike.svg";
import Shop from "@assets/shop.svg";
import { useNavigate } from "react-router";
import imgProduto from "@assets/default-image.jpeg";
import { conversorTime } from "@/utils/conversores";

const CardProduto = ({ produto }) => {
  const navigate = useNavigate();

  const verifyImage = (imagens) => {
    if (imagens?.length > 0) {
      return imagens[0];
    }
    return imgProduto;
  };
  const mapper = {
    nome: produto?.nome || "Produto",
    categoria: produto?.categoria || "Categoria",
    preco:
      produto?.precoAtual.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }) || 0,
    mediaAvaliacao: produto?.mediaAvaliacao
      ? parseFloat(produto.mediaAvaliacao.toFixed(2))
      : 0,
    imagem: verifyImage(produto?.imagens),
    imagemEstabelecimento: produto?.estabelecimento?.imagem || imgProduto,
    estabelecimento: produto?.estabelecimento?.nome || "Estabelecimento",
    tempoEntrega: produto?.estabelecimento?.tempoPessoa || 0,
    tempoEntregaCarro: produto?.estabelecimento?.tempoCarro || 0,
    tempoEntregaBike: produto?.estabelecimento?.tempoBike || 0,
  };

  return (
    <div
      className=" w-[280px] shadow-md h-max gap-y-4 z-0   p-6 border-2 rounded-md bg-white-principal flex flex-col "
      onClick={() => navigate(`/TelaProduto/${produto?.id}`)}
    >
      <div className="flex flex-col gap-y-4 relative">
        <div className="rounded-full bg-orange-principal top-2 left-2 w-7 h-7 text-center flex items-center justify-center absolute ">
          <img src={Shop} alt="" />
        </div>
        <div className=" border rounded-md">
          <img
            src={mapper.imagem}
            alt="imagem"
            className="flex w-full h-[230px]  object-cover"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-medium">
            {mapper.categoria.toUpperCase()}
          </h3>
          <div className="flex gap-x-2">
            <h3 className="text-sm">{mapper.mediaAvaliacao.toFixed(1)}</h3>
            <Rating size="small" readOnly value={mapper.mediaAvaliacao} />
          </div>
        </div>
      </div>
      <hr className="border-orange-200" />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-medium">{mapper.nome}</h2>
        <h3 className="text-lg">{mapper.preco} </h3>
      </div>

      <div className="flex gap-x-4 items-center">
        <img
          src={mapper.imagemEstabelecimento}
          alt=""
          className="w-10 h-10 border rounded-full"
        />
        <h2 className="text-sm font-medium ">{mapper.estabelecimento}</h2>
      </div>
      <hr className="border-orange-200" />
      <div className="flex gap-x-4 items-center justify-around">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <img src={Pe} alt="" className="w-7 h-7 " />
          <h4 className="text-sm">{conversorTime(mapper.tempoEntrega)}</h4>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <img src={Carro} alt="" className="w-7 h-7 " />
          <h4 className="text-sm">{conversorTime(mapper.tempoEntregaCarro)}</h4>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <img src={Bike} alt="" className="w-7 h-7 " />
          <h4 className="text-sm">{conversorTime(mapper.tempoEntregaBike)}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
