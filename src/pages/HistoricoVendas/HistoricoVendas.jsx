import React, { useState, useEffect } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import InputRoot from "../../componentes/Input/InputRoot";
import Button from "../../componentes/Button/Button";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {
  MenuItem,
  Pagination,
  Select
} from "@mui/material";
import ModalPedidos from "./componentes/ModalPedidos";
import TableRoot from "../../componentes/Table/TableRoot";
import moment from "moment";

const HistoricoVendas = () => {
  const [isModal, setIsModal] = useState(false);
  const [vendas, setVendas] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [metodosPagamentos, setMetodosPagamentos] = useState([]);
  const [metodoPagamentoSelecionado, setMetodoPagamentoSelecionado] = useState('');
  const [showOptions, setShowOptions] = useState();
  const [pedidoSelecionadoIndex, setPedidoSelecionadoIndex] = useState(null);
  const [de, setDe] = useState(null);
  const [ate, setAte] = useState(null);
  const [status, setStatus] = useState(null);
  const statusOptions = ['Entregue', 'Cancelado'];

  const fetchHistoricoVendas = () => {
    toast.loading("Carregando histórico de vendas...");
    api.get(`/historico-vendas/1`, {
      params: {
        page: page,
        size: size,
      },
    })
      .then(response => {
        toast.dismiss();
        const responseData = response.data;
        if (responseData.content.length === 0) {
          toast.info("Não existem vendas.");
        }
        setVendas(responseData.content);
        setPage(responseData.number);
        setSize(responseData.size);
      })
      .catch(error => {
        console.error(error);
        toast.dismiss();
        toast.error("Erro ao carregar o histórico de vendas.");
      });
  };


  useEffect(() => {
    getMetodosPagamento();
  }, []);


  // useEffect(() => {
  //   console.log(de);
  //   console.log(ate);
  //   console.log(status);
  //   console.log(metodoPagamentoSelecionado);
  //   console.log(vendas);
  //   console.log(page);
  //   console.log(size);
  // }, [de, ate, status, metodoPagamentoSelecionado]);

  const getHistoricoVendasFiltrado = () => {
    toast.loading("Buscando vendas...");
    const params = {
      de: de,
      ate: ate,
      status: status? status: null,
      metodoPagamento: metodoPagamentoSelecionado? metodoPagamentoSelecionado : null,
      page: !page ? 0 : page,
      size: !size ? 30 : size,
    };

    api.get(`/historico-vendas/filtro/1`, { params })
      .then(response => {
        toast.dismiss();
        console.log(response.status);
        console.log(response.data);
        const responseData = response.data;
        if (responseData.length === 0) {
          toast.info("Não existem vendas.");
          return;
        }
        console.log();
        setVendas(responseData.content? responseData.content : []);
        setPage(responseData.number);
        setSize(responseData.size);
      })
      .catch(error => {
        console.error(error);
        toast.error("Erro ao carregar o histórico de vendas.");
        toast.dismiss();
      });
  };


  const getMetodosPagamento = () => {
    toast.loading("Carregan do métodos de pagamento...");
    api.get(`historico-vendas/1/metodos-pagamento`)
      .then(response => {
        toast.dismiss();
        setMetodosPagamentos(response.data);
      })
      .catch(error => {
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
    const formattedDate = moment.utc(event.target.value).format("YYYY-MM-DDTHH:mm:ss");
    setDe(formattedDate);
  };
  
  const handleAteChange = (event) => {
    const formattedDate = moment.utc(event.target.value).format("YYYY-MM-DDTHH:mm:ss");
    setAte(formattedDate);
  };
  

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePesquisarClick = () => {
    getHistoricoVendasFiltrado();
  };

  useEffect(() => {
    fetchHistoricoVendas();
  }, [page, size]);

  const exportar = () => {
    const idEstabelecimento = 1;
    api.get(`/download-txt/${idEstabelecimento}`, { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `transacoes_${idEstabelecimento}.txt`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Download error', error);
        toast.error("Erro ao exportar o histórico de vendas.");
      });
  };


  return (
    <main className="flex bg-background">
      <MenuComerciante />
      <BoxComerciante className="flex flex-col pt-10 justify-around">
        <div className="w-full text-center font-semibold mb-4">
          <h2>Histórico de Vendas</h2>
        </div>
        <div className="w-full flex justify-end mb-4">
          <Button className="bg-green-600 h-max text-white-principal w-max mr-2"
            onClick={exportar}>
            <DownloadIcon className="mr-2" />
            Exportar histórico
          </Button>
          <Button className="bg-green-600 h-max text-white-principal w-max mr-2">
            <FileUploadIcon className="mr-2" />
            Importar histórico
          </Button>
        </div>
        <div className="filter flex gap-x-4 w-full justify-between items-end bg-white-principal px-8 py-4 rounded ">
          <div className="flex flex-col flex-1">
            <InputRoot.Label>De:</InputRoot.Label>
            <InputRoot.Input
              type="date"
              className="bg-white-principal rounded-md"
              placeholder="De: "
              onChange={handleDeChange}
            ></InputRoot.Input>
          </div>
          <div className="flex flex-col flex-1">
            <InputRoot.Label>Até: </InputRoot.Label>
            <InputRoot.Input
              type="date"
              className=" bg-white-principal px-1 rounded-md"
              placeholder="De: "
              onChange={handleAteChange}
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col flex-[2]">
            <InputRoot.Label>Status </InputRoot.Label>

            <Select className="w-full h-10 bg-white-principal" onChange={handleStatusChange} value={status}>
              {statusOptions.map((statusOption, index) => (
                <MenuItem key={index} value={statusOption}>
                  {statusOption || 'Selecione um status'}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col flex-[2]">
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

          <Button className=" bg-green-600 h-max text-white-principal w-max"
            onClick={handlePesquisarClick}>
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

          {vendas?.map((venda, index) => (
            <TableRoot.Row className={`grid-cols-[1fr,1.5fr,2fr,2fr,3fr,2fr,1.5fr] ${index % 2 != 0 ? "bg-[#F8F9FA]" : "bg-white-principal"}`} key={venda.id}>
              <TableRoot.Cell>{venda.id}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.dataHoraPedido}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.cpfCliente}</TableRoot.Cell>
              <TableRoot.Cell>{venda.pedido.isPagamentoOnline ? "Online" : "Presencial"}</TableRoot.Cell>
              <TableRoot.Cell>{venda.nomeMetodoPagamento}</TableRoot.Cell>
              <TableRoot.Cell>R$ {venda.valor.toFixed(2)}</TableRoot.Cell>
              <TableRoot.Cell className="cursor-pointer" onClick={() => {
                setPedidoSelecionadoIndex(index)
                setIsModal(!isModal)
              }}>Detalhes</TableRoot.Cell>
            </TableRoot.Row>
          ))}
        </TableRoot.Content>
        {isModal && (
          <ModalPedidos
            setIsModal={setIsModal}
            isModal={isModal}
            pedidos={vendas}
            pedidoSelecionadoIndex={pedidoSelecionadoIndex}
          />
        )}
        <Pagination
          count={vendas?.totalPages}
          page={page + 1}
          shape="rounded"
          className="mx-auto"
          onChange={(event, value) => setPage(value - 1)}
        />
      </BoxComerciante>
      <ToastContainer></ToastContainer>
    </main>
  );
};

export default HistoricoVendas;
