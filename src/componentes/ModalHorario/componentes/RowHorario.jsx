import React, { useEffect } from "react";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import moment from "moment";

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
      <span>{moment(agenda?.horarioInicio,"HH:mm:ss").format("HH:mm")} - {moment(agenda?.horarioFim,"HH:mm:ss").format("HH:mm")}</span>
    </div>
  );
};

export default RowHorario;
