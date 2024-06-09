const BannerImage = ({ img }) => {
  return (
    <div className=" w-full h-[200px] ">
      <img src={img} className="h-full w-full object-cover" />
    </div>
  );
};

export default BannerImage;
