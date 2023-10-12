import React from "react";

const Input = ({nome,register,children,...props}) => {
  return (
    <div className="flex flex-col w-full  relative">
      {children}
      <input type="text" className="px-4 py-2 text-base rounded border w-full border-black-400 outline-none" {...register} {...props}/>
    </div>
  );
};

export default Input;
