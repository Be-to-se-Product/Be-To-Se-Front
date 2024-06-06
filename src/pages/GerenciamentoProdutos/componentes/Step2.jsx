import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  compressorImage,
  converterInputImageToBase64,
} from "@utils/conversores";
import Compressor from "compressorjs";

const Step2 = ({ setData, children, dataStorage }) => {
  const { handleSubmit, setValue, watch } = useForm();

  const imagens = watch("imagens");

  useEffect(() => {
    if (dataStorage?.imagens) {
      setValue("imagens", dataStorage?.imagens);
    }
  }, [dataStorage?.imagens, setValue]);

  const handleImage = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(setData)}>
      <div className={`w-full flex flex-col items-center gap-4  `}>
        <div className="w-[280px] flex h-[250px] border rounded items-center justify-center relative">
          <img src={""} alt="" className="h-full w-full  object-cover" />
          <label
            htmlFor="imagem1"
            className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all   cursor-pointer"
          >
            <span className="text-white-principal font-semibold">
              Clique aqui para editar
            </span>
          </label>
          <input
            id="imagem1"
            type="file"
            className="h-full w-full absolute top-0 opacity-0 "
            onChange={handleImage}
          />
        </div>
        <div className="flex gap-x-4 rounded">
          <div className="w-[150px] h-[150px]  border rounded relative">
            <img src={""} alt="" className="h-full w-full object-cover" />
            <label
              htmlFor="imagem2"
              className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all top-0    cursor-pointer"
            >
              <span className="text-white-principal font-semibold text-center">
                Clique aqui para editar
              </span>
            </label>
            <input
              type="file"
              id="imagem2"
              className="h-full w-full absolute top-0 opacity-0 "
              onChange={handleImage}
            />
          </div>
          <div className="w-[150px] h-[150px]  border rounded relative">
            <img src={""} alt="" className="h-full w-full object-cover" />
            <label
              htmlFor="imagem3"
              className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all  top-0  cursor-pointer"
            >
              <span className="text-white-principal font-semibold text-center">
                Clique aqui para editar
              </span>
            </label>
            <input
              type="file"
              id="imagem3"
              onChange={handleImage}
              className="h-full w-full absolute top-0 opacity-0 "
            />
          </div>

          <div className="w-[150px] h-[150px]  border rounded relative">
            <img
              src={""}
              alt=""
              className="h-full w-full object-cover"
              onChange={handleImage}
            />
            <label
              htmlFor="imagem4"
              className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all top-0   cursor-pointer"
            >
              <span className="text-white-principal font-semibold text-center">
                Clique aqui para editar
              </span>
            </label>
            <input
              type="file"
              id="imagem4"
              onChange={handleImage}
              className="h-full w-full absolute top-0 opacity-0 "
            />
          </div>
        </div>
      </div>

      {children}
    </form>
  );
};

export default Step2;
