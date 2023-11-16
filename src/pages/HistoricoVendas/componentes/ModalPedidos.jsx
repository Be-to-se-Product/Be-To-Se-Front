import React, { useEffect } from "react";
import Button from "../../../componentes/Button/Button";
import Close from "../../../componentes/Close/Close";
import styled from "../animations/ModalAnimation.module.css";
import ItemPedido from "./ItemPedido";
import { is } from "@react-spring/shared";

const ModalPedidos = ({ pedidos, isModal, setIsModal, pedidoSelecionadoIndex, ...props }) => {
  useEffect(() => {
    console.log(pedidos);
    console.log("--------");
    console.log(pedidoSelecionadoIndex);
  }, []);
  return (
    <div
      className={`flex flex-col border h-screen gap-y-2 fixed rounded-sm bg-white-principal right-0 top-0 
      ${styled.isModal}
       ${pedidos[pedidoSelecionadoIndex] !== null ? styled.active : ""}`}
      {...props}
    >
      <div className="px-2 py-4 border-b flex justify-between items-center">

        
        <h2 className="text-base ">Pedido {pedidos[pedidoSelecionadoIndex]?.id}</h2>
        <Close
          onClick={() => {
            setIsModal(false);
          }}
        />
      </div>
      <div className="p-2 flex flex-col gap-y-2">
        {pedidos[pedidoSelecionadoIndex].pedido?.itens?.map((item) => (
          <ItemPedido product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ModalPedidos;
