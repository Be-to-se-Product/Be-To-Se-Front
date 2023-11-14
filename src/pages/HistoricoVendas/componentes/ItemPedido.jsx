import Button from "../../../componentes/Button/Button";
import React from "react";

const ItemPedido = ({ product }) => {
  return (
    <div className="item-class">
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
