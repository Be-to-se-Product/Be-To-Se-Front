import Button from "@componentes/Button/Button";

const ContentInfoPedido = ({ pedido, ...props }) => {
  return (
    <div className="flex text-base justify-between px-8 py-4">
      <div className="flex flex-col gap-y-2 ">
        <span>Método de pagamento: {pedido.metodoPagamento}</span>
        <span>
          Valor Total: R$
          {pedido?.itens
            .reduce((accumulator, element) => accumulator + element?.preco, 0)
            ?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </span>
        <Button
          {...props}
          variants={{
            class: "max-w-max cursor-pointer",
          }}
        >
          Itens do pedido
        </Button>
      </div>
      <div className="flex flex-col justify-between items-end">
        Modo de compra: {pedido?.tipoPagamento}
      </div>
    </div>
  );
};

export default ContentInfoPedido;
