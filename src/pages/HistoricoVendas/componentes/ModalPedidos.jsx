import React, { useState, useEffect } from "react";
import Button from "../../../componentes/Button/Button";
import Close from "../../../componentes/Close/Close";
import styled from "../animations/ModalAnimation.module.css";
import ItemPedido from "./ItemPedido";
import { is } from "@react-spring/shared";

const ModalPedidos = ({ modal, setModal }) => {
  const handleClose = () => {
    setModal({ isAtivo: false, pedido: null });
  };

  return (
    <div className="modal-class">
      <h2>Pedido - {modal?.pedido?.id}</h2>
      <Close onClick={handleClose} />
      {modal?.pedido?.itens?.map((item) => (
        <ItemPedido product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ModalPedidos;
