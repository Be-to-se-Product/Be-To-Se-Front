import { Avatar, Rating, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Avaliacao from "@componentes/Avaliacao/Avaliacao";
import InfoLoja from "./InfoLoja";
import ContentAvaliacao from "./ContentAvaliacao";

const TabInfoLoja = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="flex w-full justify-center gap-x-4 p-5">
        <Tabs
          value={currentPage}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF8C00",
            },
          }}
        >
          <Tab
            label="Sobre"
            sx={{
              "&": { color: "#fff " },
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(0)}
          />
          <Tab
            label="Avaliações"
            sx={{
              "&": { color: "#fff " },
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(1)}
          />
        </Tabs>
      </div>

      {currentPage == 0 ? (
        <InfoLoja />
      ) : (
        <ContentAvaliacao>
          <Avaliacao
            avaliacao={{
              nome: "João Silva",
              stars: 3,
              comentario:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vitae nunc aliquam aliquam.",
            }}
          />
          <Avaliacao
            avaliacao={{
              nome: "João Silva",
              stars: 3,
              comentario:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam vitae nunc aliquam aliquam.",
            }}
          />
        </ContentAvaliacao>
      )}
    </>
  );
};

export default TabInfoLoja;
