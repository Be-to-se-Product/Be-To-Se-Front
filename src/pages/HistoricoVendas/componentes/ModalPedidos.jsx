import React, { useState } from "react";
import Button from "../../../componentes/Button/Button";
import Close from "../../../componentes/Close/Close";
import styled from "../animations/ModalAnimation.module.css";
import ItemPedido from "./ItemPedido";

const ModalPedidos = ({pedidos,isModal,setIsModal,...props}) => {
  return (

    <div className={`flex flex-col border h-screen gap-y-2  fixed rounded-sm bg-white-principal right-0 top-0 ${styled.modal} ${isModal?styled.active:"" } ` }  {...props}>
      
      <div className="px-2 py-4 border-b flex justify-between items-center">
      
      <h2 className="text-base ">Pedido #223323</h2>
      <Close onClick={()=>setIsModal(!isModal)}/>
      </div>
      <div className="p-2 flex flex-col gap-y-2">
      
<ItemPedido/>
    
      </div>
    </div>
  );
};

export default ModalPedidos;
