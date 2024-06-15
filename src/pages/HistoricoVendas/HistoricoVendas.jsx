import { useState, useEffect } from "react";
import BoxComerciante from "@componentes/BoxComerciante/BoxComerciante";
import InputRoot from "@componentes/Input/InputRoot";
import Button from "@componentes/Button/Button";
import api from "@/services/api/services";
import { ToastContainer, toast } from "react-toastify";
import DownloadIcon from "@mui/icons-material/Download";
import { MenuItem, Select } from "@mui/material";
import ModalPedidos from "./componentes/ModalPedidos";
import TableRoot from "@componentes/TableNew/TableRoot";
import moment from "moment";
import { useParams } from "react-router-dom";
const HistoricoVendas = () => {
  const [modal, setModal] = useState({
    isAtivo: false,
    pedido: {},
  });
  const [vendas, setVendas] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(null);
  const [metodosPagamentos, setMetodosPagamentos] = useState([]);
  const [metodoPagamentoSelecionado, setMetodoPagamentoSelecionado] =
    useState("");
  const [showOptions, setShowOptions] = useState();
  const [de, setDe] = useState(null);
  const [ate, setAte] = useState(null);
  const [status, setStatus] = useState(null);
  const statusOptions = ["Entregue", "Cancelado"];
  const { idEstabelecimento } = useParams();

  useEffect(() => {
    getMetodosPagamento();
  }, []);

  const getHistoricoVendasFiltrado = () => {
    // toast.loading("Buscando vendas...");
    const params = {
      de: de,
      ate: ate,
      status: status ? status : null,
      metodoPagamento: metodoPagamentoSelecionado
        ? metodoPagamentoSelecionado
        : null,
      page: !page ? 0 : page,
      size: !size ? 30 : size,
    };

    api
      .get(`/historico-vendas/filtro/${idEstabelecimento}`, { params })
      .then((response) => {
        const responseData = response.data;

        setVendas(responseData.content ? responseData.content : []);
        setPage(responseData.number);
        setSize(responseData.size);
      })
      .catch((error) => {
        console.error(error);
        // toast.error("Erro ao carregar o histórico de vendas.");
        toast.dismiss();
      });
  };

  const getMetodosPagamento = () => {
    toast.loading("Carregan do métodos de pagamento...");
    api
      .get(`historico-vendas/${idEstabelecimento}/metodos-pagamento`)
      .then((response) => {
        setMetodosPagamentos(response.data ? response.data : []);
        toast.dismiss();
      })
      .catch((error) => {
        console.error(error);
        toast.dismiss();

        toast.error("Erro ao carregar os métodos de pagamento.");
      });
  };

  const handleSelectClick = () => {
    setShowOptions(true);
  };

  const handleSelectChange = (event) => {
    setMetodoPagamentoSelecionado(event.target.value);
    setShowOptions(false);
  };

  const handleDeChange = (event) => {
    const formattedDate = event.target.value;
    setDe(formattedDate);
  };

  const handleAteChange = (event) => {
    const formattedDate = moment
      .utc(event.target.value)
      .format("YYYY-MM-DDTHH:mm:ss");
    setAte(formattedDate);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePesquisarClick = () => {
    getHistoricoVendasFiltrado();
  };

  useEffect(() => {
    getHistoricoVendasFiltrado();
  }, []);

  const exportar = () => {
    api
      .get(`historico-vendas/${idEstabelecimento}/download-txt`, {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `transacoes_${idEstabelecimento}.txt`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Download error", error);
        toast.error("Erro ao exportar o histórico de vendas.");
      })
      .finally(() => {
        toast.dismiss();
      });
  };

  return (
    <BoxComerciante className="flex flex-col  mt-20">
      <div className="w-full text-center font-semibold mb-4">
        <h2>Histórico de Vendas</h2>
      </div>
      <Button
        variants={{
          colors: "sucess",
          class: "w-max cursor-pointer mb-4",
        }}
        onClick={exportar}
      >
        <DownloadIcon className="mr-2" />
        Exportar histórico
      </Button>
      <div className="flex flex-col gap-y-7">
        <div className="filter flex gap-x-4 w-full justify-between items-end bg-white-principal px-8 py-4 rounded ">
          <div className="flex flex-col flex-1">
            <InputRoot.Label>De:</InputRoot.Label>
            <InputRoot.ContentInput
              type="date"
              placeholder="De: "
              onChange={handleDeChange}
            ></InputRoot.ContentInput>
          </div>
          <div className="flex flex-col flex-1">
            <InputRoot.Label>Até: </InputRoot.Label>
            <InputRoot.ContentInput
              type="date"
              placeholder="De: "
              onChange={handleAteChange}
            ></InputRoot.ContentInput>
          </div>

          <div className="flex flex-col flex-[2]">
            <InputRoot.Label>Status </InputRoot.Label>

            <Select
              className="w-full h-10 bg-white-principal"
              onChange={handleStatusChange}
              value={status}
            >
              {statusOptions.map((statusOption, index) => (
                <MenuItem key={index} value={statusOption}>
                  {statusOption || "Selecione um status"}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col ">
            <InputRoot.Label>Forma de pagamento </InputRoot.Label>
            <Select
              className="w-full h-10 bg-white-principal"
              value={metodoPagamentoSelecionado}
              onChange={handleSelectChange}
              onClick={handleSelectClick}
              open={showOptions}
            >
              {metodosPagamentos.map((metodo) => (
                <MenuItem key={metodo.id} value={metodo.descricao}>
                  {metodo.descricao}
                </MenuItem>
              ))}
            </Select>
          </div>

          <Button
            variants={{
              colors: "sucess",
            }}
            onClick={handlePesquisarClick}
          >
            Pesquisar
          </Button>
        </div>

        <TableRoot.Content>
          <TableRoot.Header
            className={
              "grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr] py-3 rounded-t-lg bg-black-full gap-0 text-white-full text-xs px-5 font-medium"
            }
          >
            <TableRoot.Cell>ID</TableRoot.Cell>
            <TableRoot.Cell>DATA PEDIDO</TableRoot.Cell>
            <TableRoot.Cell>CPF DO COMPRADOR</TableRoot.Cell>
            <TableRoot.Cell>MODO DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>MÉTODO DE PAGAMENTO</TableRoot.Cell>
            <TableRoot.Cell>TOTAL DE COMPRA</TableRoot.Cell>
            <TableRoot.Cell>AÇÕES</TableRoot.Cell>
          </TableRoot.Header>

          {vendas?.map((venda) => (
            <TableRoot.Row
              key={venda.id}
              className="grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr] font-medium  border-gray-75 border-b-1 border-t-0 border-l-0 border-r-0 px-5 py-4 "
            >
              <TableRoot.Cell>{venda.id}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.dataHoraPedido}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.cpfCliente}</TableRoot.Cell>
              <TableRoot.Cell>
                {venda.pedido.isPagamentoOnline ? "Online" : "Presencial"}
              </TableRoot.Cell>
              <TableRoot.Cell>{venda.nomeMetodoPagamento}</TableRoot.Cell>
              <TableRoot.Cell>R$ {venda.valor.toFixed(2)}</TableRoot.Cell>
              <TableRoot.Cell
                className="cursor-pointer"
                onClick={() => {
                  setModal({ ...modal, isAtivo: true, pedido: venda.pedido });
                }}
              >
                Detalhes
              </TableRoot.Cell>
            </TableRoot.Row>
          ))}
        </TableRoot.Content>
      </div>
      <ModalPedidos modal={modal} setModal={setModal} />
      <ToastContainer />
    </BoxComerciante>
  );
};

export default HistoricoVendas;
