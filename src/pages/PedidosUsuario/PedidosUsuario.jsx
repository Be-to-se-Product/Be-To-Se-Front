import React, { useEffect, useState } from "react";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputRoot from "../../componentes/Input/InputRoot";
import CardLojaRoot from "../../componentes/CardLoja/CardLojaRoot";
import Button from "../../componentes/Button/Button";
import api from "../../services/api";
import moment from "moment";

const PedidosUsuario = () => {
  const [pedidos, setPedidos] = useState([]);
  const [status, setStatus] = useState("PENDENTE");

  const getPedidos = () => {
    
    api
      .get("/pedidos/consumidor?status=" + status)
      .then((response) => {
        setPedidos([]);
        response.data.forEach((pedido) => {
          
          const pedidoDto = {
            id: pedido.id,
            data: pedido.dataPedido,
            status: pedido.statusPedido,
            metodoPagamento: pedido.metodoPagamento,
            tipoPagamento: pedido.isPagamentoOnline ? "Online" : "Presencial",
            estabelecimento: {
              nome: pedido.estabelecimento.nome,
              endereco: {
                numero: pedido.estabelecimento.endereco.numero,
                rua: pedido.estabelecimento.endereco.rua,
                bairro: pedido.estabelecimento.endereco.bairro,
              },
            },
            itens: pedido.itens.map((item) => {
              return {
                id: item.id,
                nome: item.produtoNome,
                quantidade: item.quantidade,
                valor: item.preco,
              };
            }),
          };


          setPedidos((prev)=>[...prev, pedidoDto]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPedidos();
  }, [status]);

  return (
    <>
      <NavbarRoot.Content>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>
      <div>
        <div className="w-11/12 mx-auto  flex flex-col gap-y-8 ">
          <div className="flex justify-between items-center mt-16">
            <div className="flex flex-col h-max gap-y-2  ">
              <h2 className="text-2xl">Pedidos</h2>
              <div className="flex items-center">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex gap-x-4"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
                    label="Aprovados"
                  />
                  <FormControlLabel
                    value=""
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
                  <FormControlLabel
                    value="CANCELADO"
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
                    label="Cancelados"
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="flex h-max  w-1/3  ">
              <InputRoot.Input className={"h-9"}>
                <InputRoot.Icon>
                  <img src="/src/assets/search.svg" />
                </InputRoot.Icon>
              </InputRoot.Input>
            </div>
          </div>

          <div className="w-full flex  flex-wrap gap-y-8 gap-x-10">
            {pedidos.map((pedido) => (
              <CardLojaRoot.Content className={"flex-shrink-0"} key={pedido.id}>
                <CardLojaRoot.Header>
                  <div className="flex gap-x-2">
                    <img src="/src/assets/down.svg" alt="" className="w-6 " />
                    <div>
                      <h2 className="text-xs font-semibold">{pedido.estabelecimento.nome}</h2>
                      <p className="text-xs">{`${pedido.estabelecimento.endereco.rua}, N°${pedido.estabelecimento.endereco.numero}`} </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 ">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <h3 className=" text-xs">{pedido.status}</h3>
                  </div>
                </CardLojaRoot.Header>

                <CardLojaRoot.ContentInfo>
                  <div className="flex flex-col gap-y-1">
                    <CardLojaRoot.Row
                      label={"Data do pedido"}
                      texto={moment(pedido.data, "YYYY-MM-DDHH:mm:ss").format("DD/MM/YYYY - HH:mm")}
                    />
                    <CardLojaRoot.Row
                      label={"Modo de compra"}
                      texto={pedido.tipoPagamento}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <CardLojaRoot.Row
                      label={"Método de compra"}
                      texto={pedido.metodoPagamento}
                    />
                  </div>
                </CardLojaRoot.ContentInfo>
                <CardLojaRoot.Footer>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs">Preço total: R${
                    pedido.itens.reduce((accumulator,element)=>accumulator +element.valor,0).toFixed(2)
                    }</span>
                    <Button className=" text-white-principal text-xs">
                      Ver itens da compra
                    </Button>
                  </div>
                </CardLojaRoot.Footer>
              </CardLojaRoot.Content>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidosUsuario;
