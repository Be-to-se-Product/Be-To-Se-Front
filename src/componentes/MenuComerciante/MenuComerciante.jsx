import React from "react";
import backIcon from "../../assets/back.svg";
import logo from "../../assets/logo.png";
import produtoIcon from "../../assets/product-icon.svg";
import negocioIcon from "../../assets/negocio.svg";
import shopIcon from "../../assets/shop.svg";
import datePage from "../../assets/datePage.svg";
import downIcon from "../../assets/down.svg";
import { Link } from "react-router-dom";

const MenuComerciante = () => {
  return (
    <aside className="bg-black-900   flex flex-col h-screen min-w-[350px] max-w-[350px]">
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
              <Link to="/GerenciamentoProdutos">
                <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                  <img src={produtoIcon} alt="" className="w-8" />
                  Gerenciar Produtos
                </li>
              </Link>
              <Link to="/GerenciamentoLojas">
                <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                  <img src={produtoIcon} alt="" className="w-8" />
                  Gerenciar Lojas
                </li>
              </Link>
                <li className="text-lg text-white-principal flex gap-x-4  mb-5 items-center">
                  <img src={negocioIcon} alt="" className="w-8" />
                  <h2>Análise de negócio</h2>{" "}
                </li>
                <Link to="/HistoricoVendas">
                <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center" onClick={()=>router}  >
                  <img src={shopIcon} alt="" className="w-8" />
                  <h2>Históricos de venda</h2>
                </li>
                </Link>

                <Link to="/DadosCadastrais">
                <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
                  <img src={datePage} alt="" className="w-8" />
                  <h2> Dados cadastrais </h2>
                </li>
                </Link>
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
  );
};

export default MenuComerciante;
