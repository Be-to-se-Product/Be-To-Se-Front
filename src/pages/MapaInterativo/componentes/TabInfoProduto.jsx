import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Avaliacao from "../../../componentes/Avaliacao/Avaliacao";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ModalHorario from "../../../componentes/ModalHorario/ModalHorario";
import ContentAvaliacao from "./ContentAvaliacao";
import InfoLoja from "./InfoLoja";

const TabInfoProduto = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="flex w-full justify-center gap-x-4 p-5 overflow-scroll">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            dignissimos suscipit vel ducimus, laborum sit? Quaerat veniam sed
            reiciendis, cum, debitis saepe quae corporis eveniet voluptatem
            beatae asperiores tenetur recusandae. Magnam sapiente autem natus
            architecto culpa. Quisquam maxime rem sunt dolor, rerum veniam
            laborum voluptate beatae velit quaerat expedita necessitatibus saepe
            tenetur similique esse officiis delectus ducimus. Facilis,
            repellendus porro?
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
      {currentPage == 2 && <InfoLoja />}
    </>
  );
};

export default TabInfoProduto;
