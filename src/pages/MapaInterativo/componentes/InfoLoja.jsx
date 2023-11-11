import React, { useState } from "react";
import ModalHorario from "../../../componentes/ModalHorario/ModalHorario";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const InfoLoja = (estabelecimento) => {
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

  const [showModalHorario, setShowModalHorario] = useState(false);
  return (
    <div className="flex flex-col p-5 py-8 gap-y-7 ">
      <div className="flex gap-x-4 items-center ">
        <RoomIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3 className="text-base">Avenida Paulista, 1234</h3>
      </div>

      <div className="flex gap-x-4 items-center relative">
        <QueryBuilderIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3
          className="text-base cursor-pointer"
          onClick={() => setShowModalHorario(!showModalHorario)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowModalHorario(!showModalHorario);
            }
          }}
        >
          Fechado abre seg 8:00 {">"}
        </h3>
      </div>
      <ModalHorario
        agendas={agenda}
        show={showModalHorario}
        className={"right-[-200px] bottom-4 top-[auto] fixed transition z-10 "}
      />
      <div className="flex gap-x-4 items-center ">
        <LocalPhoneIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3 className="text-base">(11) 95383-3389</h3>
      </div>

      <div className="flex gap-x-4 items-center ">
        <LanguageIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3 className="text-base">www.google.com</h3>
      </div>
    </div>
  );
};

export default InfoLoja;
