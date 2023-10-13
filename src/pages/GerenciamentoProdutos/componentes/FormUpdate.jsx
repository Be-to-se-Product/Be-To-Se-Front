import axios from "axios";
import React, { useState } from "react";
import {  useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";

import {
  Autocomplete,
  MenuItem,
  Select, TextField
} from "@mui/material";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import BotaoSwitch from "../../../componentes/Switch/BotaoSwitch";

const FormUpdate = ({ fecharModal, getProdutos, setState }) => {
  const [imagens, setImagens] = useState(new Array(4));

  const [stateAtual, setStateAtual] = useState(0);
  const { register, reset, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);

  const handleFileChange = (e) => {
    const reader = new FileReader();
    const element = e.target.offsetParent.firstChild;

    reader.onload = function (event) {
      setImagens([event.target.result]);
      element.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const adicionarProduto = (data) => {
    data.urlImagem = "sdsds";
    console.log(data);
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
      <div className=" w-[801px] h-[700px] p-8 bg-white-principal relative rounded-md flex items-center flex-col gap-y-2 justify-around">
        <div
          className="absolute top-5  right-8 cursor-pointer"
          onClick={fecharModal}
        >
          X
        </div>
        <StepperRoot.Content>
          <StepperRoot.Step number={1} stateAtual={stateAtual}>
            Informações do produtos
          </StepperRoot.Step>

          <StepperRoot.Step number={2} stateAtual={stateAtual}>
            Uploads de imagens
          </StepperRoot.Step>

          <StepperRoot.Step number={3} stateAtual={stateAtual}>
            Descrição do produto
          </StepperRoot.Step>
        </StepperRoot.Content>

        <div className={`flex items-center gap-x-2 justify-end w-11/12`}>
          Suspender Anuncio
          <BotaoSwitch />
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit(adicionarProduto)}
        >
          <div
            className={`flex  flex-col items-center ${
              stateAtual != 0 && "hidden"
            } `}
          >
            <div className={`flex gap-x-4`}>
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
                    register={register("valorTotal")}
                  >
                    <InputRoot.Label>Valor Total</InputRoot.Label>
                  </InputRoot.Input>

                  <InputRoot.Input
                    placeholder="R$ 12,00"
                    register={register("valorOferta")}
                  >
                    <InputRoot.Label>Valor Oferta</InputRoot.Label>
                  </InputRoot.Input>
                  <div className="h-10"></div>
                </div>

                <div className="flex flex-col w-full   gap-x-2">
                  <InputRoot.Label>Categoria</InputRoot.Label>
                  <Select
                    value={tags[tags.length - 1]}
                    id="demo-simple-select"
                    className="w-full h-[42px]"
                    {...register("categoria")}
                  >
                    <MenuItem value={"Camiseta"}>Roupas</MenuItem>
                    <MenuItem value={"Plastico"}>Eletronicos</MenuItem>
                    <MenuItem value={"Roupa"}>Utensilhos</MenuItem>
                  </Select>
                </div>
                <div className="flex  w-full flex-col gap-x-2">
                  <InputRoot.Label>Tags ({tags.length}/5)</InputRoot.Label>
                  <Autocomplete
                    multiple
                    size="small"
                    limitTags={5}
                    className="w-full"
                    id="multiple-limit-tags"
                    options={["Pedro", "Rocha"]}
                    getOptionLabel={(option) => option}
                    defaultValue={["Pedro"]}
                    onChange={(event, newValue) => {
                      setTags(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Favorites"
                        {...register("tags")}
                      />
                    )}
                    sx={{ width: "full", height: "42px" }}
                  />
                </div>
              </div>

              <div className="w-1/2 flex flex-col gap-y-4 ">
                <div className="flex flex-col w-full">
                  <InputRoot.Label>Seção da Loja</InputRoot.Label>
                  <Select
                    className="h-[42px]"
                    id="demo-simple-select"
                    {...register("sessao")}
                  >
                    <MenuItem value={"Roupas"}>Teste</MenuItem>
                  </Select>
                </div>

                <div className="flex flex-col">
                  <InputRoot.Input
                    nome={"Categoria"}
                    register={register("codigoSKU")}
                  >
                    <InputRoot.Label>Código SKU</InputRoot.Label>
                  </InputRoot.Input>
                </div>
                <InputRoot.Input
                  nome={"Categoria"}
                  register={register("codigoBarras")}
                >
                  <InputRoot.Label>Código de barras</InputRoot.Label>
                </InputRoot.Input>
              </div>
            </div>

            <div className="flex gap-x-4">
              <button
                type="button"
                className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded "
                onClick={() => setStateAtual(stateAtual + 1)}
              >
                Avançar
              </button>
            </div>
          </div>

          <div className={` ${stateAtual != 1 && "hidden"} `}>
            <div className={`w-full flex flex-col items-center gap-4  `}>
              <div className="w-[280px] flex h-[250px] border rounded items-center justify-center relative">
                <img src="" alt="" className="h-full w-full  object-cover  " />
                <label
                  htmlFor="imagem1"
                  className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all   cursor-pointer"
                >
                  <span className="text-white-principal font-semibold">
                    Clique aqui para editar
                  </span>
                </label>
                <input
                  id="imagem1"
                  type="file"
                  className="h-full w-full absolute top-0 opacity-0 "
                  onChange={handleFileChange}
                  register={register("imagem1")}
                />
              </div>
              <div className="flex gap-x-4 rounded">
                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img src="" alt="" className="h-full w-full object-cover" />
                  <label
                    htmlFor="imagem2"
                    className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all top-0    cursor-pointer"
                  >
                    <span className="text-white-principal font-semibold text-center">
                      Clique aqui para editar
                    </span>
                  </label>
                  <input
                    type="file"
                    id="imagem2"
                    className="h-full w-full absolute top-0 opacity-0 "
                    onChange={handleFileChange}
                    register={register("imagem2")}
                  />
                </div>
                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img src="" alt="" className="h-full w-full object-cover" />
                  <label
                    htmlFor="imagem3"
                    className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all  top-0  cursor-pointer"
                  >
                    <span className="text-white-principal font-semibold text-center">
                      Clique aqui para editar
                    </span>
                  </label>
                  <input
                    type="file"
                    id="imagem3"
                    className="h-full w-full absolute top-0 opacity-0 "
                    onChange={handleFileChange}
                    register={register("imagem3")}
                  />
                </div>

                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img src="" alt="" className="h-full w-full object-cover" />
                  <label
                    htmlFor="imagem4"
                    className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all top-0   cursor-pointer"
                  >
                    <span className="text-white-principal font-semibold text-center">
                      Clique aqui para editar
                    </span>
                  </label>
                  <input
                    type="file"
                    id="imagem4"
                    className="h-full w-full absolute top-0 opacity-0 "
                    onChange={handleFileChange}
                    register={register("imagem4")}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full gap-x-4 justify-center">
              <button
                type="button"
                className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded "
                onClick={() => setStateAtual(stateAtual - 1)}
              >
                Retroceder
              </button>
              <button
                type="button"
                className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded "
                onClick={() => setStateAtual(stateAtual + 1)}
              >
                Avançar
              </button>
            </div>
          </div>

          <div
            className={`flex  flex-col w-full ${stateAtual != 2 && "hidden"}`}
          >
            <div className="flex flex-col gap-2 w-full">
              <InputRoot.Label>Descrição</InputRoot.Label>
              <textarea
                cols="30"
                rows="10"
                className=" border border-gray-800 w-full resize-none outline-none p-4 rounded"
              ></textarea>
            </div>
            <div className="flex w-full gap-x-4 justify-center">
              <button
                type="button"
                className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded "
                onClick={() => setStateAtual(stateAtual - 1)}
              >
                Retroceder
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-orange-principal  text-white-principal  font-bold mt-4  rounded "
                onClick={() => setState((prev) => prev + 1)}
              >
                Salvar alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdate;
