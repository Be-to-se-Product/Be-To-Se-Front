import { Rating, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Avaliacao from "@componentes/Avaliacao/Avaliacao";
import ContentAvaliacao from "./ContentAvaliacao";
import InfoLoja from "./InfoLoja";
import RatingComponent from "@/pages/TelaProduto/componentes/StarAvaliacao";

const TabInfoProduto = ({ produtoSelecionado }) => {
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
              overflow: "hidden !important",
            },
          }}
          className="scrollbar-hide"
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
          <p className="text-xs">{produtoSelecionado?.descricao}</p>
        </div>
      )}

      {currentPage == 1 && (
        <ContentAvaliacao>
          {produtoSelecionado?.avaliacao?.map((avaliacao) => (
            <div key={avaliacao} className="flex flex-col gap-y-4 mb-5">
              <div className="flex gap-x-4">
                <h2>{avaliacao.usuario}</h2>
                <span>
                  <Rating
                    nome="text-feedback"
                    value={Number(produtoSelecionado?.mediaAvaliacao)}
                    readOnly
                    size="small"
                  />
                </span>
              </div>
              <hr className="border-gray-400" />
              <p>{avaliacao.descricao}</p>
            </div>
          ))}
          {produtoSelecionado.avaliacao?.length <= 0 && (
            <>Não há avaliações por enquanto</>
          )}
        </ContentAvaliacao>
      )}
      {currentPage == 2 && <InfoLoja produtoSelecionado={produtoSelecionado} />}
    </>
  );
};

export default TabInfoProduto;
