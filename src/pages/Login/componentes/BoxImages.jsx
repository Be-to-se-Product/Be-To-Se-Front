import React from "react";

const BoxImages = ({children}) => {
  return (
    <div className="absolute w-full h-1/3 items-end py-20  px-4 text-center  bottom-0 gap-x-7 flex justify-center text-white-principal bg-gradient-to-t from-[rgba(0,0,0,0.8)] from-10% via-[rgba(0,0,0,0.7)] via-60%    to-[rgba(0,0,0,0)] to-90% ">
      <p className="text-xl w-9/12">{children}</p>
    </div>
  );
};

export default BoxImages;
