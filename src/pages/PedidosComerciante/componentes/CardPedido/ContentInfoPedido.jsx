import React from "react";
import Button from "../../../../componentes/Button/Button";

const ContentInfoPedido = ({ pedido, children, ...props }) => {
  return (
    <div className="flex text-base justify-between px-8 py-4">
      <div className="flex flex-col gap-y-2 ">
        <span>CPF do comprador: {pedido?.cpf}</span>
        <span>Método de pagamento: {pedido.metodoPagamento}</span>
        <span>
          Valor Total: R$
          {pedido.itens.reduce(
            (accumulator, element) => accumulator + element.valor,0
          )}
        </span>
      </div>
      <div className="flex flex-col justify-between items-end">
        Modo de compra: {pedido?.tipoPagamento}
        <Button className="h-max w-max " {...props}>
          Itens do pedido
        </Button>
      </div>
    </div>
  );
};

export default ContentInfoPedido;
