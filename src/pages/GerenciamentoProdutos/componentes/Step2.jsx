import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { converterInputImageToBase64 } from "../../../utils/conversores";
import Compressor from "compressorjs";

const Step2 = ({ getData, children, dataStorage,imagens }) => {
  const slot1 = useRef(null);
  const slot2 = useRef(null);
  const slot3 = useRef(null);
  const slot4 = useRef(null);

  const { register, handleSubmit, watch, setValue } = useForm();

  const imagem1 = watch("imagem1");
  const imagem2 = watch("imagem2");
  const imagem3 = watch("imagem3");
  const imagem4 = watch("imagem4");


useEffect(()=>{
  dataStorage?.imagem1 ? setValue("imagem1", dataStorage.imagem1) : setValue("imagem1", [])
  dataStorage?.imagem2 ? setValue("imagem2", dataStorage.imagem2) : setValue("imagem2", [])
  dataStorage?.imagem3 ? setValue("imagem3", dataStorage.imagem3) : setValue("imagem3", [])
  dataStorage?.imagem4 ? setValue("imagem4", dataStorage.imagem4) : setValue("imagem4", [])
},[])

  useEffect(() => {
    if (!imagem1) return;
    if (!imagem1[0] || imagem1[0].length == 0) return;

    new Compressor(imagem1[0], {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        converterInputImageToBase64(
          compressedResult,
          (data) => (slot1.current.src = data.imagem)
        );
        setValue("imagem1", [new File([compressedResult])]);
      },
    });
  }, [imagem1]);

  useEffect(() => {
    if (!imagem2) return;
    if (!imagem2[0] || imagem2[0].length == 0) return;

    new Compressor(imagem2[0], {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        converterInputImageToBase64(
          compressedResult,
          (data) => (slot2.current.src = data.imagem)
        );
        setValue("imagem2", [new File([compressedResult])]);      },
    });
  }, [imagem2]);

  useEffect(() => {
    if (!imagem3) return;
    if (!imagem3[0] || imagem3[0].length == 0) return;

    new Compressor(imagem3[0], {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        converterInputImageToBase64(
          compressedResult,
          (data) => (slot3.current.src = data.imagem)
        );
        setValue("imagem3", [new File([compressedResult])]);
      },
    });
  }, [imagem3]);


  useEffect(() => {
    if (!imagem4) return;
    if (!imagem4[0] || imagem4[0].length == 0) return;

    new Compressor(imagem4[0], {
      quality: 0.4, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        converterInputImageToBase64(
          compressedResult,
          (data) => (slot4.current.src = data.imagem)
        );
        setValue("imagem4", [new File([compressedResult])]);
      },
    });
  }, [imagem4]);



  useEffect(() => {
    if (imagens) {
      slot1.current.src = imagens[0] || "";
      slot2.current.src = imagens[1] || "";
      slot3.current.src = imagens[2] || "";
      slot4.current.src = imagens[3] || "";
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(getData)}>
      <div className={`w-full flex flex-col items-center gap-4  `}>
        <div className="w-[280px] flex h-[250px] border rounded items-center justify-center relative">
          <img
            src={""}
            alt=""
            className="h-full w-full  object-cover"
            ref={slot1}
          />
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
            {...register("imagem1")}
          />
        </div>
        <div className="flex gap-x-4 rounded">
          <div className="w-[150px] h-[150px]  border rounded relative">
            <img
              src={""}
              alt=""
              className="h-full w-full object-cover"
              ref={slot2}
            />
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
              {...register("imagem2")}
            />
          </div>
          <div className="w-[150px] h-[150px]  border rounded relative">
            <img
              src={""}
              alt=""
              className="h-full w-full object-cover"
              ref={slot3}
            />
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
              {...register("imagem3")}
              className="h-full w-full absolute top-0 opacity-0 "
            />
          </div>

          <div className="w-[150px] h-[150px]  border rounded relative">
            <img
              src={""}
              alt=""
              className="h-full w-full object-cover"
              ref={slot4}
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
              {...register("imagem4")}
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
