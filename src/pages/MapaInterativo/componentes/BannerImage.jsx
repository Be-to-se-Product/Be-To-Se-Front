import React from "react";

const BannerImage = ({img}) => {
  return (
    <div className=" w-full h-[200px] ">
      <img
        src={img}
        alt=""
        className="h-full w-full object-cover"
      />
      
    </div>
  );
};

export default BannerImage;
