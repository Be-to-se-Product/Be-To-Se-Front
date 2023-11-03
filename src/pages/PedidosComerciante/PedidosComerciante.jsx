import React, { useEffect, useState } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Button from "../../componentes/Button/Button";
import CardPedidoComerciante from "./componentes/CardPedidoComerciante";
import ModalPedidos from "../HistoricoVendas/componentes/ModalPedidos";
import api from "../../services/api";
import { toast } from "react-toastify";
import { set } from "react-hook-form";



const PedidosComerciante = () => {

  const [modal, setModal] = useState({
    isAtivo: false,
    pedido: {},
  });


  const [pedidos, setPedidos] = useState([]);



  const getPedidos = () => {
    api.get("/pedidos/estabelecimento/1 ")
    .then((response) => {
      response.data.vetor.forEach((pedido) => {

        const itensDto = pedido.itens.map((item) => {
          return {
            id: item.id,
            nome: item.produtoNome,
            quantidade: item.quantidade,
            valor: item.preco,
          };
        });

        const pedidoDto = {
          id:pedido.id,
          data: pedido.dataPedido,

          status: pedido.statusPedido,
          tipoPagamento: pedido.isPagamentoOnline ? "Online" : "Presencial",
          metodoPagamento: pedido.metodoPagamento,
          itens: itensDto,
        };

       setPedidos(prev => [...prev, pedidoDto]);
      }
      );

    }
    ).catch((err) => {
     toast.error("Erro ao buscar pedidos");
    });
  }



  useEffect(() => {
    getPedidos();
  }
  , []);
  return (
    <main className="w-full h-screen flex bg-background">
      <MenuComerciante />

      <BoxComerciante className="flex flex-col pt-10 gap-y-10 " >
        <div className="w-full text-center flex flex-col     font-semibold mb-0 gap-y-4">
          <h2>Pedidos</h2>

          <div className="flex items-center justify-center">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "orange",
                      "&.Mui-checked": {
                        color: "orange",
                      },
                    }}
                  />
                }
                label="Pendentes"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: "orange",
                      "&.Mui-checked": {
                        color: "orange",
                      },
                    }}
                  />
                }
                label="Aprovados"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      color: "orange",
                      "&.Mui-checked": {
                        color: "orange",
                      },
                    }}
                  />
                }
                label="Todos"
              />
            </RadioGroup>
          </div>
        </div>

        <div className=" flex flex-col overflow-auto gap-y-6">

            {pedidos.map((pedido) => (
                <CardPedidoComerciante pedido={pedido} key={`${pedido.id}`} onClick={
                  ()=>setModal(prev=>{
                    const el = {...prev};
                    el.isAtivo = !el.isAtivo;
                    el.pedido = pedido;
                    return el;
                })
              } />
            ))}
                
        </div>
      </BoxComerciante>


      <ModalPedidos  modal={modal} setModal={setModal} />
    </main>
    
  );
};

export default PedidosComerciante;
