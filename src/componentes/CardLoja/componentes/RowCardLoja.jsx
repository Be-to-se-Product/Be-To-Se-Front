import React from "react";

const RowCardLoja = ({label,texto}) => {
  return (
    <div>
      <h3 className="text-xs font-medium">{label}</h3>
      <h4 className="text-xs">{texto}</h4>
    </div>
  );
};

export default RowCardLoja;
