import { useState } from "react";
import InputRoot from "../Input/InputRoot";
const DropDown = ({ children, setValue ,values }) => {
  const [dropAtivo, setDropAtivo] = useState(false);
  const [value, setValueInput] = useState("");
  return (
    <div className="flex flex-col relative">
      <InputRoot.Label>
        {children}
        <div>
          <InputRoot.Input
            value={value}
            onFocus={() => values && setDropAtivo(!dropAtivo)}
          >
            <InputRoot.Icon>S</InputRoot.Icon>
          </InputRoot.Input>
        </div>
      </InputRoot.Label>

      <div
        className={`px-4 py-2 overflow-scroll  w-full bg-white-principal border border-gray-300 border-t-0 mt-[-2px] transition h-${
          dropAtivo ? "max " : "0 hidden "} absolute top-20 `}
      >
        {values?.map((value, index) => (
        
          <p key={index} className="flex hover:bg-gray-200 cursor-pointer py-2 px-2" onClick={() => { setValue && setValue(prev=>[...prev].includes(value) ? [...prev] : [...prev, value]); setValueInput(value); setDropAtivo(!dropAtivo)}}> {value} </p>
        
          
        ))}
      </div>
    </div>
  );
};

export default DropDown;
