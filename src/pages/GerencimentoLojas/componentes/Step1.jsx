import React, { useContext } from "react";
import FormContext from "../../../context/Form/FormContext";
import { useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";
import Button from "../../../componentes/Button/Button";

const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const { setStorage, storage,nextStep,prevStep } = useContext(FormContext);
  const submit = (data,callback) => {
    setStorage({ ...storage,...data });
    
    
  };




  return (
    <form onSubmit={handleSubmit(submit)} className={` flex flex-col gap-y-8`}>
      <div
        className={` w-full  mx-auto grid grid-cols-2  gap-x-8 rounded-lg h-[300px] `}
      >
        <div className=" flex flex-col gap-y-6 ">
          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Nome da loja</InputRoot.Label>
            <InputRoot.Input register={register("nome")}></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Segmento da loja</InputRoot.Label>
            <InputRoot.Input register={register("segmento")}></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Numero de contato</InputRoot.Label>
            <InputRoot.Input
              register={register("telefoneContato")}
            ></InputRoot.Input>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>E-mail de contato</InputRoot.Label>
            <InputRoot.Input
              register={register("emailContato")}
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Perfil do Instagram</InputRoot.Label>
            <InputRoot.Input
              register={register("referenciaInstagram")}
            ></InputRoot.Input>
          </div>

          <div className="flex flex-col gap-y-1">
            <InputRoot.Label>Perfil do facebook</InputRoot.Label>
            <InputRoot.Input
              register={register("referenciaFacebook")}
            ></InputRoot.Input>
          </div>
        </div>
      </div>
      <Button type="submit">Avançar</Button>
    </form>
  );
};

export default Step1;
