import React, { useState } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import InputRoot from "../../componentes/Input/InputRoot";
import Button from "../../componentes/Button/Button";

import {
  MenuItem,
  Pagination,
  Select
} from "@mui/material";
import ModalPedidos from "./componentes/ModalPedidos";
import TableRoot from "../../componentes/Table/TableRoot";

const HistoricoVendas = () => {
  const [isModal, setIsModal] = useState(false);

  const vendas = [
    {
      id: 1,
      data_pedido: "2023-10-18",
      cpf_comprador: "123.456.789-01",
      modo_compra: "Online",
      metodo_pagamento: "Cartão de Crédito",
      total_compra: 100.0,
      acoes: "Processar",
    },
    {
      id: 2,
      data_pedido: "2023-10-19",
      cpf_comprador: "234.567.890-12",
      modo_compra: "Presencial",
      metodo_pagamento: "Dinheiro",
      total_compra: 75.5,
      acoes: "Cancelar",
    },
    {
      id: 3,
      data_pedido: "2023-10-20",
      cpf_comprador: "345.678.901-23",
      modo_compra: "Online",
      metodo_pagamento: "Transferência Bancária",
      total_compra: 200.25,
      acoes: "Processar",
    },
    {
      id: 4,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 5,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 6,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 7,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 8,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 9,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 10,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 11,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 12,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 13,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
    {
      id: 14,
      data_pedido: "2023-10-21",
      cpf_comprador: "456.789.012-34",
      modo_compra: "Presencial",
      metodo_pagamento: "Cartão de Débito",
      total_compra: 150.75,
      acoes: "Enviar Notificação",
    },
  ];

  return (
    <main className="flex bg-background">
      <MenuComerciante />
      <BoxComerciante className="flex flex-col pt-10 justify-around">
        <div className="w-full text-center font-semibold mb-4">
          <h2>Históricos de Vendas</h2>
        </div>

        <div className="filter flex gap-x-4 w-full justify-between items-end bg-white-principal px-8 py-4 rounded ">
          <div className="flex flex-col flex-1">
            <InputRoot.Label>De:</InputRoot.Label>
            <InputRoot.Input
              type="date"
              className=" bg-white-principal  rounded-md"
              placeholder="De: "
            ></InputRoot.Input>
          </div>
          <div className="flex flex-col flex-1">
            <InputRoot.Label>Até: </InputRoot.Label>
            <InputRoot.Input
              type="date"
              className=" bg-white-principal px-1 rounded-md"
              placeholder="De: "
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col flex-[2]">
            <InputRoot.Label>Status </InputRoot.Label>
            <Select className="w-full h-10 bg-white-principal">
              <MenuItem>Pedro</MenuItem>
            </Select>
          </div>

          <div className="flex flex-col flex-[2]">
            <InputRoot.Label>Forma de pagamento </InputRoot.Label>
            <Select className="w-full h-10 bg-white-principal">
              <MenuItem>Pedro</MenuItem>
            </Select>
          </div>

          <Button className=" bg-green-700 h-max text-white-principal w-max">
            Pesquisar
          </Button>
        </div>

        <TableRoot.Content>
          <TableRoot.Header
            className={"grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr]"}
          >
            <TableRoot.Cell>ID</TableRoot.Cell>
            <TableRoot.Cell>DATA PEDIDO</TableRoot.Cell>
            <TableRoot.Cell>CPF DO COMPRADOR</TableRoot.Cell>
            <TableRoot.Cell>MODO DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>MÉTODO DE PAGAMENTO</TableRoot.Cell>
            <TableRoot.Cell>TOTAL DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>AÇÕES</TableRoot.Cell>
          </TableRoot.Header>

          {vendas.map((venda,index) => (
            <TableRoot.Row className={`grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr] ${index%2!=0 ? "bg-[#F8F9FA]" : "bg-white-principal"}`} key={venda.id}>
              <TableRoot.Cell >{venda.id}</TableRoot.Cell>
              <TableRoot.Cell>{venda.data_pedido}</TableRoot.Cell>
              <TableRoot.Cell>{venda.cpf_comprador}</TableRoot.Cell>
              <TableRoot.Cell>{venda.modo_compra}</TableRoot.Cell>
              <TableRoot.Cell>{venda.metodo_pagamento}</TableRoot.Cell>
              <TableRoot.Cell>{venda.total_compra}</TableRoot.Cell>
              <TableRoot.Cell className="cursor-pointer" onClick={()=>setIsModal(!isModal)}>Detalhes</TableRoot.Cell>
            </TableRoot.Row>
          ))}

        </TableRoot.Content>
        <Pagination count={10} shape="rounded"  className="mx-auto"/>

        <ModalPedidos setIsModal={setIsModal} isModal={isModal} />
      </BoxComerciante>
    </main>
  );
};

export default HistoricoVendas;
