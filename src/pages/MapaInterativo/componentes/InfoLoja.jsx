import React, { useState } from "react";
import ModalHorario from "../../../componentes/ModalHorario/ModalHorario";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import moment from "moment";
import { converterDiaSemana } from "../../../utils/conversores";

const InfoLoja = ({ produtoSelecionado }) => {
  const { agenda } = produtoSelecionado.estabelecimento;

  const calcularTempo = (horarioInicio, horarioFim) => {
    const dataTimeAtual = moment();
    const horarioInicioMoment = moment(horarioInicio, "HH:mm:ss");
    const horarioFimMoment = moment(horarioFim, "HH:mm:ss");
    return dataTimeAtual.isBetween(horarioInicioMoment, horarioFimMoment);
  };

  const diaAtual = () =>
    agenda.find((element) => {
      return (
        converterDiaSemana[moment().format("dddd")].toLowerCase() ==
        element.dia.toLowerCase()
      );
    });

  const [showModalHorario, setShowModalHorario] = useState(false);
  return (
    <div className="flex flex-col p-5 py-8 gap-y-7 ">
      <div className="flex gap-x-4 items-center ">
        <RoomIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3 className="text-base">{produtoSelecionado.estabelecimento.endereco.rua}, {produtoSelecionado.estabelecimento.endereco.bairro} - N° {produtoSelecionado.estabelecimento.endereco.numero} </h3>
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
          {calcularTempo(diaAtual().horarioInicio, diaAtual().horarioFim) ? (
            <span className="font-semibold text-green-500">Aberto {">"}</span>
          ) : (
            <span className="font-medium text-red-500">
              Fechado, abre as{" "}
              {moment(diaAtual().horarioInicio, "HH:mm:ss").format("HH:mm")}{" "}
              {">"}
            </span>
          )}
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
        <h3 className="text-base">
          {produtoSelecionado.estabelecimento.telefone}
        </h3>
      </div>

      <div className="flex gap-x-4 items-center ">
        <LanguageIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <h3 className="text-base">{produtoSelecionado.estabelecimento.site}</h3>
      </div>
    </div>
  );
};

export default InfoLoja;
