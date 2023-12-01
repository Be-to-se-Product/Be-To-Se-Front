import React from "react";

const ContentTable = ({children}) => {
  return (
    <div className="relative">
      <div className="content-table w-full h-[400px] overflow-y-scroll scrollbar-hide  ">
        {children}
      </div>
    </div>
  );
};

export default ContentTable;
