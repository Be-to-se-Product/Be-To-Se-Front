import axios from "axios";
import React from "react";
import { get, useForm } from "react-hook-form";
import Input from "../../../componentes/Input/Input";

const FormAdicionar = ({fecharModal,getProdutos}) => {
  const { register, handleSubmit } = useForm();

  const adicionarProduto = (data) => {

    data.urlImagem="sdsds"
    ;
    axios.post("http://localhost:8080/produtos", data)
    .then((res)=>{  
      console.log(res.data);
      getProdutos();
    }
    )
    .catch((err)=>{
      console.log(err.status);
    })

    getProdutos();
    fecharModal();
  };

  return (
    <>
      <div className="img flex  w-1/2 justify-center items-center border h-full  ">
        <input type="file" />
      </div>

      <div className="content-form w-1/2 items-center justify-center  ">
        <form
          className="flex flex-col items-center h-full justify-center gap-y-2"
          onSubmit={handleSubmit(adicionarProduto)}
        >
          <Input nome={"Nome"}  register={register('nome')}   />
          <div className="flex w-full">
            <Input nome={"Valor Compra"}  register={register('precoCompra')}  />
            <Input nome={"Valor Venda"}   register={register('precoVenda')} />
          </div>
          <Input nome={"Categoria"}  register={register('categoria')} />
          <Input nome={"Tag"}  register={register('tag')}/>
          <Input nome={"Código SKU"}  register={register('codigoGtin')} />
          <div className="w-full flex flex-col px-2">
            <label htmlFor="" className="mb-2 text-black-800 ">
              Descricao
            </label>
            <textarea className="w-full px-1 py-1 resize-none" {...register("descricao")}></textarea>
          </div>

          <div className="flex gap-x-1">

          <button type="button" onClick={()=>fecharModal("adicionar")} className="px-8 py-2 bg-black-700 font-bold mt-4 text-white-principal ">
            Cancelar
          </button>
          <button  className="px-8 py-2 bg-orange-principal font-bold mt-4  ">
            Salvar
          </button>

          </div>
         
        </form>
      </div>
    </>
  );
};

export default FormAdicionar;
