import { useEffect, useState } from "react";
import ImagemDefault from "@assets/default-image.jpeg";

const ImageContainer = ({ images }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(images[0] || ImagemDefault);
  }, [images]);

  return (
    <div className=" flex flex-col  gap-y-10">
      <img
        src={image}
        className="max-w-[590px] h-[520px] object-cover rounded-md"
        alt="Imagem do produto"
      />
      <div className="flex justify-between gap-x-20">
        {Array.from({
          length: 3,
        }).map((_image, index) => (
          <img
            key={index}
            className="w-36 h-40   object-cover rounded-md"
            src={images[index] || ImagemDefault}
            alt="Imagem do produto"
            onClick={() => setImage(images[index] || ImagemDefault)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
