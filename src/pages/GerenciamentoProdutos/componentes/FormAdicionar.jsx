import axios from "axios";
import React, { useState } from "react";
import { get, useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";
import Button from "../../../componentes/Button/Button";
import {
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepButton,
  StepLabel,
  Stepper,
} from "@mui/material";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";

const FormAdicionar = ({ fecharModal, getProdutos }) => {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);

  const adicionarProduto = (data) => {
    data.urlImagem = "sdsds";
    axios
      .post("http://localhost:8080/produtos", data)
      .then((res) => {
        console.log(res.data);
        getProdutos();
      })
      .catch((err) => {
        console.log(err.status);
      });

    getProdutos();
    fecharModal();
  };

  return (
    <>
      <div className=" w-[801px] p-8 bg-white-principal rounded-md">
        <StepperRoot.Content>
          <StepperRoot.Step>Nome</StepperRoot.Step>

          <StepperRoot.Step>Nome</StepperRoot.Step>
        </StepperRoot.Content>
        <form
          className="flex flex-col items-center h-full  "
          onSubmit={handleSubmit(adicionarProduto)}
        >
          <div className="flex gap-x-4 ">
            <div className="w-1/2 flex flex-col gap-y-4">
              <InputRoot.Input
                placeholder="Nome do produto"
                register={register("nome")}
              >
                <InputRoot.Label>Nome</InputRoot.Label>
              </InputRoot.Input>

              <div className="flex w-full  items-end gap-x-2">
                <InputRoot.Input
                  placeholder="R$ 12,00"
                  register={register("categoria")}
                >
                  <InputRoot.Label>Valor Total</InputRoot.Label>
                </InputRoot.Input>

                <InputRoot.Input
                  placeholder="R$ 12,00"
                  register={register("categoria")}
                >
                  <InputRoot.Label>Valor Oferta</InputRoot.Label>
                </InputRoot.Input>
                <div className="h-10">
                  <Button type="button">Ativar Oferta</Button>
                </div>
              </div>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Categoria</InputRoot.Label>
              </InputRoot.Input>

              <div className="flex flex-col gap-x-2">
                <InputRoot.Label>Tags ({tags.length}/5)</InputRoot.Label>
                <Select
                  value={tags[tags.length - 1]}
                  id="demo-simple-select"
                  label="Tags"
                  className="w-full h-[42px]"
                  onChange={(data) => {
                    !tags.includes(data.target.value) &&
                      tags.length <= 5 &&
                      setTags((prev) => [...prev, data.target.value]);
                  }}
                >
                  <MenuItem value={"Camiseta"}>Camiseta</MenuItem>
                  <MenuItem value={"Plastico"}>Plastico</MenuItem>
                  <MenuItem value={"Roupa"}>Roupa</MenuItem>
                  <MenuItem value={"Camiseta"}>Camiseta</MenuItem>
                  <MenuItem value={"Plastico"}>Plastico</MenuItem>
                  <MenuItem value={"Roupa"}>Roupa</MenuItem>
                </Select>
                <div className=" flex gap-x-2 mt-2 flex-wrap gap-y-2 relative">
                  {tags.map((tag, index) => (
                    <>
                      <p
                        className="py-2 pl-2 pr-4 bg-orange-principal rounded text-xs relative"
                        key={`tags_${index}`}
                      >
                        <span
                          className="absolute top-[2px] right-[5px]"
                          onClick={() =>
                            setTags((prev) =>
                              prev.filter((element) => element != tag)
                            )
                          }
                        >
                          X
                        </span>
                        {tag}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-y-4 ">
              <div className="flex flex-col w-full">
                <InputRoot.Label>Seção da Loja</InputRoot.Label>
                <Select className="h-[42px]">
                  <MenuItem>Teste</MenuItem>
                </Select>
              </div>

              <div className="flex flex-col">
                <InputRoot.Input
                  nome={"Categoria"}
                  register={register("categoria")}
                >
                  <InputRoot.Label>Código SKU</InputRoot.Label>
                </InputRoot.Input>
              </div>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Código de barras</InputRoot.Label>
              </InputRoot.Input>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Categoria</InputRoot.Label>
              </InputRoot.Input>
            </div>
          </div>
          <div className="flex gap-x-1">
            <button className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded ">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAdicionar;
