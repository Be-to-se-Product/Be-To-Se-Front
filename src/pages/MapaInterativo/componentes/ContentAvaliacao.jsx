import React from "react";

const ContentAvaliacao = ({ children }) => {
  return (
    <div className="px-5  flex  p-4">
      <div className="flex flex-col  gap-y-4 overflow-y-scroll py-4  ">
        {children}
      </div>
    </div>
  );
};

export default ContentAvaliacao;
