import {  MenuItem, Select } from "@mui/material";
import React from "react";
import Button from "../../../componentes/Button/Button";

const CardPedidoComerciante = ({pedido,...props}) => {
  return (
    <div className="border rounded-lg bg-white-principal shadow-lg">
      <div className="flex justify-between border-b border-gray-200 px-8 py-4  items-center">
        <h3 className="text-base">Pedido {pedido.nome} - {pedido.tempo}</h3>
        <div>
          <Select
            className="h-10"
            id="demo-simple-select"
            defaultValue={pedido.status}
            name="status"
          >
            <MenuItem value={"pendente"}>Pendente</MenuItem>
            <MenuItem value={"preparacao"}>Preparação</MenuItem>
            <MenuItem value={"reprovado"}>Reprovado</MenuItem>
          </Select>
        </div>
      </div>

      <div className="flex text-base justify-between px-8 py-4">
        <div className="flex flex-col gap-y-2 ">
          <span>CPF do comprador: {pedido.cpf}</span>
          <span>Método de pagamento: {pedido.metodoPagamento}</span>
          <span>Valor Total: R${pedido.valorTotal}</span>
        </div>
        <div className="flex flex-col justify-between items-end">
          Modo de compra: {pedido.modoCompra}
          <Button className="h-max w-max " {...props}>Itens do pedido</Button>
        </div>
      </div>
    </div>
  );
};

export default CardPedidoComerciante;
