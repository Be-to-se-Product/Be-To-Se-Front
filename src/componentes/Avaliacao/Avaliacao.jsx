import { Avatar, Rating } from "@mui/material";
import moment from "moment";

const Avaliacao = ({avaliacao}) => {
  return (
    <div className="flex items-center gap-x-4 w-full ">
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
            <Rating size="small" value={avaliacao?.stars} readOnly precision={0.5} />
            - <span className="text-xs">{moment(avaliacao.dt).format("DD/MM/YYYY")}</span>
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
