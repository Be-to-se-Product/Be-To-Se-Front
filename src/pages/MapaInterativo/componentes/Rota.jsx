import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const Rota = () => {
    const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="p-5 w-full flex flex-col justify-center gap-y-4">
      <Tabs
        value={currentPage}
        sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF8C00",
            },
            "& .MuiTabs-flexContainer":{
                justifyContent:"center"
            }
          }}
      >
        <Tab icon={<DirectionsCarFilledIcon />}   sx={{
          "&.Mui-selected": {
            color: "#FF8C00",
          },
        }}
        onClick={() => setCurrentPage(0)}
        />
        <Tab icon={<DirectionsBikeIcon />}  sx={{
          "&.Mui-selected": {
            color: "#FF8C00",
          },
          
        }}
        onClick={() => setCurrentPage(1)}
        />
        <Tab icon={<DirectionsWalkIcon />}  sx={{
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

      <div className="flex flex-col gap-y-4">
        <div>
          <span className="flex gap-x-4">
            <img src="/src/assets/down.svg" alt="" />
            <p>Vire a direita na Rua São Carlos do Pinhal</p>
          </span>
        </div>

        <div>
          <span className="flex gap-x-4">
            <img src="/src/assets/down.svg" alt="" />
            <p>Vire a direita na Rua São Carlos do Pinhal</p>
          </span>
        </div>

        <div>
          <span className="flex gap-x-4">
            <img src="/src/assets/down.svg" alt="" />
            <p>Vire a direita na Rua São Carlos do Pinhal</p>
          </span>
        </div>

        <div>
          <span className="flex gap-x-4">
            <img src="/src/assets/down.svg" alt="" />
            <p>Vire a direita na Rua São Carlos do Pinhal</p>
          </span>
        </div>

        <div>
          <span className="flex gap-x-4">
            <img src="/src/assets/down.svg" alt="" />
            <p>Vire a direita na Rua São Carlos do Pinhal</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rota;
