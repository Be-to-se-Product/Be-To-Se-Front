import React from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import InputRoot from "../../componentes/Input/InputRoot";
import Button from "../../componentes/Button/Button";
import {
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ModalPedidos from "./componentes/ModalPedidos";

const HistoricoVendas = () => {
  const columns = [];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <main className="flex">
      <MenuComerciante />
      <BoxComerciante className="flex flex-col pt-10 justify-around">
        <div className="w-full text-center font-semibold mb-4">
          <h2>Históricos de Vendas</h2>
        </div>

        <div className="filter flex gap-x-4 w-full justify-between items-end bg-black-300 px-8 py-4">
          <div className="flex flex-col">
            <InputRoot.Label>De:</InputRoot.Label>
            <InputRoot.Input
              type="date"
              className=" bg-white-principal px-1 rounded-md"
              placeholder="De: "
            ></InputRoot.Input>
          </div>
          <div className="flex flex-col">
            <InputRoot.Label>Até: </InputRoot.Label>
            <InputRoot.Input
              type="date"
              className=" bg-white-principal px-1 rounded-md"
              placeholder="De: "
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col">
            <InputRoot.Label>Até: </InputRoot.Label>
            <Select className="w-40 h-10 bg-white-principal">
              <MenuItem>Pedro</MenuItem>
            </Select>
          </div>

          <div className="flex flex-col">
            <InputRoot.Label>Até: </InputRoot.Label>
            <Select className="w-40 h-10 bg-white-principal">
              <MenuItem>Pedro</MenuItem>
            </Select>
          </div>

          <Button className="w-full bg-green-700 h-max text-white-principal" >Pesquisar</Button> 
        </div>

        <div className="relative">
          <div className="content-table w-full h-[400px] overflow-scroll ">
            <div className=" grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border  text-black-900 bg-[#F8F9FA] font-semibold absolute w-full ">
              <div className="border-r border-gray-200 h-full py-2 px-2   text-center ">ID</div>
              <div className=" border-r border-gray-200 h-full py-2 px-2 ">DATA PEDIDO</div>
              <div className="  border-r border-gray-200 py-2 px-2 ">CPF DO COMPRADOR</div>
              <div className=" border-r border-gray-200  py-2 px-2 ">MODO DE COMPRA</div>
              <div className=" border-r border-gray-200  py-2 px-2 ">MÉTODO DE PAGAMENTO</div>
              <div className=" border-r border-gray-200  py-2 px-2 ">TOTAL DE COMPRA</div>
              <div className="border-r border-gray-200 py-2 px-2 ">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 mt-8">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            <div className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr,1fr] text-xs border border-gray-200 ">
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2 text-center">1</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">10/08/2023</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">545.123.121-65</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Pago no site</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">Cartão de crédito</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">R$ 12,00</div>
              <div className=" text-base border-r border-gray-200 h-full py-2 px-2">AÇÕES</div>
            </div>

            
<ModalPedidos/>


          </div>
        </div>
      </BoxComerciante>
    </main>
  );
};

export default HistoricoVendas;
