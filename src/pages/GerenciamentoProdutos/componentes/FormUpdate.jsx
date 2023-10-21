import axios from "axios";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";

import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import BotaoSwitch from "../../../componentes/Switch/BotaoSwitch";
import api from "../../../services/api";
import { converterInputImageToBase64 } from "../../../utils/conversores";

const FormUpdate = ({ fecharModal, getProdutos, setState }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [tagsBanco, setTagsBanco] = useState([
    { id: 1, nome: "teste" },
    { id: 2, nome: "teste2" },
  ]);
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);

  const [productDetails, setProductDetails] = useState({
    tags: [],
    imagens: {},
  });

  const setImageProduto = ({ evento, imagem }) => {
    setProductDetails((prev) => {
      const copy = { ...prev };
      copy.imagens[evento?.target.id] = imagem;
      console.log(copy);
      return { ...copy };
    });
  };

  const getSessao = () => {
    api.get("/sessao").then((res) => {
      console.log(res.data);
    });
  };

  const adicionarProduto = (data) => {
    const produto = {
      ...data,
      ...productDetails,
    };

    api
      .post("/produtos", produto)
      .then((res) => {
        getProdutos();
      })
      .catch((err) => {
        console.log(err.status);
      });

    getProdutos();
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
                    register={register("precoTotal")}
                  >
                    <InputRoot.Label>Valor Total</InputRoot.Label>
                  </InputRoot.Input>

                  <InputRoot.Input
                    placeholder="R$ 12,00"
                    register={register("precoOferta")}
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
                    <MenuItem value={"Roupas"}>Roupas</MenuItem>
                    <MenuItem value={"Eletronicos"}>Eletronicos</MenuItem>
                    <MenuItem value={"Utensilhos"}>Utensilhos</MenuItem>
                  </Select>
                </div>
                <div className="flex  w-full flex-col gap-x-2">
                  <InputRoot.Label>
                    Tags ({productDetails.tags?.length}/5)
                    {console.log(productDetails.tags)}
                  </InputRoot.Label>
                  <Autocomplete
                    multiple
                    size="small"
                    limitTags={5}
                    className="w-full"
                    id="multiple-limit-tags"
                    options={tagsBanco.map((option) => option.nome)}
                    getOptionLabel={(option) => option}
                    onChange={(event, newValue) => {
                      setProductDetails((prev) => {
                        const valores = [...newValue];
                        const copy = { ...prev };
                        //Copilot: Preciso pegar a tag e achar o id dela
                        const tagsId = valores.map(
                          (element) =>
                            tagsBanco.find((tag) => tag.nome == element)?.id
                        );
                        console.log(tagsId);
                        copy.tags = tagsId;
                        return { ...copy };
                      });
                    }}
                    renderInput={(params) => {
                      return <TextField {...params} placeholder="Favorites" />;
                    }}
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
                    register={register("codigoSku")}
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
                <img
                  src={productDetails.imagens?.imagem1}
                  alt=""
                  className="h-full w-full  object-cover  "
                />
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
                  onChange={(e) =>
                    converterInputImageToBase64(e, setImageProduto)
                  }
                />
              </div>
              <div className="flex gap-x-4 rounded">
                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img
                    src={productDetails.imagens?.imagem2}
                    alt=""
                    className="h-full w-full object-cover"
                  />
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
                    onChange={(e) =>
                      converterInputImageToBase64(e, setImageProduto)
                    }
                  />
                </div>
                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img
                    src={productDetails.imagens?.imagem3}
                    alt=""
                    className="h-full w-full object-cover"
                  />
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
                    onChange={(e) =>
                      converterInputImageToBase64(e, setImageProduto)
                    }
                  />
                </div>

                <div className="w-[150px] h-[150px]  border rounded relative">
                  <img
                    src={productDetails.imagens?.imagem4}
                    alt=""
                    className="h-full w-full object-cover"
                  />
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
                    onChange={(e) =>
                      converterInputImageToBase64(e, setImageProduto)
                    }
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
                {...register("descricao")}
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
