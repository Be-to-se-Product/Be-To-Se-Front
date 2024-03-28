import React, { useEffect } from "react";
import { Checkbox } from "@mui/material";
import orange from "@mui/material/colors/orange";
import InputRoot from "../../../componentes/Input/InputRoot";

const RowDia = ({ register, dia, watch }) => {
  const ativo = watch(
    `diaSemana.${dia
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()}.isOpen`
  );
  const diaState = watch();

  useEffect(() => {
    console.log(diaState);
  }, [diaState]);

  return (
    <div className=" grid grid-cols-[repeat(4,120px)] items-center   gap-x-4">
      <span>
        <Checkbox
          checked={ativo || false}
          sx={{
            color: orange[800],
            "&.Mui-checked": {
              color: orange[600],
            },
          }}
          {...register(
            `diaSemana.${dia
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()}.isOpen`
          )}
        />
      </span>
      <span>{dia}</span>
      <span>
        <InputRoot.Input
          type="time"
          disabled={!ativo}
          register={register(
            `diaSemana.${dia
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()}.horarioInicio`
          )}
        />
      </span>
      <span>
        <InputRoot.Input
          type="time"
          disabled={!ativo}
          register={register(
            `diaSemana.${dia
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()}.horarioFim`
          )}
        />
      </span>
    </div>
  );
};

export default RowDia;
