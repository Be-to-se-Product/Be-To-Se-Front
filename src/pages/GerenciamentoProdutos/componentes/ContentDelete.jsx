import axios from "axios";
import React from "react";






const ContentDelete = ({id,fecharModal,getProdutos}) => {

function deletarProduto() {
    axios.delete(`http://localhost:8080/produtos/${id}`)
    .then((res)=>{
        console.log(res.data);
        fecharModal();
        getProdutos();
    })
    .catch((err)=>{
        console.log(err);
    })
}
  return (
    <>
      <div className="px-10">
        <h2 className="text-2xl font-medium">
          Deseja realmente excluir esse produto?
        </h2>
        <div className="w-full flex items-center justify-center gap-x-2">
          <button className="px-8 py-2 bg-black-500 font-bold mt-4 text-white-principal gap-y-1" onClick={fecharModal}>
            Cancelar
          </button>
          <button className=" px-8 py-2 bg-red-700 font-bold mt-4 text-white-principal" onClick={deletarProduto}>
            Deletar
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentDelete;
