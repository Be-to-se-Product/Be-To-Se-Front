import { MenuItem, Select } from "@mui/material";
import React from "react";

const SelectPedido = ({ pedido,...props }) => {
  return (
    <div>
      <Select
        className="h-10"
        id="demo-simple-select"
        defaultValue={pedido.status}
        name="status"
        {...props}
      >
        <MenuItem value={"PENDENTE"}>Pendente</MenuItem>
        <MenuItem value={"ENTREGUE"}>Entregue</MenuItem>
        <MenuItem value={"AGUARDANDO_RETIRADA"}>Agurdando Retirada</MenuItem>
        <MenuItem value={"PREPARO"}>Em Preparo</MenuItem>
        <MenuItem value={"CANCELADO"}>Cancelar</MenuItem>
      </Select>
    </div>
  );
};

export default SelectPedido;
