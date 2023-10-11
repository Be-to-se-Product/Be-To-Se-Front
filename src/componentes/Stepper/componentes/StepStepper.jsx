import React, { useEffect } from "react";

const StepStepper = (props) => {

  useEffect(() => {
    console.log(props.number);
    console.log(props.stateAtual);
    console.log(props.number==props.stateAtual);
  }
  ,[]) 
  return (
    <>
      <div className="flex flex-col justify-center items-center z-[2]     ">
        <span className={`rounded-full w-10 h-10  ${props.number==props.stateAtual+1 ? "bg-orange-principal" : "bg-white-principal"}  border border-orange-principal mb-2 flex items-center justify-center  `}>
          {props?.number}
        </span>
        {props.children}
      </div>
    </>
  );
};

export default StepStepper;
