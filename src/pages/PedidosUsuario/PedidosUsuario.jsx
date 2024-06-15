import { useCallback, useEffect, useState } from "react";
import IconSearch from "@assets/search.svg";
import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import { FormControlLabel, Radio, RadioGroup, Skeleton } from "@mui/material";
import InputRoot from "@componentes/Input/InputRoot";
import CardLojaRoot from "@componentes/CardLoja/CardLojaRoot";
import Button from "@componentes/Button/Button";

import moment from "moment";
import ContentModal from "@/componentes/ContentModal/ContentModal";
import CardItemVenda from "./componentes/CardItemVenda";
import api from "@/services/api/services";
import useDebounce from "@/hooks/useDebounce";

const PedidosUsuario = () => {
  const statusColors = {
    PENDENTE: "bg-orange-400",
    PREPARO: "bg-blue-400",
    ENTREGUE: "bg-green-400",
    CANCELADO: "bg-red-400",
    AGUARDANDO_RETIRADA: "bg-yellow-400",
  };

  const nomeStatus = {
    PENDENTE: "Pendente",
    PREPARO: "Em preparação",
    ENTREGUE: "Aprovado",
    CANCELADO: "Cancelado",
    AGUARDANDO_RETIRADA: "Aguardando Retirada",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedidosFiltrados, setPedidosFiltrados] = useState([]);
  const [status, setStatus] = useState("");
  const [pedidoSelecionado, setPedidoSelecionado] = useState({
    show: false,
    data: {},
  });

  const getPedidos = useCallback(() => {
    setIsLoading(true);
    api
      .get("/pedidos/consumidor", {
        params: {
          status: status,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          const pedidosRefactor = response.data?.map((pedido) => {
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
              itens: pedido.itens.map((item) => ({
                produto: {
                  ...item.produto,
                  quantidade: item.quantidade,
                },
              })),
            };
            return pedidoDto;
          });
          setPedidos(pedidosRefactor);
          setPedidosFiltrados(pedidosRefactor);
        } else {
          setPedidos([]);
          setPedidosFiltrados([]);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [status]);

  const filtroPedidos = (e) => {
    if (e.target.value != "") {
      const pedidosFiltro = pedidos.filter((el) =>
        el.estabelecimento.nome.includes(e.target.value)
      );
      setPedidosFiltrados(pedidosFiltro);
      return;
    }
    setPedidosFiltrados(pedidos);
  };

  const debounce = useDebounce(filtroPedidos, 300);
  useEffect(() => {
    getPedidos();
    // eslint-disable-next-line
  }, [status]);

  return (
    <>
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
          {sessionStorage.USERDETAILS ? (
            <NavbarRoot.Authenticated />
          ) : (
            <NavbarRoot.Sign />
          )}
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>
      <div>
        <div className="w-11/12 mx-auto  flex flex-col gap-y-8 ">
          <div className="flex justify-between items-end mt-16">
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
                    label="Em preparação"
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
              <InputRoot.ContentInput
                icon={IconSearch}
                onChange={debounce}
                placeholder={"Informe o nome da loja"}
              />
            </div>
          </div>

          <div className="w-full flex relative flex-wrap gap-y-8 gap-x-10">
            <ContentModal
              className={`w-[500px]`}
              show={pedidoSelecionado.show}
              setPedidoSelecionado={setPedidoSelecionado}
            >
              <div className="w-full py-6 px-6 text-lg border-b flex justify-between">
                <h2>Itens do pedidos</h2>
                <h2>
                  Preço Total: R$
                  {pedidoSelecionado.data?.itens
                    ?.reduce(
                      (accumulator, element) =>
                        (accumulator + element.produto.preco) *
                        element.produto.quantidade,
                      0
                    )
                    .toFixed(2)}
                </h2>
              </div>
              <div className="h-[300px] overflow-y-auto">
                {pedidoSelecionado.data?.itens?.map((item, index) => (
                  <CardItemVenda produto={item} key={`item_${index}`} />
                ))}
              </div>
            </ContentModal>

            {isLoading
              ? Array.from(new Array(8)).map((item, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={350}
                    height={250}
                  />
                ))
              : pedidosFiltrados.map((pedido) => (
                  <CardLojaRoot.Content
                    className={"flex-shrink-0"}
                    key={pedido.id}
                  >
                    <CardLojaRoot.Header>
                      <div className="flex gap-x-2">
                        <div>
                          <h2 className="text-xs font-semibold">
                            {pedido.estabelecimento.nome}
                          </h2>
                          <p className="text-xs">
                            {`${pedido.estabelecimento.endereco.rua}, N°${pedido.estabelecimento.endereco.numero}`}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2 ">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            statusColors[pedido.status]
                          }`}
                        ></div>
                        <h3 className="text-xs">{nomeStatus[pedido.status]}</h3>
                      </div>
                    </CardLojaRoot.Header>

                    <CardLojaRoot.ContentInfo>
                      <div className="flex flex-col gap-y-1">
                        <CardLojaRoot.Row
                          label={"Data do pedido"}
                          texto={moment(
                            pedido.data,
                            "YYYY-MM-DDHH:mm:ss"
                          ).format("DD/MM/YYYY - HH:mm")}
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
                        <span className="text-xs">
                          Preço total: R$
                          {pedido.itens
                            .reduce(
                              (accumulator, element) =>
                                accumulator + element?.produto?.preco,
                              0
                            )
                            .toFixed(2)}
                        </span>
                        <div>
                          <Button
                            onClick={() =>
                              setPedidoSelecionado({
                                show: true,
                                data: pedido,
                              })
                            }
                          >
                            Ver itens da compra
                          </Button>
                        </div>
                      </div>
                    </CardLojaRoot.Footer>
                  </CardLojaRoot.Content>
                ))}
            {pedidosFiltrados.length == 0 && !isLoading && (
              <div className="w-full flex justify-center items-center h-[400px]">
                <h2 className="text-2xl">Nenhum pedido encontrado</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidosUsuario;
