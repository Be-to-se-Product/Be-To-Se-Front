import React from "react";
import InputRoot from "../../../componentes/Input/InputRoot";

const RowSessao = ({item,setRowSessao}) => {

  return (
    <div className=" w-10/12 flex justify-between  ">
      <div className="w-2/5">
        <InputRoot.Input className={"h-10"} defaultValue={item.texto} ></InputRoot.Input>
      </div>
      <span className="flex justify-center items-center w-12">
        <img src="./src/assets/deletar.svg" alt="" onClick={()=>setRowSessao(prev=>prev.filter((element,index)=>element.id!=item.id))} />
      </span>
    </div>
  );
};

export default RowSessao;
