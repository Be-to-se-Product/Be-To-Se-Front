import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { converterInputImageToBase64 } from "../../../utils/conversores";

const Step2 = ({getData,children}) => {

    const slot1 = useRef(null);
    const slot2 = useRef(null);
    const slot3 = useRef(null);
    const slot4 = useRef(null);

const {register, handleSubmit,watch} = useForm();


const imagem1 = watch("imagem1");
const imagem2 = watch("imagem2");
const imagem3 = watch("imagem3");
const imagem4 = watch("imagem4");



useEffect(() => {
    if(!imagem1) return;
    if(!imagem1[0] || imagem1[0].length == 0) return;
     converterInputImageToBase64(imagem1[0],(data)=>slot1.current.src = data.imagem);
   
}, [imagem1])

useEffect(() => {
    if(!imagem2) return;
    if(!imagem2[0] || imagem2[0].length == 0) return;
    converterInputImageToBase64(imagem2[0],(data)=>slot2.current.src = data.imagem);
    console.log("Teste");    
}, [imagem2])
useEffect(() => {
    if(!imagem3) return;
    if(!imagem3[0] || imagem3[0].length == 0) return;
    converterInputImageToBase64(imagem3[0],(data)=>slot3.current.src = data.imagem);
}, [imagem3])
useEffect(() => {
    if(!imagem4) return;
    if(!imagem4[0] || imagem4[0].length == 0) return;
    converterInputImageToBase64(imagem4[0],(data)=>slot4.current.src = data.imagem);
}, [imagem4])

return (
    <form onSubmit={handleSubmit(getData)}>
      <div className={`w-full flex flex-col items-center gap-4  `}>
        <div className="w-[280px] flex h-[250px] border rounded items-center justify-center relative">
          <img src={""} alt="" className="h-full w-full  object-cover" ref={slot1}/>
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
            <img src={""} alt="" className="h-full w-full object-cover" ref={slot2}/>
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
            <img src={""} alt="" className="h-full w-full object-cover" ref={slot3}/>
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
            <img src={""} alt="" className="h-full w-full object-cover" ref={slot4} />
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
              onChange={() => console.log("Teste")}
            />
          </div>
        </div>
      </div>

     {children}
    </form>
  );
};

export default Step2;
