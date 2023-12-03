import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../../../context/Form/FormContext";
import InputRoot from "../../../componentes/Input/InputRoot";
import { orange } from "@mui/material/colors";
import Button from "../../../componentes/Button/Button";
import { Checkbox, Select } from "@mui/material";
import RowDia from "./RowDia";

const Step3 = () => {
  const { register, handleSubmit,watch } = useForm();
  const { setStorage, storage, stateAtual, nextStep,prevStep } =
    useContext(FormContext);
  const submit = (data,callback) => {
    setStorage({ ...storage,...data });
    callback?.();
  };


const validarStep = () => {
  const campos = watch();
  console.log(campos.diaSemana);
  return Object.entries(campos.diaSemana).find(([key,value])=>value.isOpen && (value.horarioInicio.length>0 || value.horarioFim.length>0)) ? true : false;
}

  const next = () => {
  if(validarStep()){
    handleSubmit((data)=>{submit(data,nextStep)})();
  }
  };

  const prev = () => {
    handleSubmit((data)=>{submit(data)})();
    prevStep()
  };
  
  
  return (
    <form
      className={`relative mx-auto flex flex-col gap-y-8 ${stateAtual!=2 && "hidden"}`}
    >
      <div className="text-center">Informe no minimo um horário de funcionamento</div>
      <div className="grid grid-rows-[repeat(8,60px)]   h-[250px] overflow-scroll py-8 px-4   ">
        <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4 absolute  py-2 top-10   z-10  bg-white-principal border-b">
          <span>Abre</span>
          <span>Dia</span>
          <span>Abertura</span>
          <span>Fechamento</span>
        </div>

        <RowDia dia="Domingo" register={register} watch={watch} />
        <RowDia dia="Segunda" register={register} watch={watch} />
        <RowDia dia="Terça" register={register} watch={watch}/>
        <RowDia dia="Quarta" register={register} watch={watch}/>
        <RowDia dia="Quinta" register={register} watch={watch}/>
        <RowDia dia="Sexta" register={register} watch={watch}/>
        <RowDia dia="Sábado" register={register} watch={watch}/>
        <RowDia dia="Feriado" register={register} watch={watch}/>
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
      <Button type="button" onClick={prev}>
          Retroceder
        </Button>
        <Button type="button" onClick={next}>Avançar</Button>
      </div>
    </form>
  );
};

export default Step3;
