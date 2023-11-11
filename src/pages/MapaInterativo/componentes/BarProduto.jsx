import {  Rating } from "@mui/material";
import React, { useState } from "react";
import Button from "../../../componentes/Button/Button";
import TabInfoProduto from "./TabInfoProduto";
import Rota from "./Rota";

const BarProduto = () => {
    const [isTracaRota, setIsTracaRota] = useState(false);
  return (
    <div className="w-1/4 h-screen bg-black-100 fixed z-10">
      <div>
        <div className=" w-full h-[200px] ">
          <img
            src="/src/assets/men.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex justify-between p-5 ">
          <div className=" flex flex-col gap-y-2">
            <div className="flex gap-x-4 items-center">
              <h2 className="text-xl font-medium">Coca Cola 2 Litros - R$12,99</h2>
             
            </div>
            <h3>Eletronicos</h3>
            <span className="flex gap-x-2 items-center">
            <span>4,7</span>
              <Rating nome="text-feedback" value={3} readOnly size="small" />
            </span>
          </div>
          <Button className={" rounded-full   "}>Reservar</Button>
        </div>

        <div className="w-full p-4  flex justify-center gap-x-10 ">
          <div className="flex flex-col justify-center">
            <img src="/src/assets/bike.svg" alt="" className="w-6" />
            <h4 className="text-xs">2 Min</h4>
          </div>

          <div className="flex flex-col justify-center">
            <img src="/src/assets/bike.svg" alt="" className="w-6" />
            <h4 className="text-xs">2 Min</h4>
          </div>
          <div className="flex flex-col justify-center">
            <img src="/src/assets/bike.svg" alt="" className="w-6" />
            <h4 className="text-xs">2 Min</h4>
          </div>
        </div>
        <div className="flex justify-center py-1 ">
          <div className="flex items-center gap-x-4">
            <h3 className="text-sm">{isTracaRota ? "Voltar para informações do produto": "Traçar rota"}</h3>
            <Button className={"bg-orange-principal rounded-full   "} onClick={()=>setIsTracaRota(!isTracaRota)}>
              {">"}
            </Button>
          </div>
        </div>
       { isTracaRota ? <Rota /> : <TabInfoProduto />}
       
      </div>
    </div>
  );
};

export default BarProduto;
