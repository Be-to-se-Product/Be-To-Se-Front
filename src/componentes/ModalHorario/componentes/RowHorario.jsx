import React, { useEffect } from "react";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const RowHorario = ({agenda,isAtual}) => {
  
  return (
    <div className="flex justify-between p-2  w-full">
    <div>
     { isAtual && <span>
        <QueryBuilderIcon
          sx={{
            color: "#FF8C00",
          }}
        />
      </span>}
      <span> {agenda?.dia} </span>
      </div>
      <span>{agenda?.horarioComeco} - {agenda?.horarioFim}</span>
    </div>
  );
};

export default RowHorario;
