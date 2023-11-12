import imgProduto from "../../../assets/cocacola.svg";
import Button from "../../../componentes/Button/Button";

const Card = ({ openModal, produto }) => {

  return (
    <div className="w-[180px]   bg-white-principal p-4 flex flex-col gap-4 rounded-md ">
      <div className="relative border border-gray-300 h-[150px] rounded-md ">
        <div className=" flex flex-col 1  absolute  right-2  gap-2 top-2 "></div>

        <img src={imgProduto} alt="imagem" className="w-screen rounded" />
      </div>

      <div className="content-text flex flex-col gap-2">
        <h2 className="font-medium text-xl">R${produto?.preco}</h2>
        <p className="text-sm">{produto?.nome}</p>
        <p className="text-sm">{produto?.categoria}</p>
        <Button
          className="w-full"
          onClick={() => openModal("update", produto.id)}
        >
          Editar Produto
        </Button>
        <Button
          className="w-full bg-red-500 text-white-principal"
          onClick={() => openModal("delete", produto.id)}
        >
          Deletar Produto
        </Button>
      </div>
    </div>
  );
};

export default Card;
