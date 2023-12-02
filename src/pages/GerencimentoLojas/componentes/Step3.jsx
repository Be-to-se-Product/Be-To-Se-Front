import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../../../context/Form/FormContext";
import InputRoot from "../../../componentes/Input/InputRoot";
import { orange } from "@mui/material/colors";
import Button from "../../../componentes/Button/Button";
import { Checkbox, Select } from "@mui/material";
import RowDia from "./RowDia";

const Step3 = () => {
  const { register, handleSubmit } = useForm();
  const { setStorage, storage, stateAtual, setStateAtual } =
    useContext(FormContext);
  const submit = (data) => {
    setStorage({ ...storage,...data });
    setStateAtual((prev) => prev + 1);
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`relative mx-auto flex flex-col gap-y-8`}
    >
      <div className="grid grid-rows-[repeat(8,60px)]   h-[300px] overflow-scroll py-10 px-4  ">
        <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4 absolute  py-2 top-0  z-10  bg-white-principal">
          <span>Abre</span>
          <span>Dia</span>
          <span>Abertura</span>
          <span>Fechamento</span>
        </div>

        <RowDia dia="Domingo" register={register} />
        <RowDia dia="Segunda" register={register} />
        <RowDia dia="Terça" register={register} />
        <RowDia dia="Quarta" register={register} />
        <RowDia dia="Quinta" register={register} />
        <RowDia dia="Sexta" register={register} />
        <RowDia dia="Sábado" register={register} />
        <RowDia dia="Feriado" register={register} />
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
        <Button onClick={() => setStateAtual((prev) => prev - 1)}>
          Retroceder
        </Button>
        <Button>Avançar</Button>
      </div>
    </form>
  );
};

export default Step3;
