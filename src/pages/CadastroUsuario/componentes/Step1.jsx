import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputRoot from "@componentes/Input/InputRoot";
import InputDate from "@componentes/InputDate/InputDate";
import { validarCpf } from "@utils/validadores";
import {
  inputFormatoTelefone,
  mascaraFormatoCpf,
  removerMascaraTelefone,
} from "@utils/formatadores";
import moment from "moment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Step1 = ({ getDataForm, children, data }) => {
  const { register, formState, handleSubmit } = useForm();
  const getData = (dataForm) => {
    getDataForm(dataForm);
  };

  const message = {
    caractereEspecial: "Esse campo aceita somente letras",
    tamanho: "O nome precisa ter no mínimo 3 caracteres",
    required: "Esse campo não pode ser nulo",
    validarDataNascimento: "Você precisa ter mais de 18 anos",
    validarCpf: "CPF inválido",
    validarTelefone: "Telefone inválido",
  };

  const schemaValidation = {
    nome: {
      min: 3,
      required: true,
    },
    cpf: {
      required: true,
      validate: {
        validarCpf: (value) => validarCpf(value),
      },
    },
    genero: {
      required: true,
      validate: {
        tamanho(value) {
          return (
            value == "Masculino" || value == "Feminino" || value == "Outro"
          );
        },
      },
    },
    dtNascimento: {
      required: true,
      validate: {
        validarDataNascimento(value) {
          return moment().year() - moment(value, "YYYY-mm-dd").year() >= 18;
        },
      },
    },
    telefone: {
      required: true,
      validate: {
        validarTelefone(value) {
          const valueTelefone = removerMascaraTelefone(value);
          return valueTelefone.length == 11;
        },
      },
    },
  };
  return (
    <form
      className={`flex flex-col gap-y-4 bg-white-principal p-10 rounded-sm `}
      onSubmit={handleSubmit(getData)}
      autoComplete={"off"}
    >
      <div className="flex flex-col ">
        <InputRoot.Input
          type="text"
          placeholder="Informe o seu nome completo"
          register={register("nome", schemaValidation.nome)}
          defaultValue={data?.nome}
        >
          <InputRoot.Label>Nome </InputRoot.Label>
        </InputRoot.Input>
        <span className="text-xs font-medium text-red-600">
          {formState?.errors?.nome?.type &&
            message[formState?.errors?.nome?.type]}
        </span>
      </div>

      <div className="grid grid-cols-[2fr,1.5fr] gap-x-4">
        <div>
          <InputRoot.Input
            type="text"
            placeholder="Informe o seu CPF"
            maxlength={14}
            register={register("cpf", schemaValidation.cpf)}
            defaultValue={data?.cpf}
            onInput={(e) => {
              e.target.value = mascaraFormatoCpf(e.target.value);
            }}
          >
            <InputRoot.Label>CPF</InputRoot.Label>
          </InputRoot.Input>
          <span className="text-xs font-medium text-red-600">
            {formState?.errors?.cpf?.type &&
              message[formState?.errors?.cpf?.type]}
          </span>
        </div>
        <div className="flex flex-col">
          <InputRoot.Label>Gênero</InputRoot.Label>
          <Select
            className="h-[42px]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={data?.genero}
            {...register("genero", schemaValidation.genero)}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Feminino"}>Feminino</MenuItem>
            <MenuItem value={"Outro"}>Outro</MenuItem>
          </Select>
          <span className="text-xs font-medium text-red-600">
            {formState?.errors?.genero?.type &&
              message[formState?.errors?.genero?.type]}
          </span>
        </div>
      </div>
      <div className="flex gap-x-4  ">
        <div>
          <div className="flex flex-col">
            <InputRoot.Label>Data de nascimento</InputRoot.Label>
            <InputDate
              defaultValue={data?.dtNascimento}
              register={register("dtNascimento", schemaValidation.dtNascimento)}
            />
          </div>
          <span className="text-xs font-medium text-red-600">
            {formState?.errors?.dtNascimento?.type &&
              message[formState?.errors?.dtNascimento?.type]}
          </span>
        </div>
        <div>
          <InputRoot.Input
            type="tel"
            placeholder="Informe seu telefone"
            register={register("telefone", schemaValidation.telefone)}
            defaultValue={data?.telefone}
            onInput={(e) => {
              e.target.value = inputFormatoTelefone(e.target.value);
            }}
          >
            <InputRoot.Label>Telefone</InputRoot.Label>
          </InputRoot.Input>
          <span className="text-xs font-medium text-red-600">
            {formState?.errors?.telefone?.type &&
              message[formState?.errors?.telefone?.type]}
          </span>
        </div>
      </div>
      {children}
    </form>
  );
};

export default Step1;
