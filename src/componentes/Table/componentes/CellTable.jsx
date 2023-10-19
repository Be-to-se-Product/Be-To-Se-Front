import React from "react";

const CellTable = ({children,className,...props}) => {
  return (
    <div className={`border-r border-gray-200 h-full py-2 px-2   text-center ${className} `} {...props}>
      {children}
    </div>
  );
};

export default CellTable;
