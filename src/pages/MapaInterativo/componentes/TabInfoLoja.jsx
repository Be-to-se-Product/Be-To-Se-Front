import { Avatar, Rating, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Avaliacao from "../../../componentes/Avaliacao/Avaliacao";

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
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(0)}
          />
          <Tab
            label="Avaliações"
            sx={{
              "&.Mui-selected": {
                color: "#FF8C00",
              },
            }}
            onClick={() => setCurrentPage(1)}
          />
        </Tabs>
      </div>

      {currentPage == 0 ? (
        <div className="flex flex-col px-5 py-8 gap-y-7 ">
          <div className="flex gap-x-4 items-center ">
            <span>
              <img src="src/assets/shop.svg" alt="" className="w-6" />
            </span>
            <h3 className="text-sm">Avenida Paulista, 1234</h3>
          </div>

          <div className="flex gap-x-4 items-center ">
            <span>
              <img src="src/assets/shop.svg" alt="" className="w-6" />
            </span>
            <h3 className="text-sm">Avenida Paulista, 1234</h3>
          </div>

          <div className="flex gap-x-4 items-center ">
            <span>
              <img src="src/assets/shop.svg" alt="" className="w-6" />
            </span>
            <h3 className="text-sm">Avenida Paulista, 1234</h3>
          </div>

          <div className="flex gap-x-4 items-center ">
            <span>
              <img src="src/assets/shop.svg" alt="" className="w-6" />
            </span>
            <h3 className="text-sm">Avenida Paulista, 1234</h3>
          </div>
        </div>
      ) : (
        <div className="px-5 h-20 flex  p-4">
          <div className="flex flex-col h-60 gap-y-4 overflow-auto py-4  ">
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
          </div>
        </div>
      )}
    </>
  );
};

export default TabInfoLoja;
