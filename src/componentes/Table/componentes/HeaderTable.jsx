import React from "react";

const HeaderTable = ({className,children}) => {
  return (
    <div className="mb-8">
      <div
        className={` grid text-xs border text-black-900 bg-[#F8F9FA] font-semibold absolute w-full ${className}  `}
      >
        {children}
      </div>
    </div>
  );
};

export default HeaderTable;
