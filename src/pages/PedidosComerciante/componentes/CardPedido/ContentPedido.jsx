import moment from "moment";
import React from "react";

const ContentPedido = ({ children }) => {
  return (
    <div className="border rounded-lg bg-white-principal shadow-lg">
      {children}
    </div>
  );
};

export default ContentPedido;
