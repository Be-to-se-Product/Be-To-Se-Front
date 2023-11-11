import { Rating } from "@mui/material";
import React, { useState } from "react";
import Button from "../../../componentes/Button/Button";
import TabInfoProduto from "./TabInfoProduto";
import Rota from "./Rota";
import BannerImage from "./BannerImage";
import ContentBar from "./ContentBar";
import ItemDeslocamento from "./ItemDeslocamento";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const BarProduto = () => {
  const [isTracaRota, setIsTracaRota] = useState(false);
  const [isShow, setIsShow] = useState(false);
  return (
    <ContentBar>
      <BannerImage img={"/src/assets/men.png"}></BannerImage>
      <div className="flex justify-between p-5 ">
        <div className=" flex flex-col gap-y-2">
          <div className="flex gap-x-4 items-center">
            <h2 className="text-xl font-medium">
              Coca Cola 2 Litros - R$12,99
            </h2>
          </div>
          <h3>Eletronicos</h3>
          <span className="flex gap-x-2 items-center">
            <span>4,7</span>
            <Rating nome="text-feedback" value={3} readOnly size="small" />
          </span>
        </div>
        <Button className={" rounded-full"}>Reservar</Button>
      </div>

      <div className="w-full p-4  flex justify-center gap-x-10 ">
        <ItemDeslocamento
          time="2 Min"
          icon={
            <DirectionsBikeIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
        <ItemDeslocamento
          time="2 Min"
          icon={
            <DirectionsCarFilledIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
        <ItemDeslocamento
          time="2 Min"
          icon={
            <DirectionsWalkIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
      </div>
      <div className="flex justify-center py-1 ">
        <div className="flex items-center gap-x-4">
          <h3 className="text-sm">
            {isTracaRota ? "Voltar para informações do produto" : "Traçar rota"}
          </h3>
          <Button
            className={"bg-orange-principal rounded-full   "}
            onClick={() => setIsTracaRota(!isTracaRota)}
          >
            {">"}
          </Button>
        </div>
      </div>
      {isTracaRota ? <Rota /> : <TabInfoProduto />}
    </ContentBar>
  );
};

export default BarProduto;
