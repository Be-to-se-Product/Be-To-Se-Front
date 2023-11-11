import React from "react";

const ItemDeslocamento = ({time,icon}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon}
      <h4 className="text-md">{time}</h4>
    </div>
  );
};

export default ItemDeslocamento;
