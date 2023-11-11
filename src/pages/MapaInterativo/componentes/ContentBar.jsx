import React, { useState } from "react";
import BannerImage from "./BannerImage";

const ContentBar = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className={`${
        isShow ? "w-1/4" : "w-[0px]"
      } h-screen bg-black-900 fixed z-10 text-yellow-50  transition-all`}
    >
      <button
        className="absolute right-[-40px] rounded top-1/2 bg-black-100 p-4 text-black-900 cursor-pointer border border-black-900"
        onClick={() => setIsShow(!isShow)}
      >
        {"<"}
      </button>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default ContentBar;
