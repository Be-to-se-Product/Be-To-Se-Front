import React from "react";

const Input = ({nome,register,children,...props}) => {
  return (
    <div className="flex flex-col w-full px-2 relative  ">
      {children}
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
