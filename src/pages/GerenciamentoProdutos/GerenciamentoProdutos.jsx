import Card from "./componentes/Card";
import imgProduto from "../../assets/cocacola.svg";
import Modal from "../../componentes/Modal/Modal";

import FormAdicionar from "./componentes/FormAdicionar";
import FormUpdate from "./componentes/FormUpdate";
import ContentDelete from "./componentes/ContentDelete";
import { useEffect, useState } from "react";
import axios from "axios";
import produtoIcon from "../../assets/product-icon.svg";
import negocioIcon from "../../assets/negocio.svg";
import shopIcon from "../../assets/shop.svg";
import datePage from "../../assets/datePage.svg";
import backIcon from "../../assets/back.svg";
import searchIcon from "../../assets/search.svg";
import downIcon from "../../assets/down.svg";
import logo from "../../assets/logo.png";

const GerenciamentoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [stateForm, setStateForm] = useState(null);

  const getProdutos = () => {
    axios
      .get("http://localhost:8080/produtos")
      .then((res) => {
        setProdutos(res.data.length == 0 ? [] : res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProdutos();
    console.log(produtos);
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
          <FormAdicionar fecharModal={closeModal} getProdutos={getProdutos} />
        );
        break;
      case "update":
        setStateForm(
          <FormUpdate
            fecharModal={closeModal}
            produtos={produtos}
            getProdutos={getProdutos}
            id={id}
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
        <aside className="bg-black-900  flex flex-col min-w-[350px]">
          <div className="h-full w-full">
            <div className="w-full h-1/4 bg-orange-principal"></div>
            <div className="relative pt-20 px-2">
              <div className="logo flex items-end  absolute top-[-80px] ">
                <img src={logo} alt="" className="w-[130px] rounded-full" />
                <h2 className="font-medium py-2 text-xl text-white-principal">
                  Pão de açucar
                </h2>
              </div>

              <div className="content-option mt-10 px-7 w-full">
                <nav>
                  <ul className="flex flex-col gap-4">
                    <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                      <img src={produtoIcon} alt="" className="w-8" />
                      Gerenciar Produtos
                    </li>
                    <li className="text-lg text-white-principal flex gap-x-4  mb-5 items-center">
                      <img src={negocioIcon} alt="" className="w-8" />
                      <h2>Análise de negócio</h2>{" "}
                    </li>
                    <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                      <img src={shopIcon} alt="" className="w-8" />
                      <h2>Históricos de venda</h2>
                    </li>
                    <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                      <img src={datePage} alt="" className="w-8" />
                      <h2> Dados cadastrais </h2>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="w-100 flex px-7 mb-8 cursor-pointer text-xl text-white-principal gap-x-4">
            <img src={backIcon} alt="" className="w-6" />
            Sair
          </div>
        </aside>

        <section className="w-full  text-2xl mx-[33px]">
          <div className="flex py-20 justify-between ">
            <div className="  relative w-[346px] h-max bg- bg-white-principal rounded-lg  shadow-lg">
              <div className="absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
                <img src={searchIcon} alt="" className="w-full " />
              </div>
              <input
                type="text"
                className=" w-full text-base  rounded-lg px-4 py-2  outline-none  bg-transparent"
              placeholder="Pesquisar produto"/>
            </div>
            <div className="flex gap-x-4">
              <div className="  relative w-[193px] h-max bg-white-principal rounded-lg  shadow-lg">
                <div className="absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
                  <img src={downIcon} alt="" className="w-full " />
                </div>
                <input
                  type="text"
                  className=" w-full text-base  rounded-lg px-4 py-2 outline-none  bg-transparent"
                />
              </div>
              <div className="  relative w-[193px] h-max bg-white-principal rounded-lg  shadow-lg">
                <div className="absolute right-5 top-0 w-6 h-full flex  items-center justify-center">
                  <img src={downIcon} alt="" className="w-full " />
                </div>
                <input
                  type="text"
                  className=" w-full text-base  rounded-lg px-4 py-2 outline-none  bg-transparent"
                />
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
              {produtos.map((produto, indice) => (
                <Card key={indice} product={produto} openModal={openModal} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Modal isVisible={isVisibleModal}>{stateForm}</Modal>
    </>
  );
};

export default GerenciamentoProdutos;
