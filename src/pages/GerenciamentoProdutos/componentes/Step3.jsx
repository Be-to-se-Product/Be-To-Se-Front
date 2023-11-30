import React from "react";
import InputRoot from "../../../componentes/Input/InputRoot";
import { useForm } from "react-hook-form";

const Step3 = ({getData,children,dataStorage}) => {

    const {register, handleSubmit} = useForm(); 
  return (
    <form className={`flex  flex-col w-full`}
    onSubmit={handleSubmit(getData)}
    >
      <div className="flex flex-col gap-2 w-full">
        <InputRoot.Label>Descrição</InputRoot.Label>
        <textarea
          cols="30"
          rows="10"
          defaultValue={dataStorage?.descricao}
          className=" border border-gray-800 w-full resize-none outline-none p-4 rounded"
          {...register("descricao")}
        ></textarea>
      </div>
      {children}
    </form>
  );
};

export default Step3;
