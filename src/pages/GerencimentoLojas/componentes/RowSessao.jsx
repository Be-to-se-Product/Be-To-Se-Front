import React from "react";
import InputRoot from "../../../componentes/Input/InputRoot";


import PropTypes from "prop-types";

const RowSessao = ({ item, setRowSessao }) => {
  const handleDelete = () => {
    setRowSessao(prev => prev.filter((element, index) => element?.id !== item?.id || element.identificador !== item.identificador));
  };

  return (
    <div className="w-10/12 flex justify-between">
      <div className="w-2/5">
        <InputRoot.Input className="h-10" defaultValue={item.texto}></InputRoot.Input>
      </div>
      <span
        className="flex justify-center items-center w-12"
        onClick={handleDelete}
        onKeyDown={handleDelete}
        role="button"
        tabIndex={0}
      >
        <img src="/src/assets/deletar.svg" alt="" />
      </span>
    </div>
  );
};





export default RowSessao;
