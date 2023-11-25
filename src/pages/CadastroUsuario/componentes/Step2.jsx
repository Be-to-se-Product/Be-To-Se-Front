import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";
import { validarEmail } from "../../../utils/validadores";

const Step2 = ({ getDataForm,children,data}) => {
  const { register, formState, handleSubmit,getValues } = useForm();

useEffect(()=>console.log(data),[])

  const getData = (data) => {
    getDataForm(data);
  };


  const message = {
    required: "Esse campo não pode ser nulo",
    email: "Email inválido",
    confSenha: "As senhas não coincidem",
  }

  const schemaValidation = {
    email: {
      required: true,
      validate: {
        email: (value) => validarEmail(value),
      },
    },
    senha: {
      required: true,
    },
    confSenha: {
      validate: {
        confSenha: (value) => value == getValues("senha"),
      },
    },
  };
  
  return (
    <form
      className={`flex flex-col gap-y-4 bg-white-principal p-10 rounded-sm `}
      onSubmit={handleSubmit(getData)}
        autocomplete={"off"}
    >
      <div>
        <InputRoot.Input
          type="text"
          placeholder="Nome"
          defaultValue={data?.email}
          register={register("email", schemaValidation.email)}
        >
          <InputRoot.Label>Email</InputRoot.Label>
        </InputRoot.Input>
        <span className="text-xs font-medium text-red-600">
          {formState?.errors?.email?.type &&
            message[formState?.errors?.email?.type]}
        </span>
      </div>

      <div className="flex flex-col gap-y-4  ">
        <InputRoot.Input
          type="password"
          placeholder="Nome"
          defaultValue={data?.senha}
          register={register("senha",schemaValidation.senha)}
        >
          <InputRoot.Label>Senha</InputRoot.Label>
        </InputRoot.Input>

        <span className="text-xs font-medium text-red-600">
          {formState?.errors?.senha?.type &&
            message[formState?.errors?.senha?.type]}
        </span>
      </div>

      <div className="flex flex-col gap-y-4  ">
        <InputRoot.Input
          type="password"
          placeholder="Nome"
          defaultValue={data?.confSenha}
          register={register("confSenha",schemaValidation.confSenha)}
        >
          <InputRoot.Label>Confirme sua senha</InputRoot.Label>
        </InputRoot.Input>
        <span className="text-xs font-medium text-red-600">
          {formState?.errors?.confSenha?.type &&
            message[formState?.errors?.confSenha?.type]}
        </span>
      </div>
      
     {children}
    </form>
  );
};

export default Step2;
