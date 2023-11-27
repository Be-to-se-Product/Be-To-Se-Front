import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "../../../componentes/Button/Button";
import api from "../../../services/api";

const FormAdicionar = ({ fecharModal, getProdutos, setState }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [infoBanco, setInfoBanco] = useState({
    sessoes: [],
    tag: [],
  });

  const getSecao = () => {
    api.get("/secoes").then((response) => {
      setInfoBanco(prev=>({ ...prev, sessoes: response.data }));
    });
  };

  const getTags = () => {
    api.get("/tags").then((response) => {
      console.log(response.data);
      setInfoBanco(prev=>({...prev, tag: response.data }));
    });
  };

  useEffect(() => {
    getTags();
    getSecao();
    

  },[])

  useEffect(() => {
    console.log(infoBanco);
  },[infoBanco])
  const [isNext, setIsNext] = useState(false);

  const [dataStorage, setDataStorage] = useState({});

  const getData = (data) => {
    console.log(data);
    setDataStorage({ ...dataStorage, ...data });

    if (isNext) {
      nextStep();
    } else {
      prevStep();
    }
  };

  const saveData = (data) => {
  

    const produto = {
      nome: data.nome,
      codigoSku: data.codigoSku,
      preco: data.preco,
      descricao: data.descricao,
      precoOferta: data.precoOferta,
      codigoBarras: data.codigoBarras,
      categoria: data.categoria,
      secao: data.secao,
      tag:data.tags
    }

  api.post("/produtos",produto).then((response)=>{
    

  }
  )
}
  const nextStep = () => {
    if (stateAtual + 1 === steps.length) {
      console.log(dataStorage);
      return;
    }
    setStateAtual(stateAtual + 1);
    setIsNext(false);
  };
  const prevStep = () => {
    if (stateAtual - 1 >= 0) {
      setStateAtual(stateAtual - 1);
    }
  };

  const steps = [
    <Step1 getData={getData} infoBanco={infoBanco} dataStorage={dataStorage}>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button onClick={() => setIsNext(true)}>Avançar</Button>
      </div>
    </Step1>,
    <Step2 getData={getData}>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button>Retroceder</Button>
        <Button onClick={() => setIsNext(true)}>Avançar</Button>
      </div>
    </Step2>,
    <Step3 getData={getData}>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button>Retroceder</Button>
        <Button onClick={() => setIsNext(true)}>Cadastrar</Button>
      </div>
    </Step3>,
  ];

  return (
    <div className=" w-[801px] h-[700px] p-8 bg-white-principal relative rounded-md flex items-center flex-col gap-y-2 justify-around">
      <div className="absolute top-5  right-8 cursor-pointer">X</div>
      <StepperRoot.Content>
        <StepperRoot.Step number={1} stateAtual={stateAtual}>
          Informações do produtos
        </StepperRoot.Step>

        <StepperRoot.Step number={2} stateAtual={stateAtual}>
          Uploads de imagens
        </StepperRoot.Step>

        <StepperRoot.Step number={3} stateAtual={stateAtual}>
          Descrição do produto
        </StepperRoot.Step>
      </StepperRoot.Content>

      {steps[stateAtual]}
    </div>
  );
};

export default FormAdicionar;
