import React from "react";

const ContentAvaliacao = ({ children }) => {
  return (
    <div className="px-5  w-full flex  p-4">
      <div className="flex flex-col  gap-y-4 overflow-y-scroll py-4   w-full scrollbar-hide  ">
        {children}
        
      </div>
    </div>
  );
};

export default ContentAvaliacao;
