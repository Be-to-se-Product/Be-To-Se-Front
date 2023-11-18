import React, { useEffect, useState } from "react";
import BannerImage from "./BannerImage";



const ContentBar = ({ children, show,setShow }) => {
  


  return (
    <div
      className={`${
        show ? "w-2/6":"w-[0px]"
      } h-screen bg-black-900 fixed z-10 text-yellow-50  transition-all`}
    >
      {show ? "true":"false"}
      <button
        className="absolute right-[-40px] rounded top-1/2 bg-black-100 p-4 text-black-900 cursor-pointer border border-black-900"
        onClick={() => setShow(!show)}
      >
        {"<"}
      </button>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default ContentBar;
