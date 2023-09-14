import React from "react";

const Input = ({nome,register,...props}) => {
  return (
    <div className="flex flex-col w-full px-2">
      <label htmlFor="" className="mb-2 text-black-900  ">
        {nome}
      </label>
      <input
        type="text"
        className="p-2 rounded border w-full border-black-400  "
      {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
