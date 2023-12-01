import React, { useEffect, useState } from "react";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "../../../componentes/Button/Button";
import api from "../../../services/api";

const FormUpdate = ({ fecharModal, getProdutos, produto }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [infoBanco, setInfoBanco] = useState({
    sessoes: [],
    tag: [],
  });



  const getSecao = () => {
    api.get("/secoes").then((response) => {
      setInfoBanco((prev) => ({ ...prev, sessoes: response.data }));
    });
  };

  const getTags = () => {
    api.get("/tags").then((response) => {
      console.log(response.data);
      setInfoBanco((prev) => ({ ...prev, tag: response.data }));
    });
  };

  useEffect(() => {
    getTags();
    getSecao();
  }, []);

  const [isNext, setIsNext] = useState(false);
  const [dataStorage, setDataStorage] = useState({
    nome: produto?.nome,
    codigoSku: produto?.codigoSku,
    preco: produto?.preco,
    descricao: produto?.descricao,
    precoOferta: produto?.precoOferta,
    codigoBarras: produto?.codigoBarras,
    categoria: produto?.categoria,
    secao: produto?.secao.id,
    tags: produto?.tags ? produto?.tags : null,
  });

  const getData = (data) => {
    setDataStorage({ ...dataStorage, ...data });

    if (isNext) {
      nextStep(dataStorage,data);
    } else {
      prevStep();
    }
  };

  function resetarCampos() {
    setDataStorage({
      nome: "",
      codigoSku: "",
      preco: "",
      descricao: "",
      precoOferta: "",
      codigoBarras: "",
      categoria: "",
      secao: "",
      tag: [],
    });
    setStateAtual(0);
  }

  const saveData = (dadosSalvar,data) => {
    const produtoSave = {
      nome: dadosSalvar.nome,
      codigoSku: dadosSalvar.codigoSku,
      preco: dadosSalvar.preco,
      descricao: data.descricao,  
      precoOferta: dadosSalvar.precoOferta,
      codigoBarras: dadosSalvar.codigoBarras,
      categoria: dadosSalvar.categoria,
      secao: dadosSalvar.secao,
      tags: dadosSalvar.tags ? dadosSalvar.tags : [],
    };

    api
      .put("/produtos/"+produto.id, produtoSave)
      .then((response) => {
        getProdutos();
        resetarCampos();
        fecharModal("fechar");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const nextStep = (dataSalvar,data) => {
    if (stateAtual + 1 === steps.length) {
      saveData(dataStorage,data);
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
    <Step2 getData={getData} imagens={produto.imagens}>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button>Retroceder</Button>
        <Button onClick={() => setIsNext(true)}>Avançar</Button>
      </div>
    </Step2>,
    <Step3 getData={getData} dataStorage={dataStorage}>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button>Retroceder</Button>
        <Button onClick={() => setIsNext(true)}>Atualizar</Button>
      </div>
    </Step3>,
  ];

  return (
    <div className=" w-[801px] h-[700px] p-8 bg-white-principal relative rounded-md flex items-center flex-col gap-y-2 justify-around">
      <div className="absolute top-5  right-8 cursor-pointer" onClick={()=>fecharModal("fechar")}>X</div>
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

export default FormUpdate;
