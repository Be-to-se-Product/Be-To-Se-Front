import React, { useState } from "react";
import Close from "@componentes/Close/Close";
import styled from "../animations/ModalAnimation.module.css";
import ItemPedido from "./ItemPedido";

const ModalPedidos = ({ modal, setModal, ...props }) => {
  return (
    <div
      className={`flex flex-col border h-screen gap-y-2  fixed rounded-sm bg-white-principal right-0 top-0 ${
        styled.modal
      } ${modal.isAtivo ? styled.active : ""} `}
      {...props}
    >
      <div className="px-2 py-4 border-b flex justify-between items-center">
        <h2 className="text-base ">Pedido - {modal.pedido.id}</h2>
        <Close onClick={() => setModal({ ...modal, isAtivo: false })} />
      </div>
      <div className="p-2 flex flex-col gap-y-2">
        {modal?.pedido?.itens?.map((item) => (
          <ItemPedido produto={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ModalPedidos;
