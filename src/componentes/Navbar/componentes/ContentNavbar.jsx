import React from "react";
import InputRoot from "@componentes/Input/InputRoot";
import icon from "@assets/mingcute_down-fill.svg";
import Button from "@componentes/Button/Button";
import { useNavigate } from "react-router-dom";
const ContentNavbar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-black-900 py-[10px] text-white-principal px-[90px] text-2xl gap-y-4 flex flex-col">
      {children}
    </header>
  );
};

export default ContentNavbar;
