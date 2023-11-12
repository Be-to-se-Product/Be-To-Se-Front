import React, { useState } from "react";
import Button from "../../../componentes/Button/Button";

const FilterBar = () => {
    const [showFilter,setShowFilter] = useState(false);
  return (
    <div className="fixed right-10 top-3 z-10 flex flex-col gap-y-4">
      <Button className="" onClick={()=>setShowFilter(!showFilter)}>Todos os filtros</Button>
      <div className={`p-5 bg-black-900 text-white-principal h-0   rounded ${showFilter ? "h-80" : " invisible opacity-0"} overflow-auto transition-all duration-150`}>
        <ul className="flex flex-col gap-y-4">
          <li className="flex gap-x-2">
            <span className="font-medium">Exibir por:</span>
            <select className="w-max bg-transparent ">
              <option value="">Mais relevantes</option>
            </select>
          </li>
         
          <li className="flex flex-col">
            <span>Distancia</span>
            <input type="range" name="" id="" className="accent-white-principal"/>
          </li>
          <span className="font-medium">Tipos de pagamentos</span>
          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input type="checkbox" name="" id="" className="accent-white-principal" />
          </li>
          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input type="checkbox" name="" id="" className="accent-white-principal" />
          </li>
          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input type="checkbox" name="" id="" className="accent-white-principal"/>
          </li>
          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input type="checkbox" name="" id="" className="accent-white-principal"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
