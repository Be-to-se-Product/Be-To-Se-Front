import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../../../context/Form/FormContext";
import Button from "../../../componentes/Button/Button";
import { converterInputImageToBase64 } from "../../../utils/conversores";

const Step6 = () => {
  const { storage, setStorage, prevStep, nextStep, stateAtual } =
    useContext(FormContext);
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      imagem: [],
    },
  });

  const slot = useRef(null);
  const imagem = watch("imagem");
  const removerFoto = () => {
    setValue("imagem", []);
    slot.current.src = "";
  };

  const submit = (data, callback) => {
    const metodosPagamento = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        metodosPagamento.push(key);
      }
    }

    setStorage({ ...storage, ...data });
    callback?.();
  };

  const next = () => {
      handleSubmit((data) => {
        submit(data, nextStep);
      })();
    
  };

  const prev = () => {
    handleSubmit((data) => {
      submit(data);
    })();
    prevStep();
  };

  const [isApplyDefault, setIsApplyDefault] = useState(false);
  useEffect(()=>{
    if(!isApplyDefault && Object.keys(storage).length>0){
      if(storage?.imagens){
      slot.current.src = storage?.imagens["0"]?.url ;
      }
      
      setIsApplyDefault(true)
    }
  },[storage])

  useEffect(() => {
    if (imagem?.length > 0) {
      converterInputImageToBase64(
        imagem[0],
        (base64) => (slot.current.src = base64.imagem)
      );
    }
  }, [imagem]);
  return (
    <form
      className={`relative  flex-col gap-y-8 ${stateAtual != 5 && "hidden"} `}
    >
      <div className="text-center">
        Insira uma imagem para o seu estabelecimento
      </div>
      <div className="flex items-center justify-center gap-y-4 ">
        <div className="flex flex-col gap-y-1 items-center justify-center h-80 relative">
          <img
            src={""}
            ref={slot}
            alt=""
            className="h-full w-80 relative object-cover border-2 top-8 rounded-full z-10"
          />
          <img
            src="/src/assets/94999.png"
            alt=""
            className="absolute w-20 mt-12 z-0"
          />
          <label
            htmlFor="imagem1"
            className=" h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all rounded-full w-80 cursor-pointer top-8  "
          >
            <span className="text-white-principal font-semibold">
              Clique aqui para editar
            </span>
          </label>
          <input
            id="imagem1"
            type="file"
            className="h-full w-80 absolute top-0 opacity-0 "
            {...register("imagem")}
          />
        </div>
        <Button
          type="button"
          className={"h-max absolute right-0 mt-10 "}
          onClick={removerFoto}
        >
          Remover Foto
        </Button>
      </div>
      <div className="flex justify-center mt-14 gap-x-4">
        <Button type="button" onClick={prev}>
          Retroceder
        </Button>
        <Button type="button" onClick={next}>
          Finalizar Cadastro
        </Button>
      </div>
    </form>
  );
};

export default Step6;
