import { Avatar, Rating } from "@mui/material";
import React from "react";

const Avaliacao = ({avatar,avaliacao}) => {
  return (
    <div className="flex items-center gap-x-4  ">
      <Avatar
        sx={{
          width: 50,
          height: 50,
        }}
      ></Avatar>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col  ">
          <h3 className="font-medium">{avaliacao?.nome}</h3>
          <div className="flex items-center gap-x-2">
            <Rating size="small" value={avaliacao?.stars} readOnly />
            <span className="text-xs">3 meses atrás</span>
          </div>
        </div>
        <p className="text-sm  ">
          {avaliacao?.comentario}
        </p>
      </div>
    </div>
  );
};

export default Avaliacao;
