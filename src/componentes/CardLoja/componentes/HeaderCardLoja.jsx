import React from "react";

const HeaderCardLoja = ({nome,status,icon}) => {
  return (
    <div className="flex justify-between  items-center">
      <div className="flex gap-x-2">
        <img src={icon} alt="" />
        <h2 className="text-base font-normal">{nome}</h2>
      </div>
      <div className="flex items-center gap-x-2 ">
        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
        <h3 className=" text-xs">{status} </h3>
      </div>
    </div>
  );
};

export default HeaderCardLoja;
