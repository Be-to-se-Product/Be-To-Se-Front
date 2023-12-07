import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../../context/Form/FormContext";
import { useForm } from "react-hook-form";
import RowSessao from "./RowSessao";
import Button from "../../../componentes/Button/Button";

const Step5 = () => {
    const {storage, setStorage,stateAtual,nextStep,prevStep } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rowSessao, setRowSessao] = useState([]);
  const [isApplyDefault,setIsApplyDefault] = useState(false);
  useEffect(() => {
    if(!isApplyDefault && Object.keys(storage).length>0){
      if(storage?.sessoes?.length>0){
      setRowSessao(storage.sessoes)
      setIsApplyDefault(true);
      }
    }
  },[storage])

  const submit = (data,callback) => {
   
    setStorage({ ...storage, sessoes: rowSessao });
    callback?.();
  };


  const next = () => {
    if(rowSessao.length==0 || rowSessao[0].texto.length==0){
      alert("Adicione pelo menos uma sessão")
      return
    }
    handleSubmit((data)=>{submit(data,nextStep)})();
  };

  const prev = () => {
    handleSubmit((data)=>{submit(data)})();
    prevStep()
  };



  
  
  return (
    <form
      className={`relative  flex-col gap-y-8 ${stateAtual!=4 && "hidden"} ` }
    >
        <div className="text-center">Crie no minimo seção para os seus produtos</div>
      <div className="w-full px-14 flex justify-between  border-b-orange-200 border-b-[1px] py-2 absolute  top-7 z-10 bg-white-principal ">
        <span>Nome da sessão</span>
        <span>Excluir</span>
      </div>
      <div className="  w-full flex flex-col items-center      gap-y-8 rounded-lg overflow-scroll h-[250px] relative pt-20">
        {rowSessao.map((item) => (
          <RowSessao
            key={item.id ? item.id : item.identificador}
            setRowSessao={setRowSessao}
            item={item}
          />
        ))}
      </div>
      <div
        className="cursor-pointer w-full flex justify-center mb-8"
        onClick={() =>
          setRowSessao([
            ...rowSessao,
            { identificador: 1 + Math.random() * 20 + 5, texto: "" },
          ])
        }
      >
        {" "}
        + Adicionar sessão
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-4">
        <Button onClick={prev} type="button">
          Retroceder
        </Button>
        <Button onClick={next} type="button">
          Finalizar Cadastro
        </Button>
      </div>
    </form>
  );
};

export default Step5;
