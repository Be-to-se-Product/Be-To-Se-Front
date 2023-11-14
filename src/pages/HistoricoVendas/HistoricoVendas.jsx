import React, { useState, useEffect } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import InputRoot from "../../componentes/Input/InputRoot";
import Button from "../../componentes/Button/Button";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";


import {
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ModalPedidos from "./componentes/ModalPedidos";
import TableRoot from "../../componentes/Table/TableRoot";

const HistoricoVendas = () => {
  const [isModal, setIsModal] = useState(false);
  const [vendas, setVendas] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const fetchHistoricoVendas = () => {
    toast.loading("Carregando histórico de vendas...");

    api.get(`/historico-vendas/1?page=${page}&size=${size}`)
      .then(response => {
        toast.dismiss();
        if (response.data.length === 0) {
          toast.info("Nenhuma venda encontrada.");
        }
        console.log(response.data);
        setVendas(response.data);
      })
      .catch(error => {
        console.error(error);
        toast.dismiss();
        toast.error("Erro ao carregar o histórico de vendas.");
      });
  };

  useEffect(() => {
    fetchHistoricoVendas();
  }, [page, size]);


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
          <TableRoot.Header className={"grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr]"}>
            <TableRoot.Cell>ID</TableRoot.Cell>
            <TableRoot.Cell>DATA PEDIDO</TableRoot.Cell>
            <TableRoot.Cell>CPF DO COMPRADOR</TableRoot.Cell>
            <TableRoot.Cell>MODO DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>MÉTODO DE PAGAMENTO</TableRoot.Cell>
            <TableRoot.Cell>TOTAL DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>AÇÕES</TableRoot.Cell>
          </TableRoot.Header>

          {vendas.map((venda, index) => (
             <TableRoot.Row className={`grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr] ${index%2!=0 ? "bg-[#F8F9FA]" : "bg-white-principal"}`} key={venda.id}>
              <TableRoot.Cell>{venda.id}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.dataHoraPedido}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.cpfCliente}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.isPagamentoOnline ? "Online" : "Offline"}</TableRoot.Cell>
              <TableRoot.Cell>{venda.nomeMetodoPagamento}</TableRoot.Cell>
              <TableRoot.Cell>R$ {venda.valor.toFixed(2)}</TableRoot.Cell>
              <TableRoot.Cell className="cursor-pointer" onClick={()=>setIsModal(isModal)}>Detalhes</TableRoot.Cell>
            </TableRoot.Row>
          ))}

        </TableRoot.Content>
        <Pagination count={10} shape="rounded" className="mx-auto" />

        <ModalPedidos setIsModal={setIsModal} isModal={isModal} />
      </BoxComerciante>
    </main>
  );
};

export default HistoricoVendas;
