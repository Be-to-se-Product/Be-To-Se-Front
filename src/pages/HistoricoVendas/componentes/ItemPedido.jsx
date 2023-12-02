import Button from "../../../componentes/Button/Button";
import React, { useEffect } from "react";

const ItemPedido = ({ product }) => {
  useEffect(()=>{
    console.log(product);
  },[])
  return (
    <div className="w-max flex items-center gap-x-4 py-2 px-4 border rounded-md  ">
      <div className="flex">
        <div className="w-14 flex justify-center">
          <img src="/src/assets/cocacola.svg" alt="" />
        </div>
        <div className="flex flex-col gap-y-1">
        <h3 className="text-xs font-semibold">{product?.nome}</h3>
        <p className="text-xs font-semibold">Quantidade: {product?.quantidade}</p>
        <p className="text-xs font-light">Preço: R${product?.preco?.toFixed(2)}</p>
        </div>
      </div>
      <Button className={"h-max"}>Ver item</Button>
    </div>
  );
};


export default ItemPedido;
