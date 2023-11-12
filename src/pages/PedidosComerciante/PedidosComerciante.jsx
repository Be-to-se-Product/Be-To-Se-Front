import React, { useEffect, useState } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import ModalPedidos from "../HistoricoVendas/componentes/ModalPedidos";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

import CardPedido from "./componentes/CardPedido/CardPedidoRoot";
import SelectPedido from "./componentes/CardPedido/SelectPedido";

const PedidosComerciante = () => {
  const [modal, setModal] = useState({
    isAtivo: false,
    pedido: {},
  });

  const [pedidos, setPedidos] = useState([]);
  const [status, setStatus] = useState("PENDENTE");

  const handleStatus = (e, pedido) => {
    const status = e.target.value;
    api
      .patch(`/pedidos/${pedido.id}/status`, { status })
      .then((response) => {
        toast.success("Status do pedido alterado com sucesso");
        getPedidos();
      })
      .catch((err) => {
        toast.error("Erro ao alterar status do pedido");
      });
  };

  const filterStatus = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    getPedidos();
  }, [status]);

  const getPedidos = () => {
    api
      .get("/pedidos/estabelecimento/1/status?status=" + status)
      .then((response) => {
        setPedidos([]);
        response.data.forEach((pedido) => {
          const itensDto = pedido.itens.map((item) => {
            return {
              id: item.id,
              nome: item.produtoNome,
              quantidade: item.quantidade,
              valor: item.preco,
            };
          });

          const pedidoDto = {
            id: pedido.id,
            data: pedido.dataPedido,
            status: pedido.statusPedido,
            tipoPagamento: pedido.isPagamentoOnline ? "Online" : "Presencial",
            metodoPagamento: pedido.metodoPagamento,
            itens: itensDto,
          };

          setPedidos((prev) => [...prev, pedidoDto]);
        });
      })
      .catch((err) => {
        if(err.response.status === 404){
          setPedidos([])
        }
        else if(err.response.status === 500){
          toast.error("Erro ao buscar pedidos")
        }
        else if(err.response.status === 400){
          toast.error("Erro ao buscar pedidos")
        }

        else if(err.response.status === 403){
          toast.error("Acesso negado a esses pedidos")
        }
      });
  };

  return (
    <main className="w-full h-screen flex bg-background">
      <MenuComerciante />

      <BoxComerciante className="flex flex-col pt-10 gap-y-10 ">
        <div className="w-full text-center flex flex-col     font-semibold mb-0 gap-y-4">
          <h2>Pedidos</h2>

          <div className="flex items-center justify-center">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={status}
              onChange={(e) => {
                filterStatus(e.target.value);
              }}
            >
              <FormControlLabel
                value="PENDENTE"
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
                value="PREPARO"
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
                label="Em preparo"
              />

              <FormControlLabel
                value="AGUARDANDO_RETIRADA"
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
                label="Aguardando Retirada"
                onClick={() => {
                  setStatus("AGUARDANDO_RETIRADA");
                  getPedidos();
                }}
              />

              <FormControlLabel
                value="ENTREGUE"
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
                label="Entregue"
              />
            </RadioGroup>
          </div>
        </div>

        <div className=" flex flex-col overflow-auto gap-y-6">
          {pedidos.map((pedido) => (
            <CardPedido.Content key={pedido.id}>
              <CardPedido.Header pedido={pedido}>
                <SelectPedido
                  pedido={pedido}
                  onChange={(e) => handleStatus(e, pedido)}
                />
              </CardPedido.Header>
              <CardPedido.Info
                pedido={pedido}
                onClick={() =>
                  setModal((prev) => {
                    const el = { ...prev };
                    el.isAtivo = !el.isAtivo;
                    el.pedido = pedido;
                    return el;
                  })
                }
              />
            </CardPedido.Content>
          ))}
        </div>
      </BoxComerciante>
      <ToastContainer />
      <ModalPedidos modal={modal} setModal={setModal} />
    </main>
  );
};

export default PedidosComerciante;
