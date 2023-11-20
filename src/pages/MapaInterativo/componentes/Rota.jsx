import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { conversosMedidasDistancia } from "../../../utils/conversores";

const Rota = ({ profiles, setModePercurssion, rotas,produtoSelecionado }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const {endereco} = produtoSelecionado.estabelecimento;

  useEffect(() => {
    const keys = Object.keys(profiles);
    const key = keys[currentPage];
    console.log(profiles[key]);
    setModePercurssion(profiles[key]);
  }, [currentPage]);

  return (
    <div className="p-5 w-full flex flex-col justify-center gap-y-4">
      <Tabs
        value={currentPage}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#FF8C00",
          },
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
          },
        }}
      >
        <Tab
          icon={<DirectionsCarFilledIcon />}
          sx={{
            "&": {
              color: "#fff",
            },
            "&.Mui-selected": {
              color: "#FF8C00",
            },
          }}
          onClick={() => setCurrentPage(0)}
        />
        <Tab
          icon={<DirectionsBikeIcon />}
          sx={{
            "&": {
              color: "#fff",
            },
            "&.Mui-selected": {
              color: "#FF8C00",
            },
          }}
          onClick={() => setCurrentPage(1)}
        />
        <Tab
          icon={<DirectionsWalkIcon />}
          sx={{
            "&": {
              color: "#fff",
            },
            "&.Mui-selected": {
              color: "#FF8C00",
            },
          }}
          onClick={() => setCurrentPage(2)}
        />
      </Tabs>
      <div className="">
        <h3 className="text-lg font-medium">Percursso</h3>
      </div>

      <div className="flex flex-col gap-y-4 overflow-x-auto h-80">
        {rotas.map((rota, index) => (
          <div key={index}>
            <span className="flex">
              <p className="w-28 ">
                Há {conversosMedidasDistancia(rota.distance)}
              </p>
              <p className="w-[400px]">{rota.maneuver.instruction}</p>
              <p></p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rota;
