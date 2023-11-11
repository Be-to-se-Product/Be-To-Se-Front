import { Avatar, Rating, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avaliacao from "../../../componentes/Avaliacao/Avaliacao";
import LanguageIcon from '@mui/icons-material/Language';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ModalHorario from "../../../componentes/ModalHorario/ModalHorario";

const TabInfoProduto = () => {


  const [currentPage, setCurrentPage] = useState(0);
  const agenda = [
    {
      dia: "Segunda Feira",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Terça Feira",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Quarta Feira",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Quinta Feira",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Sexta Feira",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Sábado",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Domingo",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
    {
      dia: "Feriados",
      horarioComeco: "15:00",
      horarioFim: "16:00",
    },
  ];




  const [showModalHorario,setShowModalHorario] = useState(false)

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

          <Tab
            label="Loja"
            sx={{
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
      {currentPage == 2 && (
        <div className="flex flex-col p-5 py-8 gap-y-7 ">
          <div className="flex gap-x-4 items-center ">
          <RoomIcon sx={{
            "fontSize":"40px"
          }}/>
            <h3 className="text-base">Avenida Paulista, 1234</h3>
          </div>

          <div className="flex gap-x-4 items-center relative">
           <QueryBuilderIcon sx={{
            "fontSize":"40px"
          }}/>
            <h3 className="text-base cursor-pointer" onClick={()=>setShowModalHorario(!showModalHorario)}>Fechado abre seg 8:00 {">"}</h3>
            <ModalHorario agendas={agenda} show={showModalHorario} className={"right-[-200px] transition "}/>
          </div>

          <div className="flex gap-x-4 items-center ">
            <LocalPhoneIcon sx={{
            "fontSize":"40px"
          }}/>
            <h3 className="text-base">(11) 95383-3389</h3>
          </div>

          <div className="flex gap-x-4 items-center ">
            <LanguageIcon sx={{
            "fontSize":"40px"
          }}/>
            <h3 className="text-base">www.google.com</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default TabInfoProduto;
