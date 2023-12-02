import React, { useContext, useState } from "react";
import FormContext from "../../../context/Form/FormContext";
import { useForm } from "react-hook-form";
import RowSessao from "./RowSessao";
import Button from "../../../componentes/Button/Button";

const Step5 = () => {
    const { setStateAtual, storage, setStorage } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rowSessao, setRowSessao] = useState([]);

  const submit = () => {
    setStorage({ ...storage, sessoes: rowSessao });
    console.log(storage);
    setStateAtual((prev) => prev + 1);
  }
  return (
    <form
      className={`relative  flex-col gap-y-8  `}
    >
      <div className="w-full px-14 flex justify-between  border-b-orange-200 border-b-[1px] py-2 absolute  top-0 z-10 bg-white-principal ">
        <span>Nome da sessão</span>
        <span>Excluir</span>
      </div>
      <div className="  w-full flex flex-col items-center      gap-y-8 rounded-lg overflow-scroll h-[300px] relative pt-20">
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
        <Button onClick={() => setStateAtual((prev) => prev - 1)}>
          Retroceder
        </Button>
        <Button onClick={submit}>
          Finalizar Cadastro
        </Button>
      </div>
    </form>
  );
};

export default Step5;
