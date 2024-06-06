import Modal from "@componentes/Modal/Modal";
import FormAdicionar from "./componentes/FormAdicionar";
import FormUpdate from "./componentes/FormUpdate";
import ContentDelete from "./componentes/ContentDelete";
import { useEffect, useState } from "react";
import searchIcon from "@assets/search.svg";
import { MenuItem, Select } from "@mui/material";
import api from "@/services/api/services";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import FileImg from "@assets/file.png";
import { useParams } from "react-router-dom";
import TableRoot from "@/componentes/TableNew/TableRoot";

injectStyle();

const GerenciamentoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [stateForm, setStateForm] = useState(null);
  const [state, setState] = useState(0);
  const [selectedOption, setSelectedOption] = useState("  ");
  const { idEstabelecimento } = useParams();

  const getProdutos = () => {
    toast.loading("Carregando...");
    api
      .get("/produtos/estabelecimento/" + idEstabelecimento)
      .then((res) => {
        toast.dismiss();
        setProdutos(res.data ? res.data : []);
      })
      .catch((err) => {
        console.error(err);
      });
    toast.dismiss();
  };

  // const getProdutosDescription = () => {
  //   api
  //     .get(
  //       "/produtos/pesquisa/" +
  //         idEstabelecimento +
  //         "?pesquisa=" +
  //     )
  //     .then((res) => {
  //       setProdutos(res?.data?.length == 0 ? [] : res?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleCsvImport = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("arquivo", file);
    formData.append("arquivo", file);

    api
      .post("/produtos/upload-csv?secao=" + idEstabelecimento, formData)
      .then(() => {
        toast.success("Produtos importados com sucesso!");
        getProdutos();
      })
      .catch(() => {
        toast.error("Erro ao importar produtos!");
      });
  };

  const handleTxtImport = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("arquivo", file);

    api
      .post("/produtos/upload-txt?secao=" + idEstabelecimento, formData)
      .then(() => {
        toast.success("Produtos importados com sucesso!");
        getProdutos();
      })
      .catch(() => {
        toast.error("Erro ao importar produtos!");
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    orderBy(value);
  };

  const orderBy = (option) => {
    let produtosOrdenados = [];

    switch (option) {
      case "NomeAsc":
        for (let i = 0; i < produtos.length - 1; i++) {
          let auxIndice = i;
          let aux = produtos[i];
          for (let j = i + 1; j < produtos.length; j++) {
            if (produtos[j].nome < produtos[auxIndice].nome) {
              auxIndice = j;
            }
          }
          if (i != auxIndice) {
            produtos[i] = produtos[auxIndice];
            produtos[auxIndice] = aux;
          }
        }
        produtosOrdenados = [...produtos];
        break;

      case "NomeDesc":
        for (let i = 0; i < produtos.length - 1; i++) {
          let auxIndice = i;
          let aux = produtos[i];
          for (let j = i + 1; j < produtos.length; j++) {
            if (produtos[j].nome > produtos[auxIndice].nome) {
              auxIndice = j;
            }
          }
          if (i != auxIndice) {
            produtos[i] = produtos[auxIndice];
            produtos[auxIndice] = aux;
          }
        }
        produtosOrdenados = [...produtos];
        break;

      case "ValueAsc":
        for (let i = 0; i < produtos.length - 1; i++) {
          let auxIndice = i;
          let aux = produtos[i];
          for (let j = i + 1; j < produtos.length; j++) {
            if (produtos[j].preco < produtos[auxIndice].preco) {
              auxIndice = j;
            }
          }
          if (i != auxIndice) {
            produtos[i] = produtos[auxIndice];
            produtos[auxIndice] = aux;
          }
        }
        produtosOrdenados = [...produtos];
        break;

      case "ValueDesc":
        for (let i = 0; i < produtos.length - 1; i++) {
          let auxIndice = i;
          let aux = produtos[i];
          for (let j = i + 1; j < produtos.length; j++) {
            if (produtos[j].preco > produtos[auxIndice].preco) {
              auxIndice = j;
            }
          }
          if (i != auxIndice) {
            produtos[i] = produtos[auxIndice];
            produtos[auxIndice] = aux;
          }
        }
        produtosOrdenados = [...produtos];
        break;
    }

    setProdutos(produtosOrdenados);
  };

  useEffect(() => {
    getProdutos();
    //eslint-disable-next-line
  }, []);

  const openModal = (tipo, id) => {
    changeModal(tipo, id);
  };

  const changeModal = (modal, id) => {
    switch (modal) {
      case "add":
        setStateForm(
          <Modal isVisible={true}>
            <FormAdicionar
              key={state}
              setState={setState}
              fecharModal={changeModal}
              getProdutos={getProdutos}
            />
          </Modal>
        );
        break;
      case "update":
        setStateForm(
          <Modal isVisible={true}>
            <FormUpdate
              fecharModal={changeModal}
              produto={produtos.find((produto) => produto.id === id)}
              getProdutos={getProdutos}
            />
          </Modal>
        );
        break;
      case "delete":
        setStateForm(
          <Modal isVisible={true}>
            <ContentDelete
              fecharModal={changeModal}
              id={id}
              getProdutos={getProdutos}
            />
          </Modal>
        );
        break;
      case "fechar":
        setStateForm(<></>);
        break;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="h-screen  bg-gray-300"></div>
      <section className="w-full  text-2xl mx-[33px]">
        <div className="flex py-20 justify-between ">
          <div className="  relative w-[346px] h-max  bg-white-principal  rounded-lg  shadow-lg">
            <div className="cursor-pointer absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
              <img src={searchIcon} alt="" className="w-full " />
            </div>
            <input
              type="text"
              className="barraPesquisa w-full text-base  rounded-lg px-4 py-2  outline-none  bg-transparent"
              placeholder="Pesquisar produto"
            />
          </div>
          <div className="flex gap-x-4">
            <input
              id="fileCsv"
              type="file"
              className="h-0 w-0 absolute top-0 opacity-0 "
              onChange={(e) => handleCsvImport(e)}
            />
            <input
              id="fileTxt"
              type="file"
              className="h-0 w-0 absolute top-0 opacity-0 "
              onChange={(e) => handleTxtImport(e)}
            />
            <label
              htmlFor="fileCsv"
              className="cursor-pointer rounded-lg flex justify-center items-center bg-orange-principal text-white-principal text-base w-[200px]"
            >
              <img src={FileImg} className="w-auto h-auto mr-2" />
              Importar Csv
            </label>
            <label
              htmlFor="fileTxt"
              className="cursor-pointer rounded-lg flex justify-center items-center bg-orange-principal text-white-principal text-base w-[200px]"
            >
              <img src={FileImg} className="w-auto h-auto mr-2" />
              Importar Txt
            </label>
            <div className="w-[293px] h-max bg-white-principal rounded-lg  shadow-lg">
              <Select
                id="demo-simple-select"
                className="w-full h-[42px]"
                value={selectedOption}
                onChange={handleChange}
              >
                <MenuItem value={"NomeAsc"}>
                  Ordenar por Nome Crescente
                </MenuItem>
                <MenuItem value={"NomeDesc"}>
                  Ordenar por Nome Decrescente
                </MenuItem>
                <MenuItem value={"ValueAsc"}>
                  Ordenar por Valor Crescente
                </MenuItem>
                <MenuItem value={"ValueDesc"}>
                  Ordenar por Valor Decrescente
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8   ">
          <div className="flex justify-center items-center relative  w-full">
            <button
              className="px-4 py-2 bg-orange-principal absolute left-0  text-white-principal rounded-lg text-xl font-medium"
              onClick={() => openModal("add")}
            >
              Cadastar Produto
            </button>
            <h2 className="text-2xl font-medium">Produtos Cadastrados</h2>
          </div>

          <div className="content-product flex gap-x-6 gap-y-8 flex-wrap h-full overflow-scroll scrollbar-hide"></div>

          <TableRoot.Content>
            <TableRoot.Header className="grid-cols-[1.5fr,0.9fr,1fr,1fr,1fr,1fr,0.5fr,1fr] py-3 rounded-t-lg bg-black-full gap-0 text-white-full text-xs px-5 font-medium">
              <TableRoot.Cell className="border-none ">Nome</TableRoot.Cell>

              <TableRoot.Cell className="border-none ">SKU</TableRoot.Cell>
              <TableRoot.Cell className="border-none ">
                Categoria
              </TableRoot.Cell>
              <TableRoot.Cell className="border-none ">Preço</TableRoot.Cell>
              <TableRoot.Cell className="border-none ">
                Preço Oferta
              </TableRoot.Cell>
              <TableRoot.Cell className="border-none ">
                Adicionado
              </TableRoot.Cell>
              <TableRoot.Cell className="border-none ">Status</TableRoot.Cell>
              <TableRoot.Cell className="border-none text-center">
                Ações
              </TableRoot.Cell>
            </TableRoot.Header>

            {produtos.map((produto) => (
              <TableRoot.Row
                className="grid-cols-[1.5fr,0.9fr,1fr,1fr,1fr,1fr,0.5fr,1fr] font-medium  border-gray-75 border-b-1 border-t-0 border-l-0 border-r-0 px-5 py-4 "
                key={produto.id}
              >
                <TableRoot.Cell className="border-none">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black-900 rounded-md ">
                      <img
                        src={produto.imagens[0]}
                        alt=""
                        className="object-cover rounded-md h-full"
                      />
                    </div>
                    <span className="ml-2">{produto.nome}</span>
                  </div>
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  {produto.codigoSku}
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  {produto.categoria}
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  {produto.preco
                    ? "R$" +
                      produto?.preco.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })
                    : "Não possui"}
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  {produto?.precoOferta
                    ? "R$" +
                      produto.precoOferta.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })
                    : "Não possui"}
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  12/08/2004
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  {produto.isAtivo ? "Ativo" : "Inativo"}
                </TableRoot.Cell>
                <TableRoot.Cell className="border-none">
                  <button
                    type="button"
                    onClick={() => changeModal("update", produto.id)}
                  >
                    {" "}
                    Editar
                  </button>
                  {" | "}{" "}
                  <button
                    type="button"
                    onClick={() => changeModal("delete", produto.id)}
                  >
                    Deletar
                  </button>
                </TableRoot.Cell>
              </TableRoot.Row>
            ))}
          </TableRoot.Content>
        </div>
      </section>
      {stateForm}
      <ToastContainer />
    </>
  );
};

export default GerenciamentoProdutos;
