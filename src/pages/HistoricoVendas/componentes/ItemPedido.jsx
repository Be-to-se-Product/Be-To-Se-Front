import Button from "../../../componentes/Button/Button";
import React from "react";

const ItemPedido = ({ product }) => {
  return (
    <div className="w-max flex items-center gap-x-4 py-2 px-4 border rounded-md  ">
       <div className="w-14 flex justify-center">
          <img src="/src/assets/cocacola.svg" alt="" />
        </div>
      <div>
        <h3>{product.nome}</h3>
        <p>Quantidade: {product.quantidade}</p>
        <p>Preço Unitário: R$ {product.preco.toFixed(2)}</p>
      </div>
      <Button className={"h-max"}>Ver item</Button>
    </div>
  );
};


export default ItemPedido;
