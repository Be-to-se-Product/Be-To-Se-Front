import Card from "./componentes/Card";
import Modal from "../../componentes/Modal/Modal";
import FormAdicionar from "./componentes/FormAdicionar";
import FormUpdate from "./componentes/FormUpdate";
import ContentDelete from "./componentes/ContentDelete";
import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { MenuItem, Select } from "@mui/material";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { descriptografar } from "../../utils/Autheticated";
import FileImg from "../../assets/file.png";

injectStyle();

const GerenciamentoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [stateForm, setStateForm] = useState(null);
  const [state, setState] = useState(0);
  const idEstabelecimento = descriptografar(sessionStorage.getItem("ID"));
  const [selectedOption, setSelectedOption] = useState("Filtro");

  const getProdutos = () => {
    //toast.loading("Carregando...");
    api
      .get("/produtos/estabelecimento/" + idEstabelecimento)
      .then((res) => {
        //toast.dismiss();
        setProdutos(res.data.length == 0 ? [] : res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProdutosDescription = () => {

    api
    .get("/produtos/pesquisa/" + idEstabelecimento + "?pesquisa=" + document.querySelector(".barraPesquisa").value)
    .then((res) => {
      setProdutos(res.data.length == 0 ? [] : res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleCsvImport = (event) => {
    console.log("teste2")
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    api
      .post("/produtos/upload-csv?secao=" + 1, formData)
      .then((res) => {
        toast.success("Produtos importados com sucesso!");
        getProdutos();
      })
      .catch((err) => {
        toast.error("Erro ao importar produtos!");
        console.log(err);
      });
  }



  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    orderBy(value);
  }

  const orderBy = (option) => {
    let produtosOrdenados = [];

    switch(option){
      case "NomeAsc":
        for (let i = 0; i < produtos.length - 1; i++){
            let auxIndice = i;
            let aux = produtos[i];
            for (let j = i + 1;j < produtos.length; j++){
                if (produtos[j].nome < produtos[auxIndice].nome){
                    auxIndice = j;
                }
            }
            if(i != auxIndice){
              produtos[i] = produtos[auxIndice];
              produtos[auxIndice] = aux;
            }
          }
          produtosOrdenados = [...produtos];
          break;

        case "NomeDesc":
          for (let i = 0; i < produtos.length - 1; i++){
            let auxIndice = i;
            let aux = produtos[i];
            for (let j = i + 1;j < produtos.length; j++){
                if (produtos[j].nome > produtos[auxIndice].nome){
                    auxIndice = j;
                }
            }
            if(i != auxIndice){
              produtos[i] = produtos[auxIndice];
              produtos[auxIndice] = aux;
            }
          }
          produtosOrdenados = [...produtos];
          break;

        case "ValueAsc":
          for (let i = 0; i < produtos.length - 1; i++){
            let auxIndice = i;
            let aux = produtos[i];
            for (let j = i + 1;j < produtos.length; j++){
                if (produtos[j].preco < produtos[auxIndice].preco){
                    auxIndice = j;
                }
            }
            if(i != auxIndice){
              produtos[i] = produtos[auxIndice];
              produtos[auxIndice] = aux;
            }
          }
          produtosOrdenados = [...produtos];
          break;

        case "ValueDesc":

          for (let i = 0; i < produtos.length - 1; i++){
            let auxIndice = i;
            let aux = produtos[i];
            for (let j = i + 1;j < produtos.length; j++){
                if (produtos[j].preco > produtos[auxIndice].preco){
                    auxIndice = j;
                }
            }
            if(i != auxIndice){
              produtos[i] = produtos[auxIndice];
              produtos[auxIndice] = aux;
            }
          }
          produtosOrdenados = [...produtos];
          break;
      }
      
      
    setProdutos(produtosOrdenados);
  }

  useEffect(() => {

    getProdutos();
  }, []);

  const openModal = (tipo, id) => {
    setIsVisibleModal(true);
    changeModal(tipo, id);
  };

  const closeModal = () => {
    setIsVisibleModal(false);
  };

  const changeModal = (modal, id) => {
    switch (modal) {
      case "add":
        setStateForm(
          <FormAdicionar
            key={state}
            setState={setState}
            fecharModal={closeModal}
            getProdutos={getProdutos}
          />
        );
        break;
      case "update":
        console.log(produtos.find((produto) => produto.id === id));
        setStateForm(
          <FormUpdate
            fecharModal={closeModal}
            produto={produtos.find((produto) => produto.id === id)}
            getProdutos={getProdutos}
          />
        );
        break;
      case "delete":
        setStateForm(
          <ContentDelete
            fecharModal={closeModal}
            id={id}
            getProdutos={getProdutos}
          />
        );
        break;
      default:
        return "";
    }
  };

  return (
    <>
      <main className="flex h-screen bg-black-300">
        <MenuComerciante />
        <div className="h-screen min-w-[350px] max-w-[350px] bg-gray-300"></div>
        <section className="w-full  text-2xl mx-[33px]">
          <div className="flex py-20 justify-between ">
            <div className="  relative w-[346px] h-max  bg-white-principal  rounded-lg  shadow-lg">
              <div onClick={() => getProdutosDescription()} className="cursor-pointer absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
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
              <label htmlFor="fileCsv"
                className="cursor-pointer rounded-lg flex justify-center items-center bg-orange-principal text-white-principal text-base w-[200px]">
                  <img src={FileImg} className="w-auto h-auto mr-2" />
                  Importar Produtos
              </label>
              <div className="w-[293px] h-max bg-white-principal rounded-lg  shadow-lg">
                <Select
                  id="demo-simple-select"
                  className="w-full h-[42px]"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <MenuItem value={"NomeAsc"}>Ordenar por Nome Crescente</MenuItem>
                  <MenuItem value={"NomeDesc"}>Ordenar por Nome Decrescente</MenuItem>
                  <MenuItem value={"ValueAsc"}>Ordenar por Valor Crescente</MenuItem>
                  <MenuItem value={"ValueDesc"}>Ordenar por Valor Decrescente</MenuItem>
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

            <div className="content-product flex gap-x-6 gap-y-8 flex-wrap h-full overflow-scroll">
              {produtos.map((produto) => (
                produto.isAtivo ?
                <Card
                  key={produto.id}
                  produto={produto}
                  openModal={openModal}
                  color="#F9F9F9"
                /> : 
                <Card
                  key={produto.id}
                  produto={produto}
                  openModal={openModal}
                  color="#C0B7B7"
                />
            
              ))}
            </div>
          </div>
        </section>
      </main>
      <Modal isVisible={isVisibleModal}>{stateForm}</Modal>
      <ToastContainer />
    </>
  );
};

export default GerenciamentoProdutos;
