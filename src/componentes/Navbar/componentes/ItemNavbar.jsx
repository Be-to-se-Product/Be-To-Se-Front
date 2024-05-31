import React from "react";
import icon from "@assets/mingcute_down-fill.svg";
const ItemNavbar = ({ children }) => {
  return (
    <li className="flex  justify-center gap-x-2">
      <img src={icon} alt="" />
      Utensílios
      <img src={icon} alt="" />
      Roupas
      <img src={icon} alt="" />
      Eletronicos
      {children}
    </li>
  );
};

export default ItemNavbar;
