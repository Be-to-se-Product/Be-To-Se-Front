import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";

import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import BotaoSwitch from "../../../componentes/Switch/BotaoSwitch";
import api from "../../../services/api";
import { converterInputImageToBase64 } from "../../../utils/conversores";
import { MENSAGENS } from "../../../utils/dicionarioRespostas";
import { toast } from "react-toastify";
import { descriptografar } from "../../../utils/Autheticated";

const FormUpdate = ({ fecharModal, getProdutos, setState,produto }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [infoBanco, setInfoBanco] = useState({
    sessoes: [],
    tag: [],
  });

  const { register, handleSubmit } = useForm();

  const idEstabelecimento = descriptografar(sessionStorage.getItem("ID"));

const [productDetails,setProductDetails] = useState({
  imagens:{
    imagem1: produto && produto.imagens && produto.imagens[0],
    imagem2: produto && produto.imagens && produto.imagens[1],
    imagem3: produto && produto.imagens && produto.imagens[2],
    imagem4: produto && produto.imagens && produto.imagens[3],
  },
  tag: produto && produto.tag ? [...produto.tag] : [],
});

  const [productDefault,setProductDefault] =useState({
    id: produto?.id,
    nome: produto?.nome,
    precoTotal: produto?.preco  ,
    precoOferta: produto?.precoOferta,
    categoria: produto?.categoria,
    secao: produto?.secao,
    codigoSku: produto?.codigoSku,
    codigoBarras: produto?.codigoBarras,
    descricao: produto?.descricao,
    tag: produto?.tag ? [...produto?.tag] : null,
    imagens: produto?.imagens ? [...produto?.imagens] : null
  });

  useEffect(() => {
    getSessao();
  }, []);

  const handleImageChange = (e, id) => {
    converterInputImageToBase64(e, (objeto) => {
      const { imagem } = objeto;
      setProductDefault((prev) => ({
        ...prev,
        imagens: {
          ...prev.imagens,
          [id]: imagem,
        },
      }));
    });
  };

  const getSessao = () => {
    api
      .get("/secoes/estabelecimento/" + idEstabelecimento)
      .then((res) => {
        if (res.status == 200) {
          setInfoBanco((prev) => {
            const copy = { ...prev };
            copy.sessoes = res.data;
            return { ...copy};
          });
        }
      })
      .catch((err) => {
        fecharModal();
        toast(MENSAGENS.usuarios[err.message]);
      });
  };

  const atualizarProduto = (data) => {
    const produto = {
      ...data,
      //...productDetails.imagens,
    };
    produto.imagens = Object.values(productDetails.imagens);
    produto.tag = [...productDetails.tag];
    console.log(produto);

    api
      .put("/produtos/"+productDefault.id, produto)
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
          onSubmit={handleSubmit(atualizarProduto)}
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
                  defaultValue={productDefault.nome}
                  register={register("nome")}
                >
                  <InputRoot.Label>Nome</InputRoot.Label>
                </InputRoot.Input>

                <div className="flex w-full  items-end gap-x-2">
                  <InputRoot.Input
                    placeholder="R$ 12,00"
                    register={register("precoTotal")}
                    defaultValue={productDefault.precoTotal}
                  >
                    <InputRoot.Label>Valor Total</InputRoot.Label>
                  </InputRoot.Input>

                  <InputRoot.Input
                    placeholder="R$ 12,00"
                    register={register("precoOferta")}
                    defaultValue={productDefault.precoOferta}
                  >
                    <InputRoot.Label>Valor Oferta</InputRoot.Label>
                  </InputRoot.Input>
                  <div className="h-10"></div>
                </div>

                <div className="flex flex-col w-full   gap-x-2">
                  <InputRoot.Label>Categoria</InputRoot.Label>
                  <Select
                    id="demo-simple-select"
                    className="w-full h-[42px]"
                    value={productDefault.categoria}
                    name="categoria"
                    {...register("categoria")}
                  >
                    <MenuItem value={"Roupas"}>Roupas</MenuItem>
                    <MenuItem value={"Eletronicos"}>Eletronicos</MenuItem>
                    <MenuItem value={"Utensilhos"}>Utensilhos</MenuItem>
                  </Select>
                </div>
                <div className="flex  w-full flex-col gap-x-2">
                  <InputRoot.Label>
                    tag ({productDetails.tag?.length}/5)
                  </InputRoot.Label>
                  <Autocomplete
                    multiple
                    size="small"
                    limittag={5}
                    className="w-full"
                    id="multiple-limit-tag"
                    options={infoBanco.tag.map((option) => option.descricao)}
                    getOptionLabel={(option) => option}
                    defaultValue={productDetails.tag.map(
                      (option) => option.descricao
                    )}
                    onChange={(event, newValue) => {
                      setProductDefault((prev) => {
                        const valor = [...newValue];
                        const copy = { ...prev };
                        //Copilot: Preciso pegar a tag e achar o id dela
                        const tagId = valor.map((element) => {
                          const tagId = infoBanco.tag.find(
                            (tag) => tag.descricao === element
                          );
                          if (tagId) {
                            return {
                              id: tagId.id,
                              descricao: tagId.descricao,
                            };
                          }
                          return { valor };
                        });

                        copy.tag = tagId;
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
                    defaultValue={productDefault.secao.id}
                    {...register("secao")}
                   
                  >
                    {infoBanco.sessoes.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.descricao}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="flex flex-col">
                  <InputRoot.Input
                    nome={"Categoria"}
                    register={register("codigoSku")}
                    defaultValue={productDefault.codigoSku}
                  >
                    <InputRoot.Label>Código SKU</InputRoot.Label>
                  </InputRoot.Input>
                </div>
                <InputRoot.Input
                  defaultValue={productDefault.codigoBarras}
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
                  onChange={(e) => handleImageChange(e, "imagem1")}
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
                    onChange={(e) => handleImageChange(e, "imagem2")}
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
                    onChange={(e) => handleImageChange(e, "imagem3")}
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
                    onChange={(e) => handleImageChange(e, "imagem4")}
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
                defaultValue={productDefault.descricao}
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
