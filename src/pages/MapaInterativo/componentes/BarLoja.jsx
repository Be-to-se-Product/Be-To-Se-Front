import React from "react";
import TabInfoLoja from "./TabInfoLoja";
import Button from "../../../componentes/Button/Button";
import { Rating } from "@mui/material";
import ContentBar from "./ContentBar";
import ItemDeslocamento from "./ItemDeslocamento";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import BannerImage from "./BannerImage";

const BarLoja = () => {
  return (
    <ContentBar>
      <BannerImage img={"/src/assets/men.png"} />
      <div className="flex justify-between p-5 ">
        <div className=" flex flex-col gap-y-2">
          <div className="flex gap-x-4 items-center">
            <h2 className="text-xl font-medium">Pão de açucar</h2>
            <span>4,7</span>
            <Rating nome="text-feedback" value={3} readOnly size="small" />
          </div>
          <h3>Mercado</h3>
          <span></span>
        </div>
      </div>

      <div className="w-full p-4  flex justify-center gap-x-10 ">
        <ItemDeslocamento
          time="2 Min"
          icon={<DirectionsBikeIcon sx={{ width: "30px", height: "30px" }} />}
        />
        <ItemDeslocamento
          time="2 Min"
          icon={
            <DirectionsCarFilledIcon sx={{ width: "30px", height: "30px" }} />
          }
        />
        <ItemDeslocamento
          time="2 Min"
          icon={<DirectionsWalkIcon sx={{ width: "30px", height: "30px" }} />}
        />
      </div>
      <div className="flex justify-center py-1 ">
        <div className="flex items-center gap-x-4">
          <h3 className="text-sm">Traçar Rota</h3>
          <Button className={"bg-orange-principal rounded-full   "}>
            {">"}
          </Button>
        </div>
      </div>

      <TabInfoLoja />
    </ContentBar>
  );
};

export default BarLoja;
