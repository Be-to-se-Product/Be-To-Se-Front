import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../componentes/Input/componentes/Input";

const FormUpdate = ({ produtos, id, fecharModal,getProdutos }) => {
  const { handleSubmit, register } = useForm();

  
  const produto = produtos.find((produto) => produto.id === id);


  useEffect(() => {
    console.log(produto);
  }, []);

  const atualizarProduto = (produtoUpdated) => {
    console.log(produto);

    axios
      .put(`http://localhost:8080/produtos/${id}`, produtoUpdated)
      .then((res) => {
        console.log(res.data);
        fecharModal();
        getProdutos();
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="img flex  w-1/2 justify-center items-center border h-full  ">
        <input type="file" />
      </div>

      <div className="content-form w-1/2 items-center justify-center  ">
        <form
          className="flex flex-col items-center h-full justify-center gap-y-2"
          onSubmit={handleSubmit(atualizarProduto)}
        >
          <Input nome={"Nome"} defaultValue={produto.nome} register={register("nome")} />
          <div className="flex w-full">
            <Input nome={"Valor Compra"} defaultValue={(produto.precoCompra)}  register={register("precoCompra")} />
            <Input nome={"Valor Venda"} defaultValue={produto.precoVenda}  register={register("precoVenda")} />
          </div>
          <Input nome={"Categoria"} defaultValue={produto.categoria}  register={register("categoria")} />
          <Input nome={"Tag"} register={register("tag")} defaultValue={produto.tag}  />
          <Input nome={"Código SKU"} defaultValue={produto.codigoGtin  } register={register("codigoGtin")} />
          <div className="w-full flex flex-col px-2">
            <label htmlFor="" className="mb-2 text-black-800 ">
              Descricao
            </label>
            <textarea
              className="w-full px-1 py-1 resize-none"
              {...register("descricao")}
            defaultValue={produto.descricao}
            
            
            ></textarea>
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

export default FormUpdate;
