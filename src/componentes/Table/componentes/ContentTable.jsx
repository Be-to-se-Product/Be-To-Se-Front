import React from "react";

const ContentTable = ({children}) => {
  return (
    <div className="relative">
      <div className="content-table w-full h-[400px] overflow-scroll  ">
        {children}
      </div>
    </div>
  );
};

export default ContentTable;
