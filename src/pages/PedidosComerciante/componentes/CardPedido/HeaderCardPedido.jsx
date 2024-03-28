import moment from "moment";
import React from "react";

const HeaderCardPedido = ({pedido,children}) => {
  return (
    <div className="flex justify-between border-b border-gray-200 px-8 py-4  items-center">
      <h3 className="text-base">
        Pedido {pedido.id} -{" "}
        {moment(pedido.data, "YYYY-MM-DDHH:mm:ss").format("DD/MM/YYYY - HH:mm")}
      </h3>
      {children}
    </div>
  );
};

export default HeaderCardPedido;
