import { Rating } from "@mui/material";
import moment from "moment";

const Avaliacao = ({ avaliacao }) => {
  return (
    <div className="border-1 shadow-md grid py-3 px-4 items-center  rounded-md bg-white-principal border w-full h-[200px]">
      <div>
        <h2 className="font-medium ">{avaliacao.usuario}</h2>
        <h3 className="text-xs">
          {moment(avaliacao.dt).format("DD/MM/YYYY ")}
        </h3>
      </div>
      <hr />
      <div className="min-h-[85px]">
        <div>
          <Rating value={avaliacao.stars} readOnly size="small" />
        </div>
        <p className="text-sm">{avaliacao.comentario}</p>
      </div>
    </div>
  );
};

export default Avaliacao;
