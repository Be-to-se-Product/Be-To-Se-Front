import Button from "../../../componentes/Button/Button";
import React from "react";

const ItemPedido = ({ product }) => {
  console.log(product);
  return (
    <div className="w-max flex items-center gap-x-4 py-2 px-4 border rounded-md  ">
      <div className="flex">
        <div className="w-14 flex justify-center">
          <img src="/src/assets/cocacola.svg" alt="" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-xs font-semibold">{product?.nome}</h2>
          <h3 className="text-xs">({product.quantidade} Unidade)</h3>
          <span className="text-xs font-light ">{product.valor} (Unidade)</span>
        </div>
      </div>
      <Button className={"h-max"}>Ver item</Button>
    </div>
  );
};

export default ItemPedido;
