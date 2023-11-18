import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Avaliacao from "../../../componentes/Avaliacao/Avaliacao";
import ContentAvaliacao from "./ContentAvaliacao";
import InfoLoja from "./InfoLoja";

const TabInfoProduto = ({produtoSelecionado}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="flex w-full justify-center gap-x-4 p-5 overflow-scroll scrollbar-hide">
        <Tabs
          value={currentPage}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF8C00",
            },

            "& .MuiTabs-scroller": {
              overflow: "scroll !important",
            },
          }}
        >
          <Tab
            label="Sobre"
            sx={{
              "& ": {
                color: "#fff ",
              },
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(0)}
          />
          <Tab
            label="Avaliações"
            sx={{
              "& ": {
                color: "#fff ",
              },
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(1)}
          />

          <Tab
            label="Loja"
            sx={{
              "& ": {
                color: "#fff ",
              },
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(2)}
          />
        </Tabs>
      </div>

      {currentPage == 0 && (
        <div className="p-5">
          <h2 className="font-medium text-xl mb-4">Coca Cola</h2>
          <p className="text-xs">
           {produtoSelecionado?.descricao}
          </p>

          <h3 className="mt-5 mb-4">Caracteristicas</h3>
          <ul className="list-disc px-5">
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
          </ul>
        </div>
      )}

      {currentPage == 1 && (
        <ContentAvaliacao>
          {produtoSelecionado.avaliacao.map((avaliacao) => (
            <Avaliacao
            avaliacao={{
              nome: avaliacao.usuario,
              stars: avaliacao.qtdEstrela,
              comentario:avaliacao.descricao,
              data: avaliacao.data
            }}
          />
          ))}
          
          
        </ContentAvaliacao>
      )}
      {currentPage == 2 && <InfoLoja produtoSelecionado={produtoSelecionado} />}
    </>
  );
};

export default TabInfoProduto;
