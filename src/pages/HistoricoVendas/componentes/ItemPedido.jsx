import Button from "@componentes/Button/Button";

const ItemPedido = (produto) => {
  return (
    <div className="w-max flex items-center gap-x-4 py-2 px-4 border rounded-md  ">
      <div className="flex">
        <div className="w-14 flex justify-center">
          <img src={produto.imagens?.length > 0 && produto.imagens[0]} alt="" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xs font-semibold">{produto.produto?.nome}</h3>
          <p className="text-xs font-semibold">
            Quantidade: {produto.produto?.quantidade}
          </p>
          <p className="text-xs font-light">
            Preço: R${produto.produto?.preco?.toFixed(2)}
          </p>
        </div>
      </div>
      <Button className={"h-max"}>Ver item</Button>
    </div>
  );
};

export default ItemPedido;
