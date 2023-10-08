import axios from "axios";
import React, { useState } from "react";
import { get, useForm } from "react-hook-form";
import InputRoot from "../../../componentes/Input/InputRoot";
import Button from "../../../componentes/Button/Button";
import DropDown from "../../../componentes/DropDown/DropDown";

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

              <div className="">
                <DropDown values={["Pedro", "Rocha"]} setValue={setTags}>
                  Tags
                </DropDown>
                <div className="px-4">
                  {tags.map((tag) => (
                    <p className="py-1">{tag}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <InputRoot.Input register={register("nome")}>
                <InputRoot.Label>Nome</InputRoot.Label>
              </InputRoot.Input>

              <div className="flex w-full">
                <InputRoot.Input
                  nome={"Categoria"}
                  register={register("categoria")}
                >
                  <InputRoot.Label>Categoria</InputRoot.Label>
                </InputRoot.Input>
                <InputRoot.Input
                  nome={"Categoria"}
                  register={register("categoria")}
                >
                  <InputRoot.Label>Categoria</InputRoot.Label>
                </InputRoot.Input>
              </div>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Categoria</InputRoot.Label>
              </InputRoot.Input>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Categoria</InputRoot.Label>
              </InputRoot.Input>
              <InputRoot.Input
                nome={"Categoria"}
                register={register("categoria")}
              >
                <InputRoot.Label>Categoria</InputRoot.Label>
              </InputRoot.Input>
              <div className="w-full flex flex-col px-2">
                <label htmlFor="" className="mb-2 text-black-800 ">
                  Descricao
                </label>
                <textarea
                  className="w-full px-1 py-1 resize-none"
                  {...register("descricao")}
                ></textarea>
              </div>
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
