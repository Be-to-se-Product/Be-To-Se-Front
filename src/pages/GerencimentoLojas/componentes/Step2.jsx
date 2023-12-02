import React, { useContext } from "react";
import FormContext from "../../../context/Form/FormContext";
import { useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";
import Select from "@mui/material/Select";
import Button from "../../../componentes/Button/Button";
const Step2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setStorage, storage, stateAtual, setStateAtual } =
    useContext(FormContext);
  const submit = (data) => {
    setStorage({ ...storage,...data });
    setStateAtual((prev) => prev + 1);
    console.log(data);
  };
  return (
    <form className={`flex flex-col gap-y-6`} onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col w-10/12  mx-auto h-[300px]  gap-y-4 rounded-lg">
        <div className=" flex  ">
          <div className="flex flex-col gap-y-1 w-2/6 ">
            <InputRoot.Label>CEP</InputRoot.Label>
            <InputRoot.Input register={register("cep")}></InputRoot.Input>
          </div>
        </div>

        <div className="flex  gap-x-8">
          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Logradouro</InputRoot.Label>
            <InputRoot.Input
              register={register("logradouro")}
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1 w-1/6">
            <InputRoot.Label>Numero</InputRoot.Label>
            <InputRoot.Input register={register("numero")}></InputRoot.Input>
          </div>
        </div>

        <div className="flex  gap-x-8 ">
          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Bairro</InputRoot.Label>
            <InputRoot.Input register={register("bairro")}></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Cidade</InputRoot.Label>
            <InputRoot.Input register={register("cidade")}></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Estado</InputRoot.Label>
            <Select
              className="h-11 w-20"
              {...register("estado")}
            >

            </Select>
          </div>
        </div>
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

export default Step2;
