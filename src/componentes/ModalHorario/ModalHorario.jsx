import React from "react";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import moment from "moment";
import RowHorario from "./componentes/RowHorario";

const ModalHorario = ({ show, agendas, className }) => {
  const converterDiaSemana = {
    Sunday: "Domingo",
    Monday: "Segunda Feira",
    Tuesday: "Terça Feira",
    Wednesday: "Quarta Feira",
    Thursday: "Quinta Feira",
    Friday: "Sexta Feira",
    Saturday: "Sábado",
  };

  return (
    <div
      className={`w-80 full rounded p-5 absolute shadow-xl top-[-350px] bg-white-principal border transition-opacity text-black-900 ${
        !show && "invisible"
      } ${!show && "opacity-0"}  ${className}`}
    >
      <h2 className="text-center border-b-2 border-black-400-2 pb-2 border-orange-principal text-orange-500 font-medium">
        Horários de atendimento
      </h2>

      {agendas.map((element) => (
        <div className="flex justify-between p-2 border-b mt-2 border-black-400">
          <RowHorario
            isAtual={converterDiaSemana[moment().format("dddd")] == element.dia}
            agenda={element}
          />
        </div>
      ))}
    </div>
  );
};

export default ModalHorario;
