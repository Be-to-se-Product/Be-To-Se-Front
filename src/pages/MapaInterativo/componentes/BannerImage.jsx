import React from "react";

const BannerImage = ({img}) => {
  return (
    <div className=" w-full h-[200px] ">
      <img
        src={img}
        className="h-full w-full object-cover"
        onError="this.src = '/src/assets/NotFound.png'"
      />
      
    </div>
  );
};

export default BannerImage;
