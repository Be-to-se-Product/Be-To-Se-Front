const ItemPedido = (produto) => {
  return (
    <div className=" flex items-center  gap-x-4 py-2 px-4 border w-full rounded-md  ">
      <div className="flex gap-x-4 w-full">
        {console.log(produto?.produto)}
        <div className="w-14 flex   ">
          <img
            src={produto?.produto?.imagem && produto.produto.imagem}
            alt=""
          />
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
    </div>
  );
};

export default ItemPedido;
