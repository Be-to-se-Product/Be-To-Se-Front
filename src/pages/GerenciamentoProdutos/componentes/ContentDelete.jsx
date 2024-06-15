import api from "@/services/api/services";

const ContentDelete = ({ id, fecharModal, getProdutos }) => {
  function deletarProduto() {
    api
      .delete(`/produtos/${id}`)
      .then(() => {
        fecharModal("fechar");
        getProdutos();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="px-10 bg-white-principal py-10">
        <h2 className="text-2xl font-medium">
          Deseja realmente excluir esse produto?
        </h2>
        <div className="w-full flex items-center justify-center gap-x-2">
          <button
            className="px-8 py-2 bg-black-500 font-bold mt-4 text-white-principal gap-y-1"
            onClick={() => fecharModal("fechar")}
          >
            Cancelar
          </button>
          <button
            className=" px-8 py-2 bg-red-700 font-bold mt-4 text-white-principal"
            onClick={deletarProduto}
          >
            Deletar
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentDelete;
